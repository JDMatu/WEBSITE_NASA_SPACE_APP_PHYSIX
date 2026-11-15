/**
 * PHYSIX site content: every text, figure and link on the site lives in this file.
 *
 * How to update the site:
 *   1. PENDING (first block): values the team still has to provide. `null` means "not available
 *      yet" and the site shows a visible marker instead of a broken promise. Fill them in here.
 *      `npm run check:pending` lists what is still missing.
 *   2. FACTS (second block): numbers taken from the game repository. If the evaluation is run
 *      again or DONKI data lands, change them here and nowhere else.
 *   3. COPY (rest of the file): the words of each section, in page order.
 *
 * Rule: the site only states what the game repository supports (see its docs/PENDING.md).
 */

// ============================================================================================
// 1. PENDING: fill these in. Search for "TODO(team)".
// ============================================================================================

export const pending = {
  /** TODO(team): public URL of the playable game, e.g. 'https://play.example.org/'. */
  playUrl: null as string | null,
  /**
   * TODO(team): which build is behind playUrl.
   * 'ai'    = Node server with a provider key: the AI instructor is on.
   * 'rules' = static build: the game runs on its built-in rules, with no AI instructor.
   */
  playMode: 'rules' as 'ai' | 'rules',

  /**
   * TODO(team): the extended walkthrough video (about three minutes).
   * Either a public page URL (YouTube, Vimeo: it is embedded only after the visitor clicks, so no
   * third-party request happens on page load), or a file placed in /public, e.g. '/video/tour.mp4'.
   */
  videoExtendedUrl: null as string | null,
  /** TODO(team): the 30-second demo video (same rules as above). Shown as a secondary link. */
  video30Url: null as string | null,

  /** TODO(team): public URL of the game's source repository. Confirm before publishing it. */
  repoUrl: null as string | null,

  /** TODO(team): team name as registered. */
  teamName: null as string | null,
  /** TODO(team): local event and city, e.g. 'Space Apps Monterrey, Mexico'. */
  localEvent: null as string | null,
  /** TODO(team): public contact e-mail for teachers and partners. */
  contactEmail: null as string | null,
  /** TODO(team): licence of the game repository, e.g. 'MIT'. The repository has no LICENSE file yet. */
  license: null as string | null,

  /**
   * TODO(team): the six members. `photo` is a file name inside src/assets/team/ (square, at least
   * 400 px, adults only, with the person's permission), or null to show initials.
   * Suggested roles, to confirm: simulation engine, AI, 3D scene, interface and texts,
   * science and data, video and presentation.
   */
  team: [
    { name: null, role: null, built: null, photo: null },
    { name: null, role: null, built: null, photo: null },
    { name: null, role: null, built: null, photo: null },
    { name: null, role: null, built: null, photo: null },
    { name: null, role: null, built: null, photo: null },
    { name: null, role: null, built: null, photo: null },
  ] as { name: string | null; role: string | null; built: string | null; photo: string | null }[],
};

// ============================================================================================
// 2. FACTS: numbers from the game repository. Each one says where it comes from.
// ============================================================================================

export const facts = {
  /** docs/SOURCES.md (generated from the data pack). */
  constants: { total: 147, sourced: 29, measured: 24, derived: 5, gameDesign: 118, citations: 19 },

  /** README.md, "Testing and tools". */
  tests: { passing: 349, files: 31, asOf: 'November 14, 2026' },

  /**
   * The current four-rank game. Rules only, no AI model. docs/PENDING.md, "Not verified".
   * If the evaluation is repeated with the AI model for four ranks, add it as `evalCurrentAi`
   * and update the copy in `evidence` below.
   */
  evalCurrentRules: {
    games: 50,
    states: 1050,
    violations: 0,
    optionsValid: 1885,
    optionsTotal: 1885,
    winRateByRank: [
      { rank: 'Trainee', pct: 90 },
      { rank: 'Cadet', pct: 64 },
      { rank: 'Specialist', pct: 57 },
      { rank: 'Commander', pct: 25 },
    ],
  },

  /** The previous three-rank version, with the real AI model. docs/EVALS.md (2026-11-14). */
  evalPreviousAi: {
    games: 50,
    directorDecisions: 500,
    directorValidFirstTry: 499,
    states: 1050,
    violations: 0,
    narrationLines: 2184,
    interpreterPct: 93.4,
    interpreterRight: 71,
    interpreterTexts: 76,
    actionsOutsideList: 0,
    actionsEmitted: 63,
    varietyAi: 37,
    varietyRules: 47,
    winSpreadPoints: 32,
    winSpreadTarget: 30,
    rulesInterpreterPct: 89.5,
    rulesInterpreterTarget: 90,
    costPerSessionUsd: 0.112,
  },

  /** Is NASA DONKI space-weather data integrated in the game? Flip to true only when it ships. */
  donkiIntegrated: false,

  /** The closed action vocabulary: packages/contracts/src/actions.ts. */
  actionCount: 10,
  solsPerMission: 10,
  ages: '7 to 15',
};

