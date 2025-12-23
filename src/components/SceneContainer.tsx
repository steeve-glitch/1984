import React, { useState, FC } from 'react';
import Card from './Card';
import SceneAnalysis from './SceneAnalysis';
import ReadingCompQuiz from './ReadingCompQuiz';
import StealCharacterizationActivity from './StealCharacterizationActivity';
import QuoteAnalysis from './QuoteAnalysis';
import SymbolCharacterGame from './SymbolCharacterGame';
import AnalysisReflection from './AnalysisReflection';
import SemanticFieldActivity from './SemanticFieldActivity';
import MatchingGame from './MatchingGame';
import ThemeTracker from './ThemeTracker';
import { Scene, Character, SymbolInfo, Theme } from '../types';
import { SEMANTIC_FIELDS } from '../constants';

interface SceneContainerProps {
  scene: Scene;
  onComplete: () => void;
  allCharacters: Character[];
  allSymbols: SymbolInfo[];
  allThemes: Theme[];
}

type SceneActivity = 'analysis' | 'readingComp' | 'semanticField' | 'matchingGame' | 'steal' | 'quote' | 'game' | 'reflection';

const SceneContainer: FC<SceneContainerProps> = ({ scene, onComplete, allCharacters, allSymbols, allThemes }) => {
  const activityFlow: SceneActivity[] = [
    'analysis',
    'readingComp',
    'semanticField',
    'matchingGame',
    'steal',
    'quote',
    'game',
    'reflection',
  ];

  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const semanticField = SEMANTIC_FIELDS.find(sf => sf.id === scene.semanticFieldId);

  const handleNextActivity = () => {
    if (currentActivityIndex < activityFlow.length - 1) {
      setCurrentActivityIndex(currentActivityIndex + 1);
    } else {
      onComplete();
    }
  };
  
  const renderCurrentActivity = () => {
    const activity = activityFlow[currentActivityIndex];
    
    switch (activity) {
      case 'analysis':
        return <SceneAnalysis sceneSummary={scene.summary} clickableCharacters={allCharacters} clickableSymbols={allSymbols} onComplete={handleNextActivity} />;
      case 'readingComp':
        return <ReadingCompQuiz questions={scene.readingCompData} onComplete={handleNextActivity} />;
      case 'semanticField':
        if (!semanticField) {
            return <SemanticFieldFallback onSkip={handleNextActivity} />;
        }
        return <SemanticFieldActivity field={semanticField} onComplete={handleNextActivity} />;
      case 'matchingGame':
        if (!semanticField) {
            return <SemanticFieldFallback onSkip={handleNextActivity} />;
        }
        return <MatchingGame terms={semanticField.terms} onComplete={handleNextActivity} />;
      case 'steal':
        return <StealCharacterizationActivity data={scene.stealData} onComplete={handleNextActivity} />;
      case 'quote':
        return <QuoteAnalysis quotes={[scene.quote]} onComplete={handleNextActivity} />;
      case 'game':
        return <SymbolCharacterGame gameData={scene.gameData} onComplete={handleNextActivity} />;
      case 'reflection':
        return <AnalysisReflection question={scene.reflectionPrompt} onComplete={handleNextActivity} />;
      default:
        return <p>Activity not found.</p>;
    }
  };
  
  const activityTitles: Record<SceneActivity, string> = {
    analysis: 'Chapter Summary & Analysis',
    readingComp: 'Reading Comprehension Check',
    semanticField: `Vocabulary Focus: ${semanticField?.title || ''}`,
    matchingGame: 'Vocabulary Matching Game',
    steal: 'S.T.E.A.L. Characterization',
    quote: 'Key Quote Analysis',
    game: 'Symbol & Character Challenge',
    reflection: 'Analysis & Reflection',
  };

  return (
    <div className="space-y-8">
      <ThemeTracker sceneThemes={scene.themes} allThemes={allThemes} />
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Activity Navigation Sidebar */}
        <nav className="w-full lg:w-72 flex-shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <h3 className="font-semibold text-gray-700 dark:text-gray-200">Chapter Activities</h3>
            </div>
            <ul className="flex flex-col divide-y divide-gray-100 dark:divide-gray-700">
              {activityFlow.map((activity, index) => {
                const isActive = index === currentActivityIndex;
                const isCompleted = index < currentActivityIndex;
                
                return (
                  <li key={activity}>
                    <button
                      onClick={() => setCurrentActivityIndex(index)}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150 flex items-center gap-3
                        ${isActive 
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium border-l-4 border-blue-500' 
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 border-l-4 border-transparent'
                        }
                      `}
                    >
                      <div className={`
                        flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs
                        ${isActive 
                          ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200' 
                          : isCompleted
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-500'
                        }
                      `}>
                        {isCompleted ? (
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span className="truncate">{activityTitles[activity]}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
            <Card title={`${scene.title}: ${activityTitles[activityFlow[currentActivityIndex]]}`}>
                {renderCurrentActivity()}
            </Card>
        </div>
      </div>
    </div>
  );
};

export default SceneContainer;

const SemanticFieldFallback: FC<{ onSkip: () => void }> = ({ onSkip }) => (
  <div className="flex flex-col items-center text-center space-y-4 py-6">
    <p className="text-gray-700 dark:text-gray-300">
      We couldn&apos;t load the vocabulary data for this chapter. You can revisit it later once the data is available.
    </p>
    <button
      type="button"
      onClick={onSkip}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      Skip this activity
    </button>
  </div>
);