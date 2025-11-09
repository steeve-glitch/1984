import React, { FC } from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onMenuClick: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick, theme, toggleTheme }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-grow text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Death of a Salesman: An Interactive Guide</h1>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <div className="lg:hidden ml-2">
              <button
                onClick={onMenuClick}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-label="Open main menu"
                aria-expanded="false"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
