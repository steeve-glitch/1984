import React, { FC } from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onMenuClick: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick, theme, toggleTheme }) => {
  return (
    <header className="bg-ministry-black border-b-4 border-party-red sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
             <div className="bg-party-red text-white font-propaganda font-bold text-3xl px-3 py-1 -rotate-6 shadow-md border-2 border-white">
                1984
             </div>
             <div className="hidden sm:block border-l-2 border-gray-600 h-10 mx-4"></div>
             <h1 className="hidden sm:block text-xl font-terminal tracking-widest text-white uppercase">
                Interactive Study Guide
             </h1>
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden md:flex flex-col items-end mr-4">
                <span className="text-xs text-gray-400 font-terminal uppercase tracking-widest">Airstrip One</span>
                <span className="text-xs text-party-red font-bold font-terminal uppercase tracking-widest animate-pulse">Connection Secure</span>
             </div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <div className="lg:hidden ml-2">
              <button
                onClick={onMenuClick}
                className="inline-flex items-center justify-center p-2 rounded-none bg-party-red text-white hover:bg-red-700 focus:outline-none ring-2 ring-black"
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