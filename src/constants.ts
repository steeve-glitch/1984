// FIX: The file was likely empty or a placeholder. It has been populated with the correct data to resolve module resolution errors.
import {
  Character,
  Scene,
  WritingTopic,
  MagicSentenceFocusArea,
  SemanticField,
  Theme,
  SymbolInfo,
} from './types';

export const CHARACTERS: Character[] = [
  { name: 'Willy Loman', description: 'An insecure, self-deluded traveling salesman. Willy believes wholeheartedly in the American Dream of easy success and wealth, but he never achieves it. Nor do his sons.' },
  { name: 'Linda Loman', description: 'Willy’s loyal, loving wife. Linda suffers through Willy’s grandiose dreams and self-deceptions.' },
  { name: 'Biff Loman', description: 'Willy’s thirty-four-year-old elder son. Biff led a charmed life in high school as a football star with scholarship prospects, but he failed math and did not have enough credits to graduate.' },
  { name: 'Happy Loman', description: 'Willy’s thirty-two-year-old younger son. Happy has lived in Biff’s shadow all of his life and desperately wants his father’s approval. He is a womanizer who is seemingly successful but deeply unfulfilled.' },
  { name: 'Charley', description: 'Willy’s next-door neighbor. Charley is a successful businessman and Willy’s only friend, though Willy is proud and jealous, refusing his offers of a job.' },
  { name: 'Bernard', description: 'Charley’s son and an important, successful lawyer. As a boy, Bernard was a nerdy but diligent student who idolized Biff.' },
  { name: 'Ben', description: 'Willy’s wealthy older brother who made his fortune in African diamond mines. Ben has recently died and appears only in Willy’s daydreams as a symbol of the success Willy craves.' },
  { name: 'The Woman', description: 'Willy’s mistress from his sales trips in Boston. Her presence in Willy\'s memories haunts him and is a source of his intense guilt.' },
];

export const SYMBOLS: SymbolInfo[] = [
    { name: 'Seeds', description: 'Representing for Willy the opportunity to prove the worth of his labor and leave a legacy, both as a salesman and a father. It is a desperate attempt to grow something tangible in his sterile, urban environment.'},
    { name: 'Diamonds', description: 'Symbolizing tangible wealth and the validation of one\'s labor (and life), as embodied by Ben\'s success in the jungle. They represent a get-rich-quick fantasy that contrasts with Willy\'s lifetime of struggle.'},
    { name: 'The Rubber Hose', description: 'A stark, physical symbol of Willy\'s suicidal intentions, hidden in the basement. It represents his quiet desperation and the grim reality of his mental state.' },
    { name: 'Stockings', description: 'A powerful symbol of Willy\'s infidelity and betrayal. Linda mending her old stockings represents her loyalty and frugality, while The Woman receiving new stockings from Willy represents his guilt and deceit.' },
    { name: 'The Flute', description: 'The sound of the flute is a motif that represents Willy\'s father and a nostalgic, idealized past connected to nature, craftsmanship, and a sense of freedom that Willy has lost.'},
];
export const THEMES: Theme[] = [
    { name: 'The American Dream', description: 'The play critiques the traditional American Dream, suggesting that its promise of success through hard work and personality is a flawed and often unattainable illusion.'},
    { name: 'Betrayal', description: 'Willy\'s betrayal of Linda through his affair, Biff\'s sense of betrayal upon discovering it, and Willy\'s betrayal of his own ideals are central to the family\'s downfall.'},
    { name: 'Denial', description: 'The Loman family lives in a state of denial about their own failures and the reality of their situation. Willy, in particular, retreats into a fantasy world of past glories to avoid confronting his present inadequacies.'},
];

