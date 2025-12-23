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
import StoryDrivenRelationshipExplorer from './components/StoryDrivenRelationshipExplorer'; // Import the new component
import { ViewMode } from './types';
import {
    CHARACTERS,
    SYMBOLS,
    THEMES,
    SCENES,
    SEMANTIC_FIELDS,
    WRITING_TOPICS,
    MAGIC_SENTENCE_FOCUS_AREAS,
} from './constants';
import MobileMenu from './components/MobileMenu';
import { useChatbot } from './context/ChatbotContext';

const UNLOCK_ALL_SCENES = import.meta.env.VITE_UNLOCK_ALL_SCENES === 'true';

const StudentApp: React.FC = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
    const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
    const [completedScenes, setCompletedScenes] = useState<string[]>([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const { isOpen: chatbotIsOpen, toggleChat, setContext } = useChatbot();

    useEffect(() => {
        // Fetch progress from DB
        fetch('http://localhost:8787/api/progress')
            .then(res => res.json())
            .then(data => {
                if (data.completedScenes) {
                    setCompletedScenes(data.completedScenes);
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
        if (viewMode === 'scenes') {
            newContext = `The student is currently working on Part 1, Chapter ${currentSceneIndex + 1}: ${SCENES[currentSceneIndex].title}. The chapter summary is: ${SCENES[currentSceneIndex].summary}`;
        } else {
            newContext = `The student is on the ${viewMode} page.`;
        }
        setContext(newContext);
    }, [viewMode, currentSceneIndex, setContext]);

    const handleSceneComplete = (sceneId: string) => {
        const newCompleted = completedScenes.includes(sceneId) ? completedScenes : [...completedScenes, sceneId];
        setCompletedScenes(newCompleted);
        
        // Save to DB
        fetch('http://localhost:8787/api/progress', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sceneId })
        }).catch(err => console.error("Failed to save progress:", err));
        
        if (currentSceneIndex < SCENES.length - 1) {
            setCurrentSceneIndex(currentSceneIndex + 1);
        }
    };

    const handleNavigation = (view: ViewMode, index?: number) => {
        setViewMode(view);
        if (typeof index === 'number') {
            setCurrentSceneIndex(index);
        }
    }

    const renderScenesView = () => {
        return (
            <div className="space-y-6">
                <div className="flex overflow-x-auto space-x-2 p-2 bg-paper-white dark:bg-gray-900 border-2 border-black dark:border-gray-600 rounded-none justify-center">
                    {SCENES.map((scene, index) => {
                        const isLocked = !UNLOCK_ALL_SCENES && index > 0 && !completedScenes.includes(SCENES[index - 1].id);
                        return (
                        <button 
                            key={scene.id} 
                            onClick={() => setCurrentSceneIndex(index)}
                            disabled={isLocked}
                            className={`px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-none border border-black transition-transform hover:translate-y-[1px] ${
                                currentSceneIndex === index 
                                    ? 'bg-party-red text-white' 
                                    : 'bg-white dark:bg-gray-700 text-ministry-black dark:text-gray-300'
                            } disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300`}
                        >
                            Chapter {index + 1}
                        </button>
                        );
                    })}
                </div>
                <SceneContainer
                    key={SCENES[currentSceneIndex].id}
                    scene={SCENES[currentSceneIndex]}
                    onComplete={() => handleSceneComplete(SCENES[currentSceneIndex].id)}
                    allCharacters={CHARACTERS}
                    allSymbols={SYMBOLS}
                    allThemes={THEMES}
                />
            </div>
        );
    }
    
    const renderContent = () => {
        switch (viewMode) {
            case 'dashboard':
                return <Dashboard completedScenes={completedScenes} onNavigate={handleNavigation} />;
            case 'introduction':
                return <BackgroundInfo onNavigate={() => handleNavigation('scenes')} />;
            case 'character-map':
                return <CharacterMap characters={CHARACTERS} />;
            case 'scenes':
                return renderScenesView();
            case 'vocabulary':
                return <VocabularyHub semanticFields={SEMANTIC_FIELDS} />;
            case 'writing':
                return <WritingWorkshop writingTopics={WRITING_TOPICS} magicSentenceFocusAreas={MAGIC_SENTENCE_FOCUS_AREAS} />;
            case 'relationship-explorer': // New case for the StoryDrivenRelationshipExplorer
                return (
                    <StoryDrivenRelationshipExplorer
                        scenes={SCENES}
                        characters={CHARACTERS}
                        onComplete={() => handleNavigation('scenes')} // Navigate somewhere after completion
                        onBack={() => handleNavigation('introduction')} // Navigate back
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
                />
                {/* Recording Dot Overlay */}
                <div className="fixed top-24 right-4 z-50 flex items-center gap-2 pointer-events-none opacity-80">
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse-fast"></div>
                    <span className="text-red-600 font-bold text-xs tracking-widest uppercase">REC</span>
                </div>

                <div className="flex flex-1 relative"> {/* Flex container for main content and chatbot */}
                    <main className={`max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex-1 transition-all duration-300 ${chatbotIsOpen ? 'lg:mr-96' : ''}`}>
                        <div className="hidden lg:block mb-6">
                            <AppTabs currentView={viewMode} onTabChange={handleNavigation} />
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
