import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AppTabs from './components/AppTabs';
import BackgroundInfo from './components/BackgroundInfo';
import CharacterMap from './components/CharacterMap';
import SceneContainer from './components/SceneContainer';
import VocabularyHub from './components/VocabularyHub';
import WritingWorkshop from './components/WritingWorkshop';
import Chatbot from './components/Chatbot';
import Dashboard from './components/Dashboard';
import StoryDrivenRelationshipExplorer from './components/StoryDrivenRelationshipExplorer';
import DoublethinkGame from './components/DoublethinkGame';
import { ViewMode } from './types';
import {
    CHARACTERS,
    SYMBOLS,
    THEMES,
    SCENES,
    SEMANTIC_FIELDS,
    WRITING_TOPICS,
    MAGIC_SENTENCE_FOCUS_AREAS,
    PART1_SCENES,
    PART2_SCENES,
} from './constants';
import MobileMenu from './components/MobileMenu';
import { useChatbot } from './context/ChatbotContext';

const UNLOCK_ALL_SCENES = import.meta.env.VITE_UNLOCK_ALL_SCENES === 'true';

const StudentApp: React.FC = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
    const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
    const [currentPart1SceneIndex, setCurrentPart1SceneIndex] = useState(0);
    const [currentPart2SceneIndex, setCurrentPart2SceneIndex] = useState(0);
    const [completedScenes, setCompletedScenes] = useState<string[]>([]);
    const [doublethinkCompleted, setDoublethinkCompleted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const { isOpen: chatbotIsOpen, toggleChat, setContext } = useChatbot();

    // Helper functions for progress tracking
    const isPart1Complete = PART1_SCENES.every(s => completedScenes.includes(s.id));
    const isDoublethinkUnlocked = isPart1Complete;
    const isPart2Unlocked = doublethinkCompleted;

    useEffect(() => {
        // Fetch progress from DB
        fetch('http://localhost:8787/api/progress')
            .then(res => res.json())
            .then(data => {
                if (data.completedScenes) {
                    setCompletedScenes(data.completedScenes);
                }
                if (data.doublethinkCompleted) {
                    setDoublethinkCompleted(data.doublethinkCompleted);
                }
            })
            .catch(err => console.error("Failed to load progress:", err));
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        setIsAnimating(true); // Reset animation state
        const animationTimer = setTimeout(() => {
            setIsAnimating(false);
        }, 2500); // Animate for 2.5 seconds

        return () => clearTimeout(animationTimer); // Cleanup on unmount
    }, [viewMode]); // Add viewMode to dependency array

    useEffect(() => {
        let newContext = '';
        if (viewMode === 'scenes' || viewMode === 'scenes-part1') {
            const scene = PART1_SCENES[currentPart1SceneIndex];
            newContext = `The student is currently working on Part 1, Chapter ${currentPart1SceneIndex + 1}: ${scene?.title}. The chapter summary is: ${scene?.summary}`;
        } else if (viewMode === 'scenes-part2') {
            const scene = PART2_SCENES[currentPart2SceneIndex];
            newContext = `The student is currently working on Part 2, Chapter ${currentPart2SceneIndex + 1}: ${scene?.title}. The chapter summary is: ${scene?.summary}`;
        } else if (viewMode === 'doublethink-game') {
            newContext = 'The student is playing the Doublethink Challenge mini-game between Part 1 and Part 2.';
        } else {
            newContext = `The student is on the ${viewMode} page.`;
        }
        setContext(newContext);
    }, [viewMode, currentPart1SceneIndex, currentPart2SceneIndex, setContext]);

    const handleSceneComplete = (sceneId: string, part: 'part1' | 'part2') => {
        const newCompleted = completedScenes.includes(sceneId) ? completedScenes : [...completedScenes, sceneId];
        setCompletedScenes(newCompleted);

        // Save to DB
        fetch('http://localhost:8787/api/progress', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sceneId })
        }).catch(err => console.error("Failed to save progress:", err));

        // Advance to next scene in the appropriate part
        if (part === 'part1' && currentPart1SceneIndex < PART1_SCENES.length - 1) {
            setCurrentPart1SceneIndex(currentPart1SceneIndex + 1);
        } else if (part === 'part2' && currentPart2SceneIndex < PART2_SCENES.length - 1) {
            setCurrentPart2SceneIndex(currentPart2SceneIndex + 1);
        }
    };

    const handleDoublethinkComplete = () => {
        setDoublethinkCompleted(true);
        fetch('http://localhost:8787/api/doublethink-complete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).catch(err => console.error("Failed to save doublethink progress:", err));

        // Navigate to Part 2
        setViewMode('scenes-part2');
    };

    const handleNavigation = (view: ViewMode, index?: number) => {
        setViewMode(view);
        if (typeof index === 'number') {
            if (view === 'scenes-part1' || view === 'scenes') {
                setCurrentPart1SceneIndex(index);
            } else if (view === 'scenes-part2') {
                setCurrentPart2SceneIndex(index);
            } else {
                setCurrentSceneIndex(index);
            }
        }
    }

    const renderPart1ScenesView = () => {
        return (
            <div className="space-y-6">
                <div className="text-center mb-4">
                    <h2 className="text-2xl font-bold text-party-red font-mono uppercase tracking-wider">Part One: The World of Oceania</h2>
                </div>
                <div className="flex overflow-x-auto space-x-2 p-2 bg-paper-white dark:bg-gray-900 border-2 border-black dark:border-gray-600 rounded-none justify-center">
                    {PART1_SCENES.map((scene, index) => {
                        const isLocked = !UNLOCK_ALL_SCENES && index > 0 && !completedScenes.includes(PART1_SCENES[index - 1].id);
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
                    allCharacters={CHARACTERS}
                    allSymbols={SYMBOLS}
                    allThemes={THEMES}
                />
            </div>
        );
    };

    const renderPart2ScenesView = () => {
        if (!isPart2Unlocked) {
            return (
                <div className="min-h-[60vh] flex items-center justify-center">
                    <div className="text-center p-8 max-w-lg">
                        <div className="text-6xl mb-4">🔒</div>
                        <h2 className="text-2xl font-bold text-party-red mb-4 font-mono uppercase tracking-wider">
                            ACCESS DENIED
                        </h2>
                        <p className="text-gray-300 mb-6">
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
                    <h2 className="text-2xl font-bold text-party-red font-mono uppercase tracking-wider">Part Two: Winston & Julia</h2>
                </div>
                <div className="flex overflow-x-auto space-x-2 p-2 bg-paper-white dark:bg-gray-900 border-2 border-black dark:border-gray-600 rounded-none justify-center">
                    {PART2_SCENES.map((scene, index) => {
                        const isLocked = !UNLOCK_ALL_SCENES && index > 0 && !completedScenes.includes(PART2_SCENES[index - 1].id);
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
                    allCharacters={CHARACTERS}
                    allSymbols={SYMBOLS}
                    allThemes={THEMES}
                />
            </div>
        );
    };

    const renderDoublethinkGame = () => {
        if (!isDoublethinkUnlocked) {
            return (
                <div className="min-h-[60vh] flex items-center justify-center">
                    <div className="text-center p-8 max-w-lg">
                        <div className="text-6xl mb-4">🔒</div>
                        <h2 className="text-2xl font-bold text-party-red mb-4 font-mono uppercase tracking-wider">
                            ACCESS DENIED
                        </h2>
                        <p className="text-gray-300 mb-6">
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
                        <div className="text-6xl mb-4">✓</div>
                        <h2 className="text-2xl font-bold text-green-500 mb-4 font-mono uppercase tracking-wider">
                            CHALLENGE COMPLETED
                        </h2>
                        <p className="text-gray-300 mb-6">
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
                return <Dashboard completedScenes={completedScenes} doublethinkCompleted={doublethinkCompleted} onNavigate={handleNavigation} />;
            case 'introduction':
                return <BackgroundInfo onNavigate={() => handleNavigation('scenes-part1')} />;
            case 'character-map':
                return <CharacterMap characters={CHARACTERS} />;
            case 'scenes':
            case 'scenes-part1':
                return renderPart1ScenesView();
            case 'scenes-part2':
                return renderPart2ScenesView();
            case 'doublethink-game':
                return renderDoublethinkGame();
            case 'vocabulary':
                return <VocabularyHub semanticFields={SEMANTIC_FIELDS} />;
            case 'writing':
                return <WritingWorkshop writingTopics={WRITING_TOPICS} magicSentenceFocusAreas={MAGIC_SENTENCE_FOCUS_AREAS} />;
            case 'relationship-explorer':
                return (
                    <StoryDrivenRelationshipExplorer
                        scenes={SCENES}
                        characters={CHARACTERS}
                        onComplete={() => handleNavigation('scenes-part1')}
                        onBack={() => handleNavigation('introduction')}
                    />
                );
            default:
                return <p>Select a section</p>;
        }
    };
    
    return (
        <div className="bg-paper-white dark:bg-gray-900 min-h-screen flex flex-col font-terminal relative">
            {/* Background Effects */}
            <div className="crt-overlay"></div>
            <div className="vignette-overlay"></div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Header onMenuClick={() => setIsMobileMenuOpen(true)} theme={theme} toggleTheme={toggleTheme} />
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                    currentView={viewMode}
                    onNavigate={handleNavigation}
                    isPart1Complete={isPart1Complete}
                    isDoublethinkComplete={doublethinkCompleted}
                />
                {/* Recording Dot Overlay */}
                <div className="fixed top-24 right-4 z-50 flex items-center gap-2 pointer-events-none opacity-80">
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse-fast"></div>
                    <span className="text-red-600 font-bold text-xs tracking-widest uppercase">REC</span>
                </div>

                <div className="flex flex-1 relative"> {/* Flex container for main content and chatbot */}
                    <main className={`max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex-1 transition-all duration-300 ${chatbotIsOpen ? 'lg:mr-96' : ''}`}>
                        <div className="hidden lg:block mb-6">
                            <AppTabs
                                currentView={viewMode}
                                onTabChange={handleNavigation}
                                isPart1Complete={isPart1Complete}
                                isDoublethinkComplete={doublethinkCompleted}
                            />
                        </div>
                        <div key={viewMode} className="animate-fade-in">
                            {renderContent()}
                        </div>
                    </main>
                    <div className={`fixed right-0 top-0 h-full bg-paper-white border-l-2 border-black dark:bg-gray-900 transition-all duration-300 z-40 ${chatbotIsOpen ? 'w-96' : 'w-0 overflow-hidden'}`}>
                        <Chatbot />
                    </div>
                    {!chatbotIsOpen && (
                        <div className="fixed bottom-8 right-8 z-40">
                            <button
                                onClick={toggleChat}
                                className="relative flex items-center justify-center w-24 h-24 group"
                                aria-label="Open AI Assistant"
                            >
                                {isAnimating && (
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-party-red opacity-75 animate-ping"></span>
                                )}
                                <span className="relative inline-flex rounded-full h-24 w-24 items-center justify-center transition-transform group-hover:scale-110 bg-ministry-black border-4 border-party-red">
                                    <span className="text-4xl">👁️</span> 
                                </span>
                            </button>
                        </div>
                    )}
                </div>
                <footer className="bg-ministry-black py-4 text-center text-gray-400 text-sm border-t-2 border-party-red mt-auto">
                    <p className="font-propaganda tracking-widest">MINISTRY OF TRUTH // EDUCATIONAL SECTOR // (V2)</p>
                </footer>
            </div>
        </div>
    );
};

export default StudentApp;