// ============================================================================================
// 3. COPY: the words of the site, in page order.
// ============================================================================================

export const meta = {
  name: 'PHYSIX',
  title: 'PHYSIX: run a Mars base through the real 2018 dust storm',
  description:
    'PHYSIX is a browser mission trainer for students aged 7 to 15. Run a Mars base through the real 2018 dust storm. An AI instructor proposes; a simulator built on published NASA values decides.',
  lang: 'en',
  nonAffiliation: 'PHYSIX is not affiliated with or endorsed by NASA.',
};

export const nav = [
  { label: 'How it works', href: '#how' },
  { label: 'AI + simulator', href: '#ai' },
  { label: 'Science', href: '#science' },
  { label: 'Evidence', href: '#evidence' },
  { label: 'Team', href: '#team' },
];

/** Play button, used in the header, the hero, the watch band and the closing band. */
export const play = {
  label: 'Play now',
  /** Shown instead of the button while pending.playUrl is null. */
  pendingLabel: 'Playable link coming soon',
  pendingNote: 'The game is not hosted publicly yet. This button goes live with the public link.',
  noteAi: 'Runs in your browser. No account.',
  noteRules: 'Hosted demo runs on built-in rules; the AI instructor needs a server key.',
};

export const hero = {
  eyebrow: 'A junior astronaut mission trainer',
  title: ['Run a Mars base.', 'Make the trade-offs real.'],
  body:
    'PHYSIX is a browser game for students aged 7 to 15. You run a base on Mars through the real 2018 dust storm and balance air and water, power, radiation shielding and food. An AI instructor sets the problems. A simulator built on published NASA values decides what really happens.',
  watchLabel: 'Watch the 3-minute tour',
  watchPendingLabel: 'See how it works',
  small: ['Browser only', 'No account', 'English and Español'],
  scrollCue: 'Scroll to live through the storm',
  imageAlt: 'The PHYSIX base on Mars on a clear day: a habitat dome, a greenhouse, solar panels, a rover and two astronauts.',
};

/**
 * The storm sequence. Numbers are from the game's simulator: seed 1, Trainee rank, a scripted crew
 * that always takes the first option, rules director
 * (`npm run play -- --rank trainee --policy first_option --seed 1 --locale en` in the game repo).
 * `tau` is the sky opacity in the GAME (it peaks at 4.0 in this run). Never put the real 2018
 * value (10.8) on these images.
 */
export const storm = {
  hud: { sol: 'Sol', sky: 'Sky opacity', solar: 'Solar today', battery: 'Battery', unit: 'kWh', demand: 'The base uses 88 kWh per sol' },
  batteryCapacity: 150,
  solarClear: 111,
  steps: [
    {
      sol: 1,
      frame: 'sol01',
      tag: 'Clear sky',
      tau: 0.5,
      solar: 110,
      battery: 150,
      title: 'Sol 1. A quiet morning on Mars.',
      body: 'The solar panels make 110 kWh, more than the 88 the base uses. The battery is full. The crew does science and piles dirt on the habitat.',
      alt: 'The base on a clear day, with a full battery.',
    },
    {
      sol: 2,
      frame: 'sol02',
      tag: 'Dust storm',
      tau: 2.2,
      solar: 63,
      battery: 123,
      title: 'Sol 2. The dust arrives.',
      body: 'The sky opacity jumps from 0.5 to 2.2. The panels make 63 kWh and the base still needs 88. The battery starts paying the difference.',
      alt: 'The same base under a dusty orange sky as the storm arrives.',
    },
    {
      sol: 3,
      frame: 'sol03',
      tag: 'Dust storm',
      tau: 3.1,
      solar: 45,
      battery: 78,
      title: 'Sol 3. The storm thickens.',
      body: 'Only 45 kWh reach the panels. Half the battery is gone and the forecast says it gets worse.',
      alt: 'The base in thicker dust; the light is dimmer and redder.',
    },
    {
      sol: 4,
      frame: 'sol04',
      tag: 'Dust storm + solar event',
      tau: 4.0,
      solar: 29,
      battery: 19,
      title: 'Sol 4. A solar event hits inside the storm.',
      body: 'Radiation rises while the panels make 29 kWh. Shelter the crew or keep working? The battery is down to 19 kWh.',
      alt: 'The base in a dark storm during a solar particle event; the base lights are dimmer.',
    },
    {
      sol: 5,
      frame: 'sol05',
      tag: 'Brownout',
      tau: 4.0,
      solar: 32,
      battery: 0,
      title: 'Sol 5. The battery is empty.',
      body: 'Brownout. The base asks for 88 kWh and only 51.5 are there. Two systems are cut, life support last.',
      alt: 'The base in the dark storm with most of its lights off.',
    },
    {
      sol: 8,
      frame: 'sol08',
      tag: 'Clear sky',
      tau: 0.5,
      solar: 111,
      battery: 27,
      title: 'Sol 8. The sky clears.',
      body: 'The panels are back to 111 kWh and the battery begins to recover. This crew finished its ten sols. Would yours?',
      alt: 'The base under a clear sky again, with a regolith mound piled against the habitat.',
    },
  ],
  footnote:
    'Numbers from the game\'s simulator: seed 1, Trainee rank, a scripted crew that always takes the first option, rules director. Images: the game\'s own 3D base, drawn in code, rendered at each sol\'s sky, sunlight and battery values.',
};

