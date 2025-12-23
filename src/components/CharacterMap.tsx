import React, { useState } from 'react';
import { Character } from '../types';
import CharacterModal from './CharacterModal';
import Graph from './Graph';
import { nodes, edges } from '../data/characterMapData';

interface CharacterMapProps {
  characters: Character[];
}

const CharacterMap: React.FC<CharacterMapProps> = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleNodeClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">The Loman Family & Their World</h2>
              <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">Click on a character to learn more about their role in the novel.</p>      
      <Graph
        nodes={nodes}
        edges={edges}
        characters={characters}
        onNodeClick={handleNodeClick}
      />

      <CharacterModal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
    </div>
  );
};

export default CharacterMap;

