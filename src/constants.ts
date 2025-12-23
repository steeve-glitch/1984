import {
  Character,
  Scene,
  WritingTopic,
  MagicSentenceFocusArea,
  SemanticField,
  Theme,
  SymbolInfo,
} from './types';

export const APP_TITLE = "1984: The Interactive Guide";
export const AUTHOR_NAME = "George Orwell";

export const CHARACTERS: Character[] = [
  { name: 'Winston Smith', description: 'A minor member of the ruling Party who secretly hates Big Brother and dreams of rebellion. He works in the Ministry of Truth rewritng history.' },
  { name: 'Julia', description: 'Winston’s lover and a mechanic in the Fiction Department. She is a pragmatist who rebels for personal pleasure rather than political ideals.' },
  { name: 'O’Brien', description: 'A mysterious, powerful member of the Inner Party. Winston believes he is a member of the Brotherhood, but he is actually a loyal agent of the Party.' },
  { name: 'Big Brother', description: 'The perceived ruler of Oceania. He may not exist as a person, but his face is everywhere on posters with the caption "BIG BROTHER IS WATCHING YOU".' },
  { name: 'Tom Parsons', description: 'Winston’s neighbor and a dull, sweaty, unquestioning Party member. He is eventually denounced by his own daughter for thoughtcrime.' },
  { name: 'Syme', description: 'A philologist working on the Eleventh Edition of the Newspeak Dictionary. He is too intelligent for the Party’s liking and is eventually "vaporized".' },
  { name: 'Mr. Charrington', description: 'An old man who runs a junk shop in the prole district. He seems to offer a link to the past but is actually a member of the Thought Police.' },
  { name: 'Emmanuel Goldstein', description: 'The Enemy of the People. The legendary leader of the Brotherhood and the principal target of the Two Minutes Hate.' },
];

export const SYMBOLS: SymbolInfo[] = [
    { name: 'The Glass Paperweight', description: 'Represents Winston’s attempt to connect with a past that hasn’t been altered by the Party. It is fragile and beautiful, like his rebellion.'},
    { name: 'The Telescreen', description: 'The primary tool of surveillance and propaganda. It can never be fully turned off, representing the total lack of privacy in Oceania.'},
    { name: 'Big Brother Posters', description: 'A constant reminder of the Party’s power and surveillance. The eyes seem to follow you wherever you go.' },
    { name: 'The Red-Armed Prole Woman', description: 'A symbol of natural vitality and the potential future ("If there is hope, it lies in the proles"). She represents a life force the Party cannot kill.'},
    { name: 'Winston’s Diary', description: 'The first concrete act of rebellion. Writing defines the "individual" against the collective and attempts to preserve the truth.'},
];

export const THEMES: Theme[] = [
    { name: 'Totalitarianism', description: 'The absolute control of the state over every aspect of life, public and private. The Party seeks power entirely for its own sake.'},
    { name: 'Psychological Manipulation', description: 'The Party uses psychological tactics like "Doublethink" and "Newspeak" to break down the capacity for independent thought.'},
    { name: 'Control of Information', description: 'The Party constantly rewrites history ("Who controls the past controls the future") to maintain its infallibility and power.'},
    { name: 'Loyalty vs. Betrayal', description: 'The Party destroys private loyalties (family, love) and demands absolute love only for Big Brother.'},
];

