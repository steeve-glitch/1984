import React, { useState, useMemo, FC } from 'react';
import Card from './Card';
import { Scene } from '../types';
import CloseReadingActivity from './CloseReadingActivity';
import ParagraphBuilder from './ParagraphBuilder';
import WorldTodayActivity from './WorldTodayActivity';

interface Props {
  scene: Scene;
  onComplete: () => void;
}

type Activity = 'overview' | 'close-reading' | 'paragraph' | 'world-today';

const ACTIVITY_META: Record<Activity, { label: string; icon: string }> = {
  'overview':      { label: 'Overview',       icon: '📖' },
  'close-reading': { label: 'Close Reading',  icon: '🔍' },
  'paragraph':     { label: 'Write',          icon: '✍️' },
  'world-today':   { label: 'The World Today', icon: '🌍' },
};

const SceneContainer: FC<Props> = ({ scene, onComplete }) => {
  const flow = useMemo<Activity[]>(() => {
    const f: Activity[] = ['overview'];
    if (scene.closeReadingData) f.push('close-reading');
    if (scene.paragraphBuilderData) f.push('paragraph');
    if (scene.worldTodayData) f.push('world-today');
    return f;
  }, [scene]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentActivity = flow[currentIndex];

  const handleNext = () => {
    if (currentIndex < flow.length - 1) {
      setCurrentIndex(i => i + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onComplete();
    }
  };

  const progress = Math.round((currentIndex / flow.length) * 100);

  const renderActivity = () => {
    switch (currentActivity) {
      case 'overview':
        return <OverviewActivity scene={scene} onComplete={handleNext} />;
      case 'close-reading':
        return scene.closeReadingData
          ? <CloseReadingActivity data={scene.closeReadingData} onComplete={handleNext} />
          : null;
      case 'paragraph':
        return scene.paragraphBuilderData
          ? <ParagraphBuilder data={scene.paragraphBuilderData} onComplete={handleNext} />
          : null;
      case 'world-today':
        return scene.worldTodayData
          ? <WorldTodayActivity data={scene.worldTodayData} onComplete={handleNext} />
          : null;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="font-terminal text-[10px] uppercase tracking-widest text-gray-400">
            Step {currentIndex + 1} of {flow.length}
          </span>
          <span className="font-terminal text-[10px] uppercase tracking-widest text-gray-400">
            {progress}%
          </span>
        </div>
        <div className="h-1 bg-gray-200 dark:bg-gray-700">
          <div
            className="h-full bg-party-red transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step chips */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-hide">
        {flow.map((activity, i) => {
          const { label, icon } = ACTIVITY_META[activity];
          const isActive = i === currentIndex;
          const isDone = i < currentIndex;
          return (
            <div key={activity} className="flex items-center gap-0.5 flex-shrink-0">
              <button
                onClick={() => isDone && setCurrentIndex(i)}
                disabled={i > currentIndex}
                title={label}
                className={`
                  flex items-center gap-1 px-3 py-1 border font-terminal text-[10px] uppercase tracking-wide transition-colors
                  ${isActive
                    ? 'border-party-red bg-party-red text-white font-bold'
                    : isDone
                    ? 'border-green-700 text-green-500 cursor-pointer hover:bg-green-900/10'
                    : 'border-gray-300 dark:border-gray-700 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                <span>{isDone ? '✓' : icon}</span>
                <span className="hidden sm:inline">{label}</span>
              </button>
              {i < flow.length - 1 && (
                <span className={`text-[10px] ${isDone ? 'text-green-700' : 'text-gray-300 dark:text-gray-700'}`}>›</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Activity card */}
      <Card title={`${scene.title} — ${ACTIVITY_META[currentActivity].label}`}>
        {renderActivity()}
      </Card>
    </div>
  );
};

// ── Overview Activity ─────────────────────────────────────────────────────────

interface OverviewProps {
  scene: Scene;
  onComplete: () => void;
}

const OverviewActivity: FC<OverviewProps> = ({ scene, onComplete }) => (
  <div className="space-y-6 p-2">
    {/* Summary */}
    <div>
      <p className="font-terminal text-[10px] uppercase tracking-widest text-gray-400 mb-3">What happens in this chapter</p>
      <p className="font-terminal text-sm leading-7 text-gray-700 dark:text-gray-300">
        {scene.summary}
      </p>
    </div>

    {/* Key quote */}
    <div className="border-l-4 border-party-red pl-5 py-2">
      <p className="font-terminal text-[10px] uppercase tracking-widest text-gray-400 mb-2">Key quotation</p>
      <blockquote className="font-terminal text-sm leading-relaxed text-ministry-black dark:text-white italic">
        "{scene.quote}"
      </blockquote>
      <p className="font-terminal text-[10px] text-gray-400 mt-2">— George Orwell, <em>Nineteen Eighty-Four</em></p>
    </div>

    {/* Themes */}
    {scene.themes.length > 0 && (
      <div>
        <p className="font-terminal text-[10px] uppercase tracking-widest text-gray-400 mb-2">Themes in this chapter</p>
        <div className="flex flex-wrap gap-2">
          {scene.themes.map(theme => (
            <span
              key={theme}
              className="border border-black dark:border-gray-500 px-3 py-1 font-terminal text-xs uppercase tracking-wide text-ministry-black dark:text-gray-300"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>
    )}

    {/* Guiding question */}
    {!scene.closeReadingData && (
      <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-4">
        <p className="font-terminal text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
          Coming soon
        </p>
        <p className="font-terminal text-sm text-gray-600 dark:text-gray-400">
          Activities for this chapter are being prepared.
        </p>
      </div>
    )}

    <div className="flex justify-end">
      <button
        onClick={onComplete}
        className="px-6 py-3 bg-party-red text-white font-bold font-propaganda uppercase tracking-widest text-sm hover:bg-red-700 transition-colors"
      >
        {scene.closeReadingData ? 'Begin Close Reading →' : 'Mark Complete →'}
      </button>
    </div>
  </div>
);

export default SceneContainer;