export const SEMANTIC_FIELDS: SemanticField[] = [
  {
    id: 1,
    title: 'Success & The American Dream',
    description: "This field covers the language Willy uses to define his idealized version of success, which is based on personality, popularity, and material wealth.",
    terms: [
      { word: 'ambition', definition: 'An ardent desire for rank, power, or status.', connection: "Willy's tragedy is driven by his desperate ambition to achieve a level of success that was never realistic for him." },
      { word: 'well liked', definition: 'Being popular and having an attractive personality.', connection: "Willy Loman's core philosophy hinges on his flawed belief that being \"well liked\" is the ultimate secret to success." },
      { word: 'contacts', definition: 'Personal connections or acquaintances who can provide professional advantages.', connection: "Willy's faith in the American Dream rests on his flawed belief in 'contacts', teaching his sons that success comes from being well liked rather than from hard work or skill." },
      { word: 'materialism', definition: 'Emphasis on material objects, comfort, and wealth as the highest values.', connection: "The play critiques the hollow materialism of postwar America, where a family's worth is measured by their possessions." },
      { word: 'legacy', definition: "Something left behind for the next generation; the 'proof' of one's life.", connection: 'Willy is obsessed with the legacy he wants to build through his sons, viewing them as an extension of his own success.' },
      { word: 'success incarnate', definition: 'The very embodiment of success; a person who is success.', connection: 'Willy idolizes his brother Ben, referring to him as "success incarnate" because Ben represents a tangible, ruthless model of wealth.' },
    ],
  },
  {
    id: 2,
    title: 'Failure, Despair & Disillusionment',
    description: "This field includes the language of Willy's and his sons' realities, which stand in direct opposition to their “dream”.",
    terms: [
      { word: 'tired to the death', definition: 'A profound, bone-deep exhaustion that is both physical and spiritual.', connection: "Willy's opening confession that he is 'tired to the death' signifies his profound spiritual exhaustion from a life of chasing an unattainable dream." },
      { word: 'a dime a dozen', definition: 'To be common, ordinary and of no special value.', connection: "Willy's obsession with being 'vital' is his desperate attempt to prove he isn't just another failed salesman, 'a dime a dozen'." },
      { word: 'inadequacy', definition: 'A feeling of not being good enough to meet a standard.', connection: "Willy's deep-seated sense of inadequacy is clear when he admits to Linda that he feels 'foolish to look at' and that other salesmen 'pass me by'." },
      { word: 'obsolescence', definition: 'The state of being no longer wanted or useful; outdated.', connection: "Willy's growing sense of obsolescence is clear as he complains that his new, young boss, Howard, 'don’t appreciate' his decades of service." },
      { word: 'waste my life', definition: "To spend one's life on pointless or unfulfilling pursuits; to fail to build a 'future'.", connection: "Biff's deep inner conflict is clear when he admits to Happy that he feels all he has done is 'waste my life' by not settling into a conventional career." },
      { word: 'futility', definition: 'A sense of uselessness or pointlessness.', connection: "A clear sense of futility is shown in Willy's complaint that 'you can’t raise a carrot in the back yard anymore', symbolizing his sterile environment." },
    ],
  },
  {
    id: 3,
    title: 'Nature, The Past & Freedom',
    description: "This field represents everything the city is not. It's connected to Willy's idealized past, his father's legacy (the flute), and Biff's true desires.",
    terms: [
        { word: 'flute', definition: 'A recurring sound (motif) that represents Willy\'s father and an idealized, lost past.', connection: 'The play opens with the sound of a flute, connecting it to a sense of nature and the past before any characters even appear.' },
        { word: 'authenticity', definition: 'The quality of being real or true to one self.', connection: 'Biff\'s core conflict is his struggle for authenticity; he feels the "measly manner of existence" in the business world is fake.' },
        { word: 'craftsmanship', definition: 'Skill in a manual art; pride in making something tangible.', connection: 'Willy reveals his personal pride in craftsmanship when he boasts to Charley about the ceiling he put up in the living room.' },
        { word: 'jungle', definition: 'A place of primal, ruthless competition, but also of tangible, immediate wealth.', connection: 'Willy\'s idealized image of his brother Ben is built on the story that Ben walked into the jungle and emerged a rich man.' },
        { word: 'nostalgia', definition: 'A sentimental longing for a past time, often idealized.', connection: 'Willy\'s deep nostalgia is evident when he stops complaining about the "bricks and windows" to remember the "two beautiful elm trees".' },
    ],
  },
  {
    id: 4,
    title: 'Confinement & Urbanization',
    description: "This field includes the claustrophobic language of the Loman's current reality, where nature and opportunity are being suffocated.",
    terms: [
        { word: 'boxed in', definition: "To be trapped, suffocated and surrounded by one's physical environment.", connection: 'Willy\'s feeling of being boxed in is both literal and metaphorical, as he complains that new apartment buildings have left them with "not a breath of fresh air".' },
        { word: 'towering angular shapes', definition: 'An image of the oppressive, impersonal, and hostile city buildings.', connection: 'The opening stage directions describe the Loman\'s home as being surrounded on all sides by the "towering, angular shapes" of apartment buildings.' },
        { word: 'claustrophobia', definition: 'A feeling of being trapped in a small or crowded space.', connection: 'Willy\'s growing claustrophobia is clear when he complains to Linda, "The way they boxed us in here. Bricks and windows, windows and bricks."' },
        { word: 'artificial', definition: 'Not natural; man-made, and by extension, fake.', connection: 'The play\'s opening stage directions contrast the natural "blue light of the sky” with the artificial "angry glow of orange" cast by the surrounding buildings.' },
    ],
  },
  {
    id: 5,
    title: 'Deception, Lies & Falsehood',
    description: "This field is crucial to the play's central conflict. It's the language of the “phony dream” that Biff finally rejects.",
    terms: [
        { word: 'phony', definition: 'A person or thing that is fake, inauthentic, or hypocritical.', connection: 'Happy\'s talk about his success feels phony when he immediately admits to Biff that he is “lonely” and "I don\'t know what the hell I\'m workin\' for."' },
        { word: 'delusion', definition: 'A belief that is firmly held despite being contradicted by reality.', connection: 'Willy\'s profound delusion is evident in his contradictory statements about Biff, calling him a "lazy bum” one moment and then insisting “he\'s not lazy” just seconds later.' },
        { word: 'stockings', definition: "A symbol of Willy's infidelity and his betrayal of Linda's love and sacrifice.", connection: 'Willy\'s intense guilt over his affair is revealed when he angrily yells at Linda for mending her stockings, as this reminds him that he gives new pairs to his mistress.' },
        { word: 'denial', definition: 'The refusal to accept a painful reality.', connection: 'Willy\'s denial of his son\'s flaws is evident when he dismisses Biff\'s theft of a football, reframing the act as "initiative".' },
        { word: 'hypocrisy', definition: "Claiming to have moral standards to which one's own behaviour does not conform.", connection: 'Happy\'s hypocrisy is evident when he claims he longs for a steady girl "with character" but then boasts about seducing the fiancées of his executives.' },
    ],
  },
];

