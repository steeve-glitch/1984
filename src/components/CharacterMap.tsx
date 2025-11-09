import React, { useState, useEffect } from 'react';
import { Character } from '../types';
import CharacterModal from './CharacterModal';

interface CharacterMapProps {
  characters: Character[];
}

const CharacterMap: React.FC<CharacterMapProps> = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [hoveredRelationship, setHoveredRelationship] = useState<[string, string] | null>(null);
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
    const isHighlighted = hoveredRelationship && (
      hoveredRelationship.includes(name) ||
      (hoveredRelationship[0] === 'Willy Loman' && hoveredRelationship[1] === 'Biff Loman' && (name === 'Happy Loman' || name === 'Biff Loman' || name === 'Willy Loman'))
    );

    const nodeClasses = `absolute rounded-full flex items-center justify-center text-center font-bold shadow-lg transition-all duration-300 opacity-0 ${isLoaded ? 'in' : ''} ${
      isWilly 
        ? 'w-28 h-28 bg-red-600 text-white' 
        : 'w-24 h-24 bg-blue-600 text-white'
    } ${isHighlighted ? 'scale-110 ring-4 ring-yellow-400' : ''}`;

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
  
  const RelationshipLine: React.FC<{ x1: string; y1: string; x2: string; y2: string; label: string; labelTop: string; labelLeft: string; char1Name: string; char2Name: string; onMouseEnter: (chars: [string, string]) => void; onMouseLeave: () => void; }> = ({ x1, y1, x2, y2, label, labelTop, labelLeft, char1Name, char2Name, onMouseEnter, onMouseLeave }) => {
    const isHighlighted = hoveredRelationship && 
                          ((hoveredRelationship[0] === char1Name && hoveredRelationship[1] === char2Name) ||
                           (hoveredRelationship[0] === char2Name && hoveredRelationship[1] === char1Name));

    const lineColor = isHighlighted ? 'stroke-yellow-400' : 'stroke-gray-400';
    const labelColor = isHighlighted ? 'text-yellow-400' : 'text-gray-500 dark:text-gray-400';
    const labelWeight = isHighlighted ? 'font-bold' : 'font-semibold';

    return (
      <>
        <svg className="absolute w-full h-full top-0 left-0" style={{ pointerEvents: 'none' }}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} className={`transition-colors duration-300 ${lineColor}`} strokeWidth="2" />
        </svg>
        <div 
          className={`absolute text-sm transition-colors duration-300 ${labelColor} ${labelWeight}`} 
          style={{ top: labelTop, left: labelLeft, transform: 'translate(-50%, -50%)' }}
          onMouseEnter={() => onMouseEnter([char1Name, char2Name])}
          onMouseLeave={onMouseLeave}
        >
          {label}
        </div>
      </>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">The Loman Family & Their World</h2>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">Click on a character to learn more about their role in the play.</p>
      
      <div className="relative w-full h-[500px]">
        {/* Loman Family Grouping */}
        <div 
          className="absolute bg-blue-50 dark:bg-gray-900/50 rounded-full"
          style={{ top: '65%', left: '50%', width: '50%', height: '50%', transform: 'translate(-50%, -50%)' }}
        ></div>

        {/* Lines */}
        <RelationshipLine x1="50%" y1="20%" x2="50%" y2="50%" label="Brothers" labelTop="35%" labelLeft="55%" char1Name="Ben" char2Name="Willy Loman" onMouseEnter={setHoveredRelationship} onMouseLeave={() => setHoveredRelationship(null)} />
        <RelationshipLine x1="25%" y1="50%" x2="50%" y2="50%" label="Married" labelTop="45%" labelLeft="37.5%" char1Name="Linda Loman" char2Name="Willy Loman" onMouseEnter={setHoveredRelationship} onMouseLeave={() => setHoveredRelationship(null)} />
        <RelationshipLine x1="50%" y1="50%" x2="75%" y2="50%" label="Neighbors" labelTop="45%" labelLeft="62.5%" char1Name="Willy Loman" char2Name="Charley" onMouseEnter={setHoveredRelationship} onMouseLeave={() => setHoveredRelationship(null)} />
        <RelationshipLine x1="50%" y1="50%" x2="50%" y2="80%" label="Father / Sons" labelTop="65%" labelLeft="45%" char1Name="Willy Loman" char2Name="Biff Loman" onMouseEnter={setHoveredRelationship} onMouseLeave={() => setHoveredRelationship(null)} />
        <RelationshipLine x1="35%" y1="80%" x2="65%" y2="80%" label="Brothers" labelTop="85%" labelLeft="50%" char1Name="Biff Loman" char2Name="Happy Loman" onMouseEnter={setHoveredRelationship} onMouseLeave={() => setHoveredRelationship(null)} />
        <RelationshipLine x1="75%" y1="50%" x2="75%" y2="80%" label="Father / Son" labelTop="65%" labelLeft="82%" char1Name="Charley" char2Name="Bernard" onMouseEnter={setHoveredRelationship} onMouseLeave={() => setHoveredRelationship(null)} />
        
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
