
import React, { useMemo } from 'react';
import { SunIcon, MoonIcon, LogoIcon } from './icons';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    onLoginClick: () => void;
    onSignupClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, onLoginClick, onSignupClick }) => {
  const { currentUser, logout, progress } = useAuth();

  const overallProgress = useMemo(() => {
    if (!currentUser || !progress || Object.keys(progress).length === 0) {
      return 0;
    }
    const progressValues = Object.values(progress).filter(p => p > 0);
    if(progressValues.length === 0) return 0;
    const total = progressValues.reduce((sum, p) => sum + p, 0);
    return Math.round(total / progressValues.length);
  }, [progress, currentUser]);


  return (
    <header className="bg-white/80 dark:bg-slate-900/80 shadow-sm backdrop-blur-lg sticky top-0 z-20 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <LogoIcon className="h-8 w-8 text-blue-600 dark:text-blue-500" />
            <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
                    Code Lann
                </span>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    ကုဒ်လမ်း
                </span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-colors"
                aria-label={theme === 'dark' ? 'Activate light mode' : 'Activate dark mode'}
            >
                {theme === 'dark' ? <SunIcon className="h-5 w-5 sm:h-6 sm:w-6" /> : <MoonIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
            
            {currentUser ? (
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="text-right hidden sm:block">
                        <div className="text-sm font-semibold text-slate-800 dark:text-white truncate max-w-[150px] md:max-w-xs" title={currentUser.email}>
                            ကြိုဆိုပါတယ်, {currentUser.email.split('@')[0]}
                        </div>
                        <div className="text-xs font-medium text-blue-600 dark:text-blue-400">
                            စုစုပေါင်း တိုးတက်မှု: {overallProgress}%
                        </div>
                    </div>
                    <button onClick={logout} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                        ထွက်ရန်
                    </button>
                </div>
              ) : (
                <div className="hidden sm:flex items-center gap-4">
                  <button onClick={onLoginClick} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      အကောင့်ဝင်ရန်
                  </button>
                  <button onClick={onSignupClick} className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900">
                      အကောင့်ဖွင့်ရန်
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;