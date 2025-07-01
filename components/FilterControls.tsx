import React from 'react';
import { Level, SortOption } from '../types';
import { SearchIcon, SortIcon, XIcon } from './icons';
import { useAuth } from '../contexts/AuthContext';

interface FilterControlsProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedLevel: Level;
  onLevelChange: (level: Level) => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
  showInProgressOnly: boolean;
  onShowInProgressOnlyChange: (value: boolean) => void;
  isAiPlanActive: boolean;
  onClearPlan: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  searchTerm,
  onSearchChange,
  selectedLevel,
  onLevelChange,
  sortOption,
  onSortChange,
  showInProgressOnly,
  onShowInProgressOnlyChange,
  isAiPlanActive,
  onClearPlan,
}) => {
  const { currentUser } = useAuth();
  const levels = Object.values(Level);
  const sortOptions = Object.values(SortOption);

  return (
    <div className="sticky top-16 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-lg z-10 py-4 mb-8 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-auto sm:flex-grow max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder={isAiPlanActive ? "အကြံပြုချက်များထဲမှ ရှာရန်..." : "နာမည် သို့မဟုတ် နည်းပညာဖြင့် ရှာရန်..."}
              value={searchTerm}
              onChange={onSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search resources"
            />
          </div>
          
          {!isAiPlanActive ? (
            <div className="flex-shrink-0">
              <div className="bg-slate-200 dark:bg-slate-700 p-1 rounded-lg flex space-x-1" role="tablist" aria-label="Filter by level">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => onLevelChange(level)}
                    role="tab"
                    aria-selected={selectedLevel === level}
                    className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-200 dark:focus-visible:ring-offset-slate-700 focus-visible:ring-white ${
                      selectedLevel === level
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <button 
                onClick={onClearPlan}
                className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-900 focus-visible:ring-white"
            >
                <XIcon className="w-4 h-4"/>
                AI အစီအစဉ်ကို ရှင်းလင်းမည်
            </button>
          )}

        </div>

        {(currentUser || isAiPlanActive) && (
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-slate-200 dark:border-slate-700 pt-4">
                <div className="relative w-full sm:w-auto">
                    <label htmlFor="sort-select" className="sr-only">စီစစ်ရန်</label>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SortIcon className="h-5 w-5 text-slate-400" />
                    </div>
                    <select
                        id="sort-select"
                        value={sortOption}
                        onChange={(e) => onSortChange(e.target.value as SortOption)}
                        className="w-full sm:w-auto pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    >
                       {sortOptions.map(option => {
                           if (!currentUser && option === SortOption.Progress) return null;
                           return <option key={option} value={option}>{option}</option>;
                        })}
                    </select>
                </div>
                
                {currentUser && (
                  <div className="flex items-center">
                      <label htmlFor="show-in-progress" className="mr-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                          လေ့လာဆဲ သင်ခန်းစာများသာ
                      </label>
                      <button
                          type="button"
                          id="show-in-progress"
                          onClick={() => onShowInProgressOnlyChange(!showInProgressOnly)}
                          className={`${showInProgressOnly ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus-ring-offset-slate-900`}
                          role="switch"
                          aria-checked={showInProgressOnly}
                      >
                          <span
                              aria-hidden="true"
                              className={`${showInProgressOnly ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                          />
                      </button>
                  </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default FilterControls;