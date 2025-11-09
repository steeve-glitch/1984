import React, { FC } from 'react';

interface BackButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const BackButton: FC<BackButtonProps> = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick} 
      className="mb-4 px-4 py-2 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
    >
      &larr; {children}
    </button>
  );
};

export default BackButton;
