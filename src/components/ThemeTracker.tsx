import React, { useState, FC } from 'react';
import { Theme } from '../types';
import ThemeModal from './ThemeModal';

interface ThemeTrackerProps {
  sceneThemes: string[];
  allThemes: Theme[];
}

const ThemeTracker: FC<ThemeTrackerProps> = ({ sceneThemes, allThemes }) => {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  const handleThemeClick = (themeName: string) => {
    const themeData = allThemes.find(t => t.name === themeName);
    if (themeData) {
      setSelectedTheme(themeData);
    }
  };

  return (
    <div className="border-t border-b border-gray-200 dark:border-gray-700 my-6 py-4">
      <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-3 text-center">
        Key Themes in this Scene
      </h4>
      <div className="flex flex-wrap justify-center gap-2">
        {sceneThemes.map(themeName => (
          <button
            key={themeName}
            onClick={() => handleThemeClick(themeName)}
            className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full hover:bg-teal-200 dark:bg-teal-900 dark:text-teal-200 dark:hover:bg-teal-800 transition-colors"
          >
            {themeName}
          </button>
        ))}
      </div>
      <ThemeModal theme={selectedTheme} onClose={() => setSelectedTheme(null)} />
    </div>
  );
};

export default ThemeTracker;