export const move = {
  kicker: 'Your move',
  title: 'Every choice helps one system and costs another.',
  body: 'That storm is the mission. Each sol you get a briefing, make a plan and watch what it does to the base. Four systems compete for the same power and the same crew hours.',
  systems: [
    {
      id: 'life',
      name: 'Air and water',
      body: 'Life support recycles water and keeps the air breathable. It is the last thing the base cuts in a brownout, and it runs on power.',
    },
    {
      id: 'power',
      name: 'Power',
      body: 'Solar panels and one battery. Dust in the sky cuts the panels, and everything else on the base runs on what is left.',
    },
    {
      id: 'rad',
      name: 'Radiation',
      body: 'Pile regolith on the habitat or send the crew to the shelter. Both take crew hours away from science.',
    },
    {
      id: 'food',
      name: 'Food',
      body: 'The greenhouse grows fresh food from light, water and care. Dim its lamps to save power and the crop pays for it.',
    },
  ],
  shotAlt: 'The Trainee plan screen: three option cards, each showing what it helps and what it costs.',
  shotCaption: 'At Trainee rank each sol is one choice between three cards. Every card shows what it helps and what it costs.',
};

export const watch = {
  kicker: 'See it',
  title: 'The whole game in three minutes.',
  body: 'One full sol at Trainee rank, the same moment at Specialist, a plan written in the player\'s own words, an impossible request refused, and the real event behind the mission.',
  playVideo: 'Play the video',
  pendingTitle: 'Extended video: link pending',
  pendingBody: 'The walkthrough video is being edited. It will play here.',
  short: 'Watch the 30-second demo',
  embedNote: 'The video loads from its host only after you press play.',
};

export const problem = {
  kicker: 'The problem',
  title: 'Students see how a mission ends, not how it was decided.',
  body: [
    'Space lessons tend to either oversimplify the trade-offs of a real mission or bury them in complexity.',
    'PHYSIX makes them tangible. Every choice helps one system and costs another, and you watch it happen on the base: lights drop when power is short, the sky changes with dust, the shielding mound grows.',
  ],
  context: 'Built for the NASA Space Apps Challenge 2026, challenge "Build a Junior Astronaut Mission Trainer".',
  shotAlt: 'The game while a sol runs: an arc drawn over the 3D base links the lab to a label reading "Science: more", next to the four system gauges and the list of causes.',
  shotCaption: 'A storm sol running in the game. Each cause is drawn over the base and explained in plain words. The gauges on the left are the four systems.',
};

export const how = {
  kicker: 'How it works',
  title: 'One sol, five steps.',
  intro: 'A sol is a day on Mars: 24.6 hours. A mission lasts ten sols, and each one follows the same loop.',
  steps: [
    { name: 'Briefing', body: 'What is coming, with a forecast for the next three sols.', shot: 'step-briefing', alt: 'Briefing panel: a dust storm is active, with a three-sol forecast and short messages from Houston.ai and Apollo.' },
    { name: 'Plan', body: 'Choose cards, use the controls, or say it in your own words.', shot: 'step-plan', alt: 'Plan panel: three option cards, each listing what it helps and what it costs.' },
    { name: 'Predict', body: 'Guess what your plan will do to the base.', shot: 'step-predict', alt: 'Prediction panel asking whether the base will end up more or less protected from radiation.' },
    { name: 'Run', body: 'Watch the chain of causes play out over the base, one cause at a time.', shot: 'step-run', alt: 'The sol in progress: a list of causes revealed one step at a time.' },
    { name: 'Review', body: 'Compare your guess with what happened. Or rewind and try another plan.', shot: 'step-review', alt: 'Results panel comparing the player\'s prediction with what really happened.' },
  ],
  note: 'Houston.ai, the AI instructor, decides which problems arrive and how much help you get. Apollo speaks from the crew\'s side. You can rewind to any earlier sol and try a different plan.',
  sol0: 'New players start with Sol 0, a guided practice sol: one highlighted element at a time, including an impossible request that the game refuses. Sol 0 is scripted and uses no AI.',
};

