import React, { useState, FC } from 'react';
import { Scene, Character } from '../types';
import BackButton from './BackButton';

interface StoryDrivenRelationshipExplorerProps {
  scenes: Scene[];
  characters: Character[];
  onComplete: () => void;
  onBack: () => void;
}

const StoryDrivenRelationshipExplorer: FC<StoryDrivenRelationshipExplorerProps> = ({ scenes, characters, onComplete, onBack }) => {
  const [selectedSceneId, setSelectedSceneId] = useState<string | null>(null);

  const selectedScene = scenes.find(scene => scene.id === selectedSceneId);

  // Function to get characters present in the selected scene based on summary keywords
  const getCharactersInScene = (scene: Scene) => {
    const sceneCharacters: Character[] = [];
    if (!scene) return sceneCharacters;

    characters.forEach(char => {
      // Simple keyword matching for now. Can be refined with more structured scene data.
      if (scene.summary.includes(char.name) || scene.summary.includes(char.name.split(' ')[0])) {
        sceneCharacters.push(char);
      }
    });
    return sceneCharacters;
  };

  const charactersInSelectedScene = selectedScene ? getCharactersInScene(selectedScene) : [];

  return (
    <div className="space-y-6 p-4">
      <BackButton onClick={onBack}>Back</BackButton>
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">Explore Relationships by Chapter</h2>

      <div className="mb-6">
        <label htmlFor="scene-select" className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
          Select a Chapter:
        </label>
        <select
          id="scene-select"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={selectedSceneId || ''}
          onChange={(e) => setSelectedSceneId(e.target.value)}
        >
          <option value="">-- Choose a Chapter --</option>
          {scenes.map(scene => (
            <option key={scene.id} value={scene.id}>
              {scene.title}
            </option>
          ))}
        </select>
      </div>

      {selectedScene && (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{selectedScene.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedScene.summary}</p>

          <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Characters in this Chapter:</h4>
          {charactersInSelectedScene.length > 0 ? (
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {charactersInSelectedScene.map(char => (
                <li key={char.name} className="mb-1">
                  <span className="font-medium">{char.name}:</span> {char.description}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No specific characters identified for this chapter.</p>
          )}

          {/* Placeholder for relationships - can be expanded later */}
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">Key Relationships in this Chapter:</h4>
          <p className="text-gray-700 dark:text-gray-300">
            (Relationships for "{selectedScene.title}" would be displayed here. 
            For example: "Winston's fear of the Parsons children highlights the breakdown of family loyalty.")
          </p>
        </div>
      )}

      <div className="text-center mt-8">
        <button
          onClick={onComplete}
          className="px-8 py-3 rounded-lg text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StoryDrivenRelationshipExplorer;
