import {
  Character,
  Scene,
  WritingTopic,
  MagicSentenceFocusArea,
  SemanticField,
  Theme,
  SymbolInfo,
  DoublethinkGameData,
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
  },
  {
    id: 4,
    title: 'Love & Rebellion',
    description: "The vocabulary of forbidden human connection and private resistance against the Party.",
    terms: [
      { word: 'desire', definition: 'A strong feeling of wanting something or wishing for something to happen.', connection: "Personal desire—for love, pleasure, or freedom—is the ultimate act of rebellion against the Party's control." },
      { word: 'corrupt', definition: 'Morally contaminated; to cause to act dishonestly.', connection: "Julia describes herself as 'corrupt to the bones,' meaning she embraces natural human impulses the Party forbids." },
      { word: 'private', definition: 'Belonging to or for the use of one particular person; not public.', connection: "Privacy is the first casualty of totalitarianism; Winston and Julia's room represents stolen privacy." },
      { word: 'instinct', definition: 'An innate pattern of behavior; a natural impulse.', connection: "The Party seeks to destroy instinct and replace it with orthodoxy; Julia's rebellion is instinctive." },
      { word: 'saccharine', definition: 'A synthetic sweetener; excessively sweet or sentimental.', connection: "The saccharine tablets Winston uses represent the synthetic, joyless substitutes the Party provides." },
    ],
  },
  {
    id: 5,
    title: 'Conspiracy & The Brotherhood',
    description: "Language associated with underground resistance and secret organizations.",
    terms: [
      { word: 'conspiracy', definition: 'A secret plan by a group to do something unlawful or harmful.', connection: "The Brotherhood represents the hope of organized resistance, whether real or fabricated by the Party." },
      { word: 'rendezvous', definition: 'A meeting at an agreed time and place.', connection: "Winston and Julia's secret meetings require elaborate planning to avoid detection." },
      { word: 'oligarchy', definition: 'A small group of people having control of a country or organization.', connection: "Goldstein's book reveals that the Party is an oligarchy seeking power for its own sake." },
      { word: 'heresy', definition: 'Belief or opinion contrary to orthodox doctrine.', connection: "Joining the Brotherhood is the ultimate heresy against the Party's absolute authority." },
      { word: 'martyr', definition: 'A person who suffers death for refusing to renounce a belief.', connection: "Winston accepts that he may become a martyr for the cause of truth." },
    ],
  },
  {
    id: 6,
    title: 'Hope & Despair',
    description: "The emotional vocabulary of resistance and the human spirit under totalitarianism.",
    terms: [
      { word: 'futile', definition: 'Incapable of producing any useful result; pointless.', connection: "Winston knows his rebellion is futile but persists anyway—an act of defiance." },
      { word: 'sanity', definition: 'The ability to think and behave normally; soundness of mind.', connection: "Winston's greatest fear is losing his sanity; holding onto truth preserves it." },
      { word: 'proles', definition: 'Short for proletarians; the working class in Oceania.', connection: "Winston believes 'If there is hope, it lies in the proles'—the 85% who remain uncontrolled." },
      { word: 'unalterable', definition: 'Not able to be changed.', connection: "Winston seeks something unalterable—a truth the Party cannot destroy." },
      { word: 'posterity', definition: 'All future generations of people.', connection: "Winston writes his diary for posterity, hoping the truth will survive." },
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
  },
  // ==================== PART TWO ====================
  {
    id: 'part2-chapter1',
    title: 'Chapter 1: The Note',
    summary: "In the corridor of the Ministry, the dark-haired girl (Julia) stumbles and falls near Winston. As he helps her up, she secretly passes him a folded note. With trembling hands, Winston later reads three words: 'I love you.' His terror transforms into wild hope. He spends days trying to find a way to meet her privately, eventually managing to sit next to her in the canteen where they whisper plans for a secret rendezvous.",
    themes: ['Love vs. Betrayal', 'Psychological Manipulation'],
    semanticFieldId: 4, // Love & Rebellion
    stealData: {
      characters: [
        { character: 'Winston Smith', categories: [
          { category: 'Feelings', sentence: "Winston's first reaction to the note is not joy but ___ that it might be a trap.", answer: 'Terror' },
          { category: 'Actions', sentence: "He waits ___ days before he can safely read the note at his desk.", answer: 'Five' },
        ]},
        { character: 'Julia', categories: [
          { category: 'Actions', sentence: "Julia passes the note by pretending to ___ in the corridor.", answer: 'Fall' },
          { category: 'Speech', sentence: "Her note contains only ___ words that change everything.", answer: 'Three' },
        ]}
      ],
      options: ['Terror', 'Five', 'Fall', 'Three', 'Joy', 'Run']
    },
    readingCompData: [
      {
        question: "What does Julia's note say?",
        options: [
          { text: "'Meet me tonight.'", isCorrect: false, feedback: "The message is more personal than logistical." },
          { text: "'I love you.'", isCorrect: true },
          { text: "'I know about the Brotherhood.'", isCorrect: false, feedback: "Julia doesn't mention the Brotherhood yet." },
          { text: "'You are being watched.'", isCorrect: false, feedback: "This would be a warning, not a declaration." },
        ],
        explanation: "Julia's note simply says 'I love you'—three words that represent the ultimate thoughtcrime of personal attachment."
      }
    ],
    quote: "At the sight of the words I love you the desire to stay alive had welled up in him.",
    gameData: {
      prompts: [
        { text: "What Julia pretends to do in the corridor.", answer: 'Fall' },
        { text: "The number of words in Julia's note.", answer: 'Three' },
      ],
      options: ['Fall', 'Three', 'Faint', 'Five']
    },
    reflectionPrompt: "Why does Winston initially react with terror rather than joy to Julia's declaration of love? What does this reveal about the psychological damage caused by living under totalitarianism?"
  },
  {
    id: 'part2-chapter2',
    title: 'Chapter 2: The Countryside',
    summary: "Winston and Julia finally meet in a secret clearing in the countryside—a place remarkably like Winston's dream of the 'Golden Country.' Julia is bold and experienced; she has had many affairs with Party members. She sees her promiscuity as a form of rebellion. They make love among the bluebells, and Winston feels that in this act of desire, they are striking a blow against the Party. Julia's corruption is political: every act of pleasure is an attack on Big Brother.",
    themes: ['Love vs. Betrayal', 'Totalitarianism'],
    semanticFieldId: 4, // Love & Rebellion
    stealData: {
      characters: [
        { character: 'Julia', categories: [
          { category: 'Speech', sentence: "Julia tells Winston she is 'corrupt to the ___.'", answer: 'Bones' },
          { category: 'Thoughts', sentence: "She sees sexual rebellion as a political act that strikes at the Party's ___.", answer: 'Power' },
        ]},
        { character: 'Winston Smith', categories: [
          { category: 'Feelings', sentence: "Winston realizes this countryside is identical to his dream of the '___.'", answer: 'Golden Country' },
          { category: 'Thoughts', sentence: "He sees Julia's promiscuity not as shameful but as ___.", answer: 'Rebellion' },
        ]}
      ],
      options: ['Bones', 'Power', 'Golden Country', 'Rebellion', 'Heart', 'Shame']
    },
    readingCompData: [
      {
        question: "Why does Julia consider her affairs with Party members to be political acts?",
        options: [
          { text: "She is gathering intelligence for the Brotherhood.", isCorrect: false, feedback: "Julia is not a spy." },
          { text: "Every act of desire undermines the Party's control over the body.", isCorrect: true },
          { text: "She hopes to blackmail Inner Party members.", isCorrect: false, feedback: "Julia's motives aren't strategic in this way." },
          { text: "She wants to spread disease among the Party.", isCorrect: false, feedback: "This is not her intention." },
        ],
        explanation: "Julia understands that the Party wants to control all human instincts, including sexual desire. By following her natural impulses, she commits an act of rebellion against the Party's claim to total control."
      }
    ],
    quote: "I hate purity. I hate goodness. I don't want any virtue to exist anywhere. I want everyone to be corrupt to the bones.",
    gameData: {
      prompts: [
        { text: "The dreamlike place where Winston and Julia meet.", answer: 'Golden Country' },
        { text: "The flowers growing in the clearing.", answer: 'Bluebells' },
      ],
      options: ['Golden Country', 'Bluebells', 'Victory Square', 'Roses']
    },
    reflectionPrompt: "Julia declares she wants 'everyone to be corrupt to the bones.' How is her definition of 'corruption' different from the Party's? Is her philosophy liberating or dangerous?"
  },
  {
    id: 'part2-chapter3',
    title: "Chapter 3: Julia's Story",
    summary: "Winston and Julia continue meeting in secret locations. Julia reveals her pragmatic philosophy: she cares nothing for abstract political rebellion but simply wants to enjoy life. She sleeps during the Two Minutes Hate, works in the Fiction Department producing pornography for the proles, and has learned to survive by being outwardly orthodox. Unlike Winston, she accepts the Party's lies as unchangeable and focuses only on private pleasures.",
    themes: ['Psychological Manipulation', 'Totalitarianism'],
    semanticFieldId: 4, // Love & Rebellion
    stealData: {
      characters: [
        { character: 'Julia', categories: [
          { category: 'Actions', sentence: "Julia secretly ___ during the Two Minutes Hate.", answer: 'Sleeps' },
          { category: 'Thoughts', sentence: "She believes all Party talk about war and ideology is simply '___.'", answer: 'Rubbish' },
        ]},
        { character: 'Winston Smith', categories: [
          { category: 'Thoughts', sentence: "Winston is frustrated that Julia doesn't care about ___ truth.", answer: 'Historical' },
          { category: 'Feelings', sentence: "Despite their differences, he feels their shared ___ unites them.", answer: 'Hatred' },
        ]}
      ],
      options: ['Sleeps', 'Rubbish', 'Historical', 'Hatred', 'Screams', 'Love']
    },
    readingCompData: [
      {
        question: "What does Julia produce in the Fiction Department?",
        options: [
          { text: "Novels approved by the Ministry of Truth.", isCorrect: false, feedback: "She works on more specific content." },
          { text: "Cheap pornography for the proles.", isCorrect: true },
          { text: "Propaganda posters featuring Big Brother.", isCorrect: false, feedback: "That's a different department." },
          { text: "Children's textbooks.", isCorrect: false, feedback: "She works in a different section." },
        ],
        explanation: "Julia works on machines that produce pornographic novels for the proles—content considered beneath Party members but used to pacify the masses. The irony is that she must appear puritanical while producing this material."
      }
    ],
    quote: "Life as she saw it was quite simple. You wanted a good time; 'they,' meaning the Party, wanted to stop you having it.",
    gameData: {
      prompts: [
        { text: "What Julia does during the Two Minutes Hate.", answer: 'Sleeps' },
        { text: "The department where Julia works.", answer: 'Fiction Department' },
      ],
      options: ['Sleeps', 'Fiction Department', 'Screams', 'Records Department']
    },
    reflectionPrompt: "Winston rebels because he cares about truth; Julia rebels because she wants pleasure. Which form of resistance is more effective against a totalitarian state? Which is more dangerous to the individual?"
  },
  {
    id: 'part2-chapter4',
    title: 'Chapter 4: The Room Above the Shop',
    summary: "Winston rents the room above Mr. Charrington's junk shop—the same shop where he bought his diary. The room has no telescreen, only an old-fashioned picture of a church (St Clement's Dane). It becomes Winston and Julia's private sanctuary. Julia brings real coffee, sugar, and makeup—luxuries from the Inner Party black market. For the first time, they have a place that feels truly private, a pocket of the past untouched by the Party.",
    themes: ['Love vs. Betrayal', 'Control of Information'],
    semanticFieldId: 4, // Love & Rebellion
    stealData: {
      characters: [
        { character: 'Winston Smith', categories: [
          { category: 'Actions', sentence: "Winston rents the room because it has no ___.", answer: 'Telescreen' },
          { category: 'Feelings', sentence: "The room represents a stolen piece of ___ from the Party.", answer: 'Privacy' },
        ]},
        { character: 'Julia', categories: [
          { category: 'Actions', sentence: "Julia brings forbidden luxuries like real ___ and makeup.", answer: 'Coffee' },
          { category: 'Effects', sentence: "With makeup on, she transforms from a Party member into a ___.", answer: 'Woman' },
        ]}
      ],
      options: ['Telescreen', 'Privacy', 'Coffee', 'Woman', 'Radio', 'Time']
    },
    readingCompData: [
      {
        question: "What makes the room above the shop seem safe to Winston?",
        options: [
          { text: "Mr. Charrington promises to protect them.", isCorrect: false, feedback: "Winston doesn't rely on Charrington's promises." },
          { text: "There is no telescreen in the room.", isCorrect: true },
          { text: "The Thought Police never patrol this area.", isCorrect: false, feedback: "Winston has no such guarantee." },
          { text: "Julia has bribed the landlord.", isCorrect: false, feedback: "No bribery is involved." },
        ],
        explanation: "The room's most significant feature is the absence of a telescreen, making it the only place Winston knows where he isn't being constantly watched and listened to."
      }
    ],
    quote: "It was as though they were intentionally stepping nearer to their graves.",
    gameData: {
      prompts: [
        { text: "The device notably absent from the room.", answer: 'Telescreen' },
        { text: "The old man who runs the junk shop.", answer: 'Mr. Charrington' },
      ],
      options: ['Telescreen', 'Mr. Charrington', 'Radio', 'O\'Brien']
    },
    reflectionPrompt: "Winston knows that renting the room brings him closer to arrest and death. Why does he do it anyway? What does the room symbolize that makes it worth the risk?"
  },
  {
    id: 'part2-chapter5',
    title: 'Chapter 5: Syme Vanishes',
    summary: "As Winston predicted, Syme is vaporized—he simply ceases to exist. His name is removed from all records. Meanwhile, preparations intensify for Hate Week, a massive propaganda celebration. Winston notices the new Hate Song being played everywhere. Julia remains indifferent to these political events, but Winston sees each disappearance as confirmation of the Party's absolute power over reality itself.",
    themes: ['Control of Information', 'Totalitarianism'],
    semanticFieldId: 2, // Party Ideology
    stealData: {
      characters: [
        { character: 'Syme', categories: [
          { category: 'Fate', sentence: "Syme is ___ and all records of his existence are destroyed.", answer: 'Vaporized' },
          { category: 'Effects', sentence: "His name is removed from the chess club list as if he never ___.", answer: 'Existed' },
        ]},
        { character: 'Winston Smith', categories: [
          { category: 'Thoughts', sentence: "Winston realizes his prediction about Syme was ___.", answer: 'Correct' },
          { category: 'Feelings', sentence: "He feels a grim satisfaction mixed with ___ at the Party's efficiency.", answer: 'Horror' },
        ]}
      ],
      options: ['Vaporized', 'Existed', 'Correct', 'Horror', 'Promoted', 'Relief']
    },
    readingCompData: [
      {
        question: "Why was Syme vaporized?",
        options: [
          { text: "He was caught committing a crime.", isCorrect: false, feedback: "No specific crime is mentioned." },
          { text: "He was too intelligent and saw too clearly.", isCorrect: true },
          { text: "He tried to escape to Eurasia.", isCorrect: false, feedback: "There is no mention of escape attempts." },
          { text: "He refused to work on Newspeak.", isCorrect: false, feedback: "He was enthusiastic about his work." },
        ],
        explanation: "As Winston predicted, Syme was vaporized not for any crime but because he understood too much. He could articulate what the Party was doing with language, which made him dangerous—even though he was completely loyal."
      }
    ],
    quote: "Syme had ceased to exist: he had never existed.",
    gameData: {
      prompts: [
        { text: "What happens to Syme.", answer: 'Vaporized' },
        { text: "The propaganda event being prepared.", answer: 'Hate Week' },
      ],
      options: ['Vaporized', 'Hate Week', 'Promoted', 'Victory Day']
    },
    reflectionPrompt: "Syme was completely loyal to the Party, yet he was destroyed. What does this reveal about the nature of totalitarianism? Can anyone truly be 'safe' under such a system?"
  },
  {
    id: 'part2-chapter6',
    title: "Chapter 6: O'Brien's Invitation",
    summary: "O'Brien, the Inner Party member Winston has long suspected of being a secret rebel, approaches Winston in a corridor. He compliments Winston's writing in Newspeak and mentions the Tenth Edition of the Newspeak Dictionary. He gives Winston his address, ostensibly to lend him an advance copy. Winston is convinced this is a secret signal—an invitation to join the Brotherhood. His heart pounds with dangerous hope.",
    themes: ['Loyalty vs. Betrayal', 'Psychological Manipulation'],
    semanticFieldId: 5, // Conspiracy & The Brotherhood
    stealData: {
      characters: [
        { character: "O'Brien", categories: [
          { category: 'Speech', sentence: "O'Brien compliments Winston's elegant use of ___.", answer: 'Newspeak' },
          { category: 'Actions', sentence: "He gives Winston his private ___ under the guise of lending a dictionary.", answer: 'Address' },
        ]},
        { character: 'Winston Smith', categories: [
          { category: 'Thoughts', sentence: "Winston interprets the invitation as a sign that O'Brien is in the ___.", answer: 'Brotherhood' },
          { category: 'Feelings', sentence: "He feels a mixture of hope and ___ at this dangerous opportunity.", answer: 'Terror' },
        ]}
      ],
      options: ['Newspeak', 'Address', 'Brotherhood', 'Terror', 'Oldspeak', 'Joy']
    },
    readingCompData: [
      {
        question: "What excuse does O'Brien use to give Winston his address?",
        options: [
          { text: "He wants Winston to attend a Party meeting.", isCorrect: false, feedback: "The excuse is more subtle." },
          { text: "He wants to lend Winston an advance copy of the Newspeak Dictionary.", isCorrect: true },
          { text: "He needs Winston to correct some documents.", isCorrect: false, feedback: "This isn't the pretext used." },
          { text: "He wants to report Winston's thoughtcrime.", isCorrect: false, feedback: "O'Brien appears to be recruiting, not threatening." },
        ],
        explanation: "O'Brien uses the pretext of lending Winston the Tenth Edition of the Newspeak Dictionary—a seemingly innocent professional courtesy that could also be a coded invitation to conspiracy."
      }
    ],
    quote: "We shall meet in the place where there is no darkness.",
    gameData: {
      prompts: [
        { text: "What O'Brien offers to lend Winston.", answer: 'Newspeak Dictionary' },
        { text: "The secret organization Winston hopes O'Brien belongs to.", answer: 'Brotherhood' },
      ],
      options: ['Newspeak Dictionary', 'Brotherhood', 'History Book', 'Inner Party']
    },
    reflectionPrompt: "Winston believes O'Brien's invitation is genuine. What makes him so willing to trust, despite living in a world built on deception? Is his hope reasonable or reckless?"
  },
  {
    id: 'part2-chapter7',
    title: 'Chapter 7: Hope in the Proles',
    summary: "In their secret room, Winston reads to Julia from his diary about how 'If there is hope, it lies in the proles.' The proles—the 85% of the population considered too stupid to control—live with a freedom Party members cannot imagine. Winston recalls seeing a prole woman beaten by police for owning a saucepan, yet the proles never organize. Julia dismisses political discussion, but Winston clings to the belief that the proles' sheer numbers and humanity will someday overthrow the Party.",
    themes: ['Totalitarianism', 'Control of Information'],
    semanticFieldId: 6, // Hope & Despair
    stealData: {
      characters: [
        { character: 'Winston Smith', categories: [
          { category: 'Thoughts', sentence: "Winston believes hope lies in the ___ because they are numerous and uncontrolled.", answer: 'Proles' },
          { category: 'Actions', sentence: "He reads his ___ aloud to Julia in the secret room.", answer: 'Diary' },
        ]},
        { character: 'Julia', categories: [
          { category: 'Thoughts', sentence: "Julia dismisses politics as ___ and prefers to focus on pleasure.", answer: 'Boring' },
          { category: 'Feelings', sentence: "She shows little interest in Winston's theories about ___.", answer: 'Revolution' },
        ]}
      ],
      options: ['Proles', 'Diary', 'Boring', 'Revolution', 'Party', 'History']
    },
    readingCompData: [
      {
        question: "Why does Winston believe hope lies in the proles?",
        options: [
          { text: "They have access to weapons the Party doesn't know about.", isCorrect: false, feedback: "The proles aren't secretly armed." },
          { text: "They make up 85% of the population and retain human instincts.", isCorrect: true },
          { text: "They secretly control the economy.", isCorrect: false, feedback: "The Party controls everything." },
          { text: "They are educated in secret resistance.", isCorrect: false, feedback: "The proles are kept deliberately uneducated." },
        ],
        explanation: "Winston believes the proles' humanity hasn't been destroyed by the Party because they aren't considered worth controlling. Their natural instincts for family, love, and community remain intact—and they vastly outnumber Party members."
      }
    ],
    quote: "If there is hope, it lies in the proles.",
    gameData: {
      prompts: [
        { text: "The percentage of the population that are proles.", answer: '85%' },
        { text: "What the Party considers the proles to be.", answer: 'Animals' },
      ],
      options: ['85%', 'Animals', '50%', 'Dangerous']
    },
    reflectionPrompt: "Winston believes the proles are humanity's only hope, yet they never rebel. Is Winston's faith justified, or is he projecting his own desires onto people who don't share them?"
  },
  {
    id: 'part2-chapter8',
    title: 'Chapter 8: The Brotherhood',
    summary: "Winston and Julia visit O'Brien's luxurious Inner Party apartment. O'Brien reveals he is indeed a member of the Brotherhood and administers a catechism: Are they willing to commit murder, sabotage, betray their country, commit suicide? They agree to everything—except being separated from each other forever. O'Brien promises to send them a copy of 'The Book' by Emmanuel Goldstein. Winston leaves feeling he has crossed an irreversible threshold.",
    themes: ['Loyalty vs. Betrayal', 'Totalitarianism'],
    semanticFieldId: 5, // Conspiracy & The Brotherhood
    stealData: {
      characters: [
        { character: "O'Brien", categories: [
          { category: 'Speech', sentence: "O'Brien asks if they would throw ___ in a child's face.", answer: 'Acid' },
          { category: 'Actions', sentence: "He pours real ___ for Winston and Julia—a luxury they've never tasted.", answer: 'Wine' },
        ]},
        { character: 'Winston Smith', categories: [
          { category: 'Speech', sentence: "Winston agrees to do anything for the Brotherhood except be separated from ___ forever.", answer: 'Julia' },
          { category: 'Feelings', sentence: "He feels a sense of ___ at finally committing to the rebellion.", answer: 'Exaltation' },
        ]}
      ],
      options: ['Acid', 'Wine', 'Julia', 'Exaltation', 'Water', 'Terror']
    },
    readingCompData: [
      {
        question: "What is the one thing Winston and Julia refuse to promise the Brotherhood?",
        options: [
          { text: "To commit murder.", isCorrect: false, feedback: "They agree to this." },
          { text: "To never see each other again.", isCorrect: true },
          { text: "To die for the cause.", isCorrect: false, feedback: "They accept they may die." },
          { text: "To betray their country.", isCorrect: false, feedback: "They agree to this as well." },
        ],
        explanation: "Winston and Julia agree to commit any crime for the Brotherhood—murder, sabotage, even spreading disease. But when asked if they would agree to never see each other again, they refuse. This refusal will prove significant later."
      }
    ],
    quote: "We are the dead.",
    gameData: {
      prompts: [
        { text: "The book O'Brien promises to send.", answer: "Goldstein's Book" },
        { text: "The luxury drink O'Brien serves.", answer: 'Wine' },
      ],
      options: ["Goldstein's Book", 'Wine', 'Diary', 'Coffee']
    },
    reflectionPrompt: "Winston and Julia agree to commit terrible acts for the Brotherhood but refuse to be separated. Is their love a strength or a weakness in their rebellion? What does O'Brien learn from their refusal?"
  },
  {
    id: 'part2-chapter9',
    title: 'Chapter 9: The Book',
    summary: "During the chaos of Hate Week—when the enemy suddenly switches from Eurasia to Eastasia mid-rally—Winston receives Goldstein's book, 'The Theory and Practice of Oligarchical Collectivism.' He reads it in the secret room while Julia sleeps. The book explains that the Party seeks power entirely for its own sake, that the three superstates are essentially identical, and that the war is perpetual by design. It answers 'how' the Party controls everything but not 'why.'",
    themes: ['Control of Information', 'Psychological Manipulation'],
    semanticFieldId: 5, // Conspiracy & The Brotherhood
    stealData: {
      characters: [
        { character: 'Winston Smith', categories: [
          { category: 'Actions', sentence: "Winston reads The Book while Julia ___ beside him.", answer: 'Sleeps' },
          { category: 'Thoughts', sentence: "He realizes The Book confirms what he already ___ but couldn't articulate.", answer: 'Knew' },
        ]},
        { character: 'Julia', categories: [
          { category: 'Actions', sentence: "Julia finds The Book ___ and falls asleep during the reading.", answer: 'Tedious' },
          { category: 'Thoughts', sentence: "She cares more about their private rebellion than political ___.", answer: 'Theory' },
        ]}
      ],
      options: ['Sleeps', 'Knew', 'Tedious', 'Theory', 'Wakes', 'Fascinating']
    },
    readingCompData: [
      {
        question: "What does Goldstein's book explain about the three superstates?",
        options: [
          { text: "Oceania is clearly the most powerful.", isCorrect: false, feedback: "The book doesn't rank the powers." },
          { text: "They are essentially identical and the war is designed to be endless.", isCorrect: true },
          { text: "Eastasia is secretly allied with the Brotherhood.", isCorrect: false, feedback: "No such alliance is mentioned." },
          { text: "The war will end when one nation wins.", isCorrect: false, feedback: "The book says the opposite." },
        ],
        explanation: "The Book reveals that Oceania, Eurasia, and Eastasia are structurally identical—all ruled by similar oligarchies. The perpetual war between them is designed to consume surplus production and keep populations poor and afraid, not to achieve victory."
      }
    ],
    quote: "War is Peace. Freedom is Slavery. Ignorance is Strength.",
    gameData: {
      prompts: [
        { text: "The author of The Book.", answer: 'Emmanuel Goldstein' },
        { text: "The enemy that switches mid-rally during Hate Week.", answer: 'Eurasia to Eastasia' },
      ],
      options: ['Emmanuel Goldstein', 'Eurasia to Eastasia', "O'Brien", 'Eastasia to Eurasia']
    },
    reflectionPrompt: "The Book answers 'how' the Party rules but not 'why' they want power. Winston finds this unsatisfying. Why might Orwell leave this question unanswered until Part Three?"
  },
  {
    id: 'part2-chapter10',
    title: 'Chapter 10: The Arrest',
    summary: "Winston wakes to Julia reciting a nursery rhyme: 'Here comes a candle to light you to bed, here comes a chopper to chop off your head.' They hear the red-armed prole woman singing outside and feel a momentary hope. Then a voice from behind the picture says 'You are the dead.' The picture hides a telescreen. Mr. Charrington enters—transformed, younger, a member of the Thought Police. Soldiers smash in, beat Julia, and drag them both away. The glass paperweight shatters. The secret room was a trap all along.",
    themes: ['Loyalty vs. Betrayal', 'Surveillance'],
    semanticFieldId: 3, // Surveillance
    stealData: {
      characters: [
        { character: 'Mr. Charrington', categories: [
          { category: 'Actions', sentence: "Charrington is revealed to be a member of the ___.", answer: 'Thought Police' },
          { category: 'Effects', sentence: "His appearance changes—he looks decades ___ without his disguise.", answer: 'Younger' },
        ]},
        { character: 'Winston Smith', categories: [
          { category: 'Feelings', sentence: "Winston feels complete ___ as everything he trusted proves false.", answer: 'Despair' },
          { category: 'Actions', sentence: "He watches the glass paperweight ___ on the floor.", answer: 'Shatter' },
        ]}
      ],
      options: ['Thought Police', 'Younger', 'Despair', 'Shatter', 'Brotherhood', 'Older']
    },
    readingCompData: [
      {
        question: "Where was the hidden telescreen concealed?",
        options: [
          { text: "Behind the mirror.", isCorrect: false, feedback: "The location was different." },
          { text: "Behind the picture of St Clement's Dane.", isCorrect: true },
          { text: "Inside the glass paperweight.", isCorrect: false, feedback: "The paperweight was just a symbol." },
          { text: "Under the bed.", isCorrect: false, feedback: "The telescreen was on the wall." },
        ],
        explanation: "The telescreen was hidden behind the old picture of St Clement's Dane church—the same picture that represented a link to the past. The symbol of freedom was literally concealing the instrument of surveillance."
      }
    ],
    quote: "Here comes a candle to light you to bed, here comes a chopper to chop off your head.",
    gameData: {
      prompts: [
        { text: "What was hidden behind the picture.", answer: 'Telescreen' },
        { text: "The object that shatters during the arrest.", answer: 'Glass Paperweight' },
      ],
      options: ['Telescreen', 'Glass Paperweight', 'Microphone', 'Diary']
    },
    reflectionPrompt: "The glass paperweight—symbol of beauty and the past—shatters during the arrest. How does this moment reflect the destruction of everything Winston hoped for? Was his rebellion doomed from the start?"
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

// Scene filters for Part 1 and Part 2
export const PART1_SCENES = SCENES.filter(s => s.id.startsWith('part1-'));
export const PART2_SCENES = SCENES.filter(s => s.id.startsWith('part2-'));

// Doublethink Mini-Game Data
export const DOUBLETHINK_GAME_DATA: DoublethinkGameData = {
  passingScore: 70,
  rounds: [
    {
      title: 'Identify the Contradiction',
      instructions: 'The Party demands you practice DOUBLETHINK. Select the two contradictory concepts in each slogan.',
      timeLimit: 30,
      questions: [
        {
          id: 'r1-1',
          type: 'contradiction',
          prompt: 'WAR IS PEACE',
          options: [
            { text: 'War and Peace', isCorrect: true },
            { text: 'War and Victory', isCorrect: false, feedback: 'Victory is a result, not the contradiction.' },
            { text: 'Peace and Love', isCorrect: false, feedback: 'Love is not mentioned in this slogan.' },
            { text: 'Battle and Conflict', isCorrect: false, feedback: 'These are synonyms, not contradictions.' },
          ],
          explanation: 'The Party claims perpetual war brings stability (peace) to Oceania by uniting citizens against a common enemy.'
        },
        {
          id: 'r1-2',
          type: 'contradiction',
          prompt: 'FREEDOM IS SLAVERY',
          options: [
            { text: 'Freedom and Slavery', isCorrect: true },
            { text: 'Freedom and Choice', isCorrect: false, feedback: 'Choice is related to freedom, not its opposite.' },
            { text: 'Liberty and Rights', isCorrect: false, feedback: 'These are synonyms, not contradictions.' },
            { text: 'Slavery and Work', isCorrect: false, feedback: 'Work is not the same as slavery.' },
          ],
          explanation: 'The Party teaches that individual freedom leads to chaos and suffering, while submission to Big Brother brings security.'
        },
        {
          id: 'r1-3',
          type: 'contradiction',
          prompt: 'IGNORANCE IS STRENGTH',
          options: [
            { text: 'Ignorance and Strength', isCorrect: true },
            { text: 'Knowledge and Power', isCorrect: false, feedback: 'These concepts are not in the slogan.' },
            { text: 'Weakness and Strength', isCorrect: false, feedback: 'Weakness is not mentioned.' },
            { text: 'Ignorance and Stupidity', isCorrect: false, feedback: 'These are similar, not contradictory.' },
          ],
          explanation: 'The Party teaches that not questioning authority makes the collective stronger. Individual knowledge is dangerous.'
        },
        {
          id: 'r1-4',
          type: 'contradiction',
          prompt: '2 + 2 = 5',
          options: [
            { text: 'Mathematical truth and Party truth', isCorrect: true },
            { text: 'Numbers and Letters', isCorrect: false, feedback: 'This is not about letters.' },
            { text: 'Addition and Subtraction', isCorrect: false, feedback: 'Both are mathematical operations.' },
            { text: 'Five and Four', isCorrect: false, feedback: 'Close, but the real contradiction is truth itself.' },
          ],
          explanation: 'If the Party says 2+2=5, you must believe it. Reality is whatever the Party declares it to be.'
        },
        {
          id: 'r1-5',
          type: 'contradiction',
          prompt: 'THE PARTY IS NEVER WRONG',
          options: [
            { text: 'Infallibility and Human nature', isCorrect: true },
            { text: 'Party and Government', isCorrect: false, feedback: 'These are related concepts.' },
            { text: 'Right and Left', isCorrect: false, feedback: 'Political directions are not the point.' },
            { text: 'Wrong and Incorrect', isCorrect: false, feedback: 'These are synonyms.' },
          ],
          explanation: 'No human institution can be infallible, yet the Party demands belief in its perfection. This requires doublethink.'
        },
      ]
    },
    {
      title: 'Complete the Slogan',
      instructions: 'Demonstrate your orthodoxy by completing the Party slogans correctly.',
      timeLimit: 45,
      questions: [
        {
          id: 'r2-1',
          type: 'complete',
          prompt: 'WAR IS ___',
          options: [
            { text: 'PEACE', isCorrect: true },
            { text: 'HELL', isCorrect: false, feedback: 'This is oldthink. The Party has redefined war.' },
            { text: 'NECESSARY', isCorrect: false, feedback: 'Too logical. The Party speaks in contradictions.' },
            { text: 'VICTORY', isCorrect: false, feedback: 'Victory is a goal, not what war IS.' },
          ],
          explanation: 'WAR IS PEACE - perpetual war keeps the population united and controlled.'
        },
        {
          id: 'r2-2',
          type: 'complete',
          prompt: 'FREEDOM IS ___',
          options: [
            { text: 'SLAVERY', isCorrect: true },
            { text: 'DANGEROUS', isCorrect: false, feedback: 'The Party is more absolute than this.' },
            { text: 'FORBIDDEN', isCorrect: false, feedback: 'Too direct. The Party redefines, not forbids.' },
            { text: 'WEAKNESS', isCorrect: false, feedback: 'Close, but not the official slogan.' },
          ],
          explanation: 'FREEDOM IS SLAVERY - individual freedom leads to chaos; only Big Brother provides security.'
        },
        {
          id: 'r2-3',
          type: 'complete',
          prompt: 'IGNORANCE IS ___',
          options: [
            { text: 'STRENGTH', isCorrect: true },
            { text: 'BLISS', isCorrect: false, feedback: 'This is an oldspeak saying. The Party uses STRENGTH.' },
            { text: 'POWER', isCorrect: false, feedback: 'Power belongs to the Party, not to ignorance.' },
            { text: 'REQUIRED', isCorrect: false, feedback: 'Too weak. The Party makes stronger claims.' },
          ],
          explanation: 'IGNORANCE IS STRENGTH - not knowing protects you from thoughtcrime and strengthens the collective.'
        },
        {
          id: 'r2-4',
          type: 'complete',
          prompt: 'BIG BROTHER IS ___',
          options: [
            { text: 'WATCHING YOU', isCorrect: true },
            { text: 'PROTECTING YOU', isCorrect: false, feedback: 'The Party prefers surveillance to protection.' },
            { text: 'LOVING YOU', isCorrect: false, feedback: 'Love is demanded OF you, not given TO you.' },
            { text: 'ALWAYS RIGHT', isCorrect: false, feedback: 'True, but not the famous slogan.' },
          ],
          explanation: 'BIG BROTHER IS WATCHING YOU - the constant reminder of surveillance that controls behavior.'
        },
        {
          id: 'r2-5',
          type: 'complete',
          prompt: 'WHO CONTROLS THE PAST CONTROLS THE ___',
          options: [
            { text: 'FUTURE', isCorrect: true },
            { text: 'PRESENT', isCorrect: false, feedback: 'The next line says "who controls the present controls the past."' },
            { text: 'PEOPLE', isCorrect: false, feedback: 'Too direct. The Party thinks in terms of time.' },
            { text: 'TRUTH', isCorrect: false, feedback: 'Truth is controlled, but FUTURE is the answer.' },
          ],
          explanation: 'Who controls the past controls the future; who controls the present controls the past.'
        },
        {
          id: 'r2-6',
          type: 'complete',
          prompt: 'DOUBLETHINK MEANS THE POWER OF HOLDING TWO ___ BELIEFS SIMULTANEOUSLY',
          options: [
            { text: 'CONTRADICTORY', isCorrect: true },
            { text: 'DIFFERENT', isCorrect: false, feedback: 'Too weak. The beliefs must CONTRADICT.' },
            { text: 'POLITICAL', isCorrect: false, feedback: 'It is not limited to political beliefs.' },
            { text: 'ORTHODOX', isCorrect: false, feedback: 'Orthodox beliefs would not conflict.' },
          ],
          explanation: 'Doublethink is the core skill of Party members: believing contradictions simultaneously and genuinely.'
        },
      ]
    },
    {
      title: 'Orthodox Response',
      instructions: 'The Thought Police are watching. Select the ORTHODOX response that demonstrates proper doublethink.',
      timeLimit: 60,
      questions: [
        {
          id: 'r3-1',
          type: 'orthodox',
          prompt: 'The Ministry announces the chocolate ration has been INCREASED to 20 grams. You clearly remember it was 30 grams last week. The orthodox response is:',
          options: [
            { text: 'Celebrate Big Brother\'s generosity for the increase', isCorrect: true },
            { text: 'Point out the mathematical error quietly', isCorrect: false, feedback: 'THOUGHTCRIME. You must not notice contradictions.' },
            { text: 'Stay silent and feel confused', isCorrect: false, feedback: 'FACECRIME. Confusion shows incomplete doublethink.' },
            { text: 'Ask a colleague if they remember differently', isCorrect: false, feedback: 'THOUGHTCRIME. You are spreading doubt.' },
          ],
          explanation: 'Proper doublethink means genuinely believing the ration increased, while also knowing it decreased, while also not knowing you know.'
        },
        {
          id: 'r3-2',
          type: 'orthodox',
          prompt: 'Yesterday Oceania was at war with Eurasia. Today the telescreen announces we have ALWAYS been at war with Eastasia. You must:',
          options: [
            { text: 'Know we have always been at war with Eastasia and believe it completely', isCorrect: true },
            { text: 'Pretend to believe while remembering the truth privately', isCorrect: false, feedback: 'INSUFFICIENT. The Party requires genuine belief, not performance.' },
            { text: 'Report your confusion to the Thought Police', isCorrect: false, feedback: 'THOUGHTCRIME. You should not be confused.' },
            { text: 'Destroy any evidence of the previous war', isCorrect: false, feedback: 'Unnecessary. The evidence already never existed.' },
          ],
          explanation: 'The past is mutable. Whatever the Party says IS the truth. Your memory must reshape itself instantly.'
        },
        {
          id: 'r3-3',
          type: 'orthodox',
          prompt: 'During Two Minutes Hate, you feel genuine rage at Emmanuel Goldstein. But you also notice he makes logical points. The orthodox response is:',
          options: [
            { text: 'Hate him MORE because his logic makes him more dangerous', isCorrect: true },
            { text: 'Report yourself for noticing his logic', isCorrect: false, feedback: 'This draws attention to your thoughtcrime.' },
            { text: 'Suppress the thought and scream louder', isCorrect: false, feedback: 'Suppression is not doublethink. You must genuinely not think it.' },
            { text: 'Discuss his points with a trusted colleague later', isCorrect: false, feedback: 'There are no trusted colleagues. All would report you.' },
          ],
          explanation: 'Goldstein\'s intelligence is precisely why he is dangerous. Your hatred should increase with his apparent logic.'
        },
        {
          id: 'r3-4',
          type: 'orthodox',
          prompt: 'You see a colleague arrested by the Thought Police. Yesterday he was a hero of the Party. Today he is an unperson. You must:',
          options: [
            { text: 'Immediately forget he ever existed', isCorrect: true },
            { text: 'Wonder what crime he committed', isCorrect: false, feedback: 'THOUGHTCRIME. Unpersons never existed. There is no crime to wonder about.' },
            { text: 'Feel relief that you were not his friend', isCorrect: false, feedback: 'You cannot feel relief about someone who never existed.' },
            { text: 'Remove his name from any documents you control', isCorrect: false, feedback: 'His name was never there. You are imagining things.' },
          ],
          explanation: 'An unperson has been vaporized from existence. They never existed. You cannot forget what was never there.'
        },
        {
          id: 'r3-5',
          type: 'orthodox',
          prompt: 'You wake up and think "I hate Big Brother." Before you can stop it, the thought has occurred. What is the orthodox response?',
          options: [
            { text: 'Use crimestop to halt the thought and love Big Brother completely', isCorrect: true },
            { text: 'Report yourself to the Thought Police immediately', isCorrect: false, feedback: 'This confirms the thoughtcrime occurred. Better to crimestop.' },
            { text: 'Punish yourself through extra voluntary work', isCorrect: false, feedback: 'This acknowledges the thought happened.' },
            { text: 'Tell yourself it was just a dream', isCorrect: false, feedback: 'Dreams are also monitored. This is not a solution.' },
          ],
          explanation: 'CRIMESTOP is the faculty of stopping short at the threshold of dangerous thoughts. The thought must cease to exist.'
        },
        {
          id: 'r3-6',
          type: 'orthodox',
          prompt: 'The Party announces that Oceania has ALWAYS produced more steel than last year. But factories are closing. The orthodox response is:',
          options: [
            { text: 'Production figures are increasing. The factories never existed.', isCorrect: true },
            { text: 'The statistics must be measuring something different', isCorrect: false, feedback: 'THOUGHTCRIME. You are questioning the Party\'s figures.' },
            { text: 'Focus on your own work and ignore the contradiction', isCorrect: false, feedback: 'There IS no contradiction to ignore.' },
            { text: 'Assume the factories are being upgraded', isCorrect: false, feedback: 'You are creating explanations. The Party needs none.' },
          ],
          explanation: 'Reality is what the Party says it is. Closed factories do not contradict increased production—they simply do not exist.'
        },
      ]
    }
  ]
};
