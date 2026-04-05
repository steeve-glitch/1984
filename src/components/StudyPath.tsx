import React, { FC } from 'react';
import { ViewMode } from '../types';
import { PART1_SCENES } from '../constants';

interface StudyStep {
  id: string;
  label: string;
  shortLabel: string;
  view: ViewMode;
  sceneIndex?: number;
  isComplete: boolean;
}

interface StudyPathProps {
  completedScenes: string[];
  completedPreReading: string[];
  currentView: ViewMode;
  currentPart1SceneIndex: number;
  onNavigate: (view: ViewMode, index?: number) => void;
}

const StudyPath: FC<StudyPathProps> = ({
  completedScenes,
  completedPreReading,
  currentView,
  currentPart1SceneIndex,
  onNavigate,
}) => {
  const steps: StudyStep[] = [
    {
      id: 'pre-reading',
      label: 'Orwell Dossier',
      shortLabel: 'Pre-Reading',
      view: 'pre-reading' as ViewMode,
      isComplete: completedPreReading.includes('pre-reading'),
    },
    ...PART1_SCENES.map((scene, i) => ({
      id: scene.id,
      label: scene.title,
      shortLabel: `Ch ${i + 1}`,
      view: 'scenes-part1' as ViewMode,
      sceneIndex: i,
      isComplete: completedScenes.includes(scene.id),
    })),
  ];

  const firstIncompleteIndex = steps.findIndex(s => !s.isComplete);
  // current = first incomplete; if all done, highlight last
  const currentStepIndex = firstIncompleteIndex === -1 ? steps.length - 1 : firstIncompleteIndex;

  // Show: all completed + current + 1 upcoming (hidden beyond that)
  const visibleSteps = steps.filter((_, i) => i <= currentStepIndex + 1);

  const isActiveView = (step: StudyStep): boolean => {
    if (step.view === 'pre-reading') return currentView === 'pre-reading';
    if (step.view === 'scenes-part1' && step.sceneIndex !== undefined) {
      return currentView === 'scenes-part1' && currentPart1SceneIndex === step.sceneIndex;
    }
    return false;
  };

  return (
    <div className="bg-ministry-black border-b-2 border-party-red px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center gap-1 overflow-x-auto scrollbar-hide">
        <span className="text-[9px] font-terminal uppercase tracking-widest text-gray-500 mr-2 flex-shrink-0 hidden sm:block">
          Path:
        </span>
        {visibleSteps.map((step, visibleIndex) => {
          const globalIndex = steps.indexOf(step);
          const isComplete = step.isComplete;
          const isCurrent = globalIndex === currentStepIndex;
          const isNext = globalIndex === currentStepIndex + 1;
          const isActive = isActiveView(step);
          const canClick = isComplete || isCurrent;

          return (
            <React.Fragment key={step.id}>
              <button
                onClick={() => canClick && onNavigate(step.view, step.sceneIndex)}
                disabled={!canClick}
                title={isNext ? `Complete the current step to unlock ${step.label}` : step.label}
                className={`
                  flex-shrink-0 flex items-center gap-1.5 px-3 py-1 border font-terminal text-xs uppercase tracking-wide transition-all duration-200
                  ${isActive
                    ? 'border-party-red bg-party-red text-white font-bold'
                    : isComplete
                    ? 'border-green-700 text-green-400 hover:bg-green-900/20 cursor-pointer'
                    : isCurrent
                    ? 'border-party-red text-party-red font-bold hover:bg-red-900/20 cursor-pointer animate-pulse'
                    : 'border-gray-700 text-gray-600 cursor-not-allowed'
                  }
                `}
              >
                {isComplete && <span className="text-green-400">✓</span>}
                {isNext && <span className="text-gray-600">○</span>}
                <span className="hidden md:inline">{step.label}</span>
                <span className="md:hidden">{step.shortLabel}</span>
              </button>
              {visibleIndex < visibleSteps.length - 1 && (
                <span className={`flex-shrink-0 text-xs ${isComplete ? 'text-green-700' : 'text-gray-700'}`}>›</span>
              )}
            </React.Fragment>
          );
        })}

        {firstIncompleteIndex === -1 && (
          <span className="ml-3 text-xs font-terminal text-green-500 uppercase tracking-widest flex-shrink-0">
            Part 1 Complete ✓
          </span>
        )}
      </div>
    </div>
  );
};

export default StudyPath;
