import React, { FC } from 'react';
import Card from './Card';

interface BackgroundInfoProps {
  onNavigate: () => void;
}

const BackgroundInfo: FC<BackgroundInfoProps> = ({ onNavigate }) => {
    return (
        <Card title="Welcome to the Study Guide">
            <div className="p-4 space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Welcome to the interactive study guide for Arthur Miller's "Death of a Salesman."
                    This play, which premiered in 1949, is a powerful critique of the American Dream and a moving exploration of one family's struggle with failure, memory, and denial.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Through a series of interactive activities, you will delve into the play's characters, themes, and language. You'll analyze key scenes, track important symbols, and even get feedback on your own writing.
                </p>

                <div className="pt-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">A Word from the Author</h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg mx-auto max-w-2xl">
                        <iframe 
                            src="https://www.youtube.com/embed/6ob0f1kCtOM?start=146&end=378" 
                            title="Arthur Miller on 'Death of a Salesman' (The South Bank Show)" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Arthur Miller discusses "Death of a Salesman" in this segment from The South Bank Show.</p>
                </div>

                <div className="text-center pt-4">
                    <button onClick={onNavigate} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Explore The Play
                    </button>
                </div>
            </div>
        </Card>
    );
};

export default BackgroundInfo;