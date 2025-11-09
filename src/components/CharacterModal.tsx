import React, { FC } from 'react';
import { Character } from '../types';

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
}

const CharacterModal: FC<CharacterModalProps> = ({ character, onClose }) => {
  if (!character) {
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
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 m-4 max-w-sm w-full relative transform transition-all duration-300 scale-95"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
        style={{ transform: 'scale(1)' }}
      >
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
          aria-label="Close character details"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{character.name}</h3>
        <p className="text-gray-600 dark:text-gray-300">{character.description}</p>
      </div>
    </div>
  );
};

export default CharacterModal;
