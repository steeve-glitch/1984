import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import OrwellDossier from './components/OrwellDossier';
import SceneContainer from './components/SceneContainer';
import DoublethinkGame from './components/DoublethinkGame';
import NewSpeakLexicon from './components/NewSpeakLexicon';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';
import Glossary from './components/Glossary';
import StudyPath from './components/StudyPath';
import { ViewMode } from './types';
import { PART1_SCENES, PART2_SCENES } from './constants';
import { useChatbot } from './context/ChatbotContext';
import { useAuth } from './context/AuthContext';
import {
  loadProgress,
  saveSceneProgress,
  savePreReadingProgress,
  saveDoublethinkComplete,
} from './services/progressService';

const UNLOCK_ALL_SCENES = import.meta.env.VITE_UNLOCK_ALL_SCENES === 'true';

interface StudentAppProps {
  onReturnToDashboard?: () => void;
}

const StudentApp: React.FC<StudentAppProps> = ({ onReturnToDashboard }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
  const [currentPart1SceneIndex, setCurrentPart1SceneIndex] = useState(0);
  const [currentPart2SceneIndex, setCurrentPart2SceneIndex] = useState(0);
  const [completedScenes, setCompletedScenes] = useState<string[]>([]);
  const [completedPreReading, setCompletedPreReading] = useState<string[]>([]);
  const [doublethinkCompleted, setDoublethinkCompleted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [glossaryOpen, setGlossaryOpen] = useState(false);

  const { isOpen: chatbotIsOpen, toggleChat, setContext } = useChatbot();
  const { user, signOut } = useAuth();

  const isTeacher = user?.role === 'teacher';
  const unlocked = UNLOCK_ALL_SCENES || isTeacher;

  const isPart1Complete = isTeacher || PART1_SCENES.every(s => completedScenes.includes(s.id));
  const isDoublethinkUnlocked = isTeacher || isPart1Complete;
  const isPart2Unlocked = isTeacher || doublethinkCompleted;
  const isNewspeakUnlocked = isTeacher || isPart1Complete;

  // Load progress from Firestore
  useEffect(() => {
    if (!user) return;
    loadProgress(user.uid).then(data => {
      setCompletedScenes(data.completedScenes);
      setCompletedPreReading(data.completedPreReading);
      setDoublethinkCompleted(data.doublethinkCompleted);
    }).catch(err => console.error('Failed to load progress:', err));
  }, [user]);

  // Theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Chatbot context
  useEffect(() => {
    let ctx = '';
    if (viewMode === 'scenes-part1') {
      const scene = PART1_SCENES[currentPart1SceneIndex];
      ctx = `The student is working on Part 1, Chapter ${currentPart1SceneIndex + 1}: ${scene?.title}. Summary: ${scene?.summary}`;
    } else if (viewMode === 'scenes-part2') {
      const scene = PART2_SCENES[currentPart2SceneIndex];
      ctx = `The student is working on Part 2, Chapter ${currentPart2SceneIndex + 1}: ${scene?.title}. Summary: ${scene?.summary}`;
    } else if (viewMode === 'doublethink-game') {
      ctx = 'The student is completing the Doublethink Challenge.';
    } else {
      ctx = `The student is on the ${viewMode} page.`;
    }
    setContext(ctx);
  }, [viewMode, currentPart1SceneIndex, currentPart2SceneIndex, setContext]);

  const handleSceneComplete = (sceneId: string, part: 'part1' | 'part2') => {
    const newCompleted = completedScenes.includes(sceneId) ? completedScenes : [...completedScenes, sceneId];
    setCompletedScenes(newCompleted);
    if (user) saveSceneProgress(user.uid, sceneId).catch(console.error);

    if (part === 'part1' && currentPart1SceneIndex < PART1_SCENES.length - 1) {
      setCurrentPart1SceneIndex(currentPart1SceneIndex + 1);
    } else if (part === 'part2' && currentPart2SceneIndex < PART2_SCENES.length - 1) {
      setCurrentPart2SceneIndex(currentPart2SceneIndex + 1);
    }
  };

  const handlePreReadingComplete = () => {
    const newCompleted = completedPreReading.includes('pre-reading')
      ? completedPreReading
      : [...completedPreReading, 'pre-reading'];
    setCompletedPreReading(newCompleted);
    if (user) savePreReadingProgress(user.uid).catch(console.error);
    setViewMode('scenes-part1');
  };

  const handleDoublethinkComplete = () => {
    setDoublethinkCompleted(true);
    if (user) saveDoublethinkComplete(user.uid).catch(console.error);
    setViewMode('scenes-part2');
  };

  const handleNavigation = (view: ViewMode, index?: number) => {
    setViewMode(view);
    if (typeof index === 'number') {
      if (view === 'scenes-part1') setCurrentPart1SceneIndex(index);
      else if (view === 'scenes-part2') setCurrentPart2SceneIndex(index);
    }
  };

  // ── Scene views ────────────────────────────────────────────────────────────

  const renderPart1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-party-red font-mono uppercase tracking-wider">
          Part One: The World of Oceania
        </h2>
      </div>
      <div className="flex overflow-x-auto space-x-2 p-2 bg-paper-white dark:bg-gray-900 border-2 border-black dark:border-gray-600 rounded-none justify-center">
        {PART1_SCENES.map((scene, index) => {
          const isLocked = !unlocked && index > 0 && !completedScenes.includes(PART1_SCENES[index - 1].id);
          return (
            <button
              key={scene.id}
              onClick={() => setCurrentPart1SceneIndex(index)}
              disabled={isLocked}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-none border border-black transition-transform hover:translate-y-[1px] ${
                currentPart1SceneIndex === index
                  ? 'bg-party-red text-white'
                  : 'bg-white dark:bg-gray-700 text-ministry-black dark:text-gray-300'
              } disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300`}
            >
              Ch {index + 1}
            </button>
          );
        })}
      </div>
      <SceneContainer
        key={PART1_SCENES[currentPart1SceneIndex].id}
        scene={PART1_SCENES[currentPart1SceneIndex]}
        onComplete={() => handleSceneComplete(PART1_SCENES[currentPart1SceneIndex].id, 'part1')}
      />
    </div>
  );

  const renderPart2 = () => {
    if (!isPart2Unlocked) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center p-8 max-w-lg">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold text-party-red mb-4 font-mono uppercase tracking-wider">
              ACCESS DENIED
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 font-terminal">
              Complete the Doublethink Challenge to unlock Part 2.
            </p>
            <button
              onClick={() => setViewMode('doublethink-game')}
              className="px-6 py-3 bg-party-red text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              Go to Doublethink Challenge
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-party-red font-mono uppercase tracking-wider">
            Part Two: Winston &amp; Julia
          </h2>
        </div>
        <div className="flex overflow-x-auto space-x-2 p-2 bg-paper-white dark:bg-gray-900 border-2 border-black dark:border-gray-600 rounded-none justify-center">
          {PART2_SCENES.map((scene, index) => {
            const isLocked = !unlocked && index > 0 && !completedScenes.includes(PART2_SCENES[index - 1].id);
            return (
              <button
                key={scene.id}
                onClick={() => setCurrentPart2SceneIndex(index)}
                disabled={isLocked}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-none border border-black transition-transform hover:translate-y-[1px] ${
                  currentPart2SceneIndex === index
                    ? 'bg-party-red text-white'
                    : 'bg-white dark:bg-gray-700 text-ministry-black dark:text-gray-300'
                } disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300`}
              >
                Ch {index + 1}
              </button>
            );
          })}
        </div>
        <SceneContainer
          key={PART2_SCENES[currentPart2SceneIndex].id}
          scene={PART2_SCENES[currentPart2SceneIndex]}
          onComplete={() => handleSceneComplete(PART2_SCENES[currentPart2SceneIndex].id, 'part2')}
        />
      </div>
    );
  };

  const renderDoublethink = () => {
    if (!isDoublethinkUnlocked) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center p-8 max-w-lg">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold text-party-red mb-4 font-mono uppercase tracking-wider">
              ACCESS DENIED
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 font-terminal">
              Complete all Part 1 chapters to unlock the Doublethink Challenge.
            </p>
            <button
              onClick={() => setViewMode('scenes-part1')}
              className="px-6 py-3 bg-party-red text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              Return to Part 1
            </button>
          </div>
        </div>
      );
    }

    if (doublethinkCompleted) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center p-8 max-w-lg">
            <div className="text-5xl mb-4 text-green-500">✓</div>
            <h2 className="text-2xl font-bold text-green-500 mb-4 font-mono uppercase tracking-wider">
              Challenge Completed
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 font-terminal">
              Your orthodoxy has been confirmed. Part 2 is now unlocked.
            </p>
            <button
              onClick={() => setViewMode('scenes-part2')}
              className="px-6 py-3 bg-party-red text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              Proceed to Part 2
            </button>
          </div>
        </div>
      );
    }

    return <DoublethinkGame onComplete={handleDoublethinkComplete} />;
  };

  const renderContent = () => {
    switch (viewMode) {
      case 'dashboard':
        return (
          <Dashboard
            completedScenes={completedScenes}
            doublethinkCompleted={doublethinkCompleted}
            onNavigate={handleNavigation}
          />
        );
      case 'pre-reading':
        return <OrwellDossier onComplete={handlePreReadingComplete} />;
      case 'scenes-part1':
        return renderPart1();
      case 'scenes-part2':
        return renderPart2();
      case 'doublethink-game':
        return renderDoublethink();
      case 'newspeak-lexicon':
        if (!isNewspeakUnlocked) {
          return (
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="text-center p-8 max-w-lg">
                <div className="text-6xl mb-4">🔒</div>
                <h2 className="text-2xl font-bold text-party-red mb-4 font-mono uppercase tracking-wider">
                  Locked
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-terminal">
                  Complete all Part 1 chapters to unlock the Newspeak Appendix.
                </p>
              </div>
            </div>
          );
        }
        return (
          <NewSpeakLexicon
            onComplete={() => handleNavigation('dashboard')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-paper-white dark:bg-gray-900 min-h-screen flex flex-col font-terminal relative">
      <div className="crt-overlay" />
      <div className="vignette-overlay" />

      <Glossary isOpen={glossaryOpen} onClose={() => setGlossaryOpen(false)} />

      <div className="relative z-10 flex flex-col min-h-screen">
        {onReturnToDashboard && (
          <div className="bg-party-red text-white font-terminal text-[11px] uppercase tracking-widest px-4 py-2 flex items-center justify-between sticky top-0 z-[60]">
            <span className="opacity-80">Teacher preview — changes here affect real student data</span>
            <button
              onClick={onReturnToDashboard}
              className="border border-white px-3 py-1 hover:bg-red-700 transition-colors"
            >
              ← Back to Dashboard
            </button>
          </div>
        )}
        <Header
          onMenuClick={() => {}}
          theme={theme}
          toggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
          onGlossaryClick={() => setGlossaryOpen(true)}
        />

        <StudyPath
          completedScenes={completedScenes}
          completedPreReading={completedPreReading}
          currentView={viewMode}
          currentPart1SceneIndex={currentPart1SceneIndex}
          onNavigate={handleNavigation}
        />

        {/* REC indicator */}
        <div className="fixed top-24 right-4 z-40 flex items-center gap-2 pointer-events-none opacity-80">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse-fast" />
          <span className="text-red-600 font-bold text-xs tracking-widest uppercase">REC</span>
        </div>

        <div className="flex flex-1 relative">
          <main className={`max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex-1 transition-all duration-300 ${chatbotIsOpen ? 'lg:mr-96' : ''}`}>
            <div key={viewMode} className="animate-fade-in">
              {renderContent()}
            </div>
          </main>

          {/* Chatbot panel */}
          <div className={`fixed right-0 top-0 h-full bg-paper-white border-l-2 border-black dark:bg-gray-900 transition-all duration-300 z-40 ${chatbotIsOpen ? 'w-96' : 'w-0 overflow-hidden'}`}>
            <Chatbot />
          </div>

          {/* Chatbot toggle — always visible */}
          <div className="fixed bottom-8 right-8 z-50">
            <button
              onClick={toggleChat}
              className={`relative flex items-center justify-center group transition-all duration-300 ${chatbotIsOpen ? 'w-12 h-12' : 'w-20 h-20'}`}
              aria-label={chatbotIsOpen ? 'Close AI assistant' : 'Open AI assistant'}
            >
              {!chatbotIsOpen && (
                <span className="absolute inline-flex h-full w-full rounded-full bg-party-red opacity-75 animate-ping" />
              )}
              <span className={`relative inline-flex rounded-full items-center justify-center transition-all duration-300 group-hover:scale-110 bg-ministry-black border-party-red ${chatbotIsOpen ? 'w-12 h-12 border-2 opacity-60 group-hover:opacity-100' : 'w-20 h-20 border-4'}`}>
                {chatbotIsOpen ? (
                  <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M1 3C5 10 17 10 21 3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="6" y1="9.5" x2="5" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="11" y1="11" x2="11" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="16" y1="9.5" x2="17" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <span className="text-3xl">👁️</span>
                )}
              </span>
            </button>
          </div>
        </div>

        <footer className="bg-ministry-black py-4 text-center text-gray-400 text-sm border-t-2 border-party-red mt-auto">
          <p className="font-propaganda tracking-widest">MINISTRY OF TRUTH // EDUCATIONAL SECTOR // (V3)</p>
        </footer>
      </div>
    </div>
  );
};

export default StudentApp;
