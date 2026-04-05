import {
  Character,
  Scene,
  SemanticField,
  Theme,
  SymbolInfo,
  DoublethinkGameData,
  NewspeakTerm,
} from './types';

export const APP_TITLE = "1984: The Interactive Guide";
export const AUTHOR_NAME = "George Orwell";

export const CHARACTERS: Character[] = [
  { name: 'Winston Smith', description: 'A minor member of the ruling Party who secretly hates Big Brother and dreams of rebellion. He works in the Ministry of Truth rewriting history.' },
  { name: 'Julia', description: 'Winston\'s lover and a mechanic in the Fiction Department. She is a pragmatist who rebels for personal pleasure rather than political ideals.' },
  { name: 'O\'Brien', description: 'A mysterious, powerful member of the Inner Party. Winston believes he is a member of the Brotherhood, but he is actually a loyal agent of the Party.' },
  { name: 'Big Brother', description: 'The perceived ruler of Oceania. He may not exist as a person, but his face is everywhere on posters with the caption "BIG BROTHER IS WATCHING YOU".' },
  { name: 'Tom Parsons', description: 'Winston\'s neighbour and an unquestioning Party member. He is eventually denounced by his own daughter for thoughtcrime.' },
  { name: 'Syme', description: 'A philologist working on the Newspeak Dictionary. He is too intelligent for the Party\'s liking and is eventually "vaporized".' },
  { name: 'Mr. Charrington', description: 'An old man who runs a junk shop in the prole district. He seems to offer a link to the past but is actually a member of the Thought Police.' },
  { name: 'Emmanuel Goldstein', description: 'The Enemy of the People — the legendary leader of the Brotherhood and the principal target of the Two Minutes Hate.' },
];

export const SYMBOLS: SymbolInfo[] = [
  { name: 'The Glass Paperweight', description: 'Represents Winston\'s attempt to connect with a past the Party hasn\'t altered. It is fragile and beautiful — like his rebellion.' },
  { name: 'The Telescreen', description: 'The primary tool of surveillance. It can never be fully turned off, representing the total abolition of private space.' },
  { name: 'Big Brother Posters', description: 'A constant reminder of surveillance. The eyes seem to follow you wherever you go — the built environment performing control.' },
  { name: 'The Red-Armed Prole Woman', description: 'A symbol of natural vitality and the potential future. She represents a life force the Party cannot kill.' },
  { name: 'Winston\'s Diary', description: 'The first concrete act of rebellion. Private writing asserts the individual against the collective and tries to preserve truth.' },
  { name: 'The Golden Country', description: 'A recurring pastoral landscape in Winston\'s dreams. It represents everything the Party has taken: natural freedom, warmth, the body at ease.' },
  { name: 'The Room Above the Shop', description: 'Winston and Julia\'s secret sanctuary. A pocket of the past — and, it turns out, a trap designed by the Thought Police.' },
];

export const THEMES: Theme[] = [
  { name: 'Totalitarianism', description: 'The absolute control of the state over every aspect of life, public and private. The Party seeks power entirely for its own sake.' },
  { name: 'Psychological Manipulation', description: 'The Party uses Doublethink and Newspeak to break down the capacity for independent thought.' },
  { name: 'Control of Information', description: 'The Party constantly rewrites history to maintain its infallibility. "Who controls the past controls the future."' },
  { name: 'Loyalty vs. Betrayal', description: 'The Party destroys private loyalties — family, love — and demands absolute devotion only to Big Brother.' },
  { name: 'Surveillance', description: 'The telescreen, the Thought Police, and even children as informers create a world where privacy is impossible.' },
];

// ── Newspeak Glossary ─────────────────────────────────────────────────────────

export const NEWSPEAK_GLOSSARY: NewspeakTerm[] = [
  { term: 'Ingsoc', definition: 'English Socialism — the official ideology of the Party of Oceania.', significance: 'The word is itself a Newspeak compression: harsh, unlovely, resistant to analysis. Unlike "English Socialism," which invites questions about what socialism means, "Ingsoc" is a sound, not a concept.' },
  { term: 'Doublethink', definition: 'The power of holding two contradictory beliefs simultaneously and accepting both as true.', significance: 'The Party\'s most essential psychological tool. Citizens must know they are lying while genuinely believing the lie. The Party slogans are doublethink in concentrated form.' },
  { term: 'Thoughtcrime', definition: 'The act of entertaining thoughts that contradict the Party line — punishable by death.', significance: 'The most totalitarian concept in the novel: criminality located not in action or speech, but in the mind itself. Winston\'s diary is thoughtcrime. His dreams are thoughtcrime.' },
  { term: 'Newspeak', definition: 'The official language of Oceania, designed to make thoughtcrime literally impossible by eliminating words for unorthodox concepts.', significance: 'Syme explains the ultimate aim: by 2050, the range of thought will be narrowed to the point where a heretical thought cannot be formed, because there are no words in which to express it.' },
  { term: 'Oldspeak', definition: 'Standard English — the language being replaced by Newspeak.', significance: 'Its richness, ambiguity, and capacity for nuance are precisely what make it dangerous to the Party. Words like "free," "honour," "science" carry the seeds of resistance.' },
  { term: 'Unperson', definition: 'A person who has been vaporized — erased from all records and collective memory.', significance: 'To become an unperson is not merely to die, but to have never existed. All photographs, documents, and memories are corrected to remove the person entirely.' },
  { term: 'Facecrime', definition: 'An improper expression — anxiety, scepticism, or any emotion that contradicts orthodox feeling.', significance: 'Even your face is a crime scene. Citizens must maintain the correct expression at all times, including during the Two Minutes Hate.' },
  { term: 'Crimestop', definition: 'The faculty of stopping short at the threshold of a dangerous thought — an instinctive defence of orthodoxy.', significance: 'Where doublethink is active (holding the lie), crimestop is passive: the automatic refusal to follow a line of thought that might lead to heresy.' },
  { term: 'Blackwhite', definition: 'The ability to believe that black is white when the Party requires it — and to forget that you ever believed otherwise.', significance: 'Applied to opponents, it means the impudence of calling black white. Applied to oneself, it means the willingness to say it and believe it.' },
  { term: 'Duckspeak', definition: 'Speech that is entirely orthodox and requires no thought — like a duck quacking.', significance: 'Paradoxically, duckspeak can be used as a compliment: someone who produces correct political statements without apparent thought is a skilled practitioner of orthodoxy.' },
  { term: 'Prolefeed', definition: 'The rubbishy entertainment and pornography produced for the proles to keep them passive and distracted.', significance: 'Julia\'s Fiction Department produces prolefeed. The Party does not care what the proles think — only that they do not organise.' },
  { term: 'Memory Hole', definition: 'A slit in the wall connected to an incinerator, used to dispose of documents that contradict the Party\'s current version of events.', significance: 'Orwell\'s euphemism is precise: it is not the documents that disappear into the hole, but memory itself.' },
  { term: 'Vaporize', definition: 'To arrest and execute a person, erasing all evidence of their existence.', significance: 'The word is clinical and implies harmless dissolution. Like all Newspeak, the term is chosen to prevent the thought "this is killing" from forming.' },
  { term: 'Room 101', definition: 'The torture chamber in the Ministry of Love, containing each prisoner\'s worst fear.', significance: 'O\'Brien tells Winston: "The thing that is in Room 101 is the worst thing in the world." It is different for each prisoner, perfectly designed.' },
  { term: 'The Thought Police', definition: 'The secret police force responsible for identifying and eliminating thoughtcriminals.', significance: 'Their most powerful tool is not surveillance itself, but the belief that surveillance is total. Citizens police themselves because they can never know whether they are being watched.' },
  { term: 'Two Minutes Hate', definition: 'A daily ritual in which Party members direct intense, orchestrated rage at Goldstein\'s image on the telescreen.', significance: 'A managed emotional release: citizens expel their frustration daily in a sanctioned direction, then return, drained, to compliance. The Hate also reinforces group identity and enemy-image.' },
  { term: 'Airstrip One', definition: 'The Newspeak name for what was formerly known as England or Britain.', significance: 'The renaming erases national identity and history. Britain becomes a tactical piece of geography — a landing strip — rather than a civilisation with a past.' },
  { term: 'Proles', definition: 'The proletariat — the 85% of Oceania\'s population considered too unimportant to indoctrinate.', significance: '"If there is hope, it lies in the proles." The Party does not bother to control them ideologically — which also means their humanity remains intact. Winston\'s tragedy is that they never organise.' },
];

// ── Vocabulary Glossary (by semantic field) ───────────────────────────────────

export const SEMANTIC_FIELDS: SemanticField[] = [
  {
    id: 1,
    title: 'Oppression & Decay',
    description: "The language describing the physical world of 1984 — gritty, institutional, decaying.",
    terms: [
      { word: 'gritty', definition: 'Containing or covered with grit; unpleasant and harsh.', connection: "The dust and grit of London represents the physical decay of life under Ingsoc — the environment itself is hostile." },
      { word: 'vile', definition: 'Extremely unpleasant; morally reprehensible.', connection: 'The wind is described as "vile" — a moral judgement applied to weather. The environment of Oceania is not merely unpleasant; it is morally degraded.' },
      { word: 'squalid', definition: 'Extremely dirty and unpleasant, especially as a result of poverty or neglect.', connection: "The living conditions of both proles and Outer Party members are described in terms of squalor — poverty is a deliberate policy, not an accident." },
      { word: 'austere', definition: 'Severe or strict in manner; having no comforts or luxuries.', connection: "Party life is designed to be austere — pleasure is suspect, luxury is reserved for the Inner Party, and comfort is a form of softness." },
      { word: 'dilapidated', definition: 'In a state of disrepair or ruin as a result of age or neglect.', connection: "Victory Mansions and the surrounding streets are dilapidated — the Party does not invest in the physical world of ordinary citizens." },
    ],
  },
  {
    id: 2,
    title: 'Power & Control',
    description: "The vocabulary of authority, domination, and the mechanics of totalitarian rule.",
    terms: [
      { word: 'oligarchy', definition: 'A small group of people controlling a country or organisation.', connection: "Goldstein\'s book reveals that the Party is an oligarchy — a small ruling group that seeks power for its own sake, not for any social goal." },
      { word: 'hierarchy', definition: 'A system in which members of an organisation or society are ranked according to relative status or authority.', connection: "The Inner Party / Outer Party / prole hierarchy is rigid and almost impossible to move between — it is a permanent class structure disguised as a socialist state." },
      { word: 'hegemony', definition: 'Leadership or dominance, especially of one country or social group over others.', connection: "The three superstates maintain hegemony over their respective populations not through military dominance of each other, but through perpetual war that justifies internal control." },
      { word: 'propaganda', definition: 'Information, especially of a biased or misleading nature, used to promote a political cause or point of view.', connection: "The Ministry of Truth exists to produce propaganda — but the novel\'s insight is that the most effective propaganda is indistinguishable from reality." },
      { word: 'orthodoxy', definition: 'Authorised or generally accepted theory, doctrine, or practice.', connection: "In Oceania, orthodoxy is not merely political belief — it is the absence of any independent thought. Syme says: \'Orthodoxy is unconsciousness.\'" },
    ],
  },
  {
    id: 3,
    title: 'The Inner Life',
    description: "Words that describe psychological states, memory, and the private self under pressure.",
    terms: [
      { word: 'furtive', definition: 'Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble.', connection: "Winston\'s every private act is furtive — writing the diary, thinking unorthodox thoughts, looking at the wrong thing. Furtiveness is the permanent emotional condition of a thoughtcriminal." },
      { word: 'anguish', definition: 'Severe mental or physical pain or suffering.', connection: "Winston experiences anguish throughout the novel — the anguish of suppressed memory, of forbidden desire, of knowing the truth in a world that forbids it." },
      { word: 'dissemble', definition: 'To conceal or disguise one\'s true feelings or beliefs.', connection: "Every Party member must dissemble constantly — their face, their thoughts, their private feelings must all be hidden. The telescreen makes this permanent performance exhausting." },
      { word: 'lucid', definition: 'Expressed clearly; easy to understand. Also: mentally alert and coherent.', connection: "Winston\'s moments of lucidity — when he sees clearly what the Party is doing — are precisely the moments that place him in greatest danger." },
      { word: 'futile', definition: 'Incapable of producing any useful result; pointless.', connection: "Winston knows his rebellion is futile but persists anyway. The futility is not an accident — it is what makes his defiance an act of will rather than strategy." },
    ],
  },
  {
    id: 4,
    title: 'Resistance & Rebellion',
    description: "The language of defiance, conspiracy, and the private self asserting itself against authority.",
    terms: [
      { word: 'insurrection', definition: 'A violent uprising against authority or government.', connection: "Winston hopes for insurrection from the proles — but they never organise. The novel asks whether the hope was ever rational, or merely a projection of Winston\'s desire." },
      { word: 'seditious', definition: 'Inciting or causing people to rebel against the authority of a state or monarch.', connection: "Winston\'s diary is seditious by definition — any private thought that contradicts the Party line is, by Oceanian law, an act of rebellion." },
      { word: 'heresy', definition: 'Belief or opinion contrary to orthodox religious or political doctrine.', connection: "In Oceania, heresy is not just religious — any independent thought is heretical. The novel asks: can heresy exist if there are no words in which to express it?" },
      { word: 'clandestine', definition: 'Kept secret or done secretively, especially because illicit.', connection: "Winston and Julia\'s relationship is entirely clandestine — every meeting planned with elaborate precaution, every moment of privacy stolen from the Party\'s surveillance." },
      { word: 'martyr', definition: 'A person who is killed because of their beliefs.', connection: "Winston accepts he may become a martyr — but the novel\'s darkest insight is that in Oceania, martyrdom is meaningless, because the martyr will simply be made into an unperson." },
    ],
  },
  {
    id: 5,
    title: 'Language & Thought',
    description: "Words about communication, meaning, and the relationship between language and consciousness.",
    terms: [
      { word: 'semantic', definition: 'Relating to meaning in language or logic.', connection: "Newspeak is a semantic project — not just changing words, but systematically eliminating semantic range until only orthodox meanings can be expressed." },
      { word: 'ambiguity', definition: 'The quality of being open to more than one interpretation; inexactness.', connection: "Ambiguity is the enemy of Newspeak. Every Newspeak word has one clearly defined meaning. Ambiguity is where independent thought lives — and the Party means to kill it." },
      { word: 'euphemism', definition: 'A mild or indirect word or expression substituted for one considered too harsh or blunt.', connection: "The Party\'s language is built on euphemism: \"memory hole\" for incinerator, \"joycamp\" for forced labour camp, \"Miniluv\" for the Ministry of torture." },
      { word: 'rhetoric', definition: 'The art of effective or persuasive speaking or writing; language designed to have a persuasive or impressive effect.', connection: "The Party\'s slogans are pure rhetoric — designed not to persuade through reason, but to condition through repetition. Syme understands this; Parsons does not notice." },
      { word: 'vernacular', definition: 'The language or dialect spoken by the ordinary people of a country or region.', connection: "The proles speak a kind of vernacular that the Party has not bothered to replace with Newspeak — another sign that they are considered beneath ideological control." },
    ],
  },
];

// ── Part 1 Scenes ─────────────────────────────────────────────────────────────

