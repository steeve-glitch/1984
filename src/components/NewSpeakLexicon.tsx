import React, { useState, useRef } from 'react';

interface NewSpeakLexiconProps {
    onComplete: () => void;
}

interface TextSegment {
    text: string;
    redacted?: boolean;
    id?: number;
    hint?: string;
}

type DocumentSection = {
    heading?: string;
    segments: TextSegment[];
};

const DOCUMENT_SECTIONS: DocumentSection[] = [
    {
        segments: [
            { text: 'Newspeak was the official language of Oceania and had been devised to meet the ideological needs of ' },
            { text: 'Ingsoc', redacted: true, id: 0, hint: 'English Socialism — the ruling ideology of Oceania' },
            { text: '. In the year 1984 there was not as yet anyone who used Newspeak as his sole means of communication, either in speech or writing. The leading articles in ' },
            { text: 'The Times', redacted: false },
            { text: ' were written in it, but this was a tour de force which could only be carried out by a specialist. It was expected that Newspeak would have finally superseded Oldspeak (or Standard English, as we should call it) by about the year ' },
            { text: '2050', redacted: true, id: 1, hint: 'The projected year when Newspeak would fully replace English' },
            { text: '.' },
        ]
    },
    {
        segments: [
            { text: 'The purpose of Newspeak was not only to provide a medium of expression for the world-view and mental habits proper to the devotees of ' },
            { text: 'Ingsoc', redacted: true, id: 2, hint: 'English Socialism' },
            { text: ', but to make all other modes of thought ' },
            { text: 'impossible', redacted: true, id: 3, hint: 'The most chilling word in the Appendix — not merely difficult, but impossible' },
            { text: '. It was intended that when Newspeak had been adopted once and for all and Oldspeak forgotten, a heretical thought — that is, a thought diverging from the principles of ' },
            { text: 'Ingsoc', redacted: true, id: 4, hint: 'English Socialism' },
            { text: ' — should be literally ' },
            { text: 'unthinkable', redacted: true, id: 5, hint: 'Connect this to Syme\'s line: "Every concept that can ever be needed will be expressed by exactly one word."' },
            { text: ', at least so far as thought is dependent on words.' },
        ]
    },
    {
        heading: 'VOCABULARY A',
        segments: [
            { text: 'The A vocabulary consisted of the words needed for the business of everyday life — for such things as eating, drinking, working, putting on one\'s clothes, going up and down stairs, riding in vehicles, gardening, cooking, and the like. It was composed almost entirely of words that we already possess — words like ' },
            { text: 'hit, run, dog, tree, house, field', redacted: false },
            { text: ' — but in comparison with the present-day English vocabulary their number was extremely small, while their meanings were far more ' },
            { text: 'rigidly defined', redacted: true, id: 6, hint: 'Rigid definition eliminates ambiguity — and ambiguity is where independent thought lives' },
            { text: '. All ambiguities and shades of meaning had been purged out of them. So far as it could be achieved, a Newspeak word of this class was simply a staccato sound expressing ' },
            { text: 'one clearly understood concept', redacted: true, id: 7, hint: 'One word, one concept — the grammar of a controlled mind' },
            { text: '.' },
        ]
    },
    {
        heading: 'VOCABULARY B',
        segments: [
            { text: 'The B vocabulary consisted of words which had been deliberately constructed for political purposes: words, that is to say, which not only had in every case a political implication, but were intended to impose a desirable mental attitude upon the person using them. Without a full understanding of the principles of ' },
            { text: 'Ingsoc', redacted: true, id: 8, hint: 'English Socialism' },
            { text: ' it was difficult to use these words correctly. In some cases they could be translated into Oldspeak, or even into words taken from the A vocabulary, but this usually demanded a long paraphrase and always involved the loss of certain ' },
            { text: 'overtones', redacted: true, id: 9, hint: 'The "overtones" that Newspeak words carry are specifically designed to produce emotional compliance, not merely communication' },
            { text: '. The B words were a sort of verbal shorthand, often packing whole ranges of ideas into a few syllables, and at the same time more accurate and forcible than ordinary language.' },
        ]
    },
    {
        segments: [
            { text: 'The word ' },
            { text: 'goodthink', redacted: false },
            { text: ', for instance, meant, very roughly, "orthodoxy", or, if one chose to regard it as a verb, "to think in an orthodox manner". This inflected as follows: noun-verb, ' },
            { text: 'goodthink', redacted: false },
            { text: '; past tense and past participle, ' },
            { text: 'goodthinked', redacted: false },
            { text: '; present participle, ' },
            { text: 'goodthinking', redacted: false },
            { text: '; adjective, ' },
            { text: 'goodthinkful', redacted: false },
            { text: '; adverb, ' },
            { text: 'goodthinkwise', redacted: false },
            { text: '; verbal noun, ' },
            { text: 'goodthinker', redacted: false },
            { text: '. The B words were not constructed on any etymological plan. The words of which they were made up could be any parts of speech, and could be placed in any order and mutilated in any way which made them easy to pronounce while indicating their derivation.' },
        ]
    },
    {
        heading: 'VOCABULARY C',
        segments: [
            { text: 'The C vocabulary was supplementary to the others and consisted entirely of scientific and technical terms. These resembled the scientific terms in use today, and were constructed from the same roots, but the usual care was taken to define them rigidly and strip them of ' },
            { text: 'undesirable meanings', redacted: true, id: 10, hint: 'Any meaning that could suggest individual judgement or ethical evaluation was "undesirable"' },
            { text: '. They followed the same grammatical rules as the words in the other two vocabularies. Very few of the C words had any currency either in everyday speech or in political speech. Any scientific worker or technician could find all the words he needed in the list devoted to his own speciality, but he seldom had more than a smattering of the words occurring in the other lists. Only a very few words were common to all lists.' },
        ]
    },
    {
        heading: 'THE GRAMMAR OF NEWSPEAK',
        segments: [
            { text: 'Newspeak grammar had two outstanding peculiarities. The first of these was an almost complete ' },
            { text: 'interchangeability between different parts of speech', redacted: true, id: 11, hint: 'Any word could function as noun, verb, adjective, or adverb — this destroys the distinctions language uses to build complex thought' },
            { text: '. Any word in the language (in principle this applied even to very abstract words such as ' },
            { text: 'if', redacted: false },
            { text: ' or ' },
            { text: 'when', redacted: false },
            { text: ') could be used either as verb, noun, adjective, or adverb. Between the verb and the noun form, when they were of the same root, there was never any variation, this rule of itself involving the destruction of many archaic forms. The word ' },
            { text: 'thought', redacted: true, id: 12, hint: 'The destruction of "thought" as a distinct noun is central — if "think" and "thought" are the same word, the permanence and weight of thinking is erased' },
            { text: ', for example, did not exist in Newspeak. Its place was taken by ' },
            { text: 'think', redacted: false },
            { text: ', which did duty for both noun and verb.' },
        ]
    },
    {
        segments: [
            { text: 'The second distinguishing mark of Newspeak grammar was its regularity. Subject to a few exceptions which are mentioned below, all inflections followed the same rules. Thus, in all verbs the preterite and the past participle were the same and ended in ' },
            { text: '-ed', redacted: false },
            { text: '. The preterite of ' },
            { text: 'steal', redacted: false },
            { text: ' was ' },
            { text: 'stealed', redacted: false },
            { text: ', the preterite of ' },
            { text: 'think', redacted: false },
            { text: ' was ' },
            { text: 'thinked', redacted: false },
            { text: ', and so on throughout the language, all such forms as ' },
            { text: 'swam, gave, brought, spoke, taken', redacted: true, id: 13, hint: 'Irregular verbs carry the fossil record of a language\'s history. Eliminating them severs speakers from the past.' },
            { text: ', and the like, being abolished. All plurals were made by adding ' },
            { text: '-s', redacted: false },
            { text: ' or ' },
            { text: '-es', redacted: false },
            { text: ' as the case demanded.' },
        ]
    },
];

