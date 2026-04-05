import React, { useState, FC } from 'react';
import { NEWSPEAK_GLOSSARY, SEMANTIC_FIELDS } from '../constants';

interface GlossaryProps {
  isOpen: boolean;
  onClose: () => void;
}

const Glossary: FC<GlossaryProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'newspeak' | 'vocabulary'>('newspeak');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!isOpen) return null;

  const lc = search.toLowerCase();

  const filteredNewspeak = NEWSPEAK_GLOSSARY.filter(
    t => t.term.toLowerCase().includes(lc) || t.definition.toLowerCase().includes(lc)
  ).sort((a, b) => a.term.localeCompare(b.term));

  const allVocabTerms = SEMANTIC_FIELDS.flatMap(f =>
    f.terms.map(t => ({ ...t, field: f.title }))
  ).sort((a, b) => a.word.localeCompare(b.word));

  const filteredVocabTerms = allVocabTerms.filter(
    t => t.word.toLowerCase().includes(lc) || t.definition.toLowerCase().includes(lc)
  );

  const toggleExpand = (key: string) => {
    setExpanded(prev => prev === key ? null : key);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-end"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Panel */}
      <div
        className="relative z-10 h-full w-full max-w-lg bg-paper-white dark:bg-gray-900 border-l-2 border-black dark:border-gray-700 flex flex-col shadow-[-4px_0_0_0_rgba(0,0,0,1)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-ministry-black border-b-2 border-party-red">
          <div>
            <h2 className="font-propaganda font-bold uppercase tracking-widest text-white text-sm">
              Reference Glossary
            </h2>
            <p className="font-terminal text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
              Accessible at all times
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Close glossary"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b-2 border-black dark:border-gray-700">
          <button
            onClick={() => setTab('newspeak')}
            className={`flex-1 py-3 font-terminal text-xs uppercase tracking-widest font-bold transition-colors ${
              tab === 'newspeak'
                ? 'bg-party-red text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-750'
            }`}
          >
            Newspeak ({NEWSPEAK_GLOSSARY.length})
          </button>
          <button
            onClick={() => setTab('vocabulary')}
            className={`flex-1 py-3 font-terminal text-xs uppercase tracking-widest font-bold transition-colors border-l border-black dark:border-gray-700 ${
              tab === 'vocabulary'
                ? 'bg-party-red text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-750'
            }`}
          >
            Vocabulary ({allVocabTerms.length})
          </button>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-gray-200 dark:border-gray-700">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search terms..."
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 font-terminal text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-party-red"
          />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {tab === 'newspeak' && (
            <div>
              {filteredNewspeak.length === 0 ? (
                <p className="p-4 font-terminal text-sm text-gray-400 text-center">No terms found.</p>
              ) : (
                filteredNewspeak.map(term => (
                  <div key={term.term} className="border-b border-gray-100 dark:border-gray-800">
                    <button
                      onClick={() => toggleExpand(term.term)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-between"
                    >
                      <span className="font-propaganda font-bold text-ministry-black dark:text-white text-sm uppercase tracking-wide">
                        {term.term}
                      </span>
                      <span className="text-gray-400 text-xs">{expanded === term.term ? '▲' : '▼'}</span>
                    </button>
                    {expanded === term.term && (
                      <div className="px-4 pb-4 space-y-2">
                        <p className="font-terminal text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {term.definition}
                        </p>
                        <div className="border-l-2 border-party-red pl-3">
                          <p className="font-terminal text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            {term.significance}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {tab === 'vocabulary' && (
            <div>
              {filteredVocabTerms.length === 0 ? (
                <p className="p-4 font-terminal text-sm text-gray-400 text-center">No terms found.</p>
              ) : (
                filteredVocabTerms.map(term => (
                  <div key={term.word} className="border-b border-gray-100 dark:border-gray-800">
                    <button
                      onClick={() => toggleExpand(term.word)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <span className="font-propaganda font-bold text-ministry-black dark:text-white text-sm uppercase tracking-wide">
                          {term.word}
                        </span>
                        <span className="font-terminal text-[10px] text-gray-400 uppercase tracking-widest ml-3">
                          {term.field}
                        </span>
                      </div>
                      <span className="text-gray-400 text-xs flex-shrink-0 ml-2">{expanded === term.word ? '▲' : '▼'}</span>
                    </button>
                    {expanded === term.word && (
                      <div className="px-4 pb-4 space-y-2">
                        <p className="font-terminal text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {term.definition}
                        </p>
                        <div className="border-l-2 border-gray-400 pl-3">
                          <p className="font-terminal text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            {term.connection}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Glossary;
