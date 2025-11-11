import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import AppTabs from './components/AppTabs';
import BackgroundInfo from './components/BackgroundInfo';
import CharacterMap from './components/CharacterMap';
import SceneContainer from './components/SceneContainer';
import VocabularyHub from './components/VocabularyHub';
import WritingWorkshop from './components/WritingWorkshop';
import Chatbot from './components/Chatbot';
import { ViewMode } from './types';
import {
    CHARACTERS,
    SYMBOLS,
    THEMES,
    ACT1_SCENES,
    SEMANTIC_FIELDS,
    WRITING_TOPICS,
    MAGIC_SENTENCE_FOCUS_AREAS,
} from './constants';
import MobileMenu from './components/MobileMenu';

const UNLOCK_ALL_SCENES = import.meta.env.VITE_UNLOCK_ALL_SCENES === 'true';

const StudentApp: React.FC = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('introduction');
    const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
    const [completedScenes, setCompletedScenes] = useState<string[]>([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [chatbotIsOpen, setChatbotIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

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

    const handleSceneComplete = (sceneId: string) => {
        const newCompleted = completedScenes.includes(sceneId) ? completedScenes : [...completedScenes, sceneId];
        setCompletedScenes(newCompleted);
        
        if (currentSceneIndex < ACT1_SCENES.length - 1) {
            setCurrentSceneIndex(currentSceneIndex + 1);
        }
    };

    const chatbotContext = useMemo(() => {
        if (viewMode === 'scenes') {
            return `The student is currently working on Act 1, Scene ${currentSceneIndex + 1}: ${ACT1_SCENES[currentSceneIndex].title}. The scene summary is: ${ACT1_SCENES[currentSceneIndex].summary}`;
        }
        return `The student is on the ${viewMode} page.`;
    }, [viewMode, currentSceneIndex]);
    
    const handleNavigation = (view: ViewMode) => {
        setViewMode(view);
    }

    const renderScenesView = () => {
        return (
            <div className="space-y-6">
                <div className="flex overflow-x-auto space-x-2 p-2 bg-gray-100 dark:bg-gray-900 rounded-lg justify-center">
                    {ACT1_SCENES.map((scene, index) => {
                        const isLocked = !UNLOCK_ALL_SCENES && index > 0 && !completedScenes.includes(ACT1_SCENES[index - 1].id);
                        return (
                        <button 
                            key={scene.id} 
                            onClick={() => setCurrentSceneIndex(index)}
                            disabled={isLocked}
                            className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                                currentSceneIndex === index 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            } disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            Scene {index + 1}
                        </button>
                        );
                    })}
                </div>
                <SceneContainer
                    key={ACT1_SCENES[currentSceneIndex].id}
                    scene={ACT1_SCENES[currentSceneIndex]}
                    onComplete={() => handleSceneComplete(ACT1_SCENES[currentSceneIndex].id)}
                    allCharacters={CHARACTERS}
                    allSymbols={SYMBOLS}
                    allThemes={THEMES}
                />
            </div>
        );
    }
    
    const renderContent = () => {
        switch (viewMode) {
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
            default:
                return <p>Select a section</p>;
        }
    };
    
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
            <Header onMenuClick={() => setIsMobileMenuOpen(true)} theme={theme} toggleTheme={toggleTheme} />
            <MobileMenu 
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                currentView={viewMode}
                onNavigate={handleNavigation}
            />
            <div className="flex flex-1 relative"> {/* Flex container for main content and chatbot */}
                <main className={`max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex-1 transition-all duration-300 ${chatbotIsOpen ? 'lg:mr-96' : ''}`}>
                    <div className="hidden lg:block mb-6">
                        <AppTabs currentView={viewMode} onTabChange={handleNavigation} />
                    </div>
                    <div key={viewMode} className="animate-fade-in">
                        {renderContent()}
                    </div>
                </main>
                <div className={`fixed right-0 top-0 h-full bg-gray-50 dark:bg-gray-900 transition-all duration-300 z-40 ${chatbotIsOpen ? 'w-96' : 'w-0 overflow-hidden'}`}>
                    <Chatbot context={chatbotContext} isOpen={chatbotIsOpen} setIsOpen={setChatbotIsOpen} />
                </div>
                {!chatbotIsOpen && (
                    <div className="fixed bottom-8 right-8 z-40">
                        <button
                            onClick={() => setChatbotIsOpen(true)}
                            className="relative flex items-center justify-center w-24 h-24"
                            aria-label="Open AI Assistant"
                        >
                            {isAnimating && (
                                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
                            )}
                            <span className="relative inline-flex rounded-full h-24 w-24 items-center justify-center transition-transform hover:scale-110">
                                <img src="/millerBot.png" alt="Mr. Miller Chatbot" className="h-20 w-20 rounded-full object-cover" />
                            </span>
                        </button>
                    </div>
                )}
            </div>
            <footer className="bg-gray-100 dark:bg-gray-800 py-4 text-center text-gray-600 dark:text-gray-400 text-sm">
                <p>Saint Johns School | English Department | (V2)</p>
            </footer>
        </div>
    );
};

export default StudentApp;