export const ranks = {
  kicker: 'For ages 7 to 15, and beyond',
  title: 'Four ranks. Same mission. Different depth.',
  intro: 'The storm and the simulator are the same at every rank. What changes is how much of the base you hold in your hands.',
  items: [
    {
      name: 'Trainee',
      body: 'One decision per sol from three ready-made cards, each showing what it helps and what it costs. Plain words, no units.',
      shot: 'rank-trainee',
      alt: 'Trainee plan panel: three cards, each with what it helps and what it costs.',
    },
    {
      name: 'Cadet',
      body: 'Combine up to two of five options, or say it in your own words.',
      shot: 'rank-cadet',
      alt: 'Cadet plan panel: a longer list of option cards, of which the player may pick one or two.',
    },
    {
      name: 'Specialist',
      body: 'Full controls: power levels, crew hours, one-time actions, technical terms.',
      shot: 'rank-specialist',
      alt: 'Specialist plan panel: crew hours, energy and dose budgets, power levels per system and crew hour controls.',
    },
    {
      name: 'Commander',
      body: 'The full mission-control panel, with the hardest balance.',
      shot: 'rank-commander',
      alt: 'Commander plan panel: the same full controls with a tighter energy budget.',
    },
  ],
  chartTitle: 'Harder as you climb',
  chartNote:
    'Share of missions won by scripted players at each rank: 50 simulated games of the current four-rank game, rules only, no AI model. Scripts are not students.',
};

export const ai = {
  kicker: 'The rule behind the project',
  title: 'The AI proposes. The simulator decides.',
  body: [
    'Houston.ai, our AI instructor, chooses which problems arrive and how much help you get. It also reads plans you write in your own words.',
    'But it never writes a number of the game. A deterministic simulation engine, built on published NASA values, calculates every result. Ask for "infinite oxygen" and there is no such action: the request is refused, and the game tells you why.',
  ],
  pipeline: [
    { label: 'Your words', sub: '"Build a regolith berm around the habitat"' },
    { label: 'AI instructor', sub: 'reads the plan' },
    { label: 'Closed list', sub: '10 actions, nothing else' },
    { label: 'Simulator', sub: 'checks limits, computes the result' },
    { label: 'The base', sub: 'what really happens' },
  ],
  pipelineReject: { label: '"Give us infinite oxygen"', sub: 'No such action. Refused, with the reason.' },
  points: [
    { title: 'A closed list of ten actions.', body: 'The AI can only choose from them. None of them sets a resource directly.' },
    { title: 'No AI? The whole game still works.', body: 'With no key, no network or a slow answer, built-in rules do every AI job with the same contract.' },
    { title: 'Every AI answer is checked.', body: 'Each one is validated against a schema and the simulator\'s limits before it is applied. One retry, then the rules take over.' },
  ],
  shots: {
    accepted: { shot: 'text-accepted', alt: 'A plan typed in free text, understood and turned into base actions with their cost.', caption: 'A plan in the player\'s own words becomes actions from the closed list.' },
    refused: { shot: 'text-refused', alt: 'The request "Give us infinite oxygen" refused with an explanation.', caption: '"Give us infinite oxygen": not possible, and the game says why.' },
  },
  shotsNote: 'These two screens were captured with the AI switched off: the built-in rules read the text. With the AI instructor on, the same checks apply.',
  notice: 'An AI instructor is used in the game. See "AI use" below.',
};