export const ACT1_SCENES: Scene[] = [
  {
    id: 'act1-scene1',
    title: 'Scene 1: Willy and Linda',
    summary: "The play opens with Willy Loman returning home, exhausted from a business trip. His wife, Linda Loman, expresses concern, highlighting his mental fragility and recent car accidents. Willy complains about his job, his income, and his sons, particularly Biff Loman, who is visiting but seems lost in life. Willy's dialogue reveals his deep-seated insecurities and his contradictory nature as he simultaneously criticizes and praises Biff.",
    themes: ['The American Dream', 'Denial'],
    semanticFieldId: 2, // Failure, Despair & Disillusionment
    stealData: { 
        characters: [
            { character: 'Willy Loman', categories: [
                { category: 'Speech', sentence: 'Willy complains, "The competition is maddening! ... I’m tired to the death," revealing his profound ___ .', answer: 'Exhaustion' },
                { category: 'Thoughts', sentence: 'His private thoughts show a man struggling with feelings of ___ when he admits other salesmen are more successful.', answer: 'Inadequacy' },
            ]}
        ],
        options: ['Exhaustion', 'Inadequacy', 'Joy', 'Confidence']
    },
    readingCompData: [
        {
            question: "What is the primary reason for Willy's return home at the beginning of the play?",
            options: [
                { text: "He has been fired from his job.", isCorrect: false, feedback: "Not yet, though his job is clearly in jeopardy." },
                { text: "He is too exhausted and mentally distracted to continue driving.", isCorrect: true },
                { text: "He wants to surprise his sons, Biff and Happy.", isCorrect: false, feedback: "His sons' presence is a source of anxiety, not a happy surprise." },
                { text: "Linda called him and asked him to come home.", isCorrect: false, feedback: "Linda is surprised to see him; his return is unexpected." },
            ],
            explanation: "Willy admits he kept swerving off the road and couldn't keep his mind on driving, indicating a deep mental and physical exhaustion."
        }
    ],
    quote: "I'm tired to the death. I couldn't make it. I just couldn't make it, Linda.",
    gameData: { 
        prompts: [
            { text: "Willy's loyal and loving wife.", answer: 'Linda Loman' },
            { text: "The object Linda mends, which infuriates Willy.", answer: 'Stockings' },
        ],
        options: ['Linda Loman', 'Stockings', 'Biff Loman']
    },
    reflectionPrompt: 'What does Willy\'s exhaustion and his inability to travel reveal about his current state of mind and his feelings about his career?'
  },
  {
    id: 'act1-scene2',
    title: 'Scene 2: Biff and Happy Talk',
    summary: "Upstairs in their old bedroom, Biff Loman and Happy Loman reflect on their lives. Biff, despite having worked on farms out West, feels deeply unfulfilled and adrift. Happy Loman, who has a steady job, an apartment, and is a prolific womanizer, admits to being lonely and questions the meaning of his materialistic lifestyle. They discuss their father's mental state, and Biff hatches a plan to ask his old boss, Bill Oliver, for a loan to start a business, a plan that immediately fills them with a sense of hope and purpose.",
    themes: ['The American Dream'],
    semanticFieldId: 5, // Deception, Lies & Falsehood
    stealData: { 
        characters: [
            { character: 'Happy Loman', categories: [
                { category: 'Speech', sentence: 'Happy’s admission, "I’m lonely," despite his outward success, reveals his inner ___ .', answer: 'Emptiness' },
                { category: 'Actions', sentence: 'He engages in ___ behavior by seducing the fiancées of his superiors at work.', answer: 'Unethical' },
            ]}
        ],
        options: ['Emptiness', 'Unethical', 'Honesty', 'Contentment']
    },
    readingCompData: [
        {
            question: "What is the new business idea Biff comes up with to try and get his life on track?",
            options: [
                { text: "To become a traveling salesman like Willy.", isCorrect: false, feedback: "Biff explicitly wants to avoid his father's path." },
                { text: "To ask Bill Oliver for a loan to start a sporting goods business.", isCorrect: true },
                { text: "To move back West and buy a large ranch.", isCorrect: false, feedback: "This is his dream, but his immediate plan is to get a loan in the city." },
                { text: "To go into business with his brother Happy.", isCorrect: false, feedback: "While Happy is involved, the plan hinges on getting money from Bill Oliver." },
            ],
            explanation: "Biff decides to approach his former employer, Bill Oliver, to ask for a loan to start a business, believing Oliver still holds him in high regard."
        }
    ],
    quote: "I'm thirty-four years old, I oughta be makin' my future. That's when I come running home. And we oughta be gettin' married, gettin' settled.",
    gameData: { 
        prompts: [
            { text: "The older Loman son who feels lost in life.", answer: 'Biff Loman' },
            { text: "Biff's former employer whom he plans to ask for a loan.", answer: 'Bill Oliver' },
        ],
        options: ['Biff Loman', 'Bill Oliver', 'Happy Loman']
    },
    reflectionPrompt: "Happy seems to have many of the things associated with success (a job, an apartment, women), yet he admits he's lonely. What does this suggest about the version of success Happy is pursuing?"
  },
  {
    id: 'act1-scene3',
    title: 'Scene 3: Linda Reveals the Truth',
    summary: "After Willy Loman goes downstairs, Linda Loman speaks with her sons, Biff Loman and Happy Loman, who have been awakened by the noise. She reveals the grim truth of Willy's decline: his boss has reduced his salary, he's borrowing money from Charley every week, and he has been attempting suicide. She confronts Biff about his animosity towards his father and pleads with him to show Willy Loman respect. The scene ends with the discovery of the rubber hose Willy has hidden, a stark symbol of his desperation.",
    themes: ['Betrayal', 'Denial'],
    semanticFieldId: 2, // Failure, Despair & Disillusionment
    stealData: { 
        characters: [
            { character: 'Linda Loman', categories: [
                { category: 'Speech', sentence: 'Linda’s speech, "Attention, attention must be finally paid to such a person," demonstrates her fierce ___ .', answer: 'Loyalty' },
                { category: 'Effect on Others', sentence: 'Her revelation about the rubber hose has a ___ effect on her sons, forcing them to confront their father\'s desperation.', answer: 'Shocking' },
            ]}
        ],
        options: ['Loyalty', 'Shocking', 'Apathy', 'Humor']
    },
    readingCompData: [
        {
            question: "What shocking secret does Linda reveal to her sons about Willy?",
            options: [
                { text: "He is having an affair.", isCorrect: false, feedback: "Linda is not aware of the affair; this is discovered by Biff later." },
                { text: "He plans to retire and move to Florida.", isCorrect: false, feedback: "This is far from the truth; he is desperate to keep working." },
                { text: "He has been borrowing money from Charley but pretending it's his salary.", isCorrect: false, feedback: "While this is true, it is not the most shocking secret she reveals." },
                { text: "He has been trying to kill himself.", isCorrect: true },
            ],
            explanation: "Linda reveals that she found a rubber hose hidden in the basement, indicating Willy has been planning to commit suicide by inhaling gas."
        }
    ],
    quote: "He's a human being, and a terrible thing is happening to him. So attention must be paid. He's not to be allowed to fall into his grave like an old dog.",
    gameData: { 
        prompts: [
            { text: "The object that symbolizes Willy's suicidal intentions.", answer: 'The Rubber Hose' },
            { text: "The neighbor Willy borrows money from.", answer: 'Charley' },
        ],
        options: ['The Rubber Hose', 'Charley', 'Seeds']
    },
    reflectionPrompt: 'Linda famously says, "Attention, attention must be finally paid to such a person." What does this demand reveal about her character and her view of Willy\'s suffering?'
  },
  {
    id: 'act1-scene4',
    title: 'Scene 4: Willy as a Father (Flashback)',
    summary: "As Biff Loman's plan gives Willy Loman a surge of hope, he drifts into a vivid memory of the past. In this flashback, a younger Biff Loman and Happy Loman are seen washing the car, adoring their father who has just returned from a trip. Willy Loman brags about his popularity and success as a salesman. Biff shows Willy a football he 'borrowed' from the school, and Willy praises his 'initiative' rather than scolding him. The studious Bernard enters, warning that Biff Loman will fail math if he doesn't study, but Willy and the boys dismiss him. This memory establishes the flawed values Willy Loman instilled in his sons.",
    themes: ['The American Dream', 'Denial'],
    semanticFieldId: 1, // Success & The American Dream
    stealData: { 
        characters: [
            { character: 'Willy Loman', categories: [
                { category: 'Thoughts', sentence: 'Willy’s belief that being "well liked" is more important than grades shows his ___ values.', answer: 'Flawed' },
                { category: 'Effect on Others', sentence: 'His praise for Biff stealing a football encourages Biff’s ___ about rules.', answer: 'Arrogance' },
            ]}
        ],
        options: ['Flawed', 'Arrogance', 'Discipline', 'Strictness']
    },
    readingCompData: [
        {
            question: "In the flashback, how does Willy react when he finds out Biff stole a football?",
            options: [
                { text: "He is furious and makes Biff return it immediately.", isCorrect: false, feedback: "Willy does the opposite, showing his flawed moral compass." },
                { text: "He is disappointed and lectures Biff on honesty.", isCorrect: false, feedback: "He doesn't see it as a moral failing." },
                { text: "He praises Biff's 'initiative' and laughs it off.", isCorrect: true },
                { text: "He ignores it and changes the subject.", isCorrect: false, feedback: "He actively engages with it, reframing it as a positive trait." },
            ],
            explanation: "Willy dismisses the theft, telling Biff that the coach will be pleased with his 'initiative,' thereby teaching his son that rules don't apply to him if he is popular."
        }
    ],
    quote: "Be liked and you will never want. You take me, for instance. I never have to wait in line to see a buyer.",
    gameData: { 
        prompts: [
            { text: "The nerdy neighbor who warns Biff about failing math.", answer: 'Bernard' },
            { text: "The core philosophy Willy teaches his sons.", answer: 'Being well liked' },
        ],
        options: ['Bernard', 'Being well liked', 'Charley']
    },
    reflectionPrompt: "In this flashback, Willy says, 'Be liked and you will never want.' How does this piece of advice set up the central tragedy of the play for both Willy and his sons?"
  },
  {
    id: 'act1-scene5',
    title: 'Scene 5: The Other Woman (Flashback)',
    summary: "The scene transitions from the idyllic past to a more troubling memory. Willy Loman is in a hotel room with The Woman, laughing and flirting. He gives her a gift of new stockings. The memory is jarringly interrupted by Linda Loman's voice in the present, mending her own worn-out stockings. Willy Loman, overwhelmed with guilt, snaps at her, telling her to throw the stockings away. This juxtaposition reveals Willy's infidelity and the source of his intense guilt, symbolized by the stockings.",
    themes: ['Betrayal', 'Deception, Lies & Falsehood'],
    semanticFieldId: 5, // Deception, Lies & Falsehood
    stealData: { 
        characters: [
            { character: 'Willy Loman', categories: [
                { category: 'Actions', sentence: 'Willy’s act of giving new stockings to his mistress is a profound ___ of his wife, Linda.', answer: 'Betrayal' },
                { category: 'Speech', sentence: 'His angry outburst at Linda for mending her own stockings reveals his overwhelming sense of ___ .', answer: 'Guilt' },
            ]}
        ],
        options: ['Betrayal', 'Guilt', 'Pride', 'Honesty']
    },
    readingCompData: [
        {
            question: "What specific item serves as a powerful symbol of Willy's guilt and infidelity in this scene?",
            options: [
                { text: "A new car.", isCorrect: false, feedback: "Cars are mentioned, but they don't symbolize his infidelity." },
                { text: "A box of cheese.", isCorrect: false, feedback: "This is mentioned in the present, but it's not the key symbol of this memory." },
                { text: "A pair of stockings.", isCorrect: true },
                { text: "A diamond watch.", isCorrect: false, feedback: "Diamonds are associated with his brother Ben, not his affair." },
            ],
            explanation: "Willy gives new stockings to The Woman, his mistress, while his loyal wife Linda has to mend her old ones. When he sees Linda mending them, he is overcome with guilt and lashes out, making the stockings a symbol of his betrayal."
        }
    ],
    quote: "[To Linda]: I won't have you mending stockings in this house! Now throw them out!",
    gameData: { 
        prompts: [
            { text: "The city where Willy's affair takes place.", answer: 'Boston' },
            { text: "The character who represents Willy's infidelity.", answer: 'The Woman' },
        ],
        options: ['Boston', 'The Woman', 'Linda Loman']
    },
    reflectionPrompt: "Why does the simple act of Linda mending her stockings trigger such a strong and angry reaction from Willy? What does this reveal about his character?"
  },
  {
    id: 'act1-scene6',
    title: 'Scene 6: Charley, the Neighbour',
    summary: "Unable to sleep, Willy Loman wanders into the kitchen and finds his neighbor Charley playing cards. Willy, agitated and slipping into his memories, begins to talk to his imaginary brother Ben as if he's in the room. Charley is concerned but patient, trying to engage Willy Loman in a real conversation and even offering him a job. Willy Loman, too proud and jealous to accept, insults Charley instead. The scene highlights Willy's deteriorating mental state and his inability to accept the genuine help offered by his only friend.",
    themes: ['The American Dream', 'Denial'],
    semanticFieldId: 1, // Success & The American Dream
    stealData: { 
        characters: [
            { character: 'Charley', categories: [
                { category: 'Actions', sentence: 'Charley’s repeated offers of a job to Willy, despite being insulted, demonstrate his ___ .', answer: 'Generosity' },
                { category: 'Speech', sentence: 'His straightforward advice and calm demeanor contrast with Willy’s ___ state.', answer: 'Agitated' },
            ]}
        ],
        options: ['Generosity', 'Agitated', 'Greed', 'Calm']
    },
    readingCompData: [
        {
            question: "What does Charley offer Willy during their card game?",
            options: [
                { text: "A loan to help pay his bills.", isCorrect: false, feedback: "He gives Willy money every week, but in this scene, he offers something more." },
                { text: "Advice on how to be a better salesman.", isCorrect: false, feedback: "Charley doesn't pretend to know Willy's business." },
                { text: "A job with a steady salary and no travel.", isCorrect: true },
                { text: "A new car.", isCorrect: false, feedback: "This is not something Charley offers." },
            ],
            explanation: "Seeing Willy's distress and financial struggles, Charley generously offers him a job, which Willy's pride forces him to refuse."
        }
    ],
    quote: "You want a job?... When the hell are you going to grow up?",
    gameData: { 
        prompts: [
            { text: "The person Willy hallucinates he is talking to.", answer: 'Ben' },
            { text: "The activity Charley and Willy are engaged in.", answer: 'Playing cards' },
        ],
        options: ['Ben', 'Playing cards', 'Biff Loman']
    },
    reflectionPrompt: "Willy is in desperate need of money, yet he angrily refuses Charley's offer of a stable job. What does this refusal tell us about Willy's pride and his definition of success?"
  },
  {
    id: 'act1-scene7',
    title: 'Scene 7: Ben, the Brother',
    summary: "The scene transitions fully into Willy Loman's memory of his brother, Ben. Ben, a tangible and ruthless figure, represents a get-rich-quick version of the American Dream that Willy Loman both idolizes and fears. Ben tells stories of walking into the jungle at seventeen and emerging a rich man at twenty-one. He playfully spars with Biff Loman, teaching him to be ruthless. Willy Loman desperately seeks Ben's approval, needing validation that he is raising his sons correctly. The memory reveals Willy Loman's deep-seated insecurity and his longing for a clear path to success that has always eluded him.",
    themes: ['The American Dream'],
    semanticFieldId: 3, // Nature, The Past & Freedom (Jungle)
    stealData: { 
        characters: [
            { character: 'Ben', categories: [
                { category: 'Speech', sentence: 'Ben’s motto, "When I walked into the jungle, I was seventeen. When I walked out I was twenty-one. And, by God, I was rich," embodies a ___ path to success.', answer: 'Ruthless' },
                { category: 'Looks', sentence: 'His appearance is that of a ___ and confident man, the opposite of Willy.', answer: 'Wealthy' },
            ]}
        ],
        options: ['Ruthless', 'Wealthy', 'Timid', 'Poor']
    },
    readingCompData: [
        {
            question: "According to the memory, how did Ben get rich?",
            options: [
                { text: "By being a successful traveling salesman.", isCorrect: false, feedback: "This is Willy's path, not Ben's." },
                { text: "By discovering diamond mines in Africa.", isCorrect: true },
                { text: "By inheriting his father's business.", isCorrect: false, feedback: "Their father was an adventurer who disappeared." },
                { text: "By working hard in an office for many years.", isCorrect: false, feedback: "Ben's success was quick and based on adventure, not office work." },
            ],
            explanation: "Ben represents a fantasy of rapid, tangible wealth achieved through adventure and conquest in the jungle, a stark contrast to Willy's life of grinding sales work."
        }
    ],
    quote: "Why, boys, when I was seventeen I walked into the jungle, and when I was twenty-one I walked out. And by God I was rich.",
    gameData: { 
        prompts: [
            { text: "The place Ben found his fortune.", answer: 'The jungle' },
            { text: "What Ben found in the jungle.", answer: 'Diamonds' },
        ],
        options: ['The jungle', 'Diamonds', 'New York']
    },
    reflectionPrompt: "Ben represents a very different model of success compared to Willy's ideal of being 'well liked.' What does Willy's admiration for Ben reveal about his own deep-seated desires and insecurities?"
  },
];