export const SCENES: Scene[] = [
  // ── PART ONE ──────────────────────────────────────────────────────────────

  {
    id: 'part1-chapter1',
    title: 'Chapter 1: The Diary',
    summary: "Winston Smith returns to his apartment in Victory Mansions on a cold April day. The hallway smells of boiled cabbage. He drinks some Victory Gin and, in a moment of quiet rebellion, begins writing in a diary — an act punishable by death. He writes 'DOWN WITH BIG BROTHER'. He recalls the Two Minutes Hate, a dark-haired girl (Julia), and an exchange of glances with the powerful Inner Party member O'Brien.",
    themes: ['Totalitarianism', 'Surveillance'],
    quote: "It was a bright cold day in April, and the clocks were striking thirteen.",
    closeReadingData: {
      passages: [
        {
          passage: 'It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him. The hallway smelt of boiled cabbage and old rag mats.',
          question: 'What does Orwell achieve by packing the opening sentence with hostile sensory detail — cold wind, gritty dust, the smell of boiled cabbage — while also having the clocks strike thirteen?',
          options: [
            { text: 'He establishes Winston as a sympathetic character who deserves better than his environment.', isCorrect: false, feedback: 'The opening is not primarily about Winston\'s character — it is about the world. Orwell builds the atmosphere before introducing the man.' },
            { text: 'He immerses the reader in a world where the physical environment is hostile to human life, and where the impossible — clocks striking thirteen — is presented as unremarkable fact.', isCorrect: true, feedback: 'Correct. The sensory details make oppression bodily before it becomes political. And "thirteen" — never explained, never apologised for — establishes the logic of a world where the wrong thing has been normalised.' },
            { text: 'He uses spring imagery (April, bright) to suggest that hope still exists beneath the grimness.', isCorrect: false, feedback: '"April" and "bright" are immediately cancelled by "cold" and "vile wind". Orwell gives with one hand and takes with the other — the hope is a feint.' },
            { text: 'He establishes that Winston is unusual and perceptive compared to other citizens.', isCorrect: false, feedback: 'Winston is hunched and hurrying, trying to escape the wind. The opening does not distinguish him — it places him inside a world that is hostile to everyone.' },
          ],
          insight: 'Orwell\'s opening performs the world of the novel rather than describing it. The wrongness of "thirteen" is never explained — it is simply there, as natural as April. This is the grammar of totalitarianism: when citizens have been conditioned to accept the impossible as ordinary, the capacity to resist has already been eroded. The hostile sensory detail achieves something different: it makes the oppression physical, felt in the body before it is understood politically. Winston cannot escape the wind, cannot stop the dust, cannot avoid the smell. He is already trapped before a single Thought Police officer has appeared.',
        },
        {
          passage: 'On each landing, opposite the lift shaft, the poster with the enormous face gazed from the wall. It was one of those pictures which are so contrived that the eyes follow you about when you move. BIG BROTHER IS WATCHING YOU, the caption beneath it ran.',
          question: 'What does Orwell achieve by making the poster\'s eyes "follow you about when you move" — a painted trick, not real surveillance technology?',
          options: [
            { text: 'He shows that the Party uses sophisticated technology to achieve genuine omniscience.', isCorrect: false, feedback: 'The following eyes are a visual illusion — a painted trick. That is precisely the point. Real surveillance is not required.' },
            { text: 'He reveals that Winston is paranoid and imagines the poster moving.', isCorrect: false, feedback: 'The narrator tells us the poster is "so contrived" — this is a design fact, not a symptom of Winston\'s mental state.' },
            { text: 'He creates the logic of the panopticon: the feeling of being watched is more powerful than actual surveillance. Citizens police themselves because they cannot know when they are observed.', isCorrect: true, feedback: 'Correct. The poster does not actually watch anyone. But its design ensures that wherever you stand, you feel watched. This is the insight Orwell is building from the very first chapter: control does not require omniscience, only the belief in it.' },
            { text: 'He establishes a contrast between the warmth implied by "Brother" and the coldness of surveillance.', isCorrect: false, feedback: 'The "Brother" irony is worth noting, but it is not the effect of this specific phrase about the eyes following you.' },
          ],
          insight: 'The poster passage introduces the novel\'s most important political idea: control does not need to be real to be effective. The design trick — eyes that follow — means there is nowhere in the building to stand without feeling observed. The imperative "IS WATCHING YOU" is always present tense, always active. Orwell positions this on every landing: it is inescapable in the vertical space of daily life. The word "enormous" applied to the face, repeated throughout Airstrip One, ensures that authority cannot be diminished by distance. Size and repetition make the figure overwhelming before the caption makes the threat explicit.',
        },
      ],
    },
    paragraphBuilderData: {
      focus: 'How does Orwell use the opening of the novel to establish the world of Oceania as oppressive and psychologically threatening?',
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves in Chapter 1? Choose one, then refine it in your own words.',
          guidedOptions: [
            'In Chapter 1, Orwell establishes Oceania as a world where even the physical environment has been made hostile to human life, before a single act of political violence has occurred.',
            'In Chapter 1, Orwell presents totalitarian control as something so thoroughly normalised that the impossible — clocks striking thirteen — passes without comment or explanation.',
            'In Chapter 1, Orwell shows that private writing is already an act of rebellion, and the act of watching is already an instrument of psychological domination.',
          ],
          placeholder: 'Write your own version of the claim, or edit the one you selected...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect? Choose one, then explain it in your own words.',
          guidedOptions: [
            'Incongruity — the wrongness of "clocks striking thirteen" is presented as unremarkable, conditioning the reader into a world where the impossible is ordinary.',
            'Hostile sensory imagery — every tactile and olfactory detail (cold wind, gritty dust, smell of boiled cabbage) makes the oppression physical before it becomes political.',
            'The panopticon effect — the "following eyes" of the Big Brother poster create the feeling of inescapable surveillance without requiring any actual surveillance technology.',
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument? Choose one, then embed it smoothly in a sentence.',
          guidedOptions: [
            '"It was a bright cold day in April, and the clocks were striking thirteen."',
            '"The hallway smelt of boiled cabbage and old rag mats."',
            '"It was one of those pictures which are so contrived that the eyes follow you about when you move."',
          ],
          placeholder: 'Embed your chosen quotation in a sentence: Orwell writes "..." and this...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve? What does it make the reader feel or understand?',
          guidedOptions: [
            'This immerses the reader in the physical degradation of Oceanic life — oppression is felt in the body before it is understood politically.',
            'This creates a quiet, sustained unease: the reader, like Winston, senses that something is fundamentally wrong before they can articulate what it is.',
            'This reveals how control is maintained through psychological architecture rather than direct violence — the built environment performs domination.',
          ],
          placeholder: 'Explain the effect on the reader and what it reveals about Orwell\'s intentions...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: 'Why is this significant to the novel as a whole? What is Orwell arguing about power, freedom, or control?',
          guidedOptions: [
            'Orwell argues that the most effective totalitarianism operates not through explosive violence, but through the slow normalisation of the impossible — once citizens stop noticing what is wrong, the system has already succeeded.',
            'By making oppression sensory and environmental before it is ideological, Orwell reveals that totalitarian control begins with the body: when physical comfort is denied and private space is colonised, the capacity to resist is eroded from the inside.',
            'The opening establishes the novel\'s central concern: that control of the environment and language precedes control of thought, and that when citizens have lost the words and the space to think differently, freedom has already been taken.',
          ],
          placeholder: 'Connect your argument to Orwell\'s broader concerns about totalitarianism...',
        },
      ],
      modelParagraph: 'In Chapter 1, Orwell establishes the oppressive world of Oceania through incongruity: the opening sentence presents clocks striking thirteen as unremarkable fact, a detail whose quiet wrongness is never explained or apologised for. Orwell writes "it was a bright cold day in April, and the clocks were striking thirteen" — familiar spring imagery immediately cancelled by the impossible number, offered without comment. This creates a sustained, sourceless unease: the reader, like Winston, senses that something has been fundamentally distorted, before they can name what it is. Throughout the chapter, hostile sensory imagery reinforces this: the physical environment — cold wind, gritty dust, the smell of boiled cabbage — makes oppression felt in the body before it is understood politically. Orwell\'s central argument in this opening is that the most complete form of totalitarian control does not announce itself through spectacular violence, but through the quiet normalisation of the impossible: when citizens have stopped noticing the wrongness, the system has already succeeded.',
    },
    worldTodayData: {
      question: 'Orwell makes the act of private writing an act of rebellion. Where in the world today do governments or institutions treat private communication as a potential threat?',
      sampleResponses: [
        'China\'s Great Firewall blocks access to Google, foreign news sites, and social media platforms like Instagram and Twitter. Citizens who use VPNs to access banned content risk legal penalties — private communication is treated as potential subversion, and messaging apps are routinely monitored by the state.',
        'Documents released by Edward Snowden in 2013 revealed that intelligence agencies including the NSA and GCHQ were recording private communications — emails, phone calls, browsing history — on a mass scale, without the knowledge of the people being watched. The parallel with Winston\'s telescreen is that the surveillance does not need to be noticed to be effective.',
        'The UK\'s Online Safety Act 2023 requires social media platforms to remove content classified as "harmful." Civil liberties organisations have argued that the definition of harm is broad enough to threaten encrypted private messaging — that reading private messages to enforce public content rules undermines the principle of private communication itself.',
      ],
    },
  },

  {
    id: 'part1-chapter2',
    title: 'Chapter 2: The Parsons',
    summary: "Winston is interrupted by a knock at the door: it is Mrs Parsons, asking for help with a clogged drain. Her children, dressed in Junior Spies uniforms, play violently and accuse Winston of being a thought-criminal. Winston reflects on the horror of a society where children are conditioned to spy on their parents — and recognises that the Parsons family represents the perfection of the Party's design.",
    themes: ['Loyalty vs. Betrayal', 'Psychological Manipulation'],
    quote: "It was almost normal for people over thirty to be frightened of their own children.",
    closeReadingData: {
      passages: [
        {
          passage: 'It was almost normal for people over thirty to be frightened of their own children. And with good reason, for hardly a week passed in which The Times did not carry a paragraph describing how some eavesdropping little sneak — "child hero" was the phrase generally used — had overheard some compromising remark and denounced its parents to the Thought Police.',
          question: 'What does Orwell achieve by presenting children\'s denunciation of their parents as a weekly newspaper statistic, delivered in a tone of flat, bureaucratic routine?',
          options: [
            { text: 'He shows his outrage at the Party through the narrator\'s bitter tone.', isCorrect: false, feedback: 'The narrator is neither outraged nor bitter. That restraint is the entire technique. Orwell understood that cold reportage is more disturbing than moral condemnation.' },
            { text: 'He uses understatement to normalise horror — by presenting the betrayal of parents as a minor administrative fact, he mimics the numbing effect of totalitarian conditioning.', isCorrect: true, feedback: 'Correct. "Almost normal" and "hardly a week passed" treat children denouncing their parents as routine news. The narrator has already been broken by the system — and that is precisely what Orwell is showing us.' },
            { text: 'He creates sympathy for the children, who are victims of indoctrination rather than genuine betrayers.', isCorrect: false, feedback: 'The children\'s motivations are not explored here. The passage is not about the children\'s inner experience but about the social normalisation of betrayal.' },
            { text: 'He uses irony to show that "child hero" is the Party\'s official language for informers.', isCorrect: false, feedback: 'The irony of "child hero" is present and worth noting, but the dominant technique is the flat, unremarking tone — not the ironic naming.' },
          ],
          insight: 'Orwell\'s most powerful technique in Chapter 2 is understatement through matter-of-fact narration. "Almost normal" is doing enormous work: the qualifier "almost" acknowledges something is wrong, then immediately retreats. By delivering children\'s denunciation of their parents as a weekly news item — a statistic rather than a tragedy — Orwell mimics the numbing effect of totalitarian normalisation. The reader feels the horror precisely because the narrator does not. The phrase "child hero" is the sharpest detail: the Party has not only made betrayal acceptable, it has made it heroic. The children are not failing a moral test. They are passing one.',
        },
        {
          passage: '"Down with Big Brother!" he said. "Down with Big Brother! Down with Big Brother!" over and over again, very slowly, with long intervals between each time. Winston saw his hand pressing the pen down on paper. "You\'re a traitor!" yelled the boy. "You\'re a thought-criminal! You\'re a Eurasian spy! I\'ll shoot you, I\'ll vaporize you, I\'ll send you to the salt mines!"',
          question: 'What does Orwell achieve by having a child use the full vocabulary of the Party — "traitor," "thought-criminal," "vaporize" — against an adult neighbour in play?',
          options: [
            { text: 'He shows that children understand the Party\'s ideology more clearly than adults do.', isCorrect: false, feedback: 'The child does not understand the ideology — he has internalised the vocabulary without needing to understand it. This distinction is precisely what Orwell is making.' },
            { text: 'He reveals the success of the Party\'s indoctrination: political language has become the natural grammar of childhood play, with no need for comprehension — only conditioned repetition.', isCorrect: true, feedback: 'Correct. The child is not consciously playing at being the Thought Police. The vocabulary is as natural to him as any other game. This is what complete ideological conditioning looks like: it does not require belief, only the right reflexes.' },
            { text: 'He creates tension about whether the child will actually report Winston.', isCorrect: false, feedback: 'Whether he reports Winston is not the concern here. The horror is not the specific threat but what the child\'s language reveals about how deeply the system has penetrated childhood itself.' },
            { text: 'He uses the child as comic relief to break the tension of Winston\'s diary-writing.', isCorrect: false, feedback: 'There is nothing comic about this scene. The child is the most chilling figure in the chapter.' },
          ],
          insight: 'The Parsons children are the Party\'s masterwork. They have not been forced into orthodoxy — they have been formed by it. The vocabulary of totalitarianism ("traitor," "thought-criminal," "vaporize") flows from the boy as naturally as playground rhymes. Orwell is making a precise argument: the most complete form of control is not the kind that requires surveillance and punishment, but the kind that has been so thoroughly internalised it needs neither. The children are not threatening Winston out of malice. They are playing. And that is what makes them terrifying.',
        },
      ],
    },
    paragraphBuilderData: {
      focus: 'How does Orwell use the Parsons children to show what totalitarianism achieves when it is fully successful?',
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves in Chapter 2? Choose one, then refine it.',
          guidedOptions: [
            'In Chapter 2, Orwell uses the Parsons children to reveal how totalitarianism inverts the natural order of the family — making children instruments of state control against their own parents.',
            'In Chapter 2, Orwell shows that the most complete form of indoctrination does not require understanding, only the right reflexes — the children use the language of the Party without needing to comprehend it.',
            'Through the flat, matter-of-fact tone of the narration, Orwell reveals how normalisation works: when horror is reported as routine fact, the capacity for moral response is destroyed.',
          ],
          placeholder: 'Write your own version of the claim, or edit the one you selected...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            'Understatement — horror is delivered in the tone of routine administrative fact, making it more disturbing than outrage would.',
            'Dramatic irony — the reader can see what the Parsons family cannot: that the children\'s enthusiasm will eventually destroy their own father.',
            'Characterisation through speech — the child\'s natural fluency in the vocabulary of state violence reveals the depth of the Party\'s conditioning.',
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"It was almost normal for people over thirty to be frightened of their own children."',
            '"Child hero" was the phrase generally used — had overheard some compromising remark and denounced its parents to the Thought Police.',
            '"Down with Big Brother! Down with Big Brother!" [...] "You\'re a traitor! You\'re a thought-criminal! You\'re a Eurasian spy!"',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            'The flat, unremarking tone creates a profound unease — the phrase "almost normal" acknowledges something is wrong while simultaneously retreating, mimicking how the system has already broken the narrator\'s capacity for moral reaction.',
            'The irony of "child hero" reveals the Party\'s complete control over moral language: it has not merely permitted betrayal but made it admirable — the children are not failing a test, they are passing one.',
            'The child\'s fluency in the vocabulary of terror ("vaporize," "thought-criminal") without apparent understanding reveals that the most complete indoctrination does not require comprehension, only conditioned reflex.',
          ],
          placeholder: 'Explain the effect on the reader...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: 'Why is this significant to the novel as a whole?',
          guidedOptions: [
            'Orwell argues that totalitarianism reaches its perfection not when it punishes dissent, but when it makes dissent unthinkable — the Parsons children have not been forced into orthodoxy, they have been formed by it.',
            'By destroying family loyalty — the most fundamental human bond — the Party removes the last private space that might shelter resistance. The family becomes the state\'s most effective surveillance unit.',
            'The Parsons children represent Orwell\'s most disturbing argument: that a generation raised entirely within a totalitarian system will not need to be coerced. They will believe.',
          ],
          placeholder: 'Connect your argument to Orwell\'s broader concerns...',
        },
      ],
      modelParagraph: 'In Chapter 2, Orwell uses the flat, matter-of-fact tone of the narration to reveal how normalisation destroys the capacity for moral response. The narrator reports that "it was almost normal for people over thirty to be frightened of their own children" — the qualifier "almost" acknowledges something is wrong while immediately retreating, mimicking how the system has already broken the narrator\'s ability to react with appropriate horror. The irony of the "child hero" phrase sharpens this: the Party has not merely made betrayal acceptable but heroic. The Parsons children, who use the full vocabulary of state violence — "traitor," "thought-criminal," "vaporize" — as naturally as playground rhymes, are the clearest evidence of what complete indoctrination looks like. Orwell\'s argument in this chapter is that totalitarianism reaches its perfection not when it punishes dissent but when it makes dissent unthinkable: these children do not need to be coerced, because they have been formed.',
    },
    worldTodayData: {
      question: 'The Party makes children into instruments of loyalty against their own families. Where in today\'s world do you see states using schools, youth groups, or social pressure to shape how young people relate to authority?',
      sampleResponses: [
        'In North Korea, the government requires attendance at ideological education sessions from primary school. Students are taught that the Kim dynasty are near-divine figures. Family members are legally required to report suspicious behaviour to the authorities — and children\'s loyalty to the state is considered higher than loyalty to their parents.',
        'During the Cultural Revolution in China (1966–76), young people organised into Red Guard units were encouraged to denounce teachers, parents, and community leaders who showed insufficient loyalty to Mao. The result was a generation turned against its own families — an experience whose trauma is still rarely discussed in China today.',
        'In many countries, compulsory national service or military training for teenagers is justified as building national loyalty and civic identity. The question Orwell raises is: where does civic education end and ideological conditioning begin? Who decides what values young people should internalise, and by what means?',
      ],
    },
  },

  {
    id: 'part1-chapter3',
    title: 'Chapter 3: Dreams & Reality',
    summary: "Winston dreams of his mother and sister, realising their deaths were a sacrifice made so that he could live — a kind of tragedy belonging to an older, more human world. He then dreams of the Golden Country, a pastoral landscape of warmth and freedom. He wakes to the compulsory exercise programme on the telescreen. The chapter meditates on memory, the Party's falsification of the past, and the question of whether the past has any real existence.",
    themes: ['Control of Information', 'Psychological Manipulation'],
    quote: "Who controls the past controls the future: who controls the present controls the past.",
    closeReadingData: {
      passages: [
        {
          passage: 'Suddenly he was standing on short springy turf, on a summer evening when the slanting rays of the sun gilded the ground. The landscape that he was looking at recurred so often in his dreams that he was never fully certain whether or not he had seen it in the real world. In his waking thoughts he called it the Golden Country.',
          question: 'What does Orwell achieve by describing the Golden Country in sensory detail that is richer and more physically vivid than anything in the waking world of the novel?',
          options: [
            { text: 'He suggests that Winston\'s dreams are a form of mental illness — an escape from reality into fantasy.', isCorrect: false, feedback: 'Orwell values the dreams highly. They are not escapism — they represent the human capacity for natural, uncontrolled experience that the Party is trying to destroy.' },
            { text: 'He uses pastoral imagery to reveal what totalitarianism has actually stolen: not only freedom in the abstract, but the lived texture of a full human life — warmth, ease, natural beauty.', isCorrect: true, feedback: 'Correct. The dream is more physically real than reality — "springy turf," "slanting rays," "gilded." These are sensory experiences Winston\'s waking world has all but erased. Orwell is making a precise argument about what the Party takes.' },
            { text: 'He uses the Golden Country to foreshadow Winston\'s meeting with Julia, who will appear in the same landscape.', isCorrect: false, feedback: 'The foreshadowing is real, but it is not what the detailed sensory description achieves. The richness of the pastoral imagery is doing different, more fundamental work.' },
            { text: 'He contrasts the beauty of nature with the ugliness of politics to make a simple moral argument.', isCorrect: false, feedback: 'The contrast is present, but "simple moral argument" does not capture what Orwell is doing. The Golden Country is a critique of what is lost, not just a contrast.' },
          ],
          insight: 'The Golden Country is Orwell\'s deliberate pastoral contrast — a technique with deep roots in English literary tradition, where an idealised landscape represents everything civilisation has abandoned. The sensory richness here ("springy turf," "slanting rays," "gilded") stands in total opposition to the grey, gritty, cold world of the waking chapters. By making the dream feel more physically real than reality, Orwell reveals what the Party has actually stolen: not just freedom as a political concept, but the lived texture of a human life. The capacity to feel warmth, to walk on grass, to be at ease in a body — these are the things the Party is systematically destroying. The Golden Country represents a world where the body is allowed to be itself.',
        },
        {
          passage: 'The next moment a hideous, grinding screech, as of some monstrous machine running without oil, burst from the big telescreen at the end of the room. It was a noise that set one\'s teeth on edge and bristled the hair at the back of one\'s neck.',
          question: 'This screech immediately follows the warm, silent beauty of the Golden Country dream. What does Orwell achieve through this violent contrast?',
          options: [
            { text: 'He suggests that Winston\'s dreams are meaningless hallucinations that are immediately corrected by reality.', isCorrect: false, feedback: 'The dreams are central to the novel\'s meaning — they are what the Party is trying to destroy. Orwell does not dismiss them as hallucinations.' },
            { text: 'He uses juxtaposition to make the Party\'s intrusion feel like a physical violation of Winston\'s inner life — the last free space has been assaulted.', isCorrect: true, feedback: 'Correct. The violence of the contrast enacts the novel\'s central conflict: inner life versus total control. The transition from golden warmth to mechanical screech is not just a mood shift — it is Orwell dramatising the colonisation of the unconscious.' },
            { text: 'He creates comic relief after the emotional weight of Winston\'s dreams.', isCorrect: false, feedback: 'There is nothing comic in this transition. The shift is brutal and deliberate.' },
            { text: 'He uses onomatopoeia to show Winston\'s subjective, distorted perception of the telescreen.', isCorrect: false, feedback: 'The screech is described objectively ("set one\'s teeth on edge, bristled the hair") — this is not Winston\'s private distortion, it is the telescreen\'s actual effect on any body within earshot.' },
          ],
          insight: 'Orwell cuts from the warm, sensory richness of the Golden Country to the "hideous, grinding screech" of the telescreen: the abrupt violence of the contrast enacts the novel\'s central argument — that totalitarianism does not merely control behaviour, but colonises the last free space, the unconscious itself. The language of the screech is worth examining: "monstrous machine running without oil" — the machine is broken, maintained only by compulsion, indifferent to the discomfort it causes. This is the telescreen\'s relationship to the body: it does not care about the human beings it disturbs. The body\'s involuntary responses ("teeth on edge," "bristled hair") show that even physical autonomy has been taken. You cannot choose not to flinch.',
        },
      ],
    },
    paragraphBuilderData: {
      focus: 'How does Orwell use Winston\'s dreams to reveal what totalitarianism actually destroys — and why this matters to the novel\'s argument?',
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves through Winston\'s dreams in Chapter 3?',
          guidedOptions: [
            'In Chapter 3, Orwell uses the Golden Country dream to reveal that the Party\'s deepest crime is not the suppression of political freedom, but the destruction of the lived texture of a full human life.',
            'Through the violent contrast between Winston\'s dream and the telescreen\'s screech, Orwell shows that totalitarianism colonises the unconscious itself — the last space that should be private.',
            'In Chapter 3, Orwell uses pastoral imagery to make the reader feel, through sensation, what Oceania has taken — transforming an abstract political argument into a physical experience of loss.',
          ],
          placeholder: 'Write your own version of the claim...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            'Juxtaposition — the warm, sensory richness of the pastoral dream is placed directly against the "hideous, grinding screech" of the telescreen, making the Party\'s intrusion feel like physical violence.',
            'Pastoral imagery — the Golden Country is described with unusual sensory richness (springy turf, gilded light) that makes the dream feel more physically real than the waking world.',
            'Prolepsis — the Golden Country reappears as a real landscape when Winston meets Julia, making this dream the first anticipation of a connection the Party will ultimately destroy.',
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"Suddenly he was standing on short springy turf, on a summer evening when the slanting rays of the sun gilded the ground."',
            '"A hideous, grinding screech, as of some monstrous machine running without oil, burst from the big telescreen."',
            '"It was almost normal for people over thirty to be frightened of their own children." [Note: wrong chapter — choose one above]',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            'The pastoral richness of the dream — "springy turf," "slanting rays," "gilded" — creates a physical warmth that the reader feels, not just understands: Orwell gives the reader the sensation of what has been stolen before telling them it is gone.',
            'The violent contrast between the golden landscape and the mechanical screech makes the Party\'s intrusion feel like a physical violation of Winston\'s last private space — the unconscious itself.',
            'By making the dream feel more real than reality, Orwell reveals what is truly at stake: not political rights in the abstract, but the capacity to be a body at ease in the world.',
          ],
          placeholder: 'Explain the effect on the reader...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: 'Why is this significant to the novel as a whole?',
          guidedOptions: [
            'Orwell argues that the most complete totalitarianism does not merely suppress political opposition — it colonises the inner life, the unconscious, the body itself. When even sleep is no longer safe, there is nowhere left to be free.',
            'The Golden Country establishes what the novel is ultimately about: not just a political system, but the destruction of the human capacity for pleasure, warmth, and natural experience. The Party\'s crime is not only political, but existential.',
            'By showing that the capacity for dreaming a different world still exists in Winston — even in 1984 — Orwell suggests that resistance begins in the imagination, and that this is precisely why the Party must destroy it.',
          ],
          placeholder: 'Connect your argument to Orwell\'s broader concerns...',
        },
      ],
      modelParagraph: 'In Chapter 3, Orwell uses juxtaposition to reveal that totalitarianism\'s deepest crime is the colonisation of the unconscious. Winston\'s Golden Country dream is described with unusual sensory richness — "short springy turf," "slanting rays," light that "gilded the ground" — making it feel more physically real than anything in his waking life. The abrupt transition to "a hideous, grinding screech, as of some monstrous machine running without oil" enacts the Party\'s intrusion as a physical assault on the last free space. The violence of the contrast is the argument: Orwell does not need to state that inner life is under attack, because the reader has just experienced the invasion. What is at stake, this chapter makes clear, is not political freedom in the abstract — it is the capacity to be a body at ease in the world, to feel warmth and ease, to dream without interruption. When even sleep is no longer safe, there is nowhere left to be free.',
    },
    worldTodayData: {
      question: 'The Party tries to control Winston\'s inner life — his dreams, his memories, his private thoughts. What modern technologies or systems enter into your private mental life in ways you didn\'t explicitly agree to?',
      sampleResponses: [
        'Recommendation algorithms on TikTok, Instagram, and YouTube learn what holds your attention and serve you more of it. The platforms shape your desires: you think you are choosing what to watch, but the algorithm is selecting what you want. Orwell\'s "following eyes" worked by being present everywhere in physical space; the algorithm works by being present inside the space of attention itself.',
        'Sleep tracking apps and smart devices — watches, phones kept on the bedside table — now collect biometric data even while you sleep. Heart rate, movement, breathing, duration of REM cycles. The interior of the body and the unconscious hours of the night have become datasets. The difference from Oceania is that you consent, often without reading the terms, and the data is held by corporations rather than states.',
        'During the COVID-19 pandemic, several governments used contact tracing apps that tracked movement and proximity data. In some countries, these systems were later expanded or retained for purposes beyond their original scope. The question of where emergency surveillance ends and permanent surveillance begins has not been resolved.',
      ],
    },
  },

  {
    id: 'part1-chapter4',
    title: 'Chapter 4: The Memory Hole',
    summary: "Winston is at work in the Records Department of the Ministry of Truth. His job is to rewrite past newspaper articles so they align with the Party's current version of events. He invents a fictional war hero, 'Comrade Ogilvy,' to replace a vaporized person in the official record. This chapter explores the mutability of the past and reveals something unsettling: Winston takes genuine professional pride in his work.",
    themes: ['Control of Information'],
    quote: "Comrade Ogilvy, who had never existed in the present, now existed in the past.",
    closeReadingData: {
      passages: [
        {
          passage: 'Winston\'s greatest pleasure in life was in his work. Most of it was a tedious routine, but included among it there were also jobs so difficult and intricate that you could lose yourself in them as in the depths of a mathematical problem — delicate pieces of forgery in which you had nothing to guide you except your knowledge of the principles of Ingsoc and your estimate of what the Party wanted you to say.',
          question: 'What does Orwell achieve by describing the falsification of history using the vocabulary of skilled craftsmanship — "delicate," "intricate," "lose yourself in them"?',
          options: [
            { text: 'He shows that Winston is morally compromised and knows it, taking guilty pleasure in wrongdoing.', isCorrect: false, feedback: 'Guilt is conspicuously absent from this passage. That absence is precisely what Orwell is showing us — the horror is not Winston\'s guilt but his lack of it.' },
            { text: 'He reveals that totalitarianism is maintained not by reluctant compliance but by genuine professional pride — the moral horror disappears inside the vocabulary of craft.', isCorrect: true, feedback: 'Correct. "Delicate pieces of forgery" is the key phrase — "delicate" is a word of artistic admiration. By framing the destruction of truth as skilled work, Orwell shows how atrocity becomes invisible to the people who perform it.' },
            { text: 'He is satirising Winston by showing that he is self-deceived about the moral significance of his work.', isCorrect: false, feedback: 'There is no satirical distance here. Orwell reports Winston\'s pride without ironic commentary — and this is itself the technique.' },
            { text: 'He uses the contrast between "tedious routine" and "intricate" work to show that Winston craves intellectual challenge.', isCorrect: false, feedback: 'The desire for intellectual challenge is present, but it is not the primary effect Orwell is creating. The moral dimension is more important.' },
          ],
          insight: 'Chapter 4 reveals how totalitarianism sustains itself: not through reluctant compliance but through genuine professional pride. Orwell describes the falsification of history using the language of skilled craftsmanship — "delicate," "intricate," "lose yourself in them." These are words of admiration, of artistic care. The most disturbing aspect of the passage is the absence of guilt: Winston is not suppressing his conscience. He feels no discomfort. This is the system working perfectly. When atrocity is framed as craft, and craft as pleasure, the moral dimension evaporates entirely. Orwell is making an argument about complicity that applies far beyond Oceania: when people are rewarded — emotionally as well as materially — for performing institutional harm, they do not need to be forced.',
        },
        {
          passage: 'He rolled up the completed job and dropped it into the pneumatic tube. Then, with a movement which was as nearly as possible unconscious, he crumpled up the original copy and dropped it into the memory hole.',
          question: 'What does Orwell achieve through the naming of "memory hole" — and by having Winston\'s act of destruction be "as nearly as possible unconscious"?',
          options: [
            { text: 'He creates mystery about where the destroyed documents actually go.', isCorrect: false, feedback: 'There is no mystery — we are told they are incinerated. The euphemism is designed to prevent thought, not create intrigue.' },
            { text: 'He uses euphemism and habitual gesture together to show how the systematic destruction of truth becomes an unreflective bodily routine — indistinguishable from filing.', isCorrect: true, feedback: 'Correct. "Memory hole" makes the destruction of historical evidence sound like office furniture. The "unconscious" movement shows that Winston has performed this act so many times it requires no mental engagement whatsoever. The moral weight has been entirely dissolved by repetition.' },
            { text: 'He shows that Winston is uncomfortable with this particular act and suppresses his awareness of what he is doing.', isCorrect: false, feedback: 'The movement is unconscious because it is habitual, not because Winston is suppressing guilt. The distinction is crucial: habit is more disturbing than suppression.' },
            { text: 'He contrasts the careful craft of the forgery with the careless disposal of the evidence.', isCorrect: false, feedback: 'The contrast is present, but the primary effect is the combination of the euphemistic name and the unconscious gesture — both working to normalise atrocity.' },
          ],
          insight: 'The term "memory hole" is one of Orwell\'s most precise inventions. It has the dull ring of office furniture — neutral, functional, unremarkable. Naming an incinerator for historical truth in this way makes the destruction of the past feel as unremarkable as filing a document. The "unconscious" movement is equally important: Winston does not decide to destroy this evidence. His hand does it. The action has been performed so many times that it has been delegated to the body. This is what complete normalisation looks like: not a moment of moral surrender, but the absence of a moment — the erasure of the decision itself.',
        },
      ],
    },
    paragraphBuilderData: {
      focus: 'How does Orwell use Winston\'s work in the Ministry of Truth to reveal how totalitarianism is sustained through complicity rather than coercion?',
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves in Chapter 4?',
          guidedOptions: [
            'In Chapter 4, Orwell reveals that totalitarianism is sustained not by reluctant compliance but by genuine professional pride — people do not need to be forced if they find satisfaction in the work.',
            'In Chapter 4, Orwell uses the language of craft and skill to reveal how moral atrocity becomes invisible: when the destruction of truth is framed as skilled work, the conscience has nothing to react to.',
            'In Chapter 4, Orwell shows how repetition dissolves moral awareness — the "unconscious" gesture of destroying historical evidence reveals that the act no longer requires a decision, because the decision has been made so many times it is now instinctive.',
          ],
          placeholder: 'Write your own version of the claim...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            'Irony — the destruction of truth is described through the vocabulary of skilled craftsmanship ("delicate," "intricate"), creating a disturbing gap between the language and the act it describes.',
            'Euphemism — "memory hole" gives the incinerator for historical evidence the dull sound of office furniture, making the systematic destruction of the past sound unremarkable.',
            'Absence of moral commentary — Orwell\'s deliberate refusal to note the horror of Winston\'s work, combined with Winston\'s evident pride, is itself the technique: the narrator has internalised the system.',
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"Delicate pieces of forgery in which you had nothing to guide you except your knowledge of the principles of Ingsoc."',
            '"With a movement which was as nearly as possible unconscious, he crumpled up the original copy and dropped it into the memory hole."',
            '"Comrade Ogilvy, who had never existed in the present, now existed in the past."',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            'The phrase "delicate pieces of forgery" is profoundly disturbing: "delicate" is a word of artistic admiration, applied here to the systematic destruction of historical truth. The moral horror evaporates inside the professional pride.',
            '"As nearly as possible unconscious" reveals that Winston\'s hand destroys evidence without his mind engaging — the act has been delegated to the body through repetition, and the decision itself has been erased.',
            'By presenting the existence of Comrade Ogilvy in "the past" as equivalent to Charlemagne or Julius Caesar, Orwell reveals that the past has no ontological stability — it is whatever the Party currently requires it to be.',
          ],
          placeholder: 'Explain the effect on the reader...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: 'Why is this significant to the novel as a whole?',
          guidedOptions: [
            'Orwell argues that the most dangerous form of totalitarian complicity is not fear but satisfaction — a system that gives people professional pride in performing atrocity does not need to coerce them, because they have already internalised its values.',
            'By showing that truth can be created retroactively — that Comrade Ogilvy can exist in the past despite never having existed in the present — Orwell makes his most disturbing argument: if the past is mutable, then so is the basis of all knowledge, all morality, all resistance.',
            'The Ministry of Truth is Orwell\'s clearest argument that language precedes reality: what is written down, filed, and preserved becomes what happened. The party that controls the archive controls the past — and therefore the future.',
          ],
          placeholder: 'Connect your argument to Orwell\'s broader concerns...',
        },
      ],
      modelParagraph: 'In Chapter 4, Orwell reveals the mechanism by which totalitarianism sustains itself: not reluctant compliance, but genuine professional pride. He describes Winston\'s work using the vocabulary of skilled craftsmanship — "delicate pieces of forgery" — where "delicate" is a word of artistic admiration applied to the systematic destruction of historical truth. The moral horror disappears inside the professional pride: Winston feels no guilt, and Orwell refuses to supply any. This technique of deliberate moral absence is itself the argument. The "unconscious" gesture of dropping evidence into the memory hole deepens this: through repetition, the act of destroying the past has been delegated to the body — it no longer requires a decision, because the decision has been dissolved. Orwell\'s argument is that the most dangerous complicity is not coerced but internalised: a system that gives people satisfaction in the work of oppression does not need to threaten them, because they have already become its instruments.',
    },
    worldTodayData: {
      question: 'Winston\'s job is to rewrite historical records to match the Party\'s current position. Can history really be rewritten? What examples exist of states or institutions altering, suppressing, or contesting the historical record?',
      sampleResponses: [
        'During the Stalin era in the USSR, enemies of the state were literally airbrushed out of official photographs. When Leon Trotsky was expelled from the Communist Party, he disappeared from images that had included him for years — standing beside Lenin at major events. The photographic record was altered to match the current political reality, and the original images were destroyed.',
        'China\'s official history curriculum teaches the Tiananmen Square massacre (1989) very differently from accounts outside China — or does not teach it at all. For many young Chinese citizens, the event barely exists in the historical record. The analogy with the Ministry of Truth is not subtle: Chinese students can sit in the same lecture room as foreign students and have no shared version of events that occurred in their own capital city thirty-five years ago.',
        'In the UK and the US, there are ongoing debates about which statues and monuments belong in public spaces. Defenders argue that removal is erasing history; campaigners argue that a statue is not history but a celebration — that displaying a slaver in a town centre is a choice about whose story the public is asked to honour. The disagreement is really about who controls the narrative of the past, and what that narrative is for.',
      ],
    },
  },

  {
    id: 'part1-chapter5',
    title: 'Chapter 5: Syme & Newspeak',
    summary: "Winston eats lunch in the Ministry canteen with Syme, a brilliant philologist working on the Eleventh Edition of the Newspeak Dictionary. Syme speaks with genuine enthusiasm about the destruction of words — the more words eliminated, the narrower the range of thought, until thoughtcrime becomes literally impossible. Winston realises with quiet certainty that Syme will be vaporized. He is too intelligent. He sees too clearly.",
    themes: ['Psychological Manipulation', 'Control of Information'],
    quote: "Don't you see that the whole aim of Newspeak is to narrow the range of thought? In the end we shall make thoughtcrime literally impossible.",
    closeReadingData: {
      passages: [
        {
          passage: '"Don\'t you see that the whole aim of Newspeak is to narrow the range of thought? In the end we shall make thoughtcrime literally impossible, because there will be no words in which to express it. Every concept that can ever be needed will be expressed by exactly one word, with its meaning rigidly defined and all its subsidiary meanings rubbed out and forgotten."',
          question: 'What does Orwell achieve by having Syme — a loyal, enthusiastic Party member — articulate the most disturbing argument in the novel about language and thought?',
          options: [
            { text: 'He uses Syme to show that the Party\'s most dangerous members are those who lie with most confidence.', isCorrect: false, feedback: 'Syme is not lying. He is telling the truth as he understands it, with genuine intellectual excitement. That is precisely what makes him dangerous — and what will get him killed.' },
            { text: 'By placing the most chilling argument in the mouth of a true believer, Orwell reveals that the Party\'s ideological project is not hidden — it is openly celebrated by the people executing it, which makes it more disturbing than if it were a secret conspiracy.', isCorrect: true, feedback: 'Correct. Syme is not deceived. He understands what Newspeak is for, and he is proud of it. The horror is that the person explaining the mechanism of thought-destruction is doing so with the enthusiasm of someone describing a great intellectual achievement.' },
            { text: 'He uses Syme as a mouthpiece to deliver information the reader needs to understand the world of the novel.', isCorrect: false, feedback: 'Syme does provide exposition, but reducing this passage to information delivery misses the central dramatic irony: Syme is describing his own death sentence.' },
            { text: 'He shows that even the Party\'s servants do not truly understand the ideology they serve.', isCorrect: false, feedback: 'The opposite. Syme understands it perfectly — and that understanding is what will destroy him.' },
          ],
          insight: 'Syme\'s speech is one of the most concentrated moments in the novel. He is articulate, intellectually engaged, and genuinely enthusiastic. He understands what Newspeak is for better than almost anyone. And this — his clarity, his articulateness, his precision — is exactly what the Party cannot tolerate. Winston already knows this: "He will disappear. It is written in his face." The tragedy is not that Syme is fooled, but that he is not. He sees the system with perfect clarity and celebrates it. The irony Orwell is building is devastating: the most brilliant servant of the project to destroy thought will be destroyed because he thinks too well.',
        },
        {
          passage: 'Winston thought. There was something subtly wrong with Syme. He was too intelligent. He saw too clearly and spoke too plainly. The Party did not like such people. One day he would disappear. It was written in his face.',
          question: 'What does Orwell achieve by having Winston predict Syme\'s fate with calm certainty — "it was written in his face" — as if reading a natural law rather than making a guess?',
          options: [
            { text: 'He shows that Winston has access to Party intelligence about planned purges.', isCorrect: false, feedback: 'Winston has no special information. His certainty comes from understanding the system\'s logic — and that is what makes it more disturbing than a secret. The Party\'s cruelty follows a principle, and Winston has internalised it.' },
            { text: 'He uses prolepsis — the calm prediction of an inevitable future — to reveal a system whose cruelty is so logical that its victims can be identified by their virtues, not their crimes.', isCorrect: true, feedback: 'Correct. The horror is not randomness but logic. Syme will not be destroyed for disloyalty — he will be destroyed because he is too good at thinking in a system that requires people to stop thinking. The passive construction "it was written in his face" makes the destruction feel like natural law.' },
            { text: 'He creates tension about whether Winston might try to warn Syme.', isCorrect: false, feedback: 'There is no tension about warning him. The inevitability is total — and that totality is the point. Warning is impossible because the fate is a function of the system, not of any specific decision.' },
            { text: 'He shows that Winston is becoming more paranoid as the novel progresses.', isCorrect: false, feedback: 'Winston\'s prediction is not paranoid — it is accurate. He is not imagining danger; he is reading the system correctly.' },
          ],
          insight: 'The calm certainty of "it was written in his face" is the novel\'s clearest example of prolepsis as political argument. Winston does not have evidence. He has understood the system\'s logic: the Party cannot tolerate exceptional intelligence in its own service, because exceptional intelligence sees clearly, and seeing clearly is the first step toward thoughtcrime. The passive construction — "it was written," as if by a natural force — removes any sense of human agency or arbitrary malice. Syme\'s death is not a decision that any individual has made. It is a consequence of the system. This is Orwell\'s most devastating observation about totalitarianism: that its most loyal, most brilliant servants are also its most necessary sacrifices.',
        },
      ],
    },
    paragraphBuilderData: {
      focus: 'How does Orwell use Syme\'s fate to expose a central contradiction at the heart of the Party\'s intellectual project?',
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves through Syme in Chapter 5?',
          guidedOptions: [
            'In Chapter 5, Orwell uses Syme to expose a central paradox: the Party requires intellectual servants to build and maintain its systems, but cannot tolerate the intelligence those servants possess.',
            'Through the contrast between Syme\'s passionate articulateness and the quiet certainty of his predicted fate, Orwell reveals that in a totalitarian system, clarity of thought is not a virtue but a liability.',
            'In Chapter 5, Orwell uses prolepsis to show that the Party\'s cruelty follows a logic so predictable that its victims can be identified not by their crimes, but by their virtues.',
          ],
          placeholder: 'Write your own version of the claim...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            'Dramatic irony — Syme speaks with brilliant enthusiasm about the project of destroying thought, unaware that his very brilliance has already signed his death warrant.',
            'Prolepsis — Winston predicts Syme\'s fate with the quiet certainty of a natural law: "It is written in his face" presents the future as inevitable before it has occurred.',
            'Juxtaposition — Syme\'s intellectual vitality and genuine excitement are placed against Winston\'s cold foreknowledge of his destruction, creating a tonal collision that is the chapter\'s central effect.',
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"Every concept that can ever be needed will be expressed by exactly one word, with its meaning rigidly defined and all its subsidiary meanings rubbed out and forgotten."',
            '"He was too intelligent. He saw too clearly and spoke too plainly. The Party did not like such people."',
            '"One day he would disappear. It was written in his face."',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            'The passive construction "it was written in his face" removes all sense of individual agency or arbitrary malice from Syme\'s fate — his destruction is presented as a natural consequence of the system\'s logic, as inevitable as a law of physics.',
            'The gap between Syme\'s intellectual excitement and Winston\'s cold foreknowledge creates a devastating irony: Syme\'s enthusiasm is the clearest evidence of why he must be destroyed, and he cannot see it.',
            'By having Syme articulate the project of thought-destruction with such clarity and pride, Orwell reveals that the Party\'s most dangerous servants are those who understand it best — and this understanding is itself the crime.',
          ],
          placeholder: 'Explain the effect on the reader...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: 'Why is this significant to the novel as a whole?',
          guidedOptions: [
            'Through Syme, Orwell makes his most disturbing argument about totalitarianism\'s relationship to intelligence: it cannot be sustained without brilliance, but it cannot tolerate the brilliance it requires. It must destroy its own best servants to survive.',
            'Syme\'s fate reveals the logical endpoint of the Newspeak project: a world in which the people capable of building the system for destroying thought must themselves be destroyed to prevent them from using that same intelligence against the system.',
            'Orwell argues that the most complete form of totalitarian control is self-defeating: it requires exceptional people to maintain its mechanisms, but exceptional people are the only ones who can see through them. The system must therefore cannibalise its own intelligence.',
          ],
          placeholder: 'Connect your argument to Orwell\'s broader concerns...',
        },
      ],
      modelParagraph: 'In Chapter 5, Orwell uses dramatic irony and prolepsis to expose the self-defeating logic at the heart of the Party\'s intellectual project. Syme speaks with genuine enthusiasm about the aim of Newspeak: "Every concept that can ever be needed will be expressed by exactly one word, with its meaning rigidly defined and all its subsidiary meanings rubbed out and forgotten." His clarity is total, his excitement real. But Winston observes: "He was too intelligent. He saw too clearly and spoke too plainly." The passive construction "it was written in his face" is the proleptic confirmation — Syme\'s fate is presented not as a decision but as a consequence of natural law. Orwell creates a devastating irony: the quality that makes Syme the most brilliant servant of the Newspeak project — his exceptional intelligence and precision — is exactly what will cause him to be destroyed. Through Syme, Orwell argues that totalitarianism is not only oppressive but intellectually self-defeating: it requires the minds that can see clearly to build its systems, and must destroy those minds before they use the same clarity against it.',
    },
    worldTodayData: {
      question: 'Syme believes that eliminating words eliminates thoughts. Do you think the language available to us shapes what we are able to think? Can you find examples where the framing of an issue in particular language has changed how people respond to it?',
      sampleResponses: [
        'The comedian George Carlin spent decades analysing how American English was shifting toward "soft language" — linguistic euphemism designed to make difficult realities more palatable. "Shell shock" (1917) became "battle fatigue" (1945) then "operational exhaustion" then "Post-Traumatic Stress Disorder" (1980s). Each renaming moves the condition further from the human body, further from the violence that caused it. Carlin\'s argument — that softening the language softens the response — is exactly Syme\'s argument, running in reverse.',
        'In political and corporate language, "rightsizing" is used for mass layoffs; "enhanced interrogation techniques" for torture; "collateral damage" for civilian deaths; "negative patient outcome" for death in a medical context. These are not neutral descriptions — they are designed to make the actions they describe easier to authorise and easier to accept. Orwell\'s essay "Politics and the English Language" (1946) analysed exactly this phenomenon, three years before writing 1984.',
        'When the Māori language nearly disappeared in New Zealand, Māori scholars argued that specific concepts — like "kaitiakitanga" (a form of ecological guardianship with no exact English equivalent) — were not merely linguistic but conceptual: the way of thinking that the word expressed was at risk. Languages encode not just vocabulary but entire frameworks for understanding the world. When Syme says "every concept that can ever be needed," the question is: needed by whom, for what?',
      ],
    },
  },

  // ── PART TWO ──────────────────────────────────────────────────────────────

  {
    id: 'part2-chapter1',
    title: 'Chapter 1: The Note',
    summary: "In the corridor of the Ministry, Julia stumbles near Winston and secretly presses a folded note into his hand. He reads three words: 'I love you.' His terror transforms into wild hope. He spends days engineering a way to meet her privately, finally managing to sit next to her in the canteen and whisper plans for a secret rendezvous.",
    themes: ['Loyalty vs. Betrayal', 'Psychological Manipulation'],
    quote: "At the sight of the words I love you the desire to stay alive had welled up in him.",
    closeReadingData: {
      passages: [
        {
          passage: 'At the sight of the words I love you the desire to stay alive had welled up in him, and the taking of minor risks suddenly seemed stupid. He was aware of that fact, because it seemed to him that until that moment he had not been certain whether he wanted to stay alive.',
          question: "What does Orwell achieve by having a declaration of love — not political conviction — reignite Winston's will to live?",
          options: [
            { text: "He shows that Winston has always prioritised personal feeling over political idealism.", isCorrect: false, feedback: "This reverses the chapter's logic. Winston's prior rebellion — the diary, the hatred of Big Brother — was genuine and political. The note adds something new; it does not reveal what came before as false." },
            { text: "He establishes that the human capacity for attachment is the Party's deepest enemy — that love, not political argument, is what totalitarianism must eradicate to complete its control.", isCorrect: true, feedback: "Correct. Three private words restore what no manifesto could: the will to survive. The Party can criminalise ideology, but it cannot fully criminalise feeling without destroying humanity itself — and this is Orwell's argument." },
            { text: "He creates a contrast between Julia's emotional directness and Winston's more cerebral approach to rebellion.", isCorrect: false, feedback: "While Julia and Winston do differ in temperament, this passage is not building a contrast between them. It is showing what the note does to Winston, and why." },
            { text: "He suggests that Winston was never genuinely committed to political rebellion and was always looking for a personal escape.", isCorrect: false, feedback: "The text does not support this. The note transforms fear into hope — it does not reveal existing desire as Winston's primary motivation." },
          ],
          insight: "Orwell places the moment of Winston's reawakening not at the receipt of political intelligence but at three ordinary words on a scrap of paper. 'I love you' is the most personal possible statement — and in Oceania, therefore the most subversive. The Party has systematically dismantled private bonds: Junior Spies condition children to betray parents; the marriage laws discourage intimacy; physical pleasure is treated as a dangerous distraction from loyalty to the state. That three words restore Winston's survival instinct confirms the novel's central political argument: totalitarianism must destroy not just dissent but the human capacity for connection. The note is not the beginning of a love affair. It is the beginning of the act the Party has been designed to prevent.",
        },
        {
          passage: 'In the canteen he sat down at a table well to one side. He watched her from a distance. Then, when the moment was right, he got up and moved across the room in a way that looked casual to any telescreen, working his way round by the walls. At last he was within arm\'s reach of her, and he whispered, not looking at her: "What time do you leave work?"',
          question: "What does Orwell achieve by making the first words Winston speaks to Julia a whispered logistical plan — performed in the shadow of the telescreen?",
          options: [
            { text: "He shows that Winston is romantically inexperienced and unable to express emotion directly.", isCorrect: false, feedback: "The whispered logistics are not a failure of expression — they are a necessity. Orwell is showing what surveillance does to human interaction, not what Winston personally lacks." },
            { text: "He uses dramatic irony to show the reader that the meeting is being monitored, even though Winston and Julia do not know it.", isCorrect: false, feedback: "There is no indication at this point that the canteen meeting is monitored. The passage is about what precaution requires — not about surveillance already in place." },
            { text: "He dramatises how completely the Party has colonised ordinary life: even the most natural human act — speaking to someone you want to know — must be staged as a performance of indifference and timed like an operation.", isCorrect: true, feedback: "Correct. In any other world, walking across a room to speak to someone is unremarkable. Orwell turns it into a tactical exercise — the route along the wall, the careful glance, the whispered logistics — to show that totalitarianism's deepest violence is against the ordinary." },
            { text: "He establishes that Julia is in control of the relationship from the beginning.", isCorrect: false, feedback: "The passage focuses on Winston's navigation of the surveillance environment, not on the power dynamic between them at this stage." },
          ],
          insight: "The canteen scene is one of Orwell's most precise political statements. Sitting next to someone you wish to speak to is, in any ordinary world, a matter of inclination. Orwell turns it into a sequence of calculated manoeuvres — the strategic choice of table, the timed glance, the route along the walls, the whispered logistics — because in Oceania, the simplest human acts have been made logistically treacherous. The totalitarian achievement is not the spectacular suppression of revolution; it is the slow conversion of instinct into espionage. Winston must think like an agent simply to speak to another person. What Orwell is measuring here is not Winston's courage but the cost the system imposes on being human.",
        },
      ],
    },
    paragraphBuilderData: {
      focus: "How does Orwell use the note and the canteen scene to show what human connection costs under totalitarianism?",
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves in Chapter 1 of Part 2? Choose one, then refine it.',
          guidedOptions: [
            "In Chapter 1 of Part 2, Orwell establishes that the Party's deepest enemy is not political opposition but the private human bond — that love, not ideology, is what totalitarianism must eradicate to complete its control.",
            "Through the canteen scene, Orwell dramatises how surveillance has colonised even the most ordinary human acts, converting instinct into espionage and making the desire to speak to another person a logistical operation.",
            "By showing that three words restore Winston's will to survive where political conviction could not, Orwell argues that human feeling is more resistant to totalitarian conditioning than rational belief.",
          ],
          placeholder: 'Write your own version of the claim, or edit the one you selected...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            "Bathos — 'I love you' is among the most intimate phrases in any language; its arrival amid conditions of extreme political terror creates a collision between the personal and the totalitarian.",
            "Social realism — by turning a walk across a canteen into a tactical operation, Orwell makes the abstract horror of surveillance concrete: oppression is measured in what ordinary life can no longer afford to be ordinary.",
            "Understatement — the most significant emotional event in Winston's life so far is described in the same flat, constrained tone used for everything in Oceania, making its weight felt through restraint.",
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"At the sight of the words I love you the desire to stay alive had welled up in him."',
            '"He got up and moved across the room in a way that looked casual to any telescreen, working his way round by the walls."',
            '"I love you" — three words on a folded scrap of paper, the entire message.',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            "The restoration of Winston's survival instinct through love rather than ideology reveals the precise target of the Party's deepest programme: it must destroy not dissent but the capacity for private feeling.",
            "The phrase 'a way that looked casual to any telescreen' exposes the psychological labour of life under surveillance: every movement must be performed for an audience that may or may not be watching, making the self permanently theatrical.",
            "The brevity of the note — three words, the whole message — suggests that what the Party most fears cannot be elaborated or argued against: it is simply felt, and its simplicity is its power.",
          ],
          placeholder: 'Explain the effect on the reader and what it reveals...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: "Why is this significant to the novel as a whole?",
          guidedOptions: [
            "Chapter 1 of Part 2 establishes the novel's real stakes: the relationship between Winston and Julia is not a romantic subplot but the ground on which the Party's deepest claim — that it can destroy human love — will be tested. Part 3 will provide the answer.",
            "By showing that desire restores Winston's will to live, Orwell foreshadows the significance of the betrayal to come: if love is the source of the will to resist, then forcing Winston to betray Julia will be the definitive victory of the Party — not just over his politics, but over what he is.",
            "The canteen scene inaugurates Part 2's central paradox: every act that makes Winston more fully human — love, private space, hope — brings him measurably closer to destruction. Orwell's argument is not that rebellion is futile but that in this particular system, humanity itself has been made dangerous.",
          ],
          placeholder: "Connect your argument to Orwell's broader concerns...",
        },
      ],
      modelParagraph: "In Chapter 1 of Part 2, Orwell establishes that the Party's deepest enemy is not political opposition but the private human bond, using the note to show that love — not ideology — is what restores Winston's will to survive. When Winston reads the three words 'I love you,' Orwell writes that 'the desire to stay alive had welled up in him' — not as the result of a political argument, but as the immediate, involuntary consequence of being seen by another person. This is bathos at its most precise: the most intimate language in any human register arrives in a context of extreme political terror, and its effect is not to inspire rebellion but to restore the basic instinct of survival. The canteen scene extends this argument through social realism: even making eye contact requires a tactical plan, a route along the walls, and a performance of indifference calculated for any telescreen that might be watching. Orwell's language — 'in a way that looked casual to any telescreen' — measures the psychological cost of surveillance not in spectacular violence but in the conversion of instinct into labour. Together, these moments establish what the rest of the novel will test: if love is what most essentially makes Winston human, and if the Party must destroy that love to complete its control, then the question of whether it succeeds will be the measure of whether totalitarianism can ultimately prevail over what it means to be a person.",
    },
    worldTodayData: {
      question: "In Oceania, even the act of falling in love requires a plan and carries the risk of punishment. Where in the world today do people face legal danger or persecution simply for who they love?",
      sampleResponses: [],
    },
  },
  {
    id: 'part2-chapter2',
    title: 'Chapter 2: The Countryside',
    summary: "Winston and Julia meet in a secret clearing in the countryside — a place remarkably like his dream of the Golden Country. Julia is bold and experienced; she sees her sexuality as a form of political rebellion. Winston feels that in their act of desire, they are striking a blow against the Party. Every act of pleasure is an attack on Big Brother.",
    themes: ['Loyalty vs. Betrayal', 'Totalitarianism'],
    quote: "I hate purity. I hate goodness. I don't want any virtue to exist anywhere.",
    closeReadingData: {
      passages: [
        {
          passage: '"I hate purity, I hate goodness!" she said. "I don\'t want any virtue to exist anywhere. I want everyone to be corrupt to the bones." "Well then," said Winston. He could not quite make out why it seemed to him that she had said something politically significant. He pulled her against him. She was as strong as he was, and perhaps as hard.',
          question: "What does Orwell achieve by having Julia frame sexual rebellion in the language of moral corruption rather than in the language of freedom?",
          options: [
            { text: "He shows Julia to be nihilistic and amoral — a contrast to Winston's more principled rebellion.", isCorrect: false, feedback: "Julia is not nihilistic — she is politically precise. Her language about corruption is a calculated response to the Party's monopoly on the language of virtue, not a rejection of all values." },
            { text: "He reveals how the Party has corrupted moral language itself: by appropriating words like 'goodness' and 'purity' for its own ends, it has made those words instruments of control — and Julia's refusal of them is an act of resistance.", isCorrect: true, feedback: "Correct. The Party has made 'virtue' mean loyalty to itself. Julia's declaration is not a rejection of ethics — it is a refusal to accept the Party's ownership of ethical language. Corruption, by her logic, is the label the Party assigns to everything it cannot control." },
            { text: "He uses Julia to express Orwell's view that all political idealism is ultimately a form of self-deception.", isCorrect: false, feedback: "Orwell does not reduce Julia's declaration to a statement about idealism in general. Its meaning is specific to Oceania, where the Party has commandeered the language of virtue." },
            { text: "He contrasts Julia's moral cynicism with Winston's faith in Goldstein's Brotherhood.", isCorrect: false, feedback: "At this point, the Brotherhood has not been mentioned. The contrast Orwell is building is between Julia's embodied resistance and the Party's claim on moral language — not between Julia and another character's political faith." },
          ],
          insight: "Julia's declaration is one of the most politically precise statements in the novel. The Party has not merely outlawed pleasure — it has annexed the language of virtue, making 'purity,' 'goodness,' and 'honour' synonyms for loyalty to Big Brother. To desire what the Party forbids is therefore not merely illegal but morally corrupted — or so the Party insists. Julia's response is to accept that framing entirely and weaponise it. If pleasure is corruption in the Party's moral vocabulary, she will corrupt herself as completely as possible. This is not nihilism — it is a refusal to fight on the Party's semantic territory. She understands that the Party's power is as much linguistic as it is political, and her rebellion is an act of reappropriation: reclaiming the body by refusing the moral framework that made it the enemy.",
        },
        {
          passage: 'Not merely the love of one person, but the animal instinct, the simple undifferentiated desire: that was the force that would tear the Party to pieces if they could not stamp it out. He thought of how her body had felt against his — warm, alive. He did not know whether the thing was totally without political implications, or whether it was the most political act possible.',
          question: "What does Orwell achieve by having Winston experience their first meeting as both a deeply personal act and a revolutionary one — refusing to separate desire from politics?",
          options: [
            { text: "He reveals that Winston's motivation is primarily libidinal rather than genuinely political.", isCorrect: false, feedback: "Orwell does not separate the libidinal from the political here — he fuses them. The animal instinct is itself the political act. The distinction between personal desire and political rebellion is precisely what this passage refuses." },
            { text: "He uses the moment to create dramatic tension about the dangers of the relationship.", isCorrect: false, feedback: "While tension is present, the passage is primarily building a political argument, not a thriller. Orwell's concern is what desire means in this world, not what might happen next." },
            { text: "He shows that the most powerful resistance to totalitarianism is not ideological argument but the physical reality of human nature — desire that cannot be reasoned away or fully suppressed.", isCorrect: true, feedback: "Correct. Winston does not experience this moment as a compromise between politics and desire. Orwell fuses them: 'the simple undifferentiated desire' is 'the force that would tear the Party to pieces.' The body's insistence on its own experience is the revolutionary act." },
            { text: "He establishes Winston as more politically sophisticated than Julia because he understands the wider implications of their act.", isCorrect: false, feedback: "Orwell is not ranking their sophistication. Julia already understands the political dimension — she framed it explicitly. Winston is arriving at the same understanding through a different route." },
          ],
          insight: "Orwell's most radical claim in Chapter 2 is that desire is not a distraction from political resistance — it is the most fundamental form of it. Winston does not experience pleasure as an escape from politics; he experiences it as the politics of the body. 'The simple undifferentiated desire' is described not as a weakness but as 'the force that would tear the Party to pieces.' Sexual pleasure cannot be fully monitored, reasoned away, or redistributed to approved channels. Its persistence is an assertion of something the Party needs to negate: the primacy of individual physical experience over collective ideological requirement. The Party's war on pleasure is not puritanism — it is a calculated strategy to eliminate the last form of experience it cannot fully own.",
        },
      ],
    },
    paragraphBuilderData: {
      focus: "How does Orwell present physical desire as a form of political resistance in Chapter 2 of Part 2?",
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves in Chapter 2? Choose one, then refine it.',
          guidedOptions: [
            "In Chapter 2 of Part 2, Orwell fuses desire and politics — showing that the body's insistence on its own experience is the most fundamental form of resistance to a state that has claimed ownership of all human impulse.",
            "Through Julia's declaration, Orwell reveals how the Party has colonised moral language: by making 'purity' and 'virtue' synonyms for loyalty, it has turned the body itself into a crime — and Julia's rebellion is a refusal to accept that equation.",
            "By describing desire as 'the force that would tear the Party to pieces,' Orwell elevates the personal and physical to the level of political theory, arguing that the body's imperatives are more dangerous to totalitarianism than any intellectual dissent.",
          ],
          placeholder: 'Write your own version of the claim, or edit the one you selected...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            "Semantic subversion — Julia weaponises the Party's own moral vocabulary, accepting the label of 'corruption' as a badge of resistance and refusing to fight on the Party's linguistic territory.",
            "Paradox — Winston simultaneously experiences the meeting as a step toward destruction and the most politically significant act of his life, refusing to separate self-destruction from genuine resistance.",
            "Free indirect discourse — by moving between Winston's body and his political analysis in a single passage, Orwell collapses the distinction between desire and ideology, making them the same thing.",
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"I hate purity, I hate goodness! I don\'t want any virtue to exist anywhere."',
            '"The simple undifferentiated desire: that was the force that would tear the Party to pieces if they could not stamp it out."',
            '"He did not know whether the thing was totally without political implications, or whether it was the most political act possible."',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            "Julia's embrace of 'corruption' reveals that the Party's most powerful weapon is not surveillance but the colonisation of moral language — and her declaration is a refusal to allow that colonisation to stand.",
            "By describing desire as 'the force that would tear the Party to pieces,' Orwell elevates the physical to the level of political theory, arguing that the body's imperatives are more dangerous to totalitarianism than any intellectual dissent.",
            "The uncertainty in 'he did not know whether... it was the most political act possible' is not confusion but precision: Orwell is refusing the distinction between personal and political, showing that in Oceania, they cannot be separated.",
          ],
          placeholder: 'Explain the effect on the reader and what it reveals...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: "Why is this significant to the novel as a whole?",
          guidedOptions: [
            "Chapter 2 establishes the political logic that will govern the rest of Part 2: desire is not a private matter but a revolutionary act, and the Party's systematic assault on physical pleasure is a calculated strategy to eliminate the last form of experience it cannot fully control.",
            "Julia's declaration anticipates the novel's ending: if the Party has successfully made virtue mean loyalty to itself, then Part 3 will show whether it can also make betrayal feel like love — the final and complete inversion of human moral experience.",
            "By fusing desire and politics in this chapter, Orwell sets up the tragedy of Part 3: the Party will not need to argue that Winston's rebellion was wrong — it will simply make him feel it. The destruction of desire is the destruction of resistance.",
          ],
          placeholder: "Connect your argument to Orwell's broader concerns...",
        },
      ],
      modelParagraph: "In Chapter 2 of Part 2, Orwell presents physical desire as the most fundamental and ineradicable form of political resistance, using Julia's declaration to show how the Party has attempted to neutralise this threat by colonising the language of virtue. When Julia declares 'I hate purity, I hate goodness! I don't want any virtue to exist anywhere,' she is not expressing nihilism — she is refusing a semantic trap. The Party has appropriated words like 'purity' and 'goodness' as synonyms for loyalty to itself, making the body's ordinary desires into moral crimes. Julia's response is to accept that framing entirely and invert it: if pleasure is corruption, she will corrupt herself as thoroughly as possible. This semantic subversion reveals that the Party's control is as linguistic as it is military. Orwell extends this argument further when Winston recognises 'the simple undifferentiated desire' as 'the force that would tear the Party to pieces if they could not stamp it out.' The physical act is simultaneously personal and political; Orwell refuses to separate them. Together, these moments establish Chapter 2's central argument: the most dangerous thing in Oceania is not an organised resistance movement but the persistence of human appetite — the body's insistence on its own experience against a state that has claimed ownership of all human impulse.",
    },
    worldTodayData: {
      question: "Julia sees her sexuality as a political weapon — a deliberate defiance of a state that tries to control the body. Where in the world today do governments or institutions attempt to regulate or punish sexual behaviour as a matter of ideological control?",
      sampleResponses: [],
    },
  },
  {
    id: 'part2-chapter3',
    title: "Chapter 3: Julia's Philosophy",
    summary: "Winston and Julia continue meeting in secret. Julia reveals her pragmatic worldview: she cares nothing for abstract political rebellion but wants to enjoy life. She sleeps during the Two Minutes Hate and produces pornography for the proles. Unlike Winston, she accepts the Party's lies as unchangeable and focuses on private pleasures.",
    themes: ['Psychological Manipulation', 'Totalitarianism'],
    quote: "Life as she saw it was quite simple. You wanted a good time; 'they,' meaning the Party, wanted to stop you having it.",
    closeReadingData: {
      passages: [
        {
          passage: 'Life as she saw it was quite simple. You wanted a good time; "they," meaning the Party, wanted to stop you having it; you broke the rules as best you could. She seemed to have no difficulty in seeing the Party for what it really was — a system of organised lying — while at the same time she did not think it important enough to trouble about. She never thought about anything except the personal.',
          question: "What does Orwell achieve by presenting Julia's pragmatic rejection of Party ideology alongside a clear-eyed understanding of what that ideology actually is?",
          options: [
            { text: "He shows Julia to be shallow compared to Winston — intelligent enough to see the truth but too selfish to care.", isCorrect: false, feedback: "Orwell does not present Julia's pragmatism as shallow. Her clarity about what the Party is — 'a system of organised lying' — is at least as sharp as Winston's analysis. The question is what she does with that clarity, not whether she possesses it." },
            { text: "He uses Julia to challenge Winston's assumption that understanding the system and opposing it are the same thing — revealing that clear-sightedness can coexist with a complete absence of political ambition.", isCorrect: true, feedback: "Correct. Julia sees the Party exactly as it is. But her response is entirely practical: she does not want to overthrow it, she wants to enjoy her life despite it. This is not stupidity or cowardice — it is a coherent alternative philosophy that Orwell places beside Winston's more idealistic approach." },
            { text: "He establishes Julia as morally inferior to Winston because she does not act on what she knows.", isCorrect: false, feedback: "Orwell is not making a moral judgement between them here. Julia's pragmatism is a valid, fully-realised position — Orwell is exploring its logic, not condemning it." },
            { text: "He uses Julia's indifference to show that the proles' passivity and the Outer Party's compliance are the same phenomenon at different social levels.", isCorrect: false, feedback: "While there are parallels, the passage is not building a sociological argument. It is characterising Julia's specific position — individual rather than structural." },
          ],
          insight: "Julia's philosophy is the novel's most intellectually challenging counter to Winston's politics. She sees the Party's lies with perfect clarity — 'a system of organised lying' — but draws from this the opposite conclusion to Winston. Where he reads the lies as something that must be confronted, she reads them as a permanent feature of the landscape to be navigated. Her pragmatism is not ignorance. It is a different theory of survival and resistance: the private sphere is the only meaningful territory, and the way to defend it is not to attack the system but to exploit its gaps. Orwell presents this as a coherent position, not a failure of nerve — which makes Winston's more ambitious ideology something that must earn its validity against Julia's challenge, not assume it.",
        },
        {
          passage: 'She fell asleep almost immediately, and he lay beside her in the darkness, watching her sleep, trying to understand her. He wondered whether she had ever read any Party literature, or whether the official language had ever really penetrated her. She had managed to give the impression that she regarded the whole thing as a game that was not to be taken too seriously.',
          question: "What does Orwell achieve by showing Winston watching Julia sleep and trying to 'understand' her — placing him in an analytical relationship to someone who has no desire to be analysed?",
          options: [
            { text: "He shows that Winston is incapable of simply experiencing love and must always intellectualise his emotions.", isCorrect: false, feedback: "While Winston's intellectualising is a character trait, the passage is doing more than psychological characterisation. Orwell is staging a collision between two different ways of understanding — and living in — totalitarianism." },
            { text: "He reveals the limits of Winston's political imagination: he can only understand opposition as something consciously articulated, and cannot account for Julia's resistance without making it legible in his own terms.", isCorrect: true, feedback: "Correct. Winston needs Julia's rebellion to mean something in the terms he already understands — ideology, analysis, theory. But Julia's resistance is embodied, practical, and pre-theoretical. Orwell uses his puzzlement to show that political understanding can itself be a kind of blindness." },
            { text: "He establishes Julia as a passive figure who represents the proles' unrealised potential.", isCorrect: false, feedback: "Julia is far from passive — her rebellion is consistent, effective, and deliberate. The parallel with the proles is not Orwell's concern in this passage." },
            { text: "He creates sympathy for Winston by showing his loneliness in a relationship that cannot meet his intellectual needs.", isCorrect: false, feedback: "Orwell does not frame Julia's sleepiness as a failure that leaves Winston lonely. The puzzlement is productive, not pitiable — it forces the reader to consider whether Winston's framework for resistance is the only valid one." },
          ],
          insight: "The image of Winston watching Julia sleep is one of the novel's most quietly political moments. He is trying to understand her — which means he cannot yet. Julia's resistance does not require analysis, theory, or the construction of a political framework. She sleeps through the Two Minutes Hate; she produces pornography for the proles; she takes pleasure in chocolate, coffee, and makeup. From Winston's perspective, this looks like a game. Orwell places us in Winston's perspective but does not endorse it. Julia's 'game' is consistently effective. The question the chapter poses — without answering — is whether Winston's more ambitious opposition achieves more than her pragmatism, or less.",
        },
      ],
    },
    paragraphBuilderData: {
      focus: "How does Orwell use Julia's philosophy to challenge Winston's assumptions about what resistance to totalitarianism looks like?",
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves in Chapter 3? Choose one, then refine it.',
          guidedOptions: [
            "In Chapter 3, Orwell uses Julia to challenge the assumption that understanding a system and opposing it are the same thing — showing that clear-sighted pragmatism can coexist with a complete absence of political ambition.",
            "Through the contrast between Julia's practical philosophy and Winston's theoretical approach, Orwell raises the question of whether ideological resistance or individual survival constitutes the more meaningful opposition to totalitarianism.",
            "By having Winston watch Julia sleep and try to 'understand' her, Orwell reveals the limits of his political imagination: he cannot account for a form of resistance that refuses to articulate itself in his own terms.",
          ],
          placeholder: 'Write your own version of the claim, or edit the one you selected...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            "Juxtaposition — by placing Julia's clear-eyed diagnosis of the Party as 'a system of organised lying' immediately beside her complete indifference to acting on it, Orwell creates an ironic gap between understanding and action.",
            "Indirect characterisation — Julia's philosophy is revealed through what she does (sleeps through the Hate, breaks rules for pleasure) rather than through political argument, showing that her resistance is embodied rather than theoretical.",
            "Free indirect discourse — Winston's analytical puzzlement over Julia's sleeping allows Orwell to place two incompatible frameworks for resistance side by side, without endorsing either.",
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"Life as she saw it was quite simple. You wanted a good time; \'they,\' meaning the Party, wanted to stop you having it; you broke the rules as best you could."',
            '"She seemed to have no difficulty in seeing the Party for what it really was — a system of organised lying — while at the same time she did not think it important enough to trouble about."',
            '"She had managed to give the impression that she regarded the whole thing as a game that was not to be taken too seriously."',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            "The juxtaposition of Julia's accurate political analysis and her pragmatic indifference reveals that the capacity for clear thinking does not automatically produce the desire for political action — a challenge to any assumption that understanding should lead to resistance.",
            "By describing Julia's worldview as 'quite simple,' Orwell creates a deliberate contrast with Winston's more anxious approach — without making either the clear winner.",
            "The phrase 'a game that was not to be taken too seriously' ironically echoes the Party's own logic: it treats individual happiness as trivial and politics as deadly serious. Julia's inversion — treating politics as trivial and individual happiness as serious — is a form of resistance through revaluation.",
          ],
          placeholder: 'Explain the effect on the reader and what it reveals...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: "Why is this significant to the novel as a whole?",
          guidedOptions: [
            "Julia's philosophy raises a question that the novel will answer in Part 3: whether Winston's more ambitious opposition — his theory, his diary, his contact with O'Brien — achieves anything that Julia's pragmatic survival does not, or whether the scale of his ambition simply expands the scale of his eventual destruction.",
            "By presenting Julia's pragmatism as a coherent and effective alternative to Winston's idealism, Orwell makes the novel's ending more devastating: the Party will not merely destroy Winston's politics but will also use Julia against him — converting the thing that most sustained him into the instrument of his final defeat.",
            "Chapter 3 establishes the intellectual stakes of the novel: Orwell does not tell the reader which form of resistance is more valid, but the novel's trajectory will provide a grim answer — suggesting that in a fully operational totalitarian state, the pragmatist who asks for less may survive longer than the idealist who asks for everything.",
          ],
          placeholder: "Connect your argument to Orwell's broader concerns...",
        },
      ],
      modelParagraph: "In Chapter 3 of Part 2, Orwell uses Julia's philosophy to challenge the assumption that political understanding and political action are the same thing, juxtaposing her clear-sighted diagnosis of the Party with her complete refusal to make anything theoretical from it. Julia 'seemed to have no difficulty in seeing the Party for what it really was — a system of organised lying — while at the same time she did not think it important enough to trouble about.' This juxtaposition is Orwell's most intellectually provocative move in Part 2: it severs the connection between understanding and resistance that Winston — and perhaps the reader — assumes to be natural. Julia's worldview is not ignorance or cowardice; it is a coherent philosophy that has correctly identified the only meaningful terrain of resistance as the private and the pleasurable. Where Winston constructs a political framework and writes a diary, Julia sleeps through the Two Minutes Hate and smuggles chocolate. Orwell does not declare a winner. But by having Winston watch Julia sleep and attempt to 'understand' her — as though she were a problem to be solved rather than a person to be known — he reveals the limits of Winston's own imagination: he can only recognise resistance when it speaks his language. The chapter quietly poses the question that Part 3 will grimly answer: whether the idealist who asks for everything or the pragmatist who asks only for pleasure will fare better at the hands of a state that ultimately denies both.",
    },
    worldTodayData: {
      question: "Julia focuses on private pleasures rather than collective resistance. When is individual survival a form of resistance, and when does it become complicity? Think of a real-world context where this question is genuinely difficult.",
      sampleResponses: [],
    },
  },
  {
    id: 'part2-chapter4',
    title: 'Chapter 4: The Room Above the Shop',
    summary: "Winston rents the room above Mr Charrington's junk shop — a room with no telescreen. It becomes their sanctuary: a pocket of the past, untouched by the Party. Julia brings real coffee, sugar, and makeup. For the first time, they have a private space. Winston knows this brings them closer to arrest. He does it anyway.",
    themes: ['Loyalty vs. Betrayal', 'Surveillance'],
    quote: "It was as though they were intentionally stepping nearer to their graves.",
    closeReadingData: {
      passages: [
        {
          passage: 'It was a queer thing, even a compromising thing, for a Party member to have in his possession. Anything old, and for that matter anything beautiful, was always vaguely suspect. The paperweight was the room he was in, and the coral was Julia\'s life and his own, fixed in a sort of eternity at the heart of the crystal.',
          question: "What does Orwell achieve by having Winston identify himself and Julia with the coral inside the glass paperweight — enclosed, fragile, and fixed?",
          options: [
            { text: "He shows that Winston is becoming dangerously sentimental, which foreshadows his eventual breakdown.", isCorrect: false, feedback: "Sentimentality implies an unearned emotional response. Winston's reading of the paperweight is precise and politically articulate. Orwell is not presenting it as weakness but as insight." },
            { text: "He uses the paperweight to establish that beauty itself is suspect in Oceania — that preserving fragile, useless things is a counter-cultural act.", isCorrect: false, feedback: "While true, this is not the deepest function of the paperweight in this moment. Orwell extends its meaning beyond a general statement about beauty to something specific: Winston and Julia themselves, caught inside a fragile enclosure, beautiful and doomed." },
            { text: "He creates a symbolic structure in which the fragile beauty of the paperweight — vulnerable, enclosed, a remnant of the past — becomes an image for Winston and Julia's relationship: precious, temporary, and already containing the conditions of its own destruction.", isCorrect: true, feedback: "Correct. Orwell does not leave the symbol general. Winston explicitly identifies himself and Julia with the coral inside the glass: they are 'fixed in a sort of eternity at the heart of the crystal.' The paperweight is beautiful and breakable. So are they — and the reader will remember this in the moment of the arrest." },
            { text: "He uses the paperweight to suggest that Winston is building a private mythology to sustain himself, which the Party will eventually force him to abandon.", isCorrect: false, feedback: "Winston is not constructing a mythology — he is seeing clearly. The symbolic connection between the paperweight and their situation is Orwell's, not merely Winston's wishful thinking." },
          ],
          insight: "The glass paperweight is the novel's most carefully constructed symbol. 'Anything old, and for that matter anything beautiful, was always vaguely suspect' — this sentence does the first work: in Oceania, beauty is inherently counter-revolutionary because it asserts a value the Party cannot quantify or requisition. But Orwell does not leave the symbol as a general statement about beauty. Winston identifies himself and Julia with the coral inside the glass: they are 'fixed in a sort of eternity at the heart of the crystal.' This is Orwell's symbolic syntax at its most precise — the paperweight is beautiful and enclosed and breakable, and so is everything the room represents. The reader will remember this image in Chapter 10, when the paperweight shatters on the flagstones during the arrest. The symbol completes itself at the moment of its destruction.",
        },
        {
          passage: '"We are the dead," he said. "We\'re not dead yet," she said dutifully. "Not yet. But we shall be." "It doesn\'t matter, being dead," she said. "From now on we shall be a little more careful." It was the only thing she could say. The future was unimaginable. They lived, as he had often said, in the present moment.',
          question: "What does Orwell achieve by having Winston and Julia discuss their own deaths with the calm logic of people who have already accepted them — and by giving Julia the more pragmatic response?",
          options: [
            { text: "He shows that both characters are fatalistic and have given up hope of survival.", isCorrect: false, feedback: "They have not given up hope — they have given up a different kind of hope: the hope of escaping consequences entirely. 'We're alive now' is not despair; it is a different relationship with time." },
            { text: "He creates dramatic irony by having them discuss future death while living freely — the reader knows the arrest is coming.", isCorrect: false, feedback: "The dramatic irony is present, but it is not the primary function of the exchange. Orwell is building a philosophical and political position, not just foreshadowing the plot." },
            { text: "He uses their calm acceptance of death to show that the most complete form of freedom under totalitarianism is not the elimination of danger but the refusal to let the certainty of danger determine how one lives in the present.", isCorrect: true, feedback: "Correct. What Winston and Julia refuse is to let the certain future colonise the present. Julia's 'from now on we shall be a little more careful' is not bravado — it is a precise statement about temporal resistance. The Party controls the future. What it cannot yet control is the hour they occupy now." },
            { text: "He establishes that Julia's pragmatism is ultimately more effective than Winston's theoretical approach to rebellion.", isCorrect: false, feedback: "The exchange does not adjudicate between them. Both accept the same logic — the difference is only in register: Winston reaches the conclusion philosophically, Julia intuitively." },
          ],
          insight: "The exchange about death is the chapter's most important passage — not because of what it foreshadows, but because of what it proposes. Winston and Julia have reached a position beyond conventional hope: they know they will be arrested, they know the outcome. What remains is the question of what to do with the time that precedes it. The Party controls the future: arrests, torture, Room 101. What it cannot control, at this moment, is the room they are in and the hour they occupy. Orwell presents this as the most honest form of resistance available: not the belief that it might end differently, but the refusal to surrender the present to the certainty of a terrible future.",
        },
      ],
    },
    paragraphBuilderData: {
      focus: "How does Orwell use the room and the glass paperweight to show what private space means — and costs — under totalitarianism?",
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves in Chapter 4? Choose one, then refine it.',
          guidedOptions: [
            "In Chapter 4, Orwell uses the room above the shop to show that privacy is not merely comfort but a political category — a space the Party has systematically eliminated, the possession of which is already a crime.",
            "Through the glass paperweight, Orwell creates a symbol that contains the chapter's whole argument: Winston and Julia, enclosed and fragile and beautiful, are 'fixed in a sort of eternity' that the Party will ultimately shatter.",
            "By having Winston and Julia accept their inevitable deaths while choosing to live as fully as possible in the present, Orwell proposes that the most complete form of resistance under totalitarianism is temporal: the refusal to let a certain future destroy an uncertain now.",
          ],
          placeholder: 'Write your own version of the claim, or edit the one you selected...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            "Symbolism — the glass paperweight operates on multiple levels simultaneously: a beautiful relic of the pre-Party past, a fragile enclosure, and an explicit image for Winston and Julia themselves — enclosed, precious, and breakable.",
            "Dramatic irony — by having Winston and Julia discuss their own deaths so clearly and calmly, Orwell invites the reader to see what the characters understand but cannot fully feel: that their sanctuary is already a trap.",
            "Understatement — the language of the room's pleasures (real coffee, sugar, a fire) is deliberately small and domestic, making the political significance of privacy felt through what ordinary life actually costs.",
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"The paperweight was the room he was in, and the coral was Julia\'s life and his own, fixed in a sort of eternity at the heart of the crystal."',
            '"It was as though they were intentionally stepping nearer to their graves."',
            '"We are the dead." / "We\'re not dead yet." — the exchange that accepts the future without surrendering the present.',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            "The explicit symbolic identification of Winston and Julia with the coral inside the glass paperweight gives their relationship a concrete fragility: they are not abstractly in danger but visibly enclosed in something beautiful that will shatter — and the reader will remember this image in the moment of the arrest.",
            "The phrase 'intentionally stepping nearer to their graves' reveals the chapter's central paradox: the room is simultaneously the most alive space in the novel and the most explicit acknowledgement of approaching death.",
            "The exchange about death — accepting it without surrendering the present — transforms passivity into a form of precision: by refusing to let certainty about the future determine the quality of now, Winston and Julia claim the only territory the Party cannot yet reach.",
          ],
          placeholder: 'Explain the effect on the reader and what it reveals...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: "Why is this significant to the novel as a whole?",
          guidedOptions: [
            "The paperweight's eventual shattering in Chapter 10 completes the symbol Orwell establishes here: what was fragile and beautiful has been destroyed, and the crystal world that enclosed Winston and Julia is gone. The novel's ending is already written in Chapter 4's symbolism.",
            "The room above the shop is the novel's only space of genuine human living — and Orwell reveals it to be a trap. This is his argument about privacy under totalitarianism: not that it is impossible but that its apparent existence is the most sophisticated form of the surveillance it seems to escape.",
            "By making Winston's acceptance of death a precondition for living fully, Orwell establishes the novel's deepest theme: the Party's power is over the future, not the present — and the only freedom available under totalitarianism is the freedom of those who have already surrendered hope of survival.",
          ],
          placeholder: "Connect your argument to Orwell's broader concerns...",
        },
      ],
      modelParagraph: "In Chapter 4 of Part 2, Orwell uses the glass paperweight to create a symbol that contains the chapter's entire argument — and that will complete itself, through its destruction, at the moment of the arrest in Chapter 10. Winston identifies the paperweight explicitly with himself and Julia: 'the coral was Julia's life and his own, fixed in a sort of eternity at the heart of the crystal.' The paperweight is an object from the pre-Party past — beautiful, fragile, and politically suspect simply because it is beautiful. By placing Winston and Julia inside it — enclosed, preserved, temporarily fixed — Orwell gives their relationship the same quality: precious, real, and already containing the conditions of its own destruction. The phrase 'intentionally stepping nearer to their graves' confirms that this enclosure is not escape but deferral: they know the ending, and they proceed anyway. The exchange about death extends this argument: Winston and Julia accept that the future contains their deaths, but refuse to let that acceptance colonise the present. Orwell's argument is that under totalitarianism, the only freedom available to those who have accepted its ultimate power is the freedom of the current moment — and that claiming it, knowing its cost, is itself a form of courage. The paperweight will shatter. But it has not yet.",
    },
    worldTodayData: {
      question: "The room above the shop represents a private space — a place the state cannot reach. In what ways do modern governments or corporations monitor or intrude upon spaces people believe to be private?",
      sampleResponses: [],
    },
  },
  {
    id: 'part2-chapter5',
    title: 'Chapter 5: Syme Vanishes',
    summary: "As Winston predicted, Syme is vaporized — he simply ceases to exist. His name is removed from all records. Preparations intensify for Hate Week. Winston sees each disappearance as confirmation of the Party's absolute power over reality itself.",
    themes: ['Control of Information', 'Totalitarianism'],
    quote: "Syme had ceased to exist: he had never existed.",
    closeReadingData: {
      passages: [
        {
          passage: 'One day he was simply not there any more. A few preparatory movements, a few blank weeks, and then he was gone entirely and his absence made no more impression on the general atmosphere than the removal of a piece of furniture. No one had mentioned him, no one had admitted that he was gone. Syme had ceased to exist: he had never existed.',
          question: "What does Orwell achieve by describing Syme's disappearance not as a dramatic event but as a gradual, almost imperceptible absence — comparable to the removal of a piece of furniture?",
          options: [
            { text: "He shows that the Party's violence is less organised than Winston feared — vaporizations are spontaneous rather than systematic.", isCorrect: false, feedback: "The absence of visible violence does not indicate disorganisation. Orwell is showing the opposite: the system is so thorough that it eliminates people without needing to make a spectacle of it." },
            { text: "He creates sympathy for Syme by emphasising how quietly his death passes unremarked.", isCorrect: false, feedback: "The lack of reaction is not primarily designed to generate sympathy. Orwell's concern is with the social and political mechanism of erasure, not the pathos of the individual victim." },
            { text: "He shows that the most complete form of totalitarian violence is bureaucratic rather than spectacular — eliminating not just a person but any trace that disrupts the surface of normality.", isCorrect: true, feedback: "Correct. The most chilling detail is not that Syme is gone but that no one notices. The Party has trained its citizens to know someone has vanished without allowing that knowledge to produce a reaction. The disappearance is unremarkable — 'like the removal of a piece of furniture.'" },
            { text: "He uses Syme's disappearance to show the failure of Winston's predictions — Winston was right about who would be vaporized, but wrong about why.", isCorrect: false, feedback: "Winston was correct in his prediction: Syme was too intelligent for the Party. The passage is not revising Winston's analysis but confirming it — and showing what confirmation looks like at the social level." },
          ],
          insight: "Syme's disappearance is Orwell's most precise image of what the vaporization system achieves. The horror is not the violence — it is the absence of response. No one weeps for Syme. No one acknowledges he is gone. His name simply stops appearing. 'His absence made no more impression on the general atmosphere than the removal of a piece of furniture.' This sentence does two things at once: it describes social reality (no one reacts) and it reveals the mechanism (people have been trained not to react). The success of the Party's system is measurable in the flatness of the response. Citizens do not suppress their grief — they have been conditioned not to form it. The doublethink is complete: everyone knows what happened and no one knows.",
        },
        {
          passage: 'He thought of how Syme had talked with him, of his brilliant mind and his knowledge of Newspeak and the destruction of words. Syme had ceased to exist: he had never existed. Winston found this less true than he supposed. He could still remember Syme very clearly — could still remember arguments that had happened, sentences that had been spoken. And yet there was no Syme, and there was no memory of Syme, except in Winston\'s mind, which he could not communicate to another soul.',
          question: "What does Orwell achieve by having Winston privately retain a clear memory of Syme while being unable to share or verify it with anyone?",
          options: [
            { text: "He shows that Winston is more psychologically resilient than other Party members and will ultimately be able to resist the system.", isCorrect: false, feedback: "The passage does not suggest resilience as a path to survival. Winston's ability to remember Syme is simultaneously a sign of his humanity and of his isolation — the memory cannot be shared, and a memory that cannot be shared has no political power." },
            { text: "He reveals the practical function of doublethink: individual memory is not erased, but its social currency is destroyed. A private truth that cannot be communicated is no different, practically, from an official lie.", isCorrect: true, feedback: "Correct. Winston remembers Syme clearly — and this changes nothing. The Party does not need to erase every private memory; it only needs to ensure that those memories cannot form a shared reality. Without corroboration, Winston's memory is a trapped private fact with no more social weight than fiction." },
            { text: "He creates sympathy for Syme by ensuring that at least one person remembers him.", isCorrect: false, feedback: "Syme's individuality is acknowledged here, but the passage's function is not primarily elegiac. Orwell is demonstrating how the social reality of truth works — and how the Party has broken it." },
            { text: "He establishes that Winston's memory is the only counter-force available against the Party's rewriting of history.", isCorrect: false, feedback: "Winston's memory is shown as politically impotent here, not as a counter-force. 'He could not communicate it to another soul' is the key phrase: individual truth without social verification cannot challenge institutional power." },
          ],
          insight: "The most important sentence in this passage is the last one: 'except in Winston's mind, which he could not communicate to another soul.' Orwell is making a precise claim about the social nature of truth. Memory that cannot be shared does not constitute knowledge in any politically meaningful sense. Winston knows Syme existed. He knows it with the specific clarity of someone who has shared meals and arguments with another person. But this knowledge is trapped inside a single consciousness that the Party has ensured no one will believe or corroborate. The erasure of Syme is not primarily physical — it is social. The Party does not need to remove every private memory; it only needs to make those memories incommunicable. This is the deeper function of the system: not surveillance, but the destruction of the shared reality that makes private memory politically real.",
        },
      ],
    },
    paragraphBuilderData: {
      focus: "How does Orwell use Syme's disappearance to show how the Party controls not just individuals but the social reality in which truth is possible?",
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves in Chapter 5? Choose one, then refine it.',
          guidedOptions: [
            "In Chapter 5, Orwell uses Syme's disappearance to show that the Party's control over reality is not achieved through spectacular violence but through the systematic destruction of the social conditions in which truth can be communicated and verified.",
            "Through Syme's erasure, Orwell argues that doublethink is not individual self-deception but a social mechanism: citizens know what has happened but have been trained not to form reactions that could become shared knowledge.",
            "By having Winston retain a clear private memory of Syme while being unable to share it, Orwell reveals the practical meaning of vaporization: the Party does not need to erase every individual memory — it only needs to make those memories incommunicable.",
          ],
          placeholder: 'Write your own version of the claim, or edit the one you selected...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            "Understatement — the most extreme act (a person's entire existence being erased) is described in a tone of flat bureaucratic observation, mimicking the social numbness the Party has produced.",
            "Paradox — 'Syme had ceased to exist: he had never existed.' The grammatical structure enacts the erasure it describes: the past tense of the first clause is cancelled by the retroactive present of the second, reproducing in language the temporal impossibility the Party achieves in reality.",
            "Free indirect discourse — Orwell moves between social description and Winston's private memory, creating a contrast between the official silence around Syme's disappearance and the specific, irreducible individuality of Winston's recollection.",
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"Syme had ceased to exist: he had never existed."',
            '"His absence made no more impression on the general atmosphere than the removal of a piece of furniture."',
            '"Except in Winston\'s mind, which he could not communicate to another soul."',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            "The comparison of Syme's absence to 'the removal of a piece of furniture' measures the Party's success not in the violence of the act but in the flatness of the social response — the trained incapacity to register the disappearance as significant reveals how deeply the conditioning has penetrated.",
            "The paradox of 'ceased to exist: he had never existed' reproduces in miniature the Party's greatest achievement: the retroactive erasure of a person from time. It is not just that Syme is gone — it is that he was never there. The grammar enacts the politics.",
            "The isolation of Winston's memory — 'except in Winston's mind, which he could not communicate to another soul' — reveals that private truth has no political weight without social corroboration, making his accurate memory as impotent as official ignorance.",
          ],
          placeholder: 'Explain the effect on the reader and what it reveals...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: "Why is this significant to the novel as a whole?",
          guidedOptions: [
            "Syme's disappearance demonstrates what Winston's diary-keeping and later association with O'Brien are fighting against: not merely a government's lies but the systematic destruction of the social conditions in which truth can be held and shared. 'Who controls the past controls the future' — and Syme's erasure shows exactly how.",
            "The chapter connects to Winston's own fate: if Syme can be removed so completely that his absence passes without comment, then Winston will be removable in the same way. His private resistance — the diary, the room, the hope — will leave no trace a system like this cannot erase.",
            "Orwell's argument about truth requires this chapter: he is not merely saying the Party lies, but that it has destroyed the social infrastructure on which truth depends. Without shared memory, without corroboration, without a stable past, even the person who knows what happened cannot make it real.",
          ],
          placeholder: "Connect your argument to Orwell's broader concerns...",
        },
      ],
      modelParagraph: "In Chapter 5, Orwell uses Syme's disappearance to show that the Party's most complete achievement is not spectacular violence but the systematic destruction of the social conditions in which truth can exist. The key detail is not that Syme is gone but that his going produces no reaction: 'his absence made no more impression on the general atmosphere than the removal of a piece of furniture.' The simile is devastating in its precision — Syme has been reduced from a person to an object, and his removal from the world has the same significance as the removal of a chair from a room: none. Orwell underscores this with his most structurally precise sentence: 'Syme had ceased to exist: he had never existed.' The paradox — past tense cancelled by retroactive present — reproduces in language the temporal impossibility the Party achieves in reality: a person can be made never to have been. Yet Winston remembers Syme clearly, with the specific detail of someone who has shared arguments and meals with another person. But this memory is 'except in Winston's mind, which he could not communicate to another soul' — and a private truth that cannot be communicated has no political weight. Orwell's argument reaches beyond individual dishonesty to something more fundamental: the Party has not merely taught citizens to lie, it has destroyed the social infrastructure on which truth depends. Without shared memory, without the capacity to corroborate, the person who knows what happened is as impotent as the person who has been trained to forget.",
    },
    worldTodayData: {
      question: "Syme is erased so thoroughly that his disappearance produces no reaction. What examples can you find of governments, platforms, or institutions attempting to erase people, events, or information from the historical or public record?",
      sampleResponses: [],
    },
  },
  {
    id: 'part2-chapter6',
    title: "Chapter 6: O'Brien's Invitation",
    summary: "O'Brien approaches Winston in a corridor, compliments his Newspeak writing, and gives him his private address — ostensibly to lend a dictionary. Winston is convinced this is a coded invitation to join the Brotherhood. He has waited years for this moment.",
    themes: ['Loyalty vs. Betrayal', 'Psychological Manipulation'],
    quote: "We shall meet in the place where there is no darkness.",
    closeReadingData: {
      passages: [
        {
          passage: '"We shall meet in the place where there is no darkness," O\'Brien had said to him. He did not know what it meant — only that in some way or another it would come true. Winston did not know whether he had said it first in a dream or whether O\'Brien had said it and then it had entered his dreams. The peculiar reverence for O\'Brien, which nothing seemed able to destroy, flooded back.',
          question: "What does Orwell achieve by having Winston interpret O'Brien's cryptic phrase as a promise of liberation — when the reader will later learn that 'the place where there is no darkness' is the perpetually lit interrogation cell of the Ministry of Love?",
          options: [
            { text: "He shows that Winston is too intellectually credulous and should have recognised the threat in O'Brien's language.", isCorrect: false, feedback: "Criticising Winston's credulity misses the point. The phrase is genuinely ambiguous at this stage, and Winston's interpretation is reasonable. The trap requires the reader's retrospective knowledge to see." },
            { text: "He creates dramatic irony that spans the entire novel: Winston's hope is built on language that, correctly understood, describes his own torture chamber — and the irony is only fully visible in Part 3.", isCorrect: true, feedback: "Correct. The phrase works on two registers simultaneously: as a promise (Winston's reading) and as a threat (its literal fulfilment in the Ministry of Love). The dramatic irony is designed to make the reader complicit in Winston's hope — and to make the betrayal feel like a catastrophe encoded in the language he trusted." },
            { text: "He establishes O'Brien as a figure of genuine ambiguity whose real allegiance is uncertain even to himself.", isCorrect: false, feedback: "O'Brien's allegiance is not uncertain to himself. The novel eventually reveals that he is a fully committed Party member. The ambiguity exists for Winston, not for O'Brien." },
            { text: "He uses the phrase to suggest that the Brotherhood genuinely exists as a liberation movement that O'Brien is secretly leading.", isCorrect: false, feedback: "The Brotherhood is eventually shown to be either a fiction or impossible to verify. O'Brien uses the idea of it as a trap, not as a genuine invitation." },
          ],
          insight: "The phrase 'we shall meet in the place where there is no darkness' is the novel's most concentrated dramatic irony. Winston hears it as a promise — darkness is ignorance, oppression, the permanent twilight of the controlled mind; the place without it must be freedom, truth, the Brotherhood. He holds onto it for years. Orwell gives the reader the same experience: the phrase is beautiful and hopeful in its syntax, and it is only in Part 3 that we understand it describes the interrogation room of the Ministry of Love, kept permanently lit so that prisoners can never tell whether it is day or night. The 'place where there is no darkness' is a torture chamber. Orwell has constructed a sentence in which hope and horror share exactly the same words — which is also a definition of doublethink.",
        },
        {
          passage: 'But there was now no certainty that O\'Brien was not an agent of the Thought Police. And yet — it was impossible to be sure. He had had that peculiar feeling about O\'Brien for years — a feeling he had not had about any other person. Something in O\'Brien\'s face suggested that one might talk to him without prudence. He had made himself vulnerable in front of O\'Brien, and O\'Brien had made himself vulnerable too.',
          question: "What does Orwell achieve by having Winston remain unable to determine whether O'Brien is a fellow dissenter or an agent of the Thought Police — and proceed anyway?",
          options: [
            { text: "He shows Winston's recklessness: he acts on hope without evidence and pays the price.", isCorrect: false, feedback: "This reduces the scene to a moral about imprudence. Orwell's concern is not whether Winston was reckless but what his choice reveals about life under totalitarianism: when genuine connection is impossible to verify, the desire for it becomes dangerous — and yet not desiring it is also a form of defeat." },
            { text: "He creates suspense about O'Brien's true role, which will not be resolved until Part 3.", isCorrect: false, feedback: "The suspense is present but not the primary function. Orwell is building a political argument. The unresolvability of the question is itself the argument." },
            { text: "He shows that the Party's deepest achievement is not surveillance but the destruction of the possibility of trust: Winston cannot know whether O'Brien is a friend, and proceeds not from certainty but from the unbearable hunger for human connection the Party has made impossible to verify.", isCorrect: true, feedback: "Correct. This is the most precise description of life under totalitarian surveillance: not that you are watched, but that you can never know whether you are watched. The inability to trust is the system's product. Winston proceeds anyway — because not proceeding is also a form of defeat." },
            { text: "He uses the ambiguity to suggest that O'Brien might genuinely be a member of the Brotherhood and that Winston's intuition could be correct.", isCorrect: false, feedback: "While this is how Winston reads the situation, Orwell's construction allows the reader to see what Winston cannot: that the uncertainty itself is the trap. It is not a puzzle with a solution — it is a condition the system has created." },
          ],
          insight: "Winston's inability to resolve the question of O'Brien's allegiance is one of Orwell's most precise political observations. Under the kind of surveillance the Party has created — where any person might be an informer, any expression might be read as thoughtcrime, any approach might be a trap — the uncertainty itself is the instrument of control. Winston proceeds not from certainty but from need: the need for a human connection the system has made impossible to verify. This is Orwell's most damaging charge against totalitarianism: it does not merely punish trust, it makes trust impossible — and yet the need for it persists, making every act of reaching out a vulnerability the system can exploit.",
        },
      ],
    },
    paragraphBuilderData: {
      focus: "How does Orwell use O'Brien's phrase and the ambiguity of his allegiance to show how hope itself becomes an instrument of totalitarian control?",
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: "What argument do you want to make about what Orwell achieves in Chapter 6? Choose one, then refine it.",
          guidedOptions: [
            "In Chapter 6, Orwell shows that the Party's most sophisticated achievement is the weaponisation of hope: by making genuine connection impossible to verify, it ensures that the human need for trust becomes the very mechanism of entrapment.",
            "Through the dramatic irony of 'we shall meet in the place where there is no darkness,' Orwell creates a phrase that contains Winston's hope and his torture chamber in the same words — suggesting that under totalitarianism, the language of liberation and the language of destruction are indistinguishable.",
            "By having Winston proceed toward O'Brien despite being unable to verify his allegiance, Orwell argues that the Party's deepest violence is against trust itself: when no connection can be safely formed, the hunger for human contact becomes the system's most exploitable vulnerability.",
          ],
          placeholder: 'Write your own version of the claim, or edit the one you selected...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            "Dramatic irony — 'we shall meet in the place where there is no darkness' operates as a promise to Winston and as a description of his torture chamber to the reader who has finished the novel, encoding hope and horror in a single sentence.",
            "Structural ambiguity — by making O'Brien's allegiance genuinely unresolvable at this point, Orwell reproduces the epistemic condition of life under surveillance, where certainty about another person's intentions is structurally unavailable.",
            "Ironic naming — 'the place where there is no darkness' sounds like freedom (light as truth, darkness as oppression) but literally describes a permanently lit interrogation room. Orwell exploits the conventional symbolic association of light with liberation to construct a trap within language itself.",
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"We shall meet in the place where there is no darkness."',
            '"Something in O\'Brien\'s face suggested that one might talk to him without prudence."',
            '"It was impossible to be sure. He had had that peculiar feeling about O\'Brien for years."',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            "The dramatic irony of 'the place where there is no darkness' makes the reader complicit in Winston's hope — we want it to mean freedom, just as he does — and this complicity makes the eventual revelation of its literal meaning (the interrogation room) more devastating than simple foreshadowing would allow.",
            "By making O'Brien's allegiance unresolvable, Orwell shows that the Party's achievement is epistemic: it has destroyed the conditions under which knowledge of another person is possible, making every human connection a gamble the system can win.",
            "The phrase 'something in O'Brien's face suggested that one might talk to him without prudence' reveals that Winston's desire for connection has become a vulnerability: the very quality that makes O'Brien seem trustworthy is the instrument of the trap.",
          ],
          placeholder: 'Explain the effect on the reader and what it reveals...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: "Why is this significant to the novel as a whole?",
          guidedOptions: [
            "The phrase 'we shall meet in the place where there is no darkness' is the novel's most precise structural irony: spoken in Part 2 as a promise and fulfilled in Part 3 as a threat, with the same words serving both meanings. Orwell's argument is that under totalitarianism, the language of hope and the language of terror are not opposites — they are the same.",
            "O'Brien's ambiguity introduces the novel's central epistemological problem: in a system where any person may be an informer, where trust cannot be verified, and where hope is the most exploitable vulnerability, how does one live? Winston's answer — proceed anyway, from need rather than certainty — is the only human answer available, and the novel will measure its cost.",
            "The chapter establishes the logic of Part 3: O'Brien will not simply defeat Winston through force but will exploit exactly the quality that drew Winston to him — the possibility of a connection that transcends the Party's control. The novel's most devastating argument is that the Party can weaponise even the desire for authentic human relationship.",
          ],
          placeholder: "Connect your argument to Orwell's broader concerns...",
        },
      ],
      modelParagraph: "In Chapter 6, Orwell shows how hope itself becomes an instrument of totalitarian control, using O'Brien's phrase to construct a sentence that contains Winston's liberation and his torture chamber in exactly the same words. When O'Brien says 'we shall meet in the place where there is no darkness,' Winston hears a promise — darkness as oppression, the light as freedom, the place as the Brotherhood. Orwell constructs the phrase through ironic naming: the conventional symbolic association of light with truth and liberation makes it sound beautiful and hopeful, encouraging the reader's interpretation as well as Winston's. Only in Part 3, when the 'place where there is no darkness' is revealed to be the permanently lit interrogation room of the Ministry of Love, does the full dramatic irony become visible — and by that point the reader has spent the entire novel sharing Winston's hope. This complicity is the technique's precise function: Orwell makes us want the phrase to mean what Winston wants it to mean, so that its literal fulfilment destroys not just Winston's hope but ours. The chapter also introduces the novel's central epistemological problem: Winston cannot know whether O'Brien is friend or agent, and proceeds not from certainty but from an unbearable need for human connection the Party has made impossible to verify. By making O'Brien's allegiance structurally unresolvable, Orwell shows that the Party's achievement is epistemic: it has not merely monitored citizens but destroyed the conditions under which knowledge of another person is possible, converting the most fundamental human need into the system's most reliable weapon.",
    },
    worldTodayData: {
      question: "O'Brien exploits Winston's desperate need for a trusted ally. Where in today's world do state actors, corporations, or other powerful institutions exploit people's need for trust or belonging?",
      sampleResponses: [],
    },
  },
  {
    id: 'part2-chapter7',
    title: 'Chapter 7: Hope in the Proles',
    summary: "In their secret room, Winston reads to Julia from his diary: 'If there is hope, it lies in the proles.' The proles — 85% of the population — retain human instincts the Party has not bothered to destroy. But they never organise. Julia dismisses politics entirely. Winston clings to a hope that may be a projection.",
    themes: ['Totalitarianism', 'Control of Information'],
    quote: "If there is hope, it lies in the proles.",
    closeReadingData: {
      passages: [
        {
          passage: '"If there is hope," wrote Winston, "it lies in the proles." If there was hope, it must lie in the proles, because only there, in those swarming disregarded masses, eighty-five per cent of the population of Oceania, could the force ever be generated to destroy the Party. The Party could not be overthrown from within. Its enemies, if it had any enemies, were powerless. But if the proles could somehow become conscious of their own strength, they would have no need to conspire. They would only need to rise up and shake themselves like a horse shaking off flies.',
          question: "What does Orwell achieve by having Winston frame the proles' potential as something that requires them to 'become conscious' — while simultaneously showing that this consciousness has not yet developed and may never develop?",
          options: [
            { text: "He shows that Winston is an unreliable political analyst whose theory about the proles is simply wrong.", isCorrect: false, feedback: "The theory is not wrong — the proles do have the numerical and potential strength Winston describes. What Orwell is examining is why strength and consciousness are not the same thing, and why the transition between them is so difficult." },
            { text: "He uses the proles to offer a genuinely hopeful vision of revolutionary change that Winston himself is too cynical to believe in.", isCorrect: false, feedback: "The passage is not naively hopeful. Winston acknowledges that the consciousness has not developed. Orwell is presenting the proles as a genuine possibility and a genuine failure simultaneously." },
            { text: "He reveals the central paradox of revolutionary politics: the group with the power to change the system is the group most effectively prevented from recognising that power — and the change required to recognise it is the very change that has been made unavailable to them.", isCorrect: true, feedback: "Correct. The proles' potential is real, but recognising it requires a form of political consciousness the Party has systematically prevented from developing — through prolefeed, through managed daily life, and through the simple indifference of a system that does not consider them worth indoctrinating. This is the novel's most honest political despair." },
            { text: "He establishes the proles as a symbol of natural human vitality that will eventually outlast the Party, even if Winston cannot live to see it.", isCorrect: false, feedback: "While the proles do carry a symbolic quality of natural vitality, this passage is making a specific political argument about consciousness and organisation, not a symbolic statement about the long-term survival of human nature." },
          ],
          insight: "The prole passage is Orwell's most honest confrontation with the paradox of revolutionary politics. The proles have everything needed to overthrow the Party — numbers, energy, relative freedom from ideological constraint — except the one thing that would make these assets politically useful: consciousness of their own condition. And the mechanism that prevents this consciousness from developing is elegant in its cruelty: the Party does not indoctrinate the proles because it does not consider them worth indoctrinating. This very indifference leaves their humanity intact. But it also leaves them without the political vocabulary that would allow them to recognise their situation. They are free in the way that animals are free — unpersecuted, uncontrolled, but also unreflective. Winston's 'if there is hope' is precise: it is a conditional, not a prediction. The hope is real, but it is the only hope that exists — and it may never be realised.",
        },
        {
          passage: 'Below the window a woman had burst spontaneously into song. She had a powerful mare-like voice. She was large with child, perhaps eight months gone, and with red forearms. Winston watched her with a sort of vague reverence. She seemed to have no difficulty whatsoever in doing two things at once. Her voice floated upward through the window, rich, dark, full of a vitality that he could see but could not share.',
          question: "What does Orwell achieve by having Winston watch the prole woman singing and feel 'reverence' — as though observing something from which he is excluded rather than something he could join?",
          options: [
            { text: "He shows Winston's growing romanticism, which blinds him to the practical limitations of placing hope in the proles.", isCorrect: false, feedback: "The reverence is not blind romanticism. Orwell is presenting something genuinely important about the prole woman — her vitality, her continuity with natural life — while also being precise about the nature of Winston's relationship to it: observation, not participation." },
            { text: "He suggests that Winston is incapable of the kind of unselfconscious living the prole woman embodies — that his political consciousness makes natural existence permanently unavailable to him.", isCorrect: true, feedback: "Correct. The prole woman is not self-conscious. She sings because she feels like singing. Winston can observe this vitality but cannot share it: his capacity for political analysis is simultaneously what enables his resistance and what separates him from the uncomplicated living the proles represent." },
            { text: "He uses the prole woman to suggest that the Party has been more successful in destroying natural human life among the Outer Party than among the proles.", isCorrect: false, feedback: "This reading is partially true but not the dominant effect of this passage. Orwell's concern here is Winston's relationship to what he observes — the quality of reverence as a form of distance." },
            { text: "He establishes the prole woman as a symbol of hope that will be fulfilled in the novel's ending.", isCorrect: false, feedback: "The prole woman does not appear in the ending, and the novel does not offer the hopeful resolution her presence might suggest. She is a symbol of potential, not of realisation." },
          ],
          insight: "The prole woman singing is one of the novel's most ambiguous images. She represents everything the Party has failed to destroy: unselfconscious vitality, embodied living, the physical continuity of human existence that precedes and may outlast political systems. Winston watches her with reverence — a word that implies distance and something like worship. And this is the key: he can see the thing he is not. His political consciousness, the very quality that enables him to write a diary and resist the Party's conditioning, also permanently separates him from the prole woman's kind of living. He cannot sing without knowing why he is singing. This is Orwell's most melancholy insight: the proles may survive. But Winston, for all his hope, cannot become one of them. The hope lies in the proles — and Winston can only see it from the window.",
        },
      ],
    },
    paragraphBuilderData: {
      focus: "How does Orwell use the proles to explore the paradox at the heart of revolutionary possibility in the novel?",
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves in Chapter 7? Choose one, then refine it.',
          guidedOptions: [
            "In Chapter 7, Orwell uses the proles to reveal the central paradox of revolutionary politics: the group with the power to overthrow the system is the same group that has been most effectively prevented from recognising that power.",
            "Through Winston's observation of the prole woman, Orwell shows that his political consciousness — the very thing that enables resistance — also permanently excludes him from the kind of unselfconscious vitality that might sustain it.",
            "By having Winston write 'if there is hope, it lies in the proles' as a conditional rather than a declaration, Orwell acknowledges that the proles' potential is genuine and their consciousness is absent — a hope that exists only as long as it remains unverified.",
          ],
          placeholder: 'Write your own version of the claim, or edit the one you selected...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            "Irony — the proles are simultaneously the only genuine hope for overthrowing the Party and the group most thoroughly insulated from the political consciousness that would make this hope real, creating an irony that the passage acknowledges without resolving.",
            "Symbolism — the prole woman singing spontaneously embodies the natural vitality the Party has failed to destroy, while Winston's reverence marks the distance between this vitality and the political self-consciousness that makes him capable of recognising it but incapable of sharing it.",
            "The conditional — by writing 'if there is hope' rather than 'there is hope,' Orwell refuses false comfort: the proles' potential exists without the assertion that it will ever be realised.",
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"If there is hope, it lies in the proles."',
            '"They would only need to rise up and shake themselves like a horse shaking off flies." — the power that remains unconscious of itself.',
            '"A sort of vague reverence" — Winston watching the prole woman\'s vitality from across an unbridgeable distance.',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            "The simile of shaking off flies — so natural, so easy — makes the proles' potential feel almost casual, which intensifies the tragedy of its non-realisation: they could end this, if only they could see it.",
            "The conditional 'if' in 'if there is hope, it lies in the proles' is Orwell's most honest grammatical construction: it acknowledges the genuine possibility while refusing to promise its fulfilment.",
            "Winston's reverence for the prole woman is not admiration but recognition-at-a-distance: she has what he can see but not access, and his political consciousness — the very thing that makes him able to see — is also what permanently separates them.",
          ],
          placeholder: 'Explain the effect on the reader and what it reveals...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: "Why is this significant to the novel as a whole?",
          guidedOptions: [
            "The chapter's treatment of the proles is the novel's most honest political statement: Orwell does not offer them as a solution, but as the only possible solution — and locates the tragedy of the novel in the distance between what they could do and what the system has ensured they will not do.",
            "Winston's inability to share the prole woman's unselfconscious vitality anticipates the novel's ending: he is not a prole, and the qualities that make him more than a prole — his capacity for analysis, his keeping of the diary, his political awareness — are also what make him the Party's most legible target.",
            "The conditional 'if there is hope' establishes the novel's tone of honest despair: Orwell refuses both easy optimism (the proles will rise) and total nihilism (resistance is impossible) — insisting only that the possibility is real and unrealised, which is the most difficult position to maintain.",
          ],
          placeholder: "Connect your argument to Orwell's broader concerns...",
        },
      ],
      modelParagraph: "In Chapter 7 of Part 2, Orwell uses the proles to reveal the central paradox of revolutionary possibility: the group with the numerical power to overthrow the Party is the group that has been most effectively prevented from recognising that power. When Winston writes 'if there is hope, it lies in the proles,' the conditional is Orwell's most important grammatical choice: it acknowledges the genuine possibility without promising its realisation, maintaining the most intellectually honest position available — the hope is real, and it may never be fulfilled. The subsequent simile — they 'would only need to rise up and shake themselves, like a horse shaking off flies' — intensifies this with bitter precision: the act is described as almost effortless, as natural as an animal's reflex, which makes the fact of its non-occurrence more tragic, not less. The Party does not indoctrinate the proles because it does not consider them worth indoctrinating — and this indifference is its most sophisticated management of them. Their humanity remains intact precisely because it has never been contested. But the political consciousness that would convert this humanity into revolutionary action has never been developed either. Orwell completes the chapter's argument through Winston's observation of the prole woman singing: he watches her with 'a sort of vague reverence,' and this reverence marks the crucial distance. He can see the vitality she embodies — the unselfconscious, embodied life the Party has failed to destroy — but he cannot share it. His capacity for political analysis, the same quality that enables him to resist the Party's conditioning, permanently separates him from the kind of living he is watching. The hope lies in the proles. It lies in them, and Winston can only watch it from the window.",
    },
    worldTodayData: {
      question: "Orwell's argument is that the group with the most potential to change a system is often the group most prevented from recognising that potential. Can you identify a real-world example of this dynamic — where a large population has significant power but lacks the conditions to act on it?",
      sampleResponses: [],
    },
  },
  {
    id: 'part2-chapter8',
    title: 'Chapter 8: The Brotherhood',
    summary: "Winston and Julia visit O'Brien's Inner Party apartment. O'Brien reveals he is a member of the Brotherhood and administers a catechism: will they commit murder, sabotage, betray their country? They agree to everything — except being separated from each other. O'Brien promises to send them Goldstein's book.",
    themes: ['Loyalty vs. Betrayal', 'Totalitarianism'],
    quote: "We are the dead.",
    closeReadingData: {
      passages: [
        {
          passage: '"You are prepared to give your lives?" "Yes." "You are prepared to commit murder?" "Yes." "To commit acts of sabotage which may cause the death of hundreds of innocent people?" "Yes." "To betray your country to foreign powers?" "Yes." "You are prepared to cheat, to forge, to blackmail, to corrupt the minds of children, to distribute habit-forming drugs, to encourage prostitution, to disseminate venereal diseases — to do anything which is likely to cause demoralisation and weaken the power of the Party?" "Yes." There was one question they refused. "Not Julia! Not Julia!" he said.',
          question: "What does Orwell achieve by having the catechism escalate through murder, the corruption of children, and the spreading of disease — finding its limit not in morality but in the one personal bond Winston will not sacrifice?",
          options: [
            { text: "He shows that the Brotherhood's methods are morally equivalent to the Party's, undermining the moral basis of resistance.", isCorrect: false, feedback: "While this is a legitimate reading, it is not the primary effect of the catechism. Orwell is not drawing a moral equivalence — he is locating the limit of Winston's commitment, and that limit reveals more than the agreement itself." },
            { text: "He reveals that O'Brien is manipulating Winston by making him complicit in acts he would normally find repugnant — building loyalty through shared transgression.", isCorrect: false, feedback: "This reading anticipates Part 3's revelation, but it is not what the passage is primarily constructing. At this point, Orwell is examining what total commitment to a cause requires — and where the limits of that commitment lie." },
            { text: "He uses the catechism to show that Winston agrees to everything except separation from Julia, revealing that personal loyalty remains his deepest value — even against the demands of revolutionary sacrifice.", isCorrect: true, feedback: "Correct. The catechism is designed to escalate until it finds the line Winston will not cross. That line is not murder or treachery — it is Julia. This is Orwell's argument: the human bond is more fundamental than ideological conviction, and Winston's deepest resistance is not to the Party but to anything that would destroy what he loves." },
            { text: "He creates horror at the Brotherhood to suggest that all political organisations eventually replicate the violence of the systems they oppose.", isCorrect: false, feedback: "While this is a legitimate political theme, the catechism scene is not primarily making a statement about the Brotherhood's corruption. Its dramatic function is to locate the one thing Winston will not sacrifice." },
          ],
          insight: "The catechism is a masterpiece of escalating demand. O'Brien takes Winston through murder, sabotage, betrayal of country, and the corruption of children — and Winston agrees to each one. The escalation is designed to find the limit. When it does, the limit is not moral but personal: 'Not Julia! Not Julia!' Winston will commit any act of political violence but will not be separated from a person he loves. Orwell's argument is clear: ideology is negotiable, love is not. What Winston will not sacrifice is not his ethics or his conscience but his attachment to a specific human being. This is simultaneously the most human thing about him and the most dangerous — and Part 3 will measure what the Party does with exactly this vulnerability.",
        },
        {
          passage: '"We are the dead," he said. "We are the dead," echoed Julia dutifully. "You are the dead," said an iron voice behind them. They sprang apart. O\'Brien had not spoken. The voice came from the telescreen. They were facing the black telescreen. "Remain exactly where you are. Make no movement until you are ordered."',
          question: "What does Orwell achieve by having the telescreen complete Winston and Julia's sentence — returning 'we are the dead' as 'you are the dead' — at the moment of their arrest?",
          options: [
            { text: "He creates a dramatic surprise: the reader and the characters are shocked simultaneously by the reveal.", isCorrect: false, feedback: "While the reveal is dramatically effective, Orwell is doing more than producing shock. The exact repetition with a changed pronoun is a precise linguistic act with a specific political meaning." },
            { text: "He uses the pronoun shift from 'we' to 'you' to show that the Party takes Winston's own language and converts it from voluntary self-knowledge into an official verdict — demonstrating that even the words in which you accept your fate are not your own.", isCorrect: true, feedback: "Correct. 'We are the dead' was Winston's chosen, dignified phrase — a first-person plural acknowledgement, spoken privately. 'You are the dead' is the same phrase with one word changed, returned by an iron voice as a pronouncement of power. The Party does not just watch Winston — it takes his language and makes it its own." },
            { text: "He creates ironic symmetry: Winston and Julia said 'we are the dead' and are now confirmed as such by an authority they cannot resist.", isCorrect: false, feedback: "The symmetry is present, but the mechanism — the specific pronoun change — carries a more precise meaning than ironic confirmation. Orwell is making a point about language and power, not just narrative structure." },
            { text: "He shows that the Thought Police have been listening all along and simply chose this moment to act.", isCorrect: false, feedback: "This is true at the plot level, but it is not the effect Orwell is constructing in the exact repetition of the phrase. The focus should be on what the changed pronoun achieves." },
          ],
          insight: "'We are the dead' is Winston and Julia's most dignified statement: a voluntary acceptance of their situation, spoken in the first-person plural, acknowledging what they already knew. 'You are the dead' is the same phrase with one word changed — and that change is everything. 'We' implies a shared understanding, a chosen acknowledgement. 'You' is a verdict delivered from outside, by a voice with absolute power over their futures. Orwell has compressed the novel's central argument into a single grammatical act: in Oceania, the language in which you understand yourself is not yours. Winston cannot even name his own condition without the Party's capacity to take his naming and redirect it. This is what 'who controls the past controls the future' means at the level of the individual sentence.",
        },
      ],
    },
    paragraphBuilderData: {
      focus: "How does Orwell use the catechism and the arrest phrase to show what the Party must destroy to complete its victory over Winston?",
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves in Chapter 8? Choose one, then refine it.',
          guidedOptions: [
            "In Chapter 8, Orwell uses the catechism to reveal that Winston's deepest value is not ideological but personal — he will agree to any political violence, but not to the loss of Julia — establishing the precise vulnerability the Party will exploit in Part 3.",
            "Through the arrest scene, Orwell shows that the Party's control over language is absolute: by taking Winston's own phrase 'we are the dead' and converting it to 'you are the dead,' it demonstrates that even the language of self-knowledge is not one's own.",
            "By structuring the catechism as an escalating test that finds the limit of Winston's commitment, Orwell argues that the human bond is more fundamental than ideological conviction — and that this makes it the most exploitable vulnerability in the novel's final act.",
          ],
          placeholder: 'Write your own version of the claim, or edit the one you selected...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            "Anaphora — the repeated structure of the catechism ('You are prepared to...? Yes.') creates a ritual rhythm that makes the one refusal more dramatic and precise: Winston agrees to everything until the thing he will not give.",
            "Pronoun shift — the change from 'we are the dead' to 'you are the dead' performs the Party's expropriation of language in a single grammatical act: Winston's voluntary self-definition becomes an arrest warrant.",
            "Dramatic irony — throughout Chapter 8, the reader can see what Winston cannot: that the catechism is not an induction into the Brotherhood but a map of his vulnerabilities, which the Party will use against him in Part 3.",
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"You are prepared to commit murder?" "Yes." [...] "Not Julia! Not Julia!" — the one limit in a litany of compliance.',
            '"We are the dead." [...] "You are the dead," said an iron voice behind them.',
            '"You are prepared to cheat, to forge, to blackmail, to corrupt the minds of children?" "Yes."',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            "The anaphoric structure of the catechism makes Winston's one refusal — not Julia — stand out with absolute clarity against a background of total compliance: ideology is negotiable, love is not, and this distinction is precisely what the Party will exploit.",
            "The pronoun shift from 'we' to 'you' performs the Party's ultimate violence against language: even the words in which Winston accepts his fate are not his own — the Party takes them, changes one word, and converts self-knowledge into accusation.",
            "The dramatic irony of the catechism — Winston believes he is being inducted into the Brotherhood while being tested for the Party's future use — makes the reader complicit in an understanding of Winston's vulnerability that he cannot yet see.",
          ],
          placeholder: 'Explain the effect on the reader and what it reveals...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: "Why is this significant to the novel as a whole?",
          guidedOptions: [
            "The catechism's discovery of Winston's limit — Julia — maps exactly onto the strategy of Part 3: in Room 101, O'Brien will not use ideology to break Winston but the threat of rats, exploiting not his politics but his body's involuntary terror. The novel's final act is implicit in Chapter 8's one refusal.",
            "'You are the dead' completes the novel's argument about language: the Party does not merely control information — it controls the words in which people understand themselves. When Winston's own phrase is returned to him as a verdict, Orwell shows that even private self-knowledge has been colonised.",
            "The catechism establishes the deepest irony of Part 2: Winston and Julia believe they are joining a resistance movement when they are in fact providing a detailed map of their vulnerabilities. The Brotherhood's catechism is a weapon in disguise — Orwell's most economical dramatisation of how totalitarianism converts hope into the instrument of its own maintenance.",
          ],
          placeholder: "Connect your argument to Orwell's broader concerns...",
        },
      ],
      modelParagraph: "In Chapter 8 of Part 2, Orwell uses the catechism to reveal the precise vulnerability that will destroy Winston in Part 3, and the arrest phrase to show that the Party's control over language extends to the words in which a person understands themselves. The catechism escalates systematically — murder, sabotage, the corruption of children — and Winston agrees to each act without hesitation. The anaphoric rhythm of compliance ('Yes... Yes... Yes') makes the one refusal devastatingly clear: 'Not Julia!' Winston will perform any act of political violence but will not accept separation from the person he loves. This is Orwell's argument about the hierarchy of Winston's values: ideology is negotiable, the human bond is not — and this is exactly the map of his vulnerabilities that the Party will use in Room 101. The arrest phrase completes the chapter's argument about language. 'We are the dead' is Winston's voluntary, dignified acknowledgement of their situation — the first-person plural implying shared understanding, a chosen acceptance. 'You are the dead,' returned from the telescreen, shifts the pronoun and changes everything: the Party takes Winston's own words and converts them from self-knowledge into verdict. Orwell has compressed his central argument into a single grammatical act: in Oceania, even the language in which you accept your fate does not belong to you.",
    },
    worldTodayData: {
      question: "The catechism asks Winston to agree to acts he would normally find repugnant in the name of a cause. When, if ever, do you think extraordinary actions in pursuit of a political goal can be justified — and what limits, if any, should always exist?",
      sampleResponses: [],
    },
  },
  {
    id: 'part2-chapter9',
    title: 'Chapter 9: The Book',
    summary: "During Hate Week — when the enemy suddenly switches from Eurasia to Eastasia mid-rally — Winston receives Goldstein's book. He reads it in the secret room while Julia sleeps. The book explains that the Party seeks power for its own sake, that the three superstates are essentially identical, and that the war is perpetual by design. It answers 'how' but not 'why.'",
    themes: ['Control of Information', 'Psychological Manipulation'],
    quote: "War is Peace. Freedom is Slavery. Ignorance is Strength.",
    closeReadingData: {
      passages: [
        {
          passage: 'On the sixth day of Hate Week, the enemy had changed. Oceania was at war with Eastasia: Oceania had always been at war with Eastasia. A large part of the political literature of five years was now completely obsolete. All over the place were posters representing the Eurasian soldier — six feet four, it seemed — trampling on the tiny, hapless figures of Oceanian citizens. But the face on the poster was wrong! It was Eastasian. The orator, still smiling, lowered his head and went on speaking.',
          question: "What does Orwell achieve by having the enemy switch mid-rally — and by having the official position immediately become 'Oceania had always been at war with Eastasia'?",
          options: [
            { text: "He shows the Party's carelessness: such an obvious contradiction reveals the system's underlying fragility.", isCorrect: false, feedback: "This is not a mistake — it is a demonstration of power. The immediate adoption of 'always' is precisely the point: the Party can switch reality and retroactively erase the previous version without any visible mechanism of correction." },
            { text: "He creates a moment of dark comedy through bureaucratic absurdity.", isCorrect: false, feedback: "The enemy switch is the most disturbing moment in Part 2, not a comedic one. Orwell is showing something genuinely frightening about collective reality — how a crowd can transition between versions of the past without missing a beat." },
            { text: "He dramatises the practical operation of doublethink at the level of collective reality: the assembled crowd transitions in real time from one version of the past to another, with no visible mechanism of correction — performing the replacement of one reality with another as a public act of will.", isCorrect: true, feedback: "Correct. The switch from Eurasia to Eastasia is not presented as a correction or an explanation. It simply happens, and the past changes. 'Always' is the key word — it retroactively eliminates the previous reality. The crowd, mid-rage, redirects its emotion at the new enemy without missing a beat. This is doublethink performed collectively, publicly, and in real time." },
            { text: "He establishes that the war itself is not real — that all three superstates have manufactured external enemies to justify internal control.", isCorrect: false, feedback: "While Goldstein's book does make this argument, this specific passage is demonstrating something more immediate: the collective, real-time operation of doublethink, not the geopolitical theory of perpetual war." },
          ],
          insight: "The enemy switch is the most terrifying scene in Part 2 — not because of violence, but because of what it demonstrates about collective reality. The crowd has been hating Eurasia for years. The switch to Eastasia is not announced, explained, or apologised for. A new poster appears; the crowd redirects its rage; 'Oceania had always been at war with Eastasia.' The past has been altered without any visible mechanism, in public, in real time. Goldstein's book will explain the theory of this — that the war is perpetual by design, that the enemy serves a psychological function. But the rally scene is more powerful than the theory: it shows the crowd actively performing the replacement of one reality with another, the word 'always' erasing years of collective memory in a single syllable.",
        },
        {
          passage: 'The keyword here is blackwhite. Like so many Newspeak words, this word has two mutually contradictory meanings. Applied to an opponent, it means the habit of impudently claiming that black is white, in contradiction of the plain facts. Applied to a Party member, it means a loyal willingness to say that black is white when Party discipline demands this. But it means also the ability to believe that black is white, and more, to know that black is white, and to forget that one has ever believed the contrary.',
          question: "What does Orwell achieve by having Goldstein's book define 'blackwhite' as requiring not just the willingness to say false things but the ability to genuinely believe them and then forget that one ever believed otherwise?",
          options: [
            { text: "He shows that Party members are simply dishonest and know they are lying, which makes the system ultimately unstable.", isCorrect: false, feedback: "If Party members simply knew they were lying, the system would be vulnerable to anyone with the courage to say so. The terrifying claim of blackwhite is that it eliminates the distinction between lying and believing — making the system stable in a way that conscious lying never could be." },
            { text: "He uses Goldstein's book to suggest that Orwell personally believes all political language is fundamentally dishonest.", isCorrect: false, feedback: "Blackwhite is specific to the Oceanian system — it is not a general statement about political language. Orwell is describing a particular and extreme form of conditioning, not making a cynical claim about language in general." },
            { text: "He shows that the Party's most complete achievement is the elimination of the distinction between saying and believing — a conditioning so thorough that citizens are not lying when they assert falsehoods, because they have genuinely come to believe them, and then to forget they ever believed anything else.", isCorrect: true, feedback: "Correct. The three stages of blackwhite — saying, believing, forgetting — represent the complete capture of individual consciousness. A citizen who has achieved blackwhite is not suppressing a known truth; they have genuinely replaced it. This is the final answer to Winston's hope that someone who knows the truth might resist: by the time the conditioning is complete, no one knows the truth." },
            { text: "He uses the definition to foreshadow Winston's eventual breakdown under torture in Part 3.", isCorrect: false, feedback: "While blackwhite does describe what happens to Winston in Part 3, the passage's primary function is analytical — it is explaining the mechanism of the system, not primarily foreshadowing Winston's fate." },
          ],
          insight: "The definition of blackwhite is Goldstein's book at its most precise and most devastating. The three stages — saying black is white, believing it, forgetting you ever believed otherwise — represent the complete capture of individual consciousness. A government that merely forces citizens to say false things is ultimately vulnerable: the lie can be named, the knower can resist. A system that achieves blackwhite has eliminated the knower. There is no inner Winston left who secretly knows the truth — the secret truth has been replaced and the replacement forgotten. This is why Orwell writes 'the book' as answering 'how' but not 'why': the mechanism is clear, but the motivation — why the Party needs this level of control, what it is ultimately for — remains the novel's deepest question, reserved for O'Brien.",
        },
      ],
    },
    paragraphBuilderData: {
      focus: "How does Orwell use the enemy switch and Goldstein's book to show how the Party controls collective reality?",
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves in Chapter 9? Choose one, then refine it.',
          guidedOptions: [
            "In Chapter 9, Orwell dramatises the practical operation of doublethink at the level of collective reality: the enemy switch shows an entire crowd replacing one version of the past with another, with no visible mechanism of correction, demonstrating that the Party's control of reality is social rather than individual.",
            "Through the definition of blackwhite in Goldstein's book, Orwell shows that the Party's most complete achievement is not forcing citizens to lie but eliminating the distinction between lying and believing — a conditioning so thorough that falsehood becomes genuine conviction.",
            "By having the crowd redirect its hatred mid-rally without visible effort, Orwell shows that the most complete form of totalitarian control does not require willing assent but the engineering of collective emotion — making individual knowledge politically weightless against the momentum of the group.",
          ],
          placeholder: 'Write your own version of the claim, or edit the one you selected...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            "Dramatic irony — the reader understands that the switch from Eurasia to Eastasia is the Party's exercise of power over reality, while the crowd simply redirects its emotion, making the reader aware of a dimension of what is happening that the participants cannot see.",
            "Tense — the shift from 'Oceania had been at war with Eurasia' to the retroactive 'Oceania had always been at war with Eastasia' performs the mechanism of historical revision in the grammatical structure of the sentence itself.",
            "Essayistic prose — by embedding the definition of blackwhite within Goldstein's book, Orwell shifts to a non-fictional register that makes the political theory feel definitive and analytical rather than merely narrative, increasing its authority.",
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"Oceania had never been at war with Eurasia. Oceania had always been at war with Eastasia." — the retroactive revision performed in two consecutive sentences.',
            '"The ability to believe that black is white, and more, to know that black is white, and to forget that one has ever believed the contrary."',
            '"War is Peace. Freedom is Slavery. Ignorance is Strength." — the Party slogans as the compressed theory of what the rally demonstrates in practice.',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            "The retroactive 'always' performs the Party's greatest achievement in a single word: it does not merely change the present fact but retroactively rewrites the past, eliminating years of collective memory without any mechanism of revision that citizens could identify or resist.",
            "The three stages of blackwhite — saying, believing, forgetting — represent the complete capture of individual consciousness: a system that merely forces citizens to say false things is ultimately vulnerable; a system that achieves blackwhite has eliminated the person who knows the truth.",
            "'War is Peace' encodes the doublethink the rally dramatises: the war is not a military necessity but a social mechanism for managing the population, and 'peace' in Oceania is only possible while the war continues — making the slogan a precise description of the Party's political logic rather than mere paradox.",
          ],
          placeholder: 'Explain the effect on the reader and what it reveals...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: "Why is this significant to the novel as a whole?",
          guidedOptions: [
            "Chapter 9 provides the theoretical explanation for everything the novel has shown in practice: the perpetual war, the interchangeable enemy, the Party's absolute claim to power. Goldstein's book does not offer hope — it explains the system so completely that Winston's resistance appears more futile than before.",
            "The enemy switch demonstrates at a collective level what the rest of the novel has shown individually: the Party does not need to convince people that the past was always as it currently says — it only needs to produce the social conditions in which the collective 'always' crowds out the individual's memory of what was.",
            "Goldstein's book answers 'how' — the mechanism of perpetual war, the interchangeability of enemies, the Party's self-perpetuating logic — but explicitly does not answer 'why.' This gap is what Part 3 will fill: O'Brien's answer is the most terrifying passage in the novel, and Chapter 9 establishes the question.",
          ],
          placeholder: "Connect your argument to Orwell's broader concerns...",
        },
      ],
      modelParagraph: "In Chapter 9, Orwell uses the enemy switch to dramatise the most disturbing operation in the novel: the real-time replacement of collective reality, performed in public without any mechanism of acknowledgement or correction. When Oceania's enemy changes mid-rally from Eurasia to Eastasia, the crowd simply redirects its rage and the official position becomes 'Oceania had always been at war with Eastasia.' Orwell's tense manipulation is precise: the shift from past tense to the retroactive 'always' performs the mechanism of historical revision in the grammatical structure of the sentence itself. A single word erases years of collective memory — not through argument or announcement, but through the flat assertion of a permanent truth that has just been invented. Goldstein's book deepens this argument by explaining the mechanism of blackwhite: 'the ability to believe that black is white, and more, to know that black is white, and to forget that one has ever believed the contrary.' The three stages — saying, believing, forgetting — represent the complete capture of individual consciousness. A government that merely forces citizens to say false things remains vulnerable: the lie can be named, the knower can resist. A system that achieves blackwhite has eliminated the knower. There is no inner Winston who secretly knows the truth — the truth has been replaced, and the replacement forgotten. Together, the rally and the book establish Chapter 9's argument: the Party controls not facts but the social reality in which facts have any meaning — and a truth that cannot survive collective emotion or individual conditioning is, for all practical purposes, not true.",
    },
    worldTodayData: {
      question: "At the Hate Week rally, the enemy switches overnight and the crowd adjusts immediately. Can you find examples from recent history where a government or media narrative changed significantly and rapidly, requiring the public to shift its understanding of events or enemies?",
      sampleResponses: [],
    },
  },
  {
    id: 'part2-chapter10',
    title: 'Chapter 10: The Arrest',
    summary: "A voice from behind the picture says 'You are the dead.' The picture conceals a telescreen. Mr Charrington enters — younger, transformed, a member of the Thought Police. Soldiers smash in. Julia is beaten. Winston watches the glass paperweight shatter on the floor. The room above the shop was a trap. It was always a trap.",
    themes: ['Loyalty vs. Betrayal', 'Surveillance'],
    quote: "Here comes a candle to light you to bed, here comes a chopper to chop off your head.",
    closeReadingData: {
      passages: [
        {
          passage: '"You are the dead," said an iron voice behind them. They sprang apart. Winston\'s entrails seemed to turn to water. There was a telescreen behind the picture. "It was behind the picture," breathed Julia. "It was behind the picture," said the iron voice. "Remain exactly where you are. Make no movement until you are ordered." The room had always been a trap. It had always been a trap.',
          question: "What does Orwell achieve by having the arrest announced through the repetition of Winston's own phrase — 'we are the dead' returned as 'you are the dead' — rather than a direct command or declaration?",
          options: [
            { text: "He shows the Thought Police's theatrical arrogance — they choose a dramatic moment of revelation over an efficient arrest.", isCorrect: false, feedback: "The Thought Police are not being theatrical for its own sake. The repetition of Winston's phrase is not flourish — it is a precise demonstration of what the Party owns: Winston's own language." },
            { text: "He creates a moment of horror at the collapse of the distinction between private speech and public surveillance — the innermost room has been outward all along.", isCorrect: false, feedback: "This reading is partially correct, but it misses the specific linguistic act. It is not just that the telescreen was there — it is that the Party takes Winston's phrase and converts it from self-knowledge into verdict." },
            { text: "He shows that the Party's control over language is complete: even the words in which Winston privately accepted his fate can be expropriated, returned as an official pronouncement — converting self-knowledge into arrest warrant.", isCorrect: true, feedback: "Correct. 'We are the dead' was Winston's phrase — a dignified, voluntary acceptance. 'You are the dead' is the same phrase with one word changed, returned by an 'iron voice' with the force of an official verdict. The Party does not just watch Winston — it owns his language, and his most private acknowledgement becomes an instrument of arrest." },
            { text: "He creates dramatic irony: the reader knew the arrest was coming, and the use of Winston's own phrase makes it feel inevitable.", isCorrect: false, feedback: "The dramatic irony is present, but the specific technique — the pronoun shift, the expropriation of Winston's language — is more precise than general inevitability. The changed pronoun is the argument." },
          ],
          insight: "The arrest's most devastating element is not the violence — it is the single word. 'We are the dead' was Winston's chosen, dignified phrase: a first-person plural acknowledgement of what he already knew, spoken privately in a space he believed was safe. 'You are the dead' returns it from outside, in the second person, as a verdict delivered by absolute power. The pronoun shift is the grammatical enactment of the Party's ultimate claim: that the language in which you understand yourself is not yours. Winston cannot even name his own condition without the Party's capacity to take his naming and redirect it. The telescreen 'had always been there' — and the word 'always' retroactively converts every moment of apparent safety into a moment of observation. The most private space was the most thoroughly surveilled.",
        },
        {
          passage: 'The paperweight fell to the hearth-stone and shattered into pieces. The fragment of coral dropped out of the broken shell and clinked away on the floor. How small it looks, he thought involuntarily, how small it always was. He saw now that Mr Charrington was not wearing his spectacles. The face had become younger. He realised that for the first time in his life he was looking, with knowledge, at a member of the Thought Police.',
          question: "What does Orwell achieve by having the glass paperweight shatter in the moment of arrest — and by having Winston reflect 'how small it always was'?",
          options: [
            { text: "He shows that Winston has been deluded about the significance of his rebellion, which was always smaller than he imagined.", isCorrect: false, feedback: "This reading makes Winston's reflection a judgement on his whole life. But 'how small it always was' is specifically about the paperweight — a physical object — and its smallness is a contrast with its symbolic weight, not a dismissal of Winston's resistance." },
            { text: "He creates satisfying structural completion: the symbol introduced in Chapter 4 is destroyed in Chapter 10, mirroring the destruction of everything the room represented.", isCorrect: false, feedback: "The structural completion is present, but Orwell is doing more than providing narrative symmetry. Winston's reflection — 'how small it always was' — adds a further dimension that the symmetry alone cannot provide." },
            { text: "He uses the shattering paperweight to complete the novel's central symbol: the fragile, enclosed world of Winston and Julia has been broken, and Winston's recognition of how small the coral always was measures the ratio of their resistance against the state's power — genuine, beautiful, and impossibly small.", isCorrect: true, feedback: "Correct. The paperweight was 'a pocket of the past' — beautiful, enclosed, fragile. Winston identified himself and Julia with the coral inside it. Its shattering destroys the symbol at the moment of physical force. 'How small it always was' is not disillusionment but honest measurement: this small, beautiful thing against the apparatus of the state. It was never a fair contest." },
            { text: "He uses the physical detail of the shattering to ground the emotional shock of the arrest in concrete, sensory experience.", isCorrect: false, feedback: "While the physical detail does this, limiting the analysis to 'grounding' misses the symbolic function. The paperweight has been carrying symbolic weight since Chapter 4; its shattering is not incidental detail but the completion of a pattern." },
          ],
          insight: "The paperweight was established in Chapter 4 as a symbol for Winston and Julia's private world: fragile, enclosed, beautiful, 'fixed in a sort of eternity.' Its shattering in the moment of arrest is the completion of that symbol — and Winston's reflection ('how small it always was') is the final measure. The coral is tiny. It always was. Against the apparatus of the Thought Police, the room above the shop, the glass enclosure of their private life — it never had a chance. And yet it was real, and it was beautiful, and it was enough for as long as it lasted. Orwell is not saying the resistance was worthless. He is saying it was small — and he is precise about what 'small' means when measured against the machinery of total surveillance. The paperweight was the room. And the room was always already a trap.",
        },
      ],
    },
    paragraphBuilderData: {
      focus: "How does Orwell use the arrest scene to complete the central arguments of Part 2 — about language, private space, and the nature of hope under totalitarianism?",
      steps: [
        {
          id: 'claim',
          label: 'Your claim',
          instruction: 'What argument do you want to make about what Orwell achieves in the arrest scene? Choose one, then refine it.',
          guidedOptions: [
            "In Chapter 10, Orwell uses the arrest to complete Part 2's argument about language: by having the Thought Police return Winston's own phrase as a verdict, he shows that the Party's control is total — even the words in which you accept your fate are not yours.",
            "Through the shattering of the glass paperweight, Orwell destroys the novel's central symbol at the moment of its narrative completion: the fragile, private world Winston and Julia built is broken, and Winston's recognition of how small the coral always was measures the ratio of their resistance against the state's power.",
            "By revealing that the room above the shop was always a trap, Orwell completes the novel's argument about private space under totalitarianism: the only space that appeared safe was the most thoroughly surveilled, and the appearance of privacy was itself the mechanism of entrapment.",
          ],
          placeholder: 'Write your own version of the claim, or edit the one you selected...',
        },
        {
          id: 'technique',
          label: 'Your technique',
          instruction: 'What literary technique does Orwell use to create this effect?',
          guidedOptions: [
            "Pronoun shift — the change from Winston's 'we are the dead' to the Thought Police's 'you are the dead' performs the Party's expropriation of language in a single grammatical act: self-knowledge becomes arrest warrant.",
            "Symbolic completion — the glass paperweight, established in Chapter 4 as an image for Winston and Julia's enclosed, fragile world, shatters in the moment of arrest, completing the symbol at the point of its destruction.",
            "Retrospective irony — 'the room had always been a trap': the word 'always' retroactively reframes everything that happened in the room, converting every moment of apparent safety into a moment of observation.",
          ],
          placeholder: 'Name the technique and explain what it involves...',
        },
        {
          id: 'evidence',
          label: 'Your evidence',
          instruction: 'Which quotation best supports your argument?',
          guidedOptions: [
            '"You are the dead," said an iron voice — the pronoun shift that converts Winston\'s self-knowledge into verdict.',
            '"The paperweight fell to the hearth-stone and shattered into pieces." / "How small it always was."',
            '"The room had always been a trap. It had always been a trap."',
          ],
          placeholder: 'Embed your chosen quotation in a sentence...',
        },
        {
          id: 'effect',
          label: 'Your analysis',
          instruction: 'What does this technique and quotation achieve?',
          guidedOptions: [
            "The pronoun shift — 'we' to 'you' — reveals the Party's ultimate power not over bodies but over language: Winston cannot name his own condition without the Party taking the name and making it its own. Even in the act of acceptance, he is not free.",
            "'How small it always was' measures the novel's central tragedy with precision: the paperweight was real and beautiful and genuinely meaningful, and it was always impossibly small against the apparatus of the state. Orwell is not dismissing Winston's resistance but establishing the ratio with unflinching honesty.",
            "'Always been a trap' retroactively converts every moment of apparent safety in the room into a moment of surveillance, making the arrest not a surprise but the completion of a structure that was always already in place — which is more frightening than a surprise would be.",
          ],
          placeholder: 'Explain the effect on the reader and what it reveals...',
        },
        {
          id: 'significance',
          label: 'The bigger picture',
          instruction: "Why is this significant to the novel as a whole?",
          guidedOptions: [
            "The arrest scene brings together every thread of Part 2's argument: the colonisation of language ('you are the dead'), the destruction of private space (the telescreen behind the picture), and the shattering of the symbol of fragile hope (the paperweight). Orwell does not conclude Part 2 with a speech — he concludes it with a grammatical act, a physical object, and a word: 'always.'",
            "The Charrington reveal — a man who appeared harmless and nostalgic transformed into a sharp-faced member of the Thought Police — is the novel's final argument about trust: the conditions of surveillance make every apparently safe connection potentially lethal, and the appearance of safety is the most sophisticated trap available.",
            "Chapter 10 prepares the reader for Part 3's question: if the Party has destroyed private space, colonised language, and proven that hope itself was a trap, what is there left to take? O'Brien's answer — the self — is the most devastating passage still to come.",
          ],
          placeholder: "Connect your argument to Orwell's broader concerns...",
        },
      ],
      modelParagraph: "In Chapter 10 of Part 2, Orwell uses the arrest to complete the central argument about language that has run through the entire novel: the Party does not merely surveil and punish — it takes the words in which you understand yourself and converts them into instruments of power. When the iron voice returns Winston's own phrase — 'you are the dead,' shifted from his 'we are the dead' by a single pronoun — Orwell performs the Party's ultimate claim in miniature. Winston's voluntary, dignified acknowledgement of his situation becomes, in the second person, an official verdict delivered by absolute power. The grammar does the work: 'we' implies shared understanding and chosen acceptance; 'you' is imposed from outside, by a force that owns the language as completely as it owns everything else. The shattering of the glass paperweight completes this argument through a different register — the symbolic rather than the linguistic. Since Chapter 4, the paperweight has been an image for Winston and Julia's enclosed, fragile world: 'fixed in a sort of eternity at the heart of the crystal.' Its destruction in the moment of arrest is Orwell's most precise structural act, and Winston's reflection — 'how small it always was' — provides the final measure. The coral was real and beautiful and genuinely valued, and it was always impossibly small against the apparatus of the state. Orwell is not dismissing what it represented; he is establishing the ratio with unflinching honesty. The room was always a trap. The paperweight was always small. The Party, from the beginning, had been listening — and the language in which Winston accepted this was never, finally, his own.",
    },
    worldTodayData: {
      question: "The room above the shop appeared to be a private sanctuary but was always under observation. What parallels can you draw between this and the ways in which apparently private digital spaces — messaging apps, smart devices, social media platforms — are monitored or monetised today?",
      sampleResponses: [],
    },
  },
];

