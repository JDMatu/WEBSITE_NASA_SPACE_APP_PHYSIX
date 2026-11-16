# Decisions

Short record of the choices made while building the site, and why. Newest context first is not needed; read top to bottom.

## Where this departs from the game's `docs/LANDING.md`

- **Astro, not hand-written HTML in `site/`.** Decided by the team. Output is still plain static files.
- **The hero is the storm, not a video.** The page opens on the game's own base on a clear day; scrolling plays the 2018 storm sol by sol (sky, solar power, battery), and the next section answers with what the player can do. The extended video gets its own band right after ("See it"), next to the Play button. Reason: the videos do not exist yet, and the storm sequence is the idea the team asked for.
- **Order.** Hero and storm, your move (four systems), video and play, problem, one sol in five steps, ranks, AI and simulator, science, evidence, teachers, team, status, closing call, credits. The problem moved below the storm because the storm now makes the point first.
- **"51 frames per second on integrated graphics" is left out.** That figure appears only in LANDING.md; no other document in the game repository records the measurement.
- **Figures updated**: 147 constants (29 cited, 118 game design). Every evaluation figure says whether it is the current four-rank game (rules only) or the previous three-rank version (with the AI model).
- **Teachers section**: no "five-minute warm-up" and no "ten sols in one session"; session lengths were never measured. No teacher guide link, because the guide does not exist.
- **Two sub-pages instead of links to the repository**: `/ai-use/` (full AI declaration) and `/sources/` (all constants, citations and the evaluation). The repository link is not public yet, and everything linked from the project page must be in English and must work.

## Site structure (second pass, 15 Nov)

The team asked for a website with a menu instead of one long landing page, and said the storm sequence felt empty on computers.

- **Six pages in the menu**, each answering one question: The game (why it exists, how a sol plays, the four ranks), AI + simulator (the rule and the pipeline), Science (the real storm and the published values), Evidence (tests, evaluations, misses, what works today and what is next), Classroom (for teachers, with the ranks at a glance) and Team. Sources, the AI declaration and Credits stay as reference pages linked from the footer.
- **Home keeps only what sells the game**: first screen, the storm, the four systems, one card per page with a real figure, the video, the play button.
- **The first section of each page carries the page title** (it becomes the h1), so no page needed new headline copy. Which sections go on which page is a short list in `PageInner.astro`.
- **The folded menu is a `<details>` element**, so it opens on a phone without JavaScript. Script only adds "close on Escape or outside click".
- **Team cards show name and initials** until roles, "what they built" and photos are provided. Six cards saying "role pending" looked worse than leaving the line out; `npm run check:pending` still lists what is missing for each person.
- **Storm on wide screens is now a mission console**, not a full-screen picture with one small caption. The scene sits in a framed viewport with the sol and the readout over it; beside it the caption and a power chart; under it a strip of the ten sols. The picture still changes with the scroll, which was the original idea.
- **The chart uses all ten sols of the same simulator run** (before, only the six captioned sols had numbers). One axis in kWh: solar made (bars), what the base used (a tick per sol, 65 kWh on sol 8 and 88 on the others) and battery charge (line). It draws itself as the scroll advances and the last scroll stretch plays sols 9 and 10.
- **Chart colours**: solar keeps the game's own amber for power; the battery is a blue (#6fb1ff) chosen for separation from the amber (checked for colour-blind separation and contrast on the dark panel). Both are brighter than the lightness band the checker recommends for dark backgrounds; kept, to match the game's palette. There is a legend and a hover readout, so colour is never the only cue.
- **Phones keep the full-screen scene** with the compact readout: it already worked there and the console does not fit.
- The line under the storm that said where its numbers come from was removed by the team; a short "Simulator run: seed 1, Trainee rank" stays in the console header.

## Scroll sequence

- **Pre-rendered frames of the real game scene, not live Three.js.** The game's 3D base is rendered ahead of time through its own test bench (`?harness=scene`) at six states, in a wide and a tall framing. On the site they are ordinary images that cross-fade on scroll, with a small 2D canvas for dust. Reasons: it runs smoothly on a modest laptop and a phone, needs no WebGL and no fallback image (it is the image), adds about 5 kB of script instead of a 3D engine, and still shows the actual product.
- **Numbers are one real run of the simulator**: seed 1, Trainee rank, a scripted crew that always takes the first option, rules director. They are in `facts.stormRun` in the content file. The frames are rendered at those values with the same formulas the game uses to draw its state. The panel dust level per sol is approximated.
- **On upright phones the hero shows a shorter paragraph** (`hero.bodyShort`) so the base stays in view.
- **Measured, not assumed**: scrolling the sequence in headless Chrome with software rendering and the CPU slowed four to six times held 60 frames per second (median frame 16.7 ms). This was not measured on a real phone.
- **The readout shows the game's sky opacity (peak 4.0 in this run).** The real 2018 value (10.8) is only in the science section, away from game images.
- **Progressive enhancement.** The plain page (no JavaScript, or reduced motion) shows each sol as a figure with its caption and numbers. The script moves the same pictures into a pinned stage, so nothing is downloaded twice.
- **Reveal animations cannot hide content**: the hidden state is applied only after the reveal script itself is running.

## Images

- English screenshots were captured from the game with `LLM_PROVIDER=none`, seed 1, at 1440 by 900 and twice the pixel density. The game repository was not modified.
- Panel crops: 800 by 1400 pixels at offset (2048, 140) of the 2880 by 1800 capture. Free-text crops: 776 by 560 at (2060, 950) for the accepted plan and (2060, 930) for the refused one.
- The two free-text screens show the label "RULES": they were read by the built-in rules, not by the AI model, and the caption says so. The accepted example is one of the game's own suggested sentences, "Build a regolith berm around the habitat".
- The game screenshots and the storm sequence come from different runs of seed 1 (the browser picks the most relevant option, the terminal run the first one), so their battery values differ. Neither is presented as the other.
- PIA22930 is the game's own copy of the public-domain image (224 by 96 pixels), shown small with its credit.

## Placeholders

- A missing play link renders a dashed, non-clickable "Playable link coming soon" instead of a button, everywhere the button appears.
- A missing video renders a dashed frame that says so. A video on YouTube or Vimeo is loaded only after a click (privacy-friendly player address), so the page itself makes no third-party request.
- Team cards, local event, contact, licence and repository link each show their own "pending" text.

## Other

- **Fonts are self-hosted** through Fontsource packages, the same three families and the same source as the game. No request to a font service.
- **No analytics, no cookies, no third-party scripts.**
- **English first, Spanish second.** English is at the root (the challenge requires English for everything linked from the project page). Spanish is under `/es/`, reached from the EN / ES switch. Spanish words are in `site.es.ts`; links, figures and placeholders stay in `site.ts` and are shared. The screenshots and the source tables remain in English on the Spanish pages, and those pages say so. The Spanish headline is "Cada decisión cuesta algo" (the idea of the video's first line) rather than a literal translation.
- **Numbers never live in sentences that change.** Storm captions and evaluation lines use placeholders filled from `facts`, formatted per language (decimal comma in Spanish).
- **GitHub Pages workflow is manual-only** (`workflow_dispatch`). Nothing publishes on push.
- **Preview image for links** is the sol 3 frame, generated at build time; it needs `SITE_URL` to be set.
