import React, { useState, useMemo, useRef, useEffect } from 'react';
import { resources as allResources } from './data/resources';
import { Level, SortOption, Resource } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import AIPlanner from './components/AIPlanner';
import FilterControls from './components/FilterControls';
import ResourceCard from './components/ResourceCard';
import Footer from './components/Footer';
import EmptyState from './components/EmptyState';
import { useDarkMode } from './hooks/useDarkMode';
import Modal from './components/Modal';
import AuthForm from './components/content/AuthForm';
import TermsOfUse from './components/content/TermsOfUse';
import PrivacyPolicy from './components/content/PrivacyPolicy';
import CookieNotice from './components/content/CookieNotice';
import AccessibilityStatement from './components/content/AccessibilityStatement';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { SparklesIcon } from './components/icons';

type ModalContent = {
  title: string;
  content: React.ReactNode;
} | null;

interface AIPlan {
    planRationale: string;
    recommendedResources: {
        name: string;
        reason: string;
    }[];
}

const AppContainer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<Level>(Level.Beginner);
  const [sortOption, setSortOption] = useState<SortOption>(SortOption.Default);
  const [showInProgressOnly, setShowInProgressOnly] = useState(false);
  const [aiPlan, setAiPlan] = useState<AIPlan | null>(null);

  const [theme, toggleTheme] = useDarkMode();
  const [modalContent, setModalContent] = useState<ModalContent>(null);
  const { currentUser, progress } = useAuth();
  const contentRef = useRef<HTMLElement>(null);

  const handleGetStartedClick = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const handlePlanGenerated = (plan: AIPlan) => {
      setAiPlan(plan);
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
  };
  
  const handleClearPlan = () => {
      setAiPlan(null);
  };

  const handleOpenAuthModal = (initialState: 'login' | 'signup') => {
    setModalContent({
      title: initialState === 'login' ? 'အကောင့်ဝင်ရန်' : 'အကောင့်သစ်ဖွင့်ရန်',
      content: <AuthForm initialState={initialState} onSuccess={() => setModalContent(null)} />
    });
  };
  
  const filteredResources = useMemo(() => {
    let baseResources: Resource[];
    
    if (aiPlan) {
        const recommendedNames = new Set(aiPlan.recommendedResources.map(r => r.name));
        baseResources = allResources.filter(resource => recommendedNames.has(resource.name));
    } else {
        baseResources = allResources.filter((resource) => resource.level === selectedLevel);
    }
    
    // 1. Filter
    let filtered = baseResources.filter((resource) => {
      // Filter by progress for logged-in users
      if (currentUser && showInProgressOnly) {
          if (!progress[resource.name] || progress[resource.name] === 0) {
              return false;
          }
      }
      
      // Filter by search term
      if (searchTerm.trim() !== '') {
          const lowerCaseSearchTerm = searchTerm.toLowerCase();
          const matchesName = resource.name.toLowerCase().includes(lowerCaseSearchTerm);
          const matchesDescription = resource.description.toLowerCase().includes(lowerCaseSearchTerm);
          const matchesTech = resource.technologies.some((tech) =>
            tech.toLowerCase().includes(lowerCaseSearchTerm)
          );
          if (!(matchesName || matchesDescription || matchesTech)) return false;
      }

      return true;
    });

    // 2. Sort
    const sorted = [...filtered];
    if (sortOption === SortOption.Alphabetical) {
        sorted.sort((a, b) => a.name.localeCompare(b.name, 'my-MM'));
    } else if (sortOption === SortOption.Progress && currentUser) {
        sorted.sort((a, b) => {
            const progressA = progress[a.name] || 0;
            const progressB = progress[b.name] || 0;
            return progressB - progressA;
        });
    } else if (aiPlan) {
        // Keep the order from the AI recommendation
        const orderMap = new Map(aiPlan.recommendedResources.map((r, i) => [r.name, i]));
        sorted.sort((a, b) => (orderMap.get(a.name) ?? Infinity) - (orderMap.get(b.name) ?? Infinity));
    }

    return sorted;
  }, [searchTerm, selectedLevel, sortOption, showInProgressOnly, progress, currentUser, aiPlan]);

  const aiReasonsMap = useMemo(() => {
      if (!aiPlan) return {};
      return aiPlan.recommendedResources.reduce((acc, r) => {
          acc[r.name] = r.reason;
          return acc;
      }, {} as Record<string, string>);
  }, [aiPlan]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    // When AI plan changes, reset sort to default to show AI's order
    if (aiPlan) {
        setSortOption(SortOption.Default);
    }
  }, [aiPlan]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onLoginClick={() => handleOpenAuthModal('login')}
        onSignupClick={() => handleOpenAuthModal('signup')}
      />
      <Hero onGetStartedClick={handleGetStartedClick} />
      <AIPlanner onPlanGenerated={handlePlanGenerated} resources={allResources} />
      <div ref={contentRef as React.RefObject<HTMLDivElement>}>
          <FilterControls
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            selectedLevel={selectedLevel}
            onLevelChange={setSelectedLevel}
            sortOption={sortOption}
            onSortChange={setSortOption}
            showInProgressOnly={showInProgressOnly}
            onShowInProgressOnlyChange={setShowInProgressOnly}
            isAiPlanActive={!!aiPlan}
            onClearPlan={handleClearPlan}
          />
      </div>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {aiPlan && (
            <div className="mb-8 p-6 bg-blue-50 dark:bg-slate-800/50 border border-blue-200 dark:border-blue-500/30 rounded-lg animate-fadeInUp">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-3">
                    <SparklesIcon className="w-6 h-6"/>
                    သင်၏ AI သင်တန်းအစီအစဉ်
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{aiPlan.planRationale}</p>
            </div>
        )}

        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResources.map((resource, index) => (
              <ResourceCard 
                key={resource.name} 
                resource={resource} 
                index={index}
                aiReason={aiReasonsMap[resource.name]}
              />
            ))}
          </div>
        ) : (
          <EmptyState 
            title={aiPlan ? "AI အကြံပြုချက်များ မတွေ့ပါ" : "အချက်အလက်များ မတွေ့ပါ"}
            message={aiPlan ? "သင်၏ရှာဖွေမှုနှင့် ကိုက်ညီသော AI အကြံပြုချက်များ မရှိပါ။" : "သင်၏ရှာဖွေမှုကို ပြင်ဆင်ပါ၊ filter များ သို့မဟုတ် အဆင့်ကို ပြောင်းကြည့်ပါ။"}
          />
        )}
      </main>
      <Footer 
        onTermsClick={() => setModalContent({ title: 'အသုံးပြုမှုဆိုင်ရာ စည်းမျဉ်းများ', content: <TermsOfUse /> })}
        onPrivacyClick={() => setModalContent({ title: 'ကိုယ်ရေးကိုယ်တာ မူဝါဒ', content: <PrivacyPolicy /> })}
        onCookieClick={() => setModalContent({ title: 'ကွတ်ကီး အသိပေးချက်', content: <CookieNotice /> })}
        onAccessibilityClick={() => setModalContent({ title: 'အသုံးပြုနိုင်စွမ်းဆိုင်ရာ ထုတ်ပြန်ချက်', content: <AccessibilityStatement /> })}
      />

      {modalContent && (
        <Modal
          isOpen={!!modalContent}
          onClose={() => setModalContent(null)}
          title={modalContent.title}
        >
          {modalContent.content}
        </Modal>
      )}
    </div>
  );
};


const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContainer />
    </AuthProvider>
  );
}


export default App;
