import React, { useState, useEffect } from 'react';
import { Character } from '../types';
import CharacterModal from './CharacterModal';

interface CharacterMapProps {
  characters: Character[];
}

const CharacterMap: React.FC<CharacterMapProps> = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getCharacter = (name: string) => characters.find(c => c.name === name);

  const CharacterNode: React.FC<{ name: string; top: string; left: string; index: number; }> = ({ name, top, left, index }) => {
    const character = getCharacter(name);
    if (!character) return null;

    const isWilly = name === "Willy Loman";
    const nodeClasses = `absolute rounded-full flex items-center justify-center text-center font-bold shadow-lg transition-all duration-300 opacity-0 ${isLoaded ? 'in' : ''} ${
      isWilly 
        ? 'w-28 h-28 bg-red-600 text-white' 
        : 'w-24 h-24 bg-blue-600 text-white'
    }`;

    return (
      <button
        onClick={() => setSelectedCharacter(character)}
        className={nodeClasses}
        style={{ top, left, transform: 'translate(-50%, -50%)', transitionDelay: `${index * 100}ms` }}
      >
        {name}
      </button>
    );
  };
  


  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">The Loman Family & Their World</h2>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">Click on a character to learn more about their role in the play.</p>
      
      <div className="relative w-full h-[500px]">
        <svg className="absolute w-full h-full top-0 left-0" style={{ pointerEvents: 'none' }}>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" className="fill-gray-400 dark:fill-gray-500" />
            </marker>
            <marker id="arrowhead-highlight" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" className="fill-yellow-400" />
            </marker>
          </defs>
        </svg>


        {/* Loman Family Grouping */}
        <div 
          className="absolute bg-blue-50 dark:bg-gray-900/50 rounded-full"
          style={{ top: '65%', left: '50%', width: '50%', height: '50%', transform: 'translate(-50%, -50%)' }}
        ></div>

        {/* Nodes */}
        <CharacterNode name="Ben" top="15%" left="50%" index={0} />
        <CharacterNode name="Linda Loman" top="45%" left="25%" index={1} />
        <CharacterNode name="Willy Loman" top="45%" left="50%" index={2} />
        <CharacterNode name="Charley" top="40%" left="75%" index={3} />
        <CharacterNode name="Biff Loman" top="80%" left="30%" index={4} />
        <CharacterNode name="Happy Loman" top="80%" left="60%" index={5} />
        <CharacterNode name="Bernard" top="70%" left="75%" index={6} />
      </div>

      <CharacterModal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
    </div>
  );
};

export default CharacterMap;
