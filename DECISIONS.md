# Decisions

Short record of the choices made while building the site, and why. Newest context first is not needed; read top to bottom.

## Where this departs from the game's `docs/LANDING.md`

- **Astro, not hand-written HTML in `site/`.** Decided by the team. Output is still plain static files.
- **The hero is the storm, not a video.** The page opens on the game's own base on a clear day; scrolling plays the 2018 storm sol by sol (sky, solar power, battery), and the next section answers with what the player can do. The video gets its own band ("See it"), next to the Play button. Reason: the storm sequence is the idea the team asked for. The team later decided there is one video only, the 30-second demo; the copy says 30 seconds and makes no claim about a longer tour.
- **Order.** The original single page ran: hero and storm, your move (four systems), video and play, problem, one sol in five steps, ranks, AI and simulator, science, evidence, teachers, team, status, closing call, credits. It is now split into three pages (see "Site structure" below). The problem sits below the storm because the storm makes the point first.
- **"51 frames per second on integrated graphics" is left out.** That figure appears only in LANDING.md; no other document in the game repository records the measurement.
- **Figures updated**: 147 constants (29 cited, 118 game design). Every evaluation figure says whether it is the current four-rank game (rules only) or the previous three-rank version (with the AI model).
- **Teachers section** (later removed at the team's request): it never claimed a "five-minute warm-up" or "ten sols in one session", because session lengths were never measured.
- **Two sub-pages instead of links to the repository**: `/ai-use/` (full AI declaration) and `/sources/` (all constants, citations and the evaluation). The repository link is not public yet, and everything linked from the project page must be in English and must work.

## Site structure (after the team's review, 15 Nov)

The team asked for a website with a menu instead of one long landing page, said the storm sequence felt empty on computers, and then asked for fewer, fuller pages.

- **Three pages in the menu: Home, Science & AI, About us.** Home tells the whole game (first screen, the storm, the four systems, the problem, how a sol plays, the four ranks, the video). Science & AI gathers the AI rule, the science, the evidence and the honest status, which a reader weighs together. About us has the project's story and the team. Sources, the AI declaration and Credits stay as reference pages linked from the footer.
- **The classroom page and the "for teachers" section were removed** at the team's request, with their copy.
- **The "explore the project" cards were removed from Home** (they repeated the menu). In their place, near the end, a short band shows three figures (cited constants, the AI's closed list, tests) and one link to Science & AI, so a visitor who only reads Home still meets the project's main claim. It is one line in `PageHome.astro` if the team prefers it gone.
- **Science & AI has an in-page menu** (four numbered entries) that sticks under the header and marks the section being read. Without JavaScript the entries are plain links.
- **About us tells the project as four decisions**, each one backed by the game repository (the challenge, the real 2018 storm, the AI rule, the play test that led to the Trainee rank and Sol 0). Nothing personal about the members is invented: names are as given; roles, "what they built" and photos appear when provided.
- **Team photos are found by file name** (`src/assets/team/juan-diego-matute.jpg`, and so on), so adding them needs no content edit. Until then each box shows initials and a small "photo pending" marker.
- **Header**: wordmark at the left edge, the menu in the middle, the language switch and the play button at the far right edge, as the team asked. The header spans the full window instead of following the content width.
- **The folded menu is a `<details>` element**, so it opens on a phone without JavaScript. Script only adds "close on Escape or outside click".
- **Storm on wide screens is a mission console**, not a full-screen picture with one small caption. The scene sits in a framed viewport with the sol and the readout over it; beside it the caption and a power chart; under it a strip of the ten sols that can be clicked. The picture still changes with the scroll, which was the original idea.
- **Every one of the ten sols now has its own picture, caption and numbers.** Before, only six sols were captioned and the others passed without text. The four missing pictures (sols 6, 7, 9 and 10) were rendered from the game the same way as the first six, and their captions quote the same simulator run (the second brownout, the harvest, the science total, the end-of-mission result).
- **The chart has one axis in kWh**: what the panels made (bars), what the base needed (a tick per sol: 65 kWh on sol 8, 88 on the others) and the battery charge (line). "Needed", not "used": on brownout sols the base got less than it asked for.
- **Chart colours**: solar keeps the game's own amber for power; the battery is a blue (#6fb1ff) chosen for separation from the amber (checked for colour-blind separation and contrast on the dark panel). Both are brighter than the lightness band the checker recommends for dark backgrounds; kept, to match the game's palette. There is a legend and a hover readout, so colour is never the only cue.
- **Phones keep the full-screen scene** with the compact readout: it already worked there and the console does not fit.
- The line under the storm that said where its numbers come from was removed by the team; a short "Simulator run: seed 1, Trainee rank" stays in the console header.

## Scroll sequence

- **Pre-rendered frames of the real game scene, not live Three.js.** The game's 3D base is rendered ahead of time through its own test bench (`?harness=scene`) at ten states (one per sol), in a wide and a tall framing. On the site they are ordinary images that cross-fade on scroll, with a small 2D canvas for dust. Reasons: it runs smoothly on a modest laptop and a phone, needs no WebGL and no fallback image (it is the image), adds about 5 kB of script instead of a 3D engine, and still shows the actual product.
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