const AnalystCallout: React.FC = () => (
    <div className="border-2 border-party-red bg-red-50 dark:bg-red-900/10 p-6 mt-8">
        <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">◉</span>
            <div>
                <h4 className="font-propaganda font-bold uppercase text-party-red text-sm tracking-widest mb-2">
                    Analyst's Note — Read carefully
                </h4>
                <p className="font-terminal text-sm text-ministry-black dark:text-gray-200 mb-3">
                    You have just read a document written in the <strong>past tense</strong>.
                    Re-read the opening sentence: <em>"Newspeak <strong>was</strong> the official language of Oceania."</em>
                </p>
                <p className="font-terminal text-sm text-gray-600 dark:text-gray-400 mb-3">
                    The Appendix is written from the perspective of a future scholar, looking back. This means that at the time of writing,
                    Oceania no longer exists. The Party fell. Winston's story ends in apparent defeat —
                    yet Orwell hides the seeds of hope in a grammatical tense that most readers never notice.
                </p>
                <p className="font-terminal text-sm text-gray-600 dark:text-gray-400">
                    Consider how Orwell's structural choice to include this Appendix
                    functions as an act of resistance against the very totalitarianism the novel depicts.
                    The idea of language as an instrument of power finds its most
                    subversive expression not in the main narrative, but in its footnote.
                </p>
            </div>
        </div>
    </div>
);

