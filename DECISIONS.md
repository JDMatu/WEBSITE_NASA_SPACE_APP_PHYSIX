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

## Scroll sequence

- **Pre-rendered frames of the real game scene, not live Three.js.** The game's 3D base is rendered ahead of time through its own test bench (`?harness=scene`) at six states, in a wide and a tall framing. On the site they are ordinary images that cross-fade on scroll, with a small 2D canvas for dust. Reasons: it runs smoothly on a modest laptop and a phone, needs no WebGL and no fallback image (it is the image), adds about 15 kB of script instead of a 3D engine, and still shows the actual product.
- **Numbers are one real run of the simulator**: seed 1, Trainee rank, a scripted crew that always takes the first option, rules director. They are in `storm.steps` in the content file. The frames are rendered at those values with the same formulas the game uses to draw its state. The panel dust level per sol is approximated.
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
- **English only for now.** The content file is one object per section so a Spanish copy can be added as a second file later.
- **GitHub Pages workflow is manual-only** (`workflow_dispatch`). Nothing publishes on push.
- **Preview image for links** is the sol 3 frame, generated at build time; it needs `SITE_URL` to be set.
