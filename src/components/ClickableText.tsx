import React, { FC, MouseEvent } from 'react';

interface ClickableTextProps {
  text: string;
  clickableWords: string[];
  onWordClick: (name: string) => void;
  onWordHover: (name: string, event: MouseEvent) => void;
  onWordLeave: () => void;
}

const ClickableText: FC<ClickableTextProps> = ({ text, clickableWords, onWordClick, onWordHover, onWordLeave }) => {
  if (!clickableWords || clickableWords.length === 0) {
    return <>{text}</>;
  }

  // Sort words by length, descending, to match longer phrases first (e.g., "the stockings" before "stockings")
  const sortedWords = [...clickableWords].sort((a, b) => b.length - a.length);

  // Escape special regex characters in words
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const regex = new RegExp(`(${sortedWords.map(escapeRegExp).join('|')})`, 'gi');
  const parts = text.split(regex);

  const content = (
    <>
      {parts.map((part, index) => {
        const originalWord = sortedWords.find(w => w.toLowerCase() === part.toLowerCase());
        if (originalWord) {
          return (
            <button
              key={`${index}-${part}`}
              onClick={() => onWordClick(originalWord)}
              onMouseEnter={(e) => onWordHover(originalWord, e)}
              onMouseLeave={onWordLeave}
              className="font-bold text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
            >
              {part}
            </button>
          );
        }
        return part;
      })}
    </>
  );

  // If the component is rendered inside a <p> or <li>, we don't want to wrap it in another <p>.
  // We return a fragment and let the parent decide the block-level element.
  return content;
};

export default ClickableText;
