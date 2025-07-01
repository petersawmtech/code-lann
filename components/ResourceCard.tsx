import React from 'react';
import { Resource, CostModel } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { SparklesIcon } from './icons';

interface ResourceCardProps {
  resource: Resource;
  index: number;
  aiReason?: string;
}

const CostBadge: React.FC<{ costModel: CostModel }> = ({ costModel }) => {
  const baseClasses = 'text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full';
  
  const styles = {
    [CostModel.Free]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    [CostModel.Freemium]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    [CostModel.Paid]: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    [CostModel.Mixed]: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  };

  return <span className={`${baseClasses} ${styles[costModel]}`}>{costModel}</span>;
};


const ResourceCard: React.FC<ResourceCardProps> = ({ resource, index, aiReason }) => {
  const { currentUser, progress, updateProgress } = useAuth();
  const userProgress = (currentUser && progress && progress[resource.name]) || 0;

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentUser) {
        updateProgress(resource.name, parseInt(e.target.value, 10));
    }
  };

  const handleInteraction = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent the card's link from being followed when interacting with progress controls
    e.preventDefault();
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-200 dark:border-slate-700 hover:-translate-y-1 animate-fadeInUp"
      style={{ animationDelay: `${index * 50}ms` }}>
      <a 
        href={resource.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block p-6 flex flex-col flex-grow"
        aria-label={`Learn more about ${resource.name}`}
      >
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3 pr-2 flex-grow min-w-0">
              <img 
                src={resource.logo} 
                alt={`${resource.name} logo`} 
                className="h-10 w-10 object-contain rounded-md bg-white p-1 flex-shrink-0" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">{resource.name}</h3>
            </div>
            <div className="flex-shrink-0 ml-2">
              <CostBadge costModel={resource.costModel} />
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
            {resource.description}
          </p>
        </div>
        <div className="flex-shrink-0 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700/50">
          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-3">နည်းပညာများ</h4>
          <div className="flex flex-wrap gap-2">
            {resource.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
      {aiReason && (
          <div className="px-6 pb-4 -mt-2">
              <div className="pt-4 border-t border-dashed border-blue-200 dark:border-blue-900/50">
                  <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2 uppercase tracking-wider">
                      <SparklesIcon className="w-4 h-4" />
                      AI အကြံပြုချက်
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{aiReason}</p>
              </div>
          </div>
      )}
      {currentUser && (
        <div 
          className="px-6 pb-6 mt-auto"
          onClick={handleInteraction}
        >
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50">
                <label htmlFor={`progress-${resource.name}`} className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    သင်၏ တိုးတက်မှု
                </label>
                <div className="flex items-center gap-3">
                     <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${userProgress}%`}}></div>
                    </div>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200 w-12 text-right">
                        {userProgress}%
                    </span>
                </div>
                <input
                    id={`progress-${resource.name}`}
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={userProgress}
                    onChange={handleProgressChange}
                    className="w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer mt-2"
                    aria-label={`${resource.name} progress`}
                />
            </div>
        </div>
      )}
    </div>
  );
};

export default ResourceCard;