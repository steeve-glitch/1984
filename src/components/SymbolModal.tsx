import React, { FC } from 'react';
import { SymbolInfo } from '../types';

interface SymbolModalProps {
  symbol: SymbolInfo | null;
  onClose: () => void;
}

const SymbolModal: FC<SymbolModalProps> = ({ symbol, onClose }) => {
  if (!symbol) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-paper-white dark:bg-gray-800 border-4 border-black dark:border-gray-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 m-4 max-w-sm w-full relative transform transition-all duration-300"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-ministry-black hover:text-party-red dark:text-gray-400 dark:hover:text-white"
          aria-label="Close symbol details"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-3xl font-bold text-ministry-black dark:text-white mb-4 font-propaganda border-b-2 border-party-red pb-2">{symbol.name}</h3>
        <p className="text-gray-700 dark:text-gray-300 font-terminal leading-relaxed">{symbol.description}</p>
      </div>
    </div>
  );
};

export default SymbolModal;
