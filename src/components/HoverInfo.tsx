import React, { FC } from 'react';

interface HoverInfoProps {
  name: string;
  description: string;
  position: { top: number; left: number };
}

const HoverInfo: FC<HoverInfoProps> = ({ name, description, position }) => {
  if (!name) return null;

  return (
    <div
      className="fixed bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 max-w-xs w-full z-50 pointer-events-none border border-gray-200 dark:border-gray-700"
      style={{
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -110%)', // Position above and centered on the cursor
      }}
      role="tooltip"
    >
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default HoverInfo;