export const PART1_SCENES = SCENES.filter(s => s.id.startsWith('part1-'));
export const PART2_SCENES = SCENES.filter(s => s.id.startsWith('part2-'));

// ── Doublethink Game ──────────────────────────────────────────────────────────

export const DOUBLETHINK_GAME_DATA: DoublethinkGameData = {
  passingScore: 70,
  rounds: [
    {
      title: 'Identify the Contradiction',
      instructions: 'The Party demands you practise DOUBLETHINK. Select the two contradictory concepts in each slogan.',
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
          explanation: 'The Party claims perpetual war brings stability (peace) to Oceania by uniting citizens against a common enemy.',
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
          explanation: 'The Party teaches that individual freedom leads to chaos and suffering, while submission to Big Brother brings security.',
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
          explanation: 'The Party teaches that not questioning authority makes the collective stronger. Individual knowledge is dangerous.',
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
          explanation: 'If the Party says 2+2=5, you must believe it. Reality is whatever the Party declares it to be.',
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
          explanation: 'No human institution can be infallible, yet the Party demands belief in its perfection. This requires doublethink.',
        },
      ],
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
          explanation: 'WAR IS PEACE — perpetual war keeps the population united and controlled.',
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
          explanation: 'FREEDOM IS SLAVERY — individual freedom leads to chaos; only Big Brother provides security.',
        },
        {
          id: 'r2-3',
          type: 'complete',
          prompt: 'IGNORANCE IS ___',
          options: [
            { text: 'STRENGTH', isCorrect: true },
            { text: 'BLISS', isCorrect: false, feedback: 'This is an Oldspeak saying. The Party uses STRENGTH.' },
            { text: 'POWER', isCorrect: false, feedback: 'Power belongs to the Party, not to ignorance.' },
            { text: 'REQUIRED', isCorrect: false, feedback: 'Too weak. The Party makes stronger claims.' },
          ],
          explanation: 'IGNORANCE IS STRENGTH — not knowing protects you from thoughtcrime and strengthens the collective.',
        },
        {
          id: 'r2-4',
          type: 'complete',
          prompt: 'BIG BROTHER IS ___',
          options: [
            { text: 'WATCHING YOU', isCorrect: true },
            { text: 'PROTECTING YOU', isCorrect: false, feedback: 'The Party prefers surveillance to protection.' },
            { text: 'LOVING YOU', isCorrect: false, feedback: 'Love is demanded of you, not given to you.' },
            { text: 'ALWAYS RIGHT', isCorrect: false, feedback: 'True, but not the famous slogan.' },
          ],
          explanation: 'BIG BROTHER IS WATCHING YOU — the constant reminder of surveillance that controls behaviour.',
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
          explanation: 'Who controls the past controls the future; who controls the present controls the past.',
        },
        {
          id: 'r2-6',
          type: 'complete',
          prompt: 'DOUBLETHINK MEANS THE POWER OF HOLDING TWO ___ BELIEFS SIMULTANEOUSLY',
          options: [
            { text: 'CONTRADICTORY', isCorrect: true },
            { text: 'DIFFERENT', isCorrect: false, feedback: 'Too weak. The beliefs must contradict.' },
            { text: 'POLITICAL', isCorrect: false, feedback: 'It is not limited to political beliefs.' },
            { text: 'ORTHODOX', isCorrect: false, feedback: 'Orthodox beliefs would not conflict.' },
          ],
          explanation: 'Doublethink is the core skill of Party members: believing contradictions simultaneously and genuinely.',
        },
      ],
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
            { text: "Celebrate Big Brother's generosity for the increase", isCorrect: true },
            { text: 'Point out the mathematical error quietly', isCorrect: false, feedback: 'THOUGHTCRIME. You must not notice contradictions.' },
            { text: 'Stay silent and feel confused', isCorrect: false, feedback: 'FACECRIME. Confusion shows incomplete doublethink.' },
            { text: 'Ask a colleague if they remember differently', isCorrect: false, feedback: 'THOUGHTCRIME. You are spreading doubt.' },
          ],
          explanation: 'Proper doublethink means genuinely believing the ration increased, while also knowing it decreased, while also not knowing you know.',
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
          explanation: 'The past is mutable. Whatever the Party says IS the truth. Your memory must reshape itself instantly.',
        },
        {
          id: 'r3-3',
          type: 'orthodox',
          prompt: 'During Two Minutes Hate, you feel genuine rage at Goldstein. But you also notice he makes logical points. The orthodox response is:',
          options: [
            { text: 'Hate him MORE because his logic makes him more dangerous', isCorrect: true },
            { text: 'Report yourself for noticing his logic', isCorrect: false, feedback: 'This draws attention to your thoughtcrime.' },
            { text: 'Suppress the thought and scream louder', isCorrect: false, feedback: 'Suppression is not doublethink. You must genuinely not think it.' },
            { text: 'Discuss his points with a trusted colleague later', isCorrect: false, feedback: 'There are no trusted colleagues. All would report you.' },
          ],
          explanation: "Goldstein's intelligence is precisely why he is dangerous. Your hatred should increase with his apparent logic.",
        },
        {
          id: 'r3-4',
          type: 'orthodox',
          prompt: 'You see a colleague arrested by the Thought Police. Yesterday he was a hero of the Party. Today he is an unperson. You must:',
          options: [
            { text: 'Immediately forget he ever existed', isCorrect: true },
            { text: 'Wonder what crime he committed', isCorrect: false, feedback: 'THOUGHTCRIME. Unpersons never existed. There is no crime to wonder about.' },
            { text: 'Feel relief that you were not his friend', isCorrect: false, feedback: 'You cannot feel relief about someone who never existed.' },
            { text: 'Quietly remove his name from your records', isCorrect: false, feedback: 'The records have already been corrected. Your memory is the record that needs updating.' },
          ],
          explanation: 'An unperson never existed. There is nothing to wonder about, nothing to feel. He was never here.',
        },
        {
          id: 'r3-5',
          type: 'orthodox',
          prompt: "O'Brien tells you: \"We shall meet in the place where there is no darkness.\" The correct interpretation is:",
          options: [
            { text: 'The Ministry of Love — where the lights never go out', isCorrect: true },
            { text: 'A metaphor for death and the afterlife', isCorrect: false, feedback: 'The Party does not acknowledge metaphysics. Interpret literally.' },
            { text: 'A promise of friendship in a better future', isCorrect: false, feedback: 'THOUGHTCRIME. You are projecting hope onto a Party member.' },
            { text: 'A coded message for the Brotherhood', isCorrect: false, feedback: 'Dangerous assumption. Trust no one.' },
          ],
          explanation: 'The place where there is no darkness is the Ministry of Love, where the lights burn around the clock. O\'Brien\'s words are not a promise — they are a destination.',
        },
      ],
    },
  ],
};