export const WRITING_TOPICS: WritingTopic[] = [
  {
    id: '1',
    title: 'The Symbolism of Stockings',
    description: "Analyze how stockings represent Willy's guilt and betrayal.",
    techniques: ['Symbolism', 'Motif', 'Juxtaposition'],
    textEvidence: [
        "I won't have you mending stockings in this house! Now throw them out!",
        "You promised me stockings, Willy!",
        "The Woman...she's wearing the stockings he bought for her.",
    ],
  },
  {
    id: '2',
    title: 'Willy\'s Flawed American Dream',
    description: 'Examine Willy\'s belief that being "well liked" is the key to success.',
    techniques: ['Characterization', 'Irony', 'Dialogue'],
    textEvidence: [
        "Be liked and you will never want.",
        "He’s a man way out there in the blue, riding on a smile and a shoeshine.",
        "I’m tired to the death. I couldn’t make it. I just couldn’t make it, Linda.",
    ],
  },
  {
    id: '3',
    title: 'Biff\'s Internal Conflict',
    description: "Explore Biff's struggle between his father's expectations and his own desires.",
    techniques: ['Internal Conflict', 'Foil (to Happy)', 'Epiphany'],
    textEvidence: [
        "I’m thirty-four years old, I oughta be makin’ my future.",
        "We never told the truth for ten minutes in this house.",
        "I’m a dime a dozen, and so are you!",
    ]
  },
];

