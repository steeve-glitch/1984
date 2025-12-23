import React, { FC } from 'react';
import { ViewMode } from '../types';

interface NavItem {
  view: ViewMode;
  label: string;
  requiresPart1?: boolean;
  requiresDoublethink?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  isPart1Complete?: boolean;
  isDoublethinkComplete?: boolean;
}

const navItems: NavItem[] = [
    { view: 'introduction', label: 'Introduction' },
    { view: 'character-map', label: 'Character Map' },
    { view: 'relationship-explorer', label: 'Relationship Explorer' },
    { view: 'scenes-part1', label: 'Explore Part 1' },
    { view: 'doublethink-game', label: 'Doublethink Challenge', requiresPart1: true },
    { view: 'scenes-part2', label: 'Explore Part 2', requiresDoublethink: true },
    { view: 'vocabulary', label: 'Vocabulary Hub' },
    { view: 'writing', label: 'Writing Workshop' },
];


const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose, currentView, onNavigate, isPart1Complete = false, isDoublethinkComplete = false }) => {
  const isLocked = (item: NavItem): boolean => {
    if (item.requiresDoublethink && !isDoublethinkComplete) return true;
    if (item.requiresPart1 && !isPart1Complete) return true;
    return false;
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      onClick={onClose}
    >
      <div
        className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl p-4 transform transition-transform"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">Menu</h2>
        <nav>
          <ul>
            {navItems.map(item => {
              const locked = isLocked(item);
              return (
                <li key={item.view} className="mb-2">
                  <button
                    onClick={() => {
                      if (!locked) {
                        onNavigate(item.view);
                        onClose();
                      }
                    }}
                    disabled={locked}
                    className={`w-full text-left p-2 rounded-md font-medium flex items-center gap-2 ${
                      currentView === item.view
                        ? 'bg-party-red text-white'
                        : locked
                        ? 'text-gray-500 opacity-50 cursor-not-allowed'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {locked && <span className="text-xs">🔒</span>}
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