export const SEMANTIC_FIELDS: SemanticField[] = [
  {
    id: 1,
    title: 'Oppression & Decay',
    description: "The language describing the physical world of 1984, which is gritty, smelling of cabbage, and decaying.",
    terms: [
      { word: 'gritty', definition: 'Containing or covered with grit; showing courage and resolve.', connection: "The dust and grit of London represents the physical decay of the world under Ingsoc." },
      { word: 'vile', definition: 'Extremely unpleasant.', connection: "The wind is described as 'vile', setting the hostile tone of the environment." },
      { word: 'cabbage', definition: 'A vegetable.', connection: "The pervasive smell of boiled cabbage represents the poverty and low quality of life for Outer Party members." },
      { word: 'gray', definition: 'A color intermediate between black and white.', connection: "Everything in Airstrip One is described in shades of gray, reflecting the lack of life and joy." },
      { word: 'concrete', definition: 'A heavy, rough building material.', connection: "The dominance of concrete architecture symbolizes the brutal, unfeeling nature of the Party." },
    ],
  },
  {
    id: 2,
    title: 'Party Ideology (Newspeak)',
    description: "The technical vocabulary of the Party designed to limit thought.",
    terms: [
      { word: 'Ingsoc', definition: 'English Socialism.', connection: "The political ideology of the Party." },
      { word: 'Doublethink', definition: 'The power of holding two contradictory beliefs in one\'s mind simultaneously.', connection: "Essential for Party members to accept the Party's lies while knowing the truth." },
      { word: 'Thoughtcrime', definition: 'The criminal act of holding unspoken beliefs that oppose or question the ruling party.', connection: "Winston's diary is the initial act of thoughtcrime." },
      { word: 'Unperson', definition: 'Someone who has been vaporized.', connection: "A person who has been erased from existence and history." },
      { word: 'Facecrime', definition: 'An improper expression on your face.', connection: "Even a look of anxiety can be interpreted as treason." },
    ],
  },
  {
    id: 3,
    title: 'Surveillance',
    description: "Words related to being watched and monitored.",
    terms: [
        { word: 'telescreen', definition: 'A device that transmits and receives simultaneously.', connection: 'The primary instrument of control, ensuring no one is ever truly alone.' },
        { word: 'scrutinized', definition: 'Examine or inspect closely and thoroughly.', connection: 'Winston feels constantly scrutinized by the eyes of Big Brother.' },
        { word: 'listening', definition: 'Give attention to sound.', connection: 'Even in the countryside, microphones might be listening.' },
        { word: 'police patrol', definition: 'Helicopters that snoop into windows.', connection: 'A physical reminder of the state\'s constant vigilance.' },
    ],
  }
];

