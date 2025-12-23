import React, { FC } from 'react';
import { ViewMode } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
}

const navItems: { view: ViewMode; label: string }[] = [
    { view: 'introduction', label: 'Introduction' },
    { view: 'character-map', label: 'Character Map' },
    { view: 'relationship-explorer', label: 'Relationship Explorer' }, // New item
    { view: 'scenes', label: 'Explore Part 1' },
    { view: 'vocabulary', label: 'Vocabulary Hub' },
    { view: 'writing', label: 'Writing Workshop' },
];


const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose, currentView, onNavigate }) => {
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
            {navItems.map(item => (
              <li key={item.view} className="mb-2">
                <button
                  onClick={() => {
                    onNavigate(item.view);
                    onClose();
                  }}
                  className={`w-full text-left p-2 rounded-md font-medium ${
                    currentView === item.view
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
