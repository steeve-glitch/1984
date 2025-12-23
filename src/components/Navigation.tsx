import React, { FC } from 'react';
import { ViewMode } from '../types';

interface NavItem {
  view: ViewMode;
  label: string;
  requiresPart1?: boolean;
  requiresDoublethink?: boolean;
}

interface NavigationProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  isPart1Complete?: boolean;
  isDoublethinkComplete?: boolean;
}

const navItems: NavItem[] = [
    { view: 'introduction', label: 'Introduction' },
    { view: 'character-map', label: 'Character Map' },
    { view: 'scenes-part1', label: 'Explore Part 1' },
    { view: 'doublethink-game', label: 'Doublethink Challenge', requiresPart1: true },
    { view: 'scenes-part2', label: 'Explore Part 2', requiresDoublethink: true },
    { view: 'vocabulary', label: 'Vocabulary Hub' },
    { view: 'writing', label: 'Writing Workshop' },
];

const Navigation: FC<NavigationProps> = ({ currentView, onNavigate, isPart1Complete = false, isDoublethinkComplete = false }) => {
  const isLocked = (item: NavItem): boolean => {
    if (item.requiresDoublethink && !isDoublethinkComplete) return true;
    if (item.requiresPart1 && !isPart1Complete) return true;
    return false;
  };

  return (
    <nav className="hidden lg:flex justify-center p-4">
        <div className="flex space-x-4">
            {navItems.map(item => {
                const locked = isLocked(item);
                return (
                    <a
                        key={item.view}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (!locked) onNavigate(item.view);
                        }}
                        className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 ${
                            currentView === item.view
                                ? 'bg-party-red text-white shadow'
                                : locked
                                ? 'text-gray-500 opacity-50 cursor-not-allowed'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        {locked && <span className="text-xs">🔒</span>}
                        {item.label}
                    </a>
                );
            })}
        </div>
    </nav>
  );
};

export default Navigation;
