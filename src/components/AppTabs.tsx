import React, { FC } from 'react';
import { ViewMode } from '../types';

interface AppTabsProps {
  currentView: ViewMode;
  onTabChange: (view: ViewMode) => void;
}

const navItems: { view: ViewMode; label: string }[] = [
    { view: 'dashboard', label: 'My Journey' },
    { view: 'character-map', label: 'Character Map' },
    { view: 'relationship-explorer', label: 'Relationship Explorer' }, // New item
    { view: 'scenes', label: 'Explore Part 1' },
    { view: 'vocabulary', label: 'Vocabulary Hub' },
    { view: 'writing', label: 'Writing Workshop' },
];

const AppTabs: FC<AppTabsProps> = ({ currentView, onTabChange }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <nav className="-mb-px flex space-x-8 justify-center" aria-label="Tabs">
        {navItems.map((tab) => (
          <button
            key={tab.view}
            onClick={() => onTabChange(tab.view)}
            className={`${
              currentView === tab.view
                ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}
            aria-current={currentView === tab.view ? 'page' : undefined}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AppTabs;