export const science = {
  kicker: 'The science',
  title: 'Based on a real storm.',
  body: [
    'In 2018 a global dust storm covered Mars. Over the Opportunity rover, the sky opacity rose from a normal 0.5 to an estimated 10.8 on June 10, 2018. The rover stopped responding that day.',
    'The mission recreates that crisis and ends by revealing the real event, with its sources.',
  ],
  honesty: 'In the game the sky reaches about 4 to 5; the real storm was stronger.',
  real: [
    { value: '0.5', label: 'normal sky opacity at Opportunity\'s site' },
    { value: '10.8', label: 'estimated opacity on June 10, 2018' },
    { value: '645 → 22 Wh', label: 'Opportunity\'s daily energy, before and during the storm' },
  ],
  realNote: 'Real 2018 values. Opacity: NASA Jet Propulsion Laboratory. Energy: The Planetary Society (not a NASA source).',
  image: {
    alt: 'The last images the Opportunity rover took, on June 10, 2018: a dark, noisy partial frame of the sky.',
    caption: 'The last images Opportunity took, as the 2018 storm darkened the sky. PIA22930.',
    credit: 'Image: NASA/JPL-Caltech/Cornell/ASU',
    href: 'https://photojournal.jpl.nasa.gov/catalog/PIA22930',
  },
  tableTitle: 'Published values inside the simulator',
  table: [
    { what: 'Oxygen a person uses', value: '0.82 kg per day', source: 'NASA BVAD', href: 'https://ntrs.nasa.gov/citations/20180001338' },
    { what: 'Carbon dioxide a person breathes out', value: '1.04 kg per day', source: 'NASA BVAD', href: 'https://ntrs.nasa.gov/citations/20180001338' },
    { what: 'Drinking water a person needs', value: '2.5 kg per day', source: 'NASA BVAD', href: 'https://ntrs.nasa.gov/citations/20180001338' },
    { what: 'Radiation on the surface of Mars', value: '0.67 mSv per day', source: 'Curiosity RAD (SwRI)', href: 'https://www.swri.org/press-release/swri-scientists-publish-first-radiation-measurements-surface-mars' },
    { what: 'Water recycled on the space station', value: '93 to 94 %', source: 'NASA, 2023', href: 'https://www.nasa.gov/missions/station/iss-research/nasa-achieves-water-recovery-milestone-on-international-space-station/' },
    { what: 'Sky opacity before solar panels recharge', value: 'below 2.0', source: 'NASA JPL', href: 'https://www.jpl.nasa.gov/news/six-things-about-opportunitys-recovery-efforts/' },
    { what: 'Length of a sol', value: '24.6 hours', source: 'NASA Science', href: 'https://science.nasa.gov/mars/facts/' },
  ],
  // {total}, {sourced}, {gameDesign}, {citations} are filled from facts.constants.
  count: 'The game carries {total} constants: {sourced} are measured or derived values with a citation and a URL, and {gameDesign} are labelled as game design, chosen to make a ten-sol mission playable.',
  caveat: 'The cited values were looked up by an AI agent on the cited pages. A person has not yet spot-checked each one.',
  dataPending: 'The game uses published NASA values embedded in its code. It does not stream live NASA data. Connecting real space-weather data from NASA DONKI is our next step.',
  dataDonki: 'The game uses published NASA values embedded in its code, and space-weather events from NASA DONKI.',
  sourcesLink: 'All constants and sources',
};

export const evidence = {
  kicker: 'Evidence',
  title: 'We tested the AI, not just the game.',
  intro: 'Simulated players ran full missions against the game. Every figure below says which version it measures.',
  groups: [
    {
      id: 'current',
      label: 'The game today',
      scope: 'Four ranks. Rules only, no AI model.',
      stats: [
        { value: '{tests}', label: 'automated tests pass', note: '{files} test files, plus type check and production build. As of {asOf}.' },
        { value: '0', label: 'engine limits broken', note: 'in {states} game states checked over {games} simulated games.' },
        { value: '{optionsValid} / {optionsTotal}', label: 'suggested plan options valid', note: 'every option card the game offered passed the simulator\'s checks.' },
      ],
    },
    {
      id: 'previous',
      label: 'With the real AI model',
      scope: 'Measured on the previous three-rank version, before the Trainee rank was added. Not yet repeated for the four-rank game.',
      stats: [
        { value: '{directorValidFirstTry} / {directorDecisions}', label: 'AI director decisions valid on the first try', note: 'the other one passed after a single retry. {games} simulated games.' },
        { value: '{interpreterPct} %', label: 'free-text plans read correctly', note: '{interpreterRight} of {interpreterTexts} labelled texts, with {actionsOutsideList} actions outside the closed list.' },
        { value: '0', label: 'engine limits broken', note: 'in {states} game states with the AI directing.' },
      ],
    },
  ],
  missesTitle: 'Where we missed our own targets',
  misses: [
    'Variety: the AI director produced {varietyAi} distinct event sequences in 50 games; the rules director, {varietyRules}. The goal is no repeats.',
    'Balance: win rates of novice and expert scripts were {winSpreadPoints} points apart with the AI director; our target was {winSpreadTarget}.',
    'Without the AI, the rule-based plan reader gets {rulesInterpreterPct} % of the labelled texts right; our target is {rulesInterpreterTarget} %.',
  ],
  limitsTitle: 'Limits of this evidence',
  limits: [
    'Not yet tested with students. The players in these evaluations are scripts.',
    'Phone use was checked in an emulated screen only, not on a real device.',
    'No accessibility audit has been done.',
  ],
  evalsLink: 'Full evaluation report',
};

export const teachers = {
  kicker: 'For teachers',
  title: 'One device is enough for a whole class.',
  body: 'PHYSIX was designed for one shared screen. Project it and let the class argue its way to one plan.',
  points: [
    { title: 'One shared screen', body: 'A projector or a single computer. The class debates one plan per sol.' },
    { title: 'No accounts, no personal data', body: 'Nothing to sign up for. Settings and the skill profile stay in the browser.' },
    { title: 'Works on a poor connection', body: 'After the first load the game keeps running without a connection, on its built-in rules.' },
    { title: 'English and Spanish', body: 'Every text in both languages, switchable on the start screen.' },
  ],
  notice: 'Designed for ages 7 to 15. Not yet classroom-tested: we would love to hear how it goes.',
  contactLabel: 'Tell us how it went',
  contactPending: 'Contact e-mail pending',
};