export const SCENES: Scene[] = [
  {
    id: 'part1-chapter1',
    title: 'Chapter 1: The Diary',
    summary: "Winston Smith returns to his apartment in Victory Mansions on a cold April day. The hallway smells of boiled cabbage. He drinks some Victory Gin and, in a moment of rebellion, begins writing in a diary he bought at a junk shop. He writes 'DOWN WITH BIG BROTHER'. He recalls a movie he saw and an encounter with a dark-haired girl (Julia) and O'Brien at the Ministry.",
    themes: ['Totalitarianism', 'Surveillance'],
    semanticFieldId: 1, // Oppression & Decay
    stealData: { 
        characters: [
            { character: 'Winston Smith', categories: [
                { category: 'Actions', sentence: 'Winston writes "DOWN WITH BIG BROTHER," an act of ___ that could get him killed.', answer: 'Rebellion' },
                { category: 'Feelings', sentence: 'He feels a mix of terror and ___ as he starts the diary.', answer: 'Fatalism' },
            ]}
        ],
        options: ['Rebellion', 'Fatalism', 'Joy', 'Loyalty']
    },
    readingCompData: [
        {
            question: "What is the first thing Winston writes in his diary?",
            options: [
                { text: "A detailed account of his workday.", isCorrect: false, feedback: "He struggles to start writing initially." },
                { text: "A date: April 4th, 1984.", isCorrect: true },
                { text: "A letter to O'Brien.", isCorrect: false, feedback: "He thinks of O'Brien but doesn't write to him yet." },
                { text: "DOWN WITH BIG BROTHER.", isCorrect: false, feedback: "He writes this later, in a frenzy." },
            ],
            explanation: "The first thing he manages to write is the date, though he isn't even sure if it is actually 1984."
        }
    ],
    quote: "It was a bright cold day in April, and the clocks were striking thirteen.",
    gameData: { 
        prompts: [
            { text: "The name of the apartment building.", answer: 'Victory Mansions' },
            { text: "The drink Winston consumes.", answer: 'Victory Gin' },
        ],
        options: ['Victory Mansions', 'Victory Gin', 'Wine']
    },
    reflectionPrompt: 'Why is the simple act of writing a diary considered a crime punishable by death in this society?'
  },
  {
    id: 'part1-chapter2',
    title: 'Chapter 2: The Parsons',
    summary: "Winston is interrupted by a knock at the door. It is Mrs. Parsons, asking for help with a clogged drain. Her children, dressed in Junior Spies uniforms, play violently and accuse Winston of being a thought-criminal. Winston reflects on the horror of a society where children are trained to spy on their parents.",
    themes: ['Loyalty vs. Betrayal'],
    semanticFieldId: 2, // Party Ideology
    stealData: { 
        characters: [
            { character: 'Parsons Children', categories: [
                { category: 'Speech', sentence: 'The children yell "Traitor!" and "Thought-criminal!", showing their ___ indoctrination.', answer: 'Fanatical' },
                { category: 'Actions', sentence: 'They play with toy guns and want to see the hanging, revealing their ___ nature.', answer: 'Violent' },
            ]}
        ],
        options: ['Fanatical', 'Violent', 'Innocent', 'Playful']
    },
    readingCompData: [
        {
            question: "Why are Mrs. Parsons' children disappointed?",
            options: [
                { text: "They didn't get any chocolate.", isCorrect: false, feedback: "Chocolate rations are an issue, but not the specific disappointment here." },
                { text: "They missed the hanging of the Eurasian prisoners.", isCorrect: true },
                { text: "Winston couldn't fix the sink.", isCorrect: false, feedback: "Winston successfully fixes the sink." },
                { text: "Their father isn't home.", isCorrect: false, feedback: "They are busy playing 'Spies'." },
            ],
            explanation: "The children are upset because they weren't taken to see the public execution (hanging) of war prisoners, a popular entertainment in Oceania."
        }
    ],
    quote: "It was almost normal for people over thirty to be frightened of their own children.",
    gameData: { 
        prompts: [
            { text: "The youth organization the children belong to.", answer: 'The Spies' },
            { text: "What Mrs. Parsons needs help with.", answer: 'The sink' },
        ],
        options: ['The Spies', 'The sink', 'The TV']
    },
    reflectionPrompt: "How does the Party use children as tools of surveillance? What does this do to the family unit?"
  },
  {
    id: 'part1-chapter3',
    title: 'Chapter 3: Dreams & Reality',
    summary: "Winston dreams of his mother and sister drowning while he survives, realizing their death was a sacrifice for him. He then dreams of the 'Golden Country' and the dark-haired girl. He wakes up to the 'Physical Jerks' exercise program on the telescreen and struggles to touch his toes while reflecting on the Party's falsification of the past.",
    themes: ['Control of Information', 'Psychological Manipulation'],
    semanticFieldId: 3, // Surveillance
    stealData: { 
        characters: [
            { character: 'Winston Smith', categories: [
                { category: 'Thoughts', sentence: 'Winston realizes his mother’s death belongs to a time when ___ still existed.', answer: 'Privacy' },
                { category: 'Actions', sentence: 'He pushes himself to touch his toes during the Physical Jerks to avoid being ___ by the instructor.', answer: 'Scolded' },
            ]}
        ],
        options: ['Privacy', 'Scolded', 'Technology', 'Praised']
    },
    readingCompData: [
        {
            question: "What is the 'Golden Country'?",
            options: [
                { text: "A place where gold is mined.", isCorrect: false, feedback: "It's not about wealth." },
                { text: "The headquarters of the Inner Party.", isCorrect: false, feedback: "It's the opposite of the Party's world." },
                { text: "A recurring landscape in Winston's dreams representing freedom.", isCorrect: true },
                { text: "The name of the country Oceania is at war with.", isCorrect: false, feedback: "That's Eurasia or Eastasia." },
            ],
            explanation: "The Golden Country is a pastoral landscape Winston dreams of, symbolizing a natural, free world untouched by the Party."
        }
    ],
    quote: "Who controls the past controls the future: who controls the present controls the past.",
    gameData: { 
        prompts: [
            { text: "The name of the exercise routine.", answer: 'Physical Jerks' },
            { text: "The landscape in Winston's dream.", answer: 'Golden Country' },
        ],
        options: ['Physical Jerks', 'Golden Country', 'Gym Class']
    },
    reflectionPrompt: "Winston reflects that 'tragedy... belonged to an ancient time.' Why does he believe tragedy is impossible in the world of 1984?"
  },
  {
    id: 'part1-chapter4',
    title: 'Chapter 4: The Memory Hole',
    summary: "Winston is at work in the Records Department of the Ministry of Truth. His job is to rewrite past newspaper articles to ensure they match the Party's current narrative. He invents a hero named 'Comrade Ogilvy' to replace a vaporized person in the records. This demonstrates the mutability of the past.",
    themes: ['Control of Information'],
    semanticFieldId: 2, // Party Ideology
    stealData: { 
        characters: [
            { character: 'Winston Smith', categories: [
                { category: 'Actions', sentence: 'Winston creates "Comrade Ogilvy," a completely ___ person, to rewrite history.', answer: 'Fictional' },
                { category: 'Thoughts', sentence: 'He takes professional pride in his work, even though it involves ___ the truth.', answer: 'Destroying' },
            ]}
        ],
        options: ['Fictional', 'Destroying', 'Real', 'Preserving']
    },
    readingCompData: [
        {
            question: "What is a 'memory hole'?",
            options: [
                { text: "A mental condition caused by gin.", isCorrect: false, feedback: "No, it's a physical object." },
                { text: "A slit in the wall for destroying documents.", isCorrect: true },
                { text: "A place to store old diaries.", isCorrect: false, feedback: "Diaries are forbidden." },
                { text: "A torture device.", isCorrect: false, feedback: "Not this specific item." },
            ],
            explanation: "Memory holes are slits in the walls of the Ministry connected to incinerators, used to destroy any evidence that contradicts the Party."
        }
    ],
    quote: "Comrade Ogilvy, who had never existed in the present, now existed in the past, and when once the act of forgery was forgotten, he would exist just as authentically, and upon the same evidence, as Charlemagne or Julius Caesar.",
    gameData: { 
        prompts: [
            { text: "Winston's workplace.", answer: 'Ministry of Truth' },
            { text: "The fictitious hero Winston creates.", answer: 'Comrade Ogilvy' },
        ],
        options: ['Ministry of Truth', 'Comrade Ogilvy', 'Ministry of Love']
    },
    reflectionPrompt: "If the past can be completely rewritten, does objective truth exist? How does this relate to the concept of 'Doublethink'?"
  },
  {
    id: 'part1-chapter5',
    title: 'Chapter 5: Syme & Newspeak',
    summary: "Winston eats lunch in the canteen with Syme, a philologist working on the Newspeak dictionary. Syme speaks passionately about destroying words to narrow the range of thought. Winston realizes Syme is too intelligent and will eventually be vaporized. Parsons also joins them, bragging about his children tracking a 'foreigner'.",
    themes: ['Psychological Manipulation'],
    semanticFieldId: 2, // Party Ideology
    stealData: { 
        characters: [
            { character: 'Syme', categories: [
                { category: 'Speech', sentence: 'Syme claims that the whole aim of Newspeak is to narrow the range of ___ .', answer: 'Thought' },
                { category: 'Fate', sentence: 'Winston predicts Syme will be ___ because he sees too clearly.', answer: 'Vaporized' },
            ]}
        ],
        options: ['Thought', 'Vaporized', 'Speech', 'Promoted']
    },
    readingCompData: [
        {
            question: "What is the ultimate goal of Newspeak according to Syme?",
            options: [
                { text: "To make English more beautiful.", isCorrect: false, feedback: "Syme hates the messiness of Oldspeak." },
                { text: "To make thoughtcrime literally impossible.", isCorrect: true },
                { text: "To help people communicate faster.", isCorrect: false, feedback: "Speed is not the primary goal." },
                { text: "To translate foreign languages.", isCorrect: false, feedback: "It is for internal control." },
            ],
            explanation: "Syme explains that by destroying words, they remove the concepts required to commit thoughtcrime. If there is no word for 'freedom', the concept cannot exist."
        }
    ],
    quote: "Don't you see that the whole aim of Newspeak is to narrow the range of thought? In the end we shall make thoughtcrime literally impossible, because there will be no words in which to express it.",
    gameData: { 
        prompts: [
            { text: "The language being developed.", answer: 'Newspeak' },
            { text: "What Syme destroys.", answer: 'Words' },
        ],
        options: ['Newspeak', 'Words', 'Books']
    },
    reflectionPrompt: "How does language shape the way we think? If we lose the words to describe an idea (like 'freedom'), do we lose the idea itself?"
  }
];

