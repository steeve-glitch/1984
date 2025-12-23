import React, { FC } from 'react';
import { ViewMode } from '../types';

interface NavItem {
  view: ViewMode;
  label: string;
  requiresPart1?: boolean;
  requiresDoublethink?: boolean;
}

interface AppTabsProps {
  currentView: ViewMode;
  onTabChange: (view: ViewMode) => void;
  isPart1Complete?: boolean;
  isDoublethinkComplete?: boolean;
}

const navItems: NavItem[] = [
    { view: 'dashboard', label: 'My Journey' },
    { view: 'character-map', label: 'Character Map' },
    { view: 'relationship-explorer', label: 'Relationship Explorer' },
    { view: 'scenes-part1', label: 'Explore Part 1' },
    { view: 'doublethink-game', label: 'Doublethink Challenge', requiresPart1: true },
    { view: 'scenes-part2', label: 'Explore Part 2', requiresDoublethink: true },
    { view: 'vocabulary', label: 'Vocabulary Hub' },
    { view: 'writing', label: 'Writing Workshop' },
];

const AppTabs: FC<AppTabsProps> = ({ currentView, onTabChange, isPart1Complete = false, isDoublethinkComplete = false }) => {
  const isLocked = (item: NavItem): boolean => {
    if (item.requiresDoublethink && !isDoublethinkComplete) return true;
    if (item.requiresPart1 && !isPart1Complete) return true;
    return false;
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <nav className="-mb-px flex space-x-8 justify-center flex-wrap" aria-label="Tabs">
        {navItems.map((tab) => {
          const locked = isLocked(tab);
          return (
            <button
              key={tab.view}
              onClick={() => !locked && onTabChange(tab.view)}
              disabled={locked}
              className={`${
                currentView === tab.view
                  ? 'border-party-red text-party-red'
                  : locked
                  ? 'border-transparent text-gray-500 opacity-50 cursor-not-allowed'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 flex items-center gap-1`}
              aria-current={currentView === tab.view ? 'page' : undefined}
            >
              {locked && <span className="text-xs">🔒</span>}
              {tab.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default AppTabs;
