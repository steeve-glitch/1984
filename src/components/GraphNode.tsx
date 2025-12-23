import React from 'react';
import { Character } from '../types';

interface GraphNodeProps {
  node: {
    id: string;
    label: string;
    x: number;
    y: number;
    isCentral?: boolean;
  };
  character: Character | undefined;
  onClick: (character: Character) => void;
}

const GraphNode: React.FC<GraphNodeProps> = ({ node, character, onClick }) => {
  if (!character) return null;

  const nodeClasses = `
    absolute rounded-full flex items-center justify-center text-center font-bold shadow-lg 
    transition-all duration-300 cursor-pointer
    ${node.isCentral ? 'w-28 h-28 bg-red-600 text-white' : 'w-24 h-24 bg-blue-600 text-white'}
  `;

  return (
    <button
      onClick={() => onClick(character)}
      className={nodeClasses}
      style={{
        top: `${node.y}%`,
        left: `${node.x}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {node.label}
    </button>
  );
};

export default GraphNode;