export const WRITING_TOPICS: WritingTopic[] = [
  {
    id: '1',
    title: 'The Power of Surveillance',
    description: "Analyze how the constant surveillance (telescreens, children) affects the behavior of the characters.",
    techniques: ['Atmosphere', 'Paranoia', 'Self-Censorship'],
    textEvidence: [
        "BIG BROTHER IS WATCHING YOU.",
        "It was almost normal for people over thirty to be frightened of their own children.",
        "Winston kept his back turned to the telescreen.",
    ],
  },
  {
    id: '2',
    title: 'Newspeak and Thought Control',
    description: 'Discuss Syme’s claim that Newspeak will make thoughtcrime impossible.',
    techniques: ['Linguistic Determinism', 'Irony', 'Dystopian Logic'],
    textEvidence: [
        "We're destroying words—scores of them, hundreds of them, every day.",
        "The whole aim of Newspeak is to narrow the range of thought.",
        "Orthodoxy is unconsciousness.",
    ],
  },
  {
    id: '3',
    title: 'Truth and the Mutability of the Past',
    description: "Examine the significance of Winston's job at the Ministry of Truth.",
    techniques: ['Paradox', 'Symbolism (Memory Hole)', 'Propaganda'],
    textEvidence: [
        "Who controls the past controls the future.",
        "Comrade Ogilvy... now existed in the past.",
        "And if all others accepted the lie which the Party imposed... then the lie passed into history and became truth.",
    ]
  },
];

export const MAGIC_SENTENCE_FOCUS_AREAS: MagicSentenceFocusArea[] = [
  {
    title: 'The Power of Surveillance',
    techniques: ['Atmosphere', 'Paranoia', 'Self-Censorship'],
    textEvidence: [
        "BIG BROTHER IS WATCHING YOU.",
        "Winston kept his back turned to the telescreen.",
    ],
    modelSentences: [
        "Orwell establishes an atmosphere of relentless paranoia through the omnipresent symbol of the telescreen.",
        "By depicting Winston's instinctive fear of his own facial expressions, Orwell illustrates the psychological toll of total surveillance."
    ],
  },
  {
    title: 'Newspeak and Thought Control',
    techniques: ['Linguistic Determinism', 'Irony', 'Dystopian Logic'],
    textEvidence: [
        "The whole aim of Newspeak is to narrow the range of thought.",
        "Orthodoxy is unconsciousness.",
    ],
    modelSentences: [
        "Through Syme's fanatical explanation of Newspeak, Orwell explores the terrifying concept that limiting language can limit human consciousness.",
        "Orwell uses the irony of the 'Ministry of Truth' to highlight the Party's absolute control over reality."
    ],
  }
];
