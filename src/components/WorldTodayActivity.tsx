import React, { useState, FC } from 'react';
import { WorldTodayData } from '../types';

interface Props {
  data: WorldTodayData;
  onComplete: () => void;
}

const WorldTodayActivity: FC<Props> = ({ data, onComplete }) => {
  const [response, setResponse] = useState('');
  const [showSamples, setShowSamples] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="space-y-6">
        <div className="border-2 border-green-600 bg-green-50 dark:bg-green-900/10 p-5">
          <p className="font-propaganda font-bold uppercase text-green-700 dark:text-green-400 tracking-wider text-sm mb-2">
            Response recorded
          </p>
          <p className="font-terminal text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {response}
          </p>
        </div>
        <p className="font-terminal text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Making these connections is one of the most important things you can do with a literary text.
          Orwell was writing about the world he saw in 1948 — the question of how much has changed,
          and how much hasn't, is worth carrying into every chapter.
        </p>
        <div className="flex justify-end">
          <button
            onClick={onComplete}
            className="px-6 py-3 bg-party-red text-white font-bold font-propaganda uppercase tracking-widest text-sm hover:bg-red-700 transition-colors"
          >
            Continue →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="border-l-4 border-party-red pl-5">
        <p className="font-terminal text-[10px] uppercase tracking-widest text-gray-400 mb-2">The World Today</p>
        <p className="font-terminal text-base text-ministry-black dark:text-white leading-relaxed font-bold">
          {data.question}
        </p>
      </div>

      {/* Sample responses */}
      <div>
        <button
          onClick={() => setShowSamples(v => !v)}
          className="flex items-center gap-2 font-terminal text-xs uppercase tracking-widest text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors mb-3"
        >
          <span>{showSamples ? '▼' : '▶'}</span>
          <span>Example responses — read these to spark ideas, then write your own</span>
        </button>

        {showSamples && (
          <div className="space-y-3">
            {data.sampleResponses.map((sample, i) => (
              <div
                key={i}
                className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4"
              >
                <p className="font-terminal text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                  Example {i + 1}
                </p>
                <p className="font-terminal text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {sample}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Response */}
      <div className="space-y-2">
        <label className="font-terminal text-[10px] uppercase tracking-widest text-gray-500">
          Your response — where do you see this in the world today?
        </label>
        <textarea
          value={response}
          onChange={e => setResponse(e.target.value)}
          placeholder="Write your own connection here. It doesn't need to be long — a specific, concrete example is better than a general statement."
          rows={5}
          className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 font-terminal text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-party-red resize-none"
        />
        <p className="font-terminal text-[10px] text-gray-400">
          There is no right answer here. A specific, honest response is more valuable than an impressive-sounding one.
        </p>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={response.trim().length < 10}
          className="px-6 py-3 bg-party-red text-white font-bold font-propaganda uppercase tracking-widest text-sm hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Submit Response →
        </button>
      </div>
    </div>
  );
};

export default WorldTodayActivity;
