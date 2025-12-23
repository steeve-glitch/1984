import React, { FC } from 'react';
import { ViewMode } from '../types';

interface NavigationProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
}

const navItems: { view: ViewMode; label: string }[] = [
    { view: 'introduction', label: 'Introduction' },
    { view: 'character-map', label: 'Character Map' },
    { view: 'scenes', label: 'Explore Part 1' },
    { view: 'vocabulary', label: 'Vocabulary Hub' },
    { view: 'writing', label: 'Writing Workshop' },
];

const Navigation: FC<NavigationProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="hidden lg:flex justify-center p-4">
        <div className="flex space-x-4">
            {navItems.map(item => (
                <a
                    key={item.view}
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.view);
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                        currentView === item.view
                            ? 'bg-blue-600 text-white shadow'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                    {item.label}
                </a>
            ))}
        </div>
    </nav>
  );
};

export default Navigation;
