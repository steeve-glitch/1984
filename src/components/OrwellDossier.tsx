import React, { useState, useRef, useEffect, FC } from 'react';

interface DossierSection {
  id: string;
  heading: string;
  content: React.ReactNode;
}

interface OrwellDossierProps {
  onComplete: () => void;
}

const OrwellDossier: FC<OrwellDossierProps> = ({ onComplete }) => {
  const [unlockedCount, setUnlockedCount] = useState(1);
  const [hasScrolled, setHasScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handle = () => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 80) {
        setHasScrolled(true);
      }
    };
    el.addEventListener('scroll', handle);
    return () => el.removeEventListener('scroll', handle);
  }, []);

  const SECTIONS: DossierSection[] = [
    {
      id: 'blair',
      heading: 'Subject: Eric Arthur Blair',
      content: (
        <div className="space-y-3 font-terminal text-sm leading-7 text-gray-800 dark:text-gray-200">
          <p>
            George Orwell is a pen name. The author's real name was <strong>Eric Arthur Blair</strong>, born 1903 in Motihari,
            Bengal (then British India), and died January 1950 in London — less than a year after the publication of <em>Nineteen Eighty-Four</em>.
            He was 46 years old.
          </p>
          <p>
            Blair adopted the name "Orwell" for his first book to protect his family from embarrassment — the book,
            <em> Down and Out in Paris and London</em> (1933), described his years living in poverty, working as a dishwasher,
            and sleeping in doss-houses. He was an Eton-educated man writing about homelessness. The pen name was a practical shield.
          </p>
          <div className="border-l-2 border-party-red pl-4 py-1">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <strong>Why this matters to the novel:</strong> Orwell understood poverty and institutional power from the inside.
              He did not theorise about the crushing effect of systems on individuals — he had lived it.
              Winston Smith's grey, thin, vitamin-deficient existence is not speculation. It is memory.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'spain',
      heading: 'Critical Event: The Spanish Civil War (1936–39)',
      content: (
        <div className="space-y-3 font-terminal text-sm leading-7 text-gray-800 dark:text-gray-200">
          <p>
            In December 1936, Orwell travelled to Spain to fight against Franco's fascists on behalf of the Republic.
            He fought with the POUM — a small Marxist militia — and was shot through the throat by a sniper in May 1937.
            He survived. What happened next changed the way he thought about politics forever.
          </p>
          <p>
            While he was recovering, the Communist Party (following orders from Stalin's Moscow) turned on the non-Stalinist
            left — including the POUM. Orwell watched people he had fought beside arrested on fabricated charges.
            He watched the newspapers in Britain report events that had not happened, while refusing to report events that had.
            He watched history being rewritten in real time.
          </p>
          <div className="border-l-2 border-party-red pl-4 py-1">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <strong>Why this matters to the novel:</strong> The Ministry of Truth is not a thought experiment. Orwell saw
              it functioning in Barcelona in 1937. The falsification of the past, the show trials, the party that could
              make its loyal members disappear and reappear in history as enemies — he witnessed all of it. He wrote about
              it in <em>Homage to Catalonia</em> (1938). He spent the next decade working out what it meant.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'bbc',
      heading: 'The BBC Years (1941–43)',
      content: (
        <div className="space-y-3 font-terminal text-sm leading-7 text-gray-800 dark:text-gray-200">
          <p>
            During the Second World War, Orwell worked as a producer and broadcaster for the BBC's Eastern Service —
            producing propaganda programmes aimed at India. He resigned in 1943, describing his work as
            "an almost complete waste of time." His resignation letter said: "I am not suited for producing the type of
            thing required."
          </p>
          <p>
            The BBC's headquarters at the time was 200 Oxford Street, a converted shop. Orwell described it as a place
            where the food was bad, the atmosphere was bureaucratic, and where he spent his days writing words that he
            knew would have minimal effect. He called it, privately, the Ministry of Truth.
          </p>
          <div className="border-l-2 border-party-red pl-4 py-1">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <strong>Why this matters to the novel:</strong> The architecture, atmosphere, and institutional logic of
              the Ministry of Truth — including the canteen, the pneumatic tubes, the sense of purposeful futility —
              are drawn directly from Orwell's BBC experience. Winston's job is Orwell's job, rendered dystopian.
              The key difference: in Oceania, there is no resignation letter.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'context',
      heading: 'The World of 1948',
      content: (
        <div className="space-y-3 font-terminal text-sm leading-7 text-gray-800 dark:text-gray-200">
          <p>
            Orwell wrote <em>Nineteen Eighty-Four</em> between 1947 and 1948, while dying of tuberculosis on the remote
            Scottish island of Jura. The world he was looking at as he wrote was one of the most frightening in recorded
            history:
          </p>
          <ul className="list-none space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-party-red mt-1 flex-shrink-0">▸</span>
              <span><strong>Stalin's USSR:</strong> show trials, the Gulag, engineered famines, and a cult of personality
              that made Big Brother's face on every wall seem barely exaggerated.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-party-red mt-1 flex-shrink-0">▸</span>
              <span><strong>Nazi Germany</strong> had just fallen — but Orwell had watched Western intellectuals make
              excuses for it for years. He was writing for people who had proved capable of not noticing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-party-red mt-1 flex-shrink-0">▸</span>
              <span><strong>The Cold War</strong> was beginning. The world was dividing into superpowers with opposing
              ideologies and nuclear weapons. Perpetual war — or the permanent threat of it — was becoming normal.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-party-red mt-1 flex-shrink-0">▸</span>
              <span><strong>The atomic bomb</strong> had been used. The scale of destruction now possible was
              unimaginable to previous generations. Orwell understood that this created a new kind of stability:
              powers that could annihilate each other had an interest in permanent stalemate.</span>
            </li>
          </ul>
          <div className="border-l-2 border-party-red pl-4 py-1">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <strong>Why this matters to the novel:</strong> The title <em>1984</em> is an inversion of 1948 — the year
              of the final draft. Orwell was not writing science fiction. He was writing about the direction he saw the
              world moving and asking: if this goes on, where does it end? The novel is a warning, not a prediction.
              The distinction matters.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'writing',
      heading: 'The Writing of the Novel',
      content: (
        <div className="space-y-3 font-terminal text-sm leading-7 text-gray-800 dark:text-gray-200">
          <p>
            Orwell began the novel in 1947 on Jura, a Scottish island accessible only by unreliable ferry, with no
            central heating and no telephone. He was already seriously ill with tuberculosis — a condition worsened by
            the damp and cold. His friends and doctors urged him to stop writing and rest. He refused.
          </p>
          <p>
            He finished the first draft in November 1948 and revised it in a sanatorium. The book was published in
            June 1949. Orwell died in January 1950. The novel sold out its first printing within days.
          </p>
          <p>
            Orwell knew he was dying while writing it. The urgency in the novel — the sense that something important
            must be said before it is too late — is not just Winston's. It is also the author's.
          </p>
          <div className="border-l-2 border-party-red pl-4 py-1">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <strong>A note on reading:</strong> Orwell was not a pessimist by instinct — he loved cricket, pubs,
              and the English countryside. He believed in common decency and hated intellectual cruelty.
              <em> Nineteen Eighty-Four</em> is not a celebration of despair. It is the most urgent warning a dying man
              could write. He hoped to be wrong.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const visibleSections = SECTIONS.slice(0, unlockedCount);
  const hasMore = unlockedCount < SECTIONS.length;
  const allUnlocked = unlockedCount >= SECTIONS.length;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <header className="text-center space-y-2">
        <div className="inline-block border-2 border-party-red px-4 py-1 mb-2">
          <span className="text-[10px] font-terminal text-party-red uppercase tracking-widest">
            CLASSIFICATION: CLEARANCE LEVEL 4 // HANDLE WITH CARE
          </span>
        </div>
        <h2 className="text-3xl font-bold text-ministry-black dark:text-white uppercase font-propaganda tracking-wider">
          The Orwell Dossier
        </h2>
        <p className="text-dystopia-gray dark:text-gray-400 font-terminal text-sm">
          Biographical and historical context — connected to the text.
          Read this before beginning Part 1.
        </p>
      </header>

      {/* Sections */}
      <div
        ref={containerRef}
        className="space-y-0 max-h-[65vh] overflow-y-auto border-2 border-black dark:border-gray-600"
      >
        {visibleSections.map((section, i) => (
          <div
            key={section.id}
            className={`border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${
              i === visibleSections.length - 1 ? 'animate-fade-in' : ''
            }`}
          >
            <div className="bg-ministry-black px-5 py-3">
              <h3 className="font-propaganda font-bold uppercase text-white text-xs tracking-widest">
                {section.heading}
              </h3>
            </div>
            <div className="bg-white dark:bg-gray-800 px-5 py-5">
              {section.content}
            </div>
          </div>
        ))}

        {/* Unlock next section */}
        {hasMore && (
          <div className="bg-gray-50 dark:bg-gray-900 px-5 py-5 flex items-center justify-between">
            <p className="font-terminal text-xs text-gray-500 uppercase tracking-widest">
              {SECTIONS.length - unlockedCount} section{SECTIONS.length - unlockedCount !== 1 ? 's' : ''} remaining
            </p>
            <button
              onClick={() => setUnlockedCount(c => c + 1)}
              className="px-4 py-2 border-2 border-black dark:border-gray-500 font-terminal text-xs uppercase tracking-widest text-ministry-black dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Continue Reading ▼
            </button>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Completion */}
      {allUnlocked && (
        <div className="flex items-center justify-between">
          <p className="font-terminal text-xs text-gray-500 dark:text-gray-400">
            All sections read. You are ready to begin Part 1.
          </p>
          <button
            onClick={onComplete}
            className="px-6 py-3 bg-party-red text-white font-bold font-propaganda uppercase tracking-widest text-sm hover:bg-red-700 transition-colors"
          >
            Begin Part 1 →
          </button>
        </div>
      )}
    </div>
  );
};

export default OrwellDossier;
