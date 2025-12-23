import React from 'react';
import { Character } from '../types';
import GraphNode from './GraphNode';

interface GraphProps {
  nodes: { id: string; label: string; x: number; y: number; isCentral?: boolean }[];
  edges: { from: string; to: string }[];
  characters: Character[];
  onNodeClick: (character: Character) => void;
}

const Graph: React.FC<GraphProps> = ({ nodes, edges, characters, onNodeClick }) => {
  const getNode = (id: string) => nodes.find(n => n.id === id);
  const getCharacter = (name: string) => characters.find(c => c.name === name);

  return (
    <div className="relative w-full h-[500px]">
      <svg className="absolute w-full h-full top-0 left-0" style={{ pointerEvents: 'none' }}>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" className="fill-gray-400 dark:fill-gray-500" />
          </marker>
        </defs>
        <g>
          {edges.map((edge, index) => {
            const fromNode = getNode(edge.from);
            const toNode = getNode(edge.to);

            if (!fromNode || !toNode) {
              return null;
            }

            return (
              <line
                key={index}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                className="stroke-gray-400 dark:stroke-gray-500"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
            );
          })}
        </g>
      </svg>
      
      {/* Loman Family Grouping */}
      <div 
        className="absolute bg-blue-50 dark:bg-gray-900/50 rounded-full"
        style={{ top: '65%', left: '50%', width: '50%', height: '50%', transform: 'translate(-50%, -50%)' }}
      ></div>

      {nodes.map(node => (
        <GraphNode
          key={node.id}
          node={node}
          character={getCharacter(node.label)}
          onClick={onNodeClick}
        />
      ))}
    </div>
  );
};

export default Graph;
