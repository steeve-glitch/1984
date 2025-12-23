import React, { useState, FC, MouseEvent } from 'react';
import ClickableText from './ClickableText';
import CharacterModal from './CharacterModal';
import SymbolModal from './SymbolModal';
import HoverInfo from './HoverInfo';
import { Character, SymbolInfo } from '../types';
import { useChatbot } from '../context/ChatbotContext';

interface SceneAnalysisProps {
  sceneSummary: string;
  clickableCharacters: Character[];
  clickableSymbols: SymbolInfo[];
  onComplete: () => void;
}

interface HoverState {
    name: string;
    description: string;
    position: { top: number, left: number };
}

const SceneAnalysis: FC<SceneAnalysisProps> = ({ 
  sceneSummary, 
  clickableCharacters, 
  clickableSymbols,
  onComplete
}) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedSymbol, setSelectedSymbol] = useState<SymbolInfo | null>(null);
  const [hoverState, setHoverState] = useState<HoverState | null>(null);
  
  const { openChat } = useChatbot();

  const findCharacter = (word: string) => {
    // Corrected logic: only find exact full name matches.
    return clickableCharacters.find(c => c.name.toLowerCase() === word.toLowerCase());
  };

  const findSymbol = (word: string) => {
    return clickableSymbols.find(s => s.name.toLowerCase() === word.toLowerCase());
  };

  const handleWordClick = (word: string) => {
    setHoverState(null); // Hide tooltip on click
    const character = findCharacter(word);
    if (character) {
      setSelectedCharacter(character);
      return;
    }

    const symbol = findSymbol(word);
    if (symbol) {
      setSelectedSymbol(symbol);
      return;
    }
  };

  const handleWordHover = (word: string, event: MouseEvent) => {
    const character = findCharacter(word);
    if (character) {
      setHoverState({
        name: character.name,
        description: character.description,
        position: { top: event.clientY, left: event.clientX }
      });
      return;
    }

    const symbol = findSymbol(word);
    if (symbol) {
      setHoverState({
        name: symbol.name,
        description: symbol.description,
        position: { top: event.clientY, left: event.clientX }
      });
      return;
    }
  };

  const handleWordLeave = () => {
    setHoverState(null);
  };

  const characterNames = clickableCharacters.map(c => c.name);
  const symbolNames = clickableSymbols.map(s => s.name);
  const allClickableWords = [...new Set([...characterNames, ...symbolNames])];

  return (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        <ClickableText
          text={sceneSummary}
          clickableWords={allClickableWords}
          onWordClick={handleWordClick}
          onWordHover={handleWordHover}
          onWordLeave={handleWordLeave}
        />
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 italic">Hover over or click on the highlighted names and symbols to learn more about them.</p>

      {hoverState && <HoverInfo {...hoverState} />}

      <CharacterModal 
        character={selectedCharacter}
        onClose={() => setSelectedCharacter(null)} 
      />
      <SymbolModal 
        symbol={selectedSymbol} 
        onClose={() => setSelectedSymbol(null)} 
      />
      
       <div className="flex justify-center gap-4 pt-4">
        <button 
          onClick={() => openChat("Can you help me understand this scene summary?", `The student is reading the summary for this scene: "${sceneSummary}"`)}
          className="px-6 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20"
        >
          Ask The Archivist about this
        </button>
        <button onClick={onComplete} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Activities
        </button>
      </div>
    </div>
  );
};

export default SceneAnalysis;