export const team = {
  kicker: 'Us',
  title: 'Six people, one weekend.',
  // {event} is pending.localEvent.
  builtAt: 'Built at {event}, NASA Space Apps Challenge 2026.',
  builtAtPending: 'Built for the NASA Space Apps Challenge 2026. Local event: pending.',
  memberPending: { name: 'Name pending', role: 'Role pending', built: 'What they built: pending' },
  closing: 'We built with AI coding assistants; every use is declared below.',
};

export const roadmap = {
  kicker: 'Honest status',
  title: 'What works today, and what comes next.',
  worksTitle: 'Works today',
  works: [
    'One full Mars mission of ten sols',
    'Four ranks, from Trainee to Commander',
    'Sol 0, a guided practice sol',
    'Free-text plans, validated by the simulator',
    'The AI director, with rule-based fallbacks',
    'Rewind to any earlier sol',
    'End-of-mission reveal of the real event, with sources',
    'Play without a connection, on built-in rules',
    'English and Spanish',
  ],
  nextTitle: 'Next',
  next: [
    'Real space-weather data from NASA DONKI to drive the radiation events',
    'Classroom tests with students',
    'The AI evaluation repeated for the four-rank game',
    'Six phone consoles with partial information and a shared screen',
    'AI crew members',
    'A Mission Control room with communication delay',
    'The Moon mission, which is shelved for now',
  ],
  /** Shown instead of the first `next` item when facts.donkiIntegrated is true. */
  donkiWorks: 'Radiation events driven by NASA DONKI space-weather data',
  note: 'Not built yet: the phone consoles, AI crew members and the Mission Control room. Communication delay exists today only as "ask Earth, the answer arrives a later sol". Installing the game as an app was not yet tried on a device.',
};

export const closing = {
  title: 'The storm is coming. Run the base.',
  body: 'Ten sols. Four systems. One crew that depends on your plan.',
};

export const credits = {
  kicker: 'Credits and references',
  title: 'Everything we used.',
  groups: [
    {
      title: 'Image',
      items: [
        { text: 'Opportunity\'s last images, PIA22930. NASA/JPL-Caltech/Cornell/ASU. Public domain.', href: 'https://photojournal.jpl.nasa.gov/catalog/PIA22930' },
        { text: 'All other images are screenshots of the game and renders of its 3D base, which is procedural geometry written in code. No AI-generated images.' },
      ],
    },
    {
      title: 'Fonts',
      items: [
        { text: 'Saira Condensed, by Omnibus-Type. SIL Open Font License 1.1.', href: 'https://fonts.google.com/specimen/Saira+Condensed' },
        { text: 'IBM Plex Sans and IBM Plex Mono, by IBM. SIL Open Font License 1.1.', href: 'https://github.com/IBM/plex' },
        { text: 'Font files packaged by Fontsource and served from this site.', href: 'https://fontsource.org/' },
      ],
    },
    {
      title: 'Software in the game',
      items: [
        { text: 'React, Three.js, React Three Fiber, drei, Zustand, Zod, Hono, Vite, Vitest. Open-source licences.' },
        { text: 'AI models at runtime: Claude Haiku 5.5 and Claude Sonnet 5.5 (Anthropic).' },
      ],
    },
    {
      title: 'Software in this site',
      items: [
        { text: 'Astro. MIT licence.', href: 'https://astro.build/' },
        { text: 'No analytics, no cookies, no third-party scripts.' },
      ],
    },
    {
      title: 'Data sources',
      items: [
        { text: 'NASA Baseline Values and Assumptions Document (BVAD), NASA/TP-2015-218570/REV1.', href: 'https://ntrs.nasa.gov/citations/20180001338' },
        { text: 'Curiosity RAD surface radiation (Hassler et al., Science, 2014), reported by Southwest Research Institute.', href: 'https://www.swri.org/press-release/swri-scientists-publish-first-radiation-measurements-surface-mars' },
        { text: 'NASA Jet Propulsion Laboratory on the 2018 dust storm and Opportunity.', href: 'https://www.jpl.nasa.gov/news/opportunity-hunkers-down-during-dust-storm/' },
        { text: 'NASA on the space station water recovery milestone (2023).', href: 'https://www.nasa.gov/missions/station/iss-research/nasa-achieves-water-recovery-milestone-on-international-space-station/' },
        { text: 'The Planetary Society on Opportunity\'s energy in 2018 (not a NASA source).', href: 'https://www.planetary.org/articles/06-mer-update-opportunity-dust-storm-sleep' },
      ],
    },
  ],
  musicNote: 'No music or audio is used on this site.',
};

export const footer = {
  aiTitle: 'AI use',
  ai: 'An AI instructor runs inside the game, always checked by the simulator. The game, its documents and this website were built with AI coding assistants under the team\'s direction. No AI-generated images.',
  aiLink: 'Read the full AI declaration',
  privacyTitle: 'Privacy',
  privacy: 'This site has no accounts, no trackers and no cookies. The game stores only settings and a skill profile in your browser.',
  licenseTitle: 'Licence',
  licensePending: 'to be decided by the team.',
  contactTitle: 'Contact',
  contactPending: 'Contact e-mail pending.',
  repoLabel: 'Source code',
  repoPending: 'Source code link pending.',
  made: 'Made for the NASA Space Apps Challenge 2026.',
};

/** The full AI declaration page (/ai-use/). Summarised from the game's docs/AI_USE.md. */
export const aiUse = {
  title: 'Use of AI in PHYSIX',
  intro: 'The challenge asks every team to declare its use of AI. This page lists each use: inside the game, in building the game, and in building this website.',
  runtimeTitle: 'Inside the game',
  runtimeBody: [
    'Every use at runtime follows one rule: the language model proposes, the simulation engine decides. A deterministic engine computes every resource, every damage and every radiation dose. Model outputs are structured decisions that the engine validates against physical limits before anything happens.',
    'With no model at all (no key, no network, a timeout, an error), rule-based versions of the same jobs answer with the same contract, and the game is fully playable. The start screen states that an AI instructor directs the mission, and each message is tagged with whether it came from the AI or from the built-in rules.',
    'The API key lives only in the server process and is never sent to the browser. There are no accounts and no personal data: the prompts receive the game state and, when the crew types or dictates a plan, that text.',
  ],
  jobsTitle: 'The five AI jobs',
  jobs: [
    {
      name: 'Director, "Houston.ai"',
      model: 'Claude Haiku 5.5',
      can: 'Which event from the mission catalog to launch, if any; its severity, warning and duration inside the legal ranges; how much help the player gets; a short on-screen reason.',
      cannot: 'Any number in the game state; events outside the catalog; the ranges, budget and spacing limits. The storm always happens inside its window.',
      fallback: 'A rule-based director with the same teaching behaviour.',
    },
    {
      name: 'Plan interpreter',
      model: 'Claude Haiku 5.5',
      can: 'Which actions from the closed list of ten a free-text plan maps to.',
      cannot: 'Anything outside the list: no action sets a resource. Every action is validated, trimmed or refused by the engine. Player text is treated as untrusted data.',
      fallback: 'A bilingual keyword matcher for common intents; otherwise "use the controls".',
    },
    {
      name: 'Narrator',
      model: 'Claude Haiku 5.5',
      can: 'The wording of short lines at the start and end of each sol.',
      cannot: 'Numbers: they are placeholders filled from the engine. Lines with digits written by the model are rejected. Reading length is limited by rank.',
      fallback: 'Templates chosen by situation.',
    },
    {
      name: 'Skills profiler',
      model: 'Claude Sonnet 5.5',
      can: 'Evidence for three soft skills: communication, leadership, team care.',
      cannot: 'The three numeric skills, always computed by rules from engine numbers; any game state. Evidence describes a decision, never the person.',
      fallback: 'Rule equivalents.',
    },
    {
      name: 'Debrief tutor',
      model: 'Claude Sonnet 5.5',
      can: 'The epilogue, key moments, guided questions and the suggested next training.',
      cannot: 'Numbers (placeholders only) and sources: citation ids must exist in the data pack.',
      fallback: 'A fixed report from the log, the outcome and the mission\'s citations.',
    },
  ],
  jobsNote: 'Sol 0, the guided practice sol, uses no AI: it is scripted text. The plan options offered at Trainee and Cadet are built by the engine, not by a model.',
  buildTitle: 'Building the game',
  buildBody: [
    'All of the code, tests, documentation and in-game texts (Spanish and English) in the game repository were written with Claude Code (Anthropic) under human direction. An orchestrator model, Claude Fable 5.2, planned the milestones, wrote the contracts, briefed subagents (Claude Opus and Claude Sonnet) and reviewed and verified their work.',
    'The entry level (the Trainee rank, Sol 0, plain language) followed a play test by a team member, not by students.',
    'The scientific constants were looked up and cited by an AI agent using web search. They were not typed from memory, but no person has independently checked each one yet.',
  ],
  siteTitle: 'Building this website',
  siteBody: [
    'This website was designed, written and built with Claude Code (Claude Fable 5.2) under the team\'s direction, from the game repository and the team\'s brief. Its figures come from the game\'s documents.',
  ],
  imagesTitle: 'Images, audio and video',
  imagesBody: [
    'No AI-generated images are used, in the game or on this site. The 3D base is procedural geometry written in code. The images on this site are screenshots of the running game and renders of its 3D scene. The only photo is a public-domain NASA image (PIA22930, credit NASA/JPL-Caltech/Cornell/ASU).',
    'The game has no audio. This site has no audio.',
  ],
  reviewTitle: 'Human review still required',
  review: [
    'The equations of the simulation engine, including the sunlight-versus-opacity fit and the radiation and shielding model.',
    'Every constant and its source, opened against the cited page.',
    'The prompts for the five AI jobs.',
    'Everything a student reads, in Spanish and English. Small language slips in model output are not checked automatically.',
    'The 50-game evaluation with the AI model for the four-rank game.',
  ],
  back: 'Back to PHYSIX',
};

/** The sources and evaluation page (/sources/). Its tables come from src/content/sources.json. */
export const sourcesPage = {
  title: 'Sources and evaluation',
  intro: 'Every constant in the simulator, where it comes from, and how the game was evaluated. The tables are copied from the game repository\'s generated source list.',
  kinds: [
    { name: 'Measured', body: 'A published measurement.' },
    { name: 'Derived', body: 'Computed from measurements, or an agency policy value.' },
    { name: 'Game design', body: 'Chosen to make a ten-sol mission playable. Never presented as a measurement.' },
  ],
  caveat: 'The cited values were looked up by an AI agent on the cited pages. A person has not yet spot-checked each one. Two sources are not NASA: The Planetary Society (Opportunity\'s energy) and the Chang\'e-4 lander dosimeter (lunar dose, used only by the shelved Moon mission).',
  measuredTitle: 'Measured constants',
  derivedTitle: 'Derived constants',
  designTitle: 'Game design constants',
  designIntro: 'Battery size, loads, the compressed crop cycle, the mission dose budget, rank multipliers and failure chances are choices, not measurements.',
  designToggle: 'Show all game design constants',
  eventsRealTitle: 'Events that really happened',
  eventsTrainingTitle: 'Training events (game design)',
  eventsTrainingIntro: 'Equipment faults, leaks, blight and the comms blackout are training scenarios, marked as game design and not as real events.',
  citationsTitle: 'Citations',
  evalTitle: 'Evaluation',
  evalIntro: 'Scripted players (novice, average and expert) play full missions against the game and its AI layer. Two runs exist, and they measure different versions.',
  evalRuns: [
    {
      title: 'Current game, four ranks, rules only',
      scope: '50 simulated games with every AI job answered by the built-in rules. No AI model.',
      rows: [
        ['Engine limits broken', '0 of {states} states'],
        ['Suggested plan options valid', '{optionsValid} of {optionsTotal}'],
        ['Missions won at Trainee / Cadet / Specialist / Commander', '90 % / 64 % / 57 % / 25 %'],
      ],
    },
    {
      title: 'Previous version, three ranks, with the AI model',
      scope: '50 simulated games on November 14, 2026, before the Trainee rank was added. Claude Haiku 5.5 for the director, narrator and plan reader; Claude Sonnet 5.5 for the profiler and tutor in 8 of the games. Not yet repeated for the four-rank game.',
      rows: [
        ['Director decisions valid on the first try', '{directorValidFirstTry} of {directorDecisions} (the other after one retry)'],
        ['Director decisions accepted by the engine', '500 of 500'],
        ['Engine limits broken', '0 of {states} states'],
        ['Narration lines faithful to the engine\'s numbers', '{narrationLines} of {narrationLines}'],
        ['Free-text plans read correctly', '{interpreterPct} % ({interpreterRight} of {interpreterTexts} labelled texts)'],
        ['Interpreter actions outside the closed list', '{actionsOutsideList} of {actionsEmitted}'],
        ['Distinct event sequences in 50 games', '{varietyAi} with the AI director, {varietyRules} with the rules director (goal: no repeats)'],
        ['Win-rate spread between novice and expert scripts', '{winSpreadPoints} points (our target: {winSpreadTarget})'],
        ['Rule-based plan reader, without the AI', '{rulesInterpreterPct} % (our target: {rulesInterpreterTarget} %)'],
        ['Estimated AI cost per full session', '{costPerSessionUsd} USD at list prices'],
      ],
    },
  ],
  evalLimits: [
    'The simulated players are scripts, not children. Win rates describe the game against these scripts, not against real students.',
    'Free-text plans are drawn from a fixed list of labelled texts, so interpreter accuracy is a pass rate on that list.',
    'Numbers vary between runs with the AI model, because the model is not deterministic.',
    'Automated tests: {tests} passing in {files} files, plus type check and production build, as of {asOf}.',
  ],
  evalLimitsTitle: 'Limits',
  back: 'Back to PHYSIX',
};