const NewSpeakLexicon: React.FC<NewSpeakLexiconProps> = ({ onComplete }) => {
    const [revealed, setRevealed] = useState<Set<number>>(new Set());
    const bottomRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleReveal = (id: number) => {
        setRevealed(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const revealedCount = revealed.size;
    const totalRedacted = DOCUMENT_SECTIONS.flatMap(s => s.segments).filter(s => s.redacted && s.id !== undefined).length;

    return (
        <div className="space-y-6">
            {/* Header */}
            <header className="text-center space-y-2">
                <div className="inline-block border-2 border-party-red px-4 py-1 mb-2">
                    <span className="text-[10px] font-terminal text-party-red uppercase tracking-widest">
                        RECOVERED DOCUMENT // RESEARCH BUREAU OF NEWSPEAK // CLASSIFICATION: [REDACTED]
                    </span>
                </div>
                <h2 className="text-3xl font-bold text-ministry-black dark:text-white uppercase font-propaganda tracking-wider">
                    The Principles of Newspeak
                </h2>
                <p className="text-dystopia-gray dark:text-gray-400 font-terminal text-sm">
                    Appendix to <em>Nineteen Eighty-Four</em> — George Orwell
                </p>
            </header>

            {/* Redaction counter */}
            <div className="flex items-center justify-between bg-ministry-black text-white px-4 py-2 font-terminal text-xs uppercase tracking-widest">
                <span>REDACTED SEGMENTS: {totalRedacted - revealedCount} / {totalRedacted}</span>
                <span className="text-party-red">CLICK BLACK BARS TO DECLASSIFY</span>
            </div>

            {/* Document body */}
            <div
                ref={containerRef}
                className="bg-paper-white dark:bg-gray-800 border-2 border-black dark:border-gray-600 p-6 md:p-10 font-terminal text-sm leading-relaxed text-gray-800 dark:text-gray-200 max-h-[60vh] overflow-y-auto space-y-6"
            >
                {DOCUMENT_SECTIONS.map((section, si) => (
                    <div key={si}>
                        {section.heading && (
                            <h3 className="font-propaganda font-bold uppercase tracking-widest text-party-red text-xs mb-3 border-b border-party-red pb-1">
                                {section.heading}
                            </h3>
                        )}
                        <p className="leading-7">
                            {section.segments.map((seg, i) => {
                                if (!seg.redacted) {
                                    return <span key={i}>{seg.text}</span>;
                                }
                                const isRevealed = revealed.has(seg.id!);
                                return (
                                    <span key={i} className="inline relative group">
                                        <button
                                            onClick={() => toggleReveal(seg.id!)}
                                            title={isRevealed ? 'Click to re-redact' : seg.hint}
                                            className={`
                                                inline cursor-pointer transition-all duration-200 rounded-sm
                                                ${isRevealed
                                                    ? 'bg-yellow-200 dark:bg-yellow-800 text-ministry-black dark:text-yellow-100 px-1'
                                                    : 'bg-ministry-black text-ministry-black select-none hover:bg-gray-700 px-1'
                                                }
                                            `}
                                        >
                                            {isRevealed ? seg.text : '█'.repeat(Math.max(4, seg.text.length))}
                                        </button>
                                        {!isRevealed && (
                                            <span className="absolute bottom-full left-0 mb-1 hidden group-hover:block bg-party-red text-white text-[10px] px-2 py-1 whitespace-nowrap z-10 pointer-events-none">
                                                DECLASSIFY
                                            </span>
                                        )}
                                    </span>
                                );
                            })}
                        </p>
                    </div>
                ))}

                <AnalystCallout />
                <div ref={bottomRef} />
            </div>

            {/* Progress + complete */}
            <div className="flex items-center justify-between">
                <div className="font-terminal text-xs text-gray-500 dark:text-gray-400">
                    {revealedCount < totalRedacted
                        ? `${revealedCount} of ${totalRedacted} segments declassified`
                        : <span className="text-green-600 font-bold">ALL SEGMENTS DECLASSIFIED</span>
                    }
                </div>
                <button
                    onClick={onComplete}
                    className="px-6 py-3 bg-party-red text-white font-bold font-propaganda uppercase tracking-widest text-sm hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    Module Complete →
                </button>
            </div>
        </div>
    );
};

export default NewSpeakLexicon;