export const MAGIC_SENTENCE_FOCUS_AREAS: MagicSentenceFocusArea[] = [
  {
    title: 'The Symbolism of Stockings',
    techniques: ['Symbolism', 'Motif', 'Juxtaposition'],
    textEvidence: [
        "I won't have you mending stockings in this house! Now throw them out!",
        "You promised me stockings, Willy!",
    ],
    modelSentences: [
        "Arthur Miller utilizes the recurring symbol of stockings to represent Willy's profound guilt and marital betrayal.",
        "Through the juxtaposition of Linda mending her old stockings and 'The Woman' receiving new ones, Miller powerfully conveys Willy's deceit."
    ],
  },
  {
    title: 'Willy\'s Flawed American Dream',
    techniques: ['Characterization', 'Irony', 'Dialogue'],
    textEvidence: [
        "Be liked and you will never want.",
        "He’s a man way out there in the blue, riding on a smile and a shoeshine.",
    ],
    modelSentences: [
        "Through Willy's repetitive dialogue, Miller critiques the flawed American Dream by suggesting that being 'well liked' is a hollow substitute for tangible success.",
        "Miller uses dramatic irony in Willy's philosophy to expose the tragic gap between his perception of success and his actual, failing reality."
    ],
  },
  {
    title: 'Biff\'s Internal Conflict',
    techniques: ['Internal Conflict', 'Foil (to Happy)', 'Epiphany'],
    textEvidence: [
        "I’m thirty-four years old, I oughta be makin’ my future.",
        "We never told the truth for ten minutes in this house.",
    ],
    modelSentences: [
        "Miller develops Biff's internal conflict through his moments of epiphany, which reveal his struggle between his father's false values and his own desire for authenticity.",
        "Using Biff as a foil to Happy, Miller contrasts a character grappling with self-deception against one who has fully embraced it."
    ],
  }
];