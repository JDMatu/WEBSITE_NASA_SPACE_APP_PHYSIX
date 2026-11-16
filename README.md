# PHYSIX site

The presentation site for **PHYSIX**, a junior astronaut mission trainer built for the NASA Space Apps Challenge 2026. It is a static site made with [Astro](https://astro.build/): no server, no accounts, no trackers.

PHYSIX is not affiliated with or endorsed by NASA.

## See it in two minutes

Needs Node.js 20.12 or newer.

```
npm install
npm run dev        # http://localhost:4321, reloads as you edit
```

To check the real output:

```
npm run build      # writes the static site to dist/
npm run preview    # serves dist/ at http://localhost:4321
```

## Change the content

Every figure, link and English text is in **one file**: [`src/content/site.ts`](src/content/site.ts). It has three blocks, in this order:

1. **`pending`**: the values the team provides: the play link and the video (both set), and what is still missing (repository link, team details, contact, licence). A `null` value shows a visible "pending" marker on the site instead of a broken promise. Fill the value and the marker turns into the real thing.
2. **`facts`**: numbers taken from the game repository (constants, tests, evaluations, whether DONKI is integrated). Change a number here and it changes everywhere it is used.
3. The copy: the menu and page titles (`pages`), then the words of each section.

The Spanish version (served under `/es/`) takes its words from [`src/content/site.es.ts`](src/content/site.es.ts) and everything else (links, figures, placeholders) from `site.ts`. A number or a link is therefore changed once, in `site.ts`. If you rewrite an English sentence, rewrite its Spanish twin too.

List what is still pending:

```
npm run check:pending
```

Common updates:

| I want to | Do this in `src/content/site.ts` |
| --- | --- |
| Change the Play link | Set `pending.playUrl`. Set `pending.playMode` to `'ai'` if the hosted game has the AI instructor, or `'rules'` if it is the static build (open `<playUrl>api/health`: `llmAvailable` says which). |
| Change the video | Set `pending.videoUrl` to a YouTube or Vimeo link, or put the file in `public/video/` and use `'/video/name.mp4'`. Players from other sites load only after the visitor presses play. If the new video is not 30 seconds long, also change `watch.title` and `hero.watchLabel` (both language files). |
| Add the team photos | Drop one file per person in `src/assets/team/`, named after them in lower case with hyphens: `juan-diego-matute.jpg`, `marypaz-lopez.jpg`, `sebastian-vargas.jpg`, `tamara-rodriguez.jpg`, `tannia-rodriguez.jpg`, `fabian-campos.jpg` (jpg, png or webp, at least 600 px on the short side, adults only, with permission). Rebuild: the photo replaces the initials. No content edit is needed. |
| Complete the team | In `pending.team`, add each person's `role` and `built` line; also `teamName` and `localEvent`. They appear on the About us page as soon as they are filled. |
| Rename a menu entry or a page title | Edit `pages` (and its twin in `site.es.ts`). The menu order is `menu` in `src/content/index.ts`. |
| Reorder or move a section | Home: reorder the lines in `src/components/PageHome.astro`. Science & AI: `SciencePage.astro` (also update `sciencePage.toc`). About us: `About.astro`. |
| Say DONKI is integrated | Set `facts.donkiIntegrated` to `true`. The science and roadmap sections change their wording. Review `science.dataDonki` so it says exactly what was built. |
| Publish new evaluation numbers | Update `facts.evalCurrentRules` / `facts.evalPreviousAi`. If the AI evaluation was repeated for the four-rank game, also rewrite the `scope` lines in `evidence.groups` and `sourcesPage.evalRuns` (in both language files), which say which version each figure measures. |
| Change the storm numbers | Edit `facts.stormRun.series` (the ten sols). The captions, the readout, the power chart and the ten-sol strip follow. `facts.stormRun.steps` names the picture of each sol and the extra figures its caption quotes; the words are in `storm.steps`. |

After the game's data changes, refresh the source tables (the game repository is only read):

```
npm run sync:sources -- /path/to/game-repo
```

This rewrites `src/content/sources.json` from the game's `docs/SOURCES.md`. The build fails with a clear message if the counts in `facts.constants` no longer match.

## Publish

The site is plain static files in `dist/`. Two optional environment variables at build time:

- `SITE_URL`: the public address, for example `https://physix.example.org`. Used for the canonical link and link previews.
- `BASE_PATH`: only when the site lives under a sub-path, for example `/physix-site` on a GitHub Pages project site.

**Netlify or Cloudflare Pages** (simplest): create a project from this repository, build command `npm run build`, output directory `dist`. Add `SITE_URL` as an environment variable once you know the address. No other configuration is needed. Without connecting the repository you can also drag the `dist/` folder into Netlify's manual deploy page.

**GitHub Pages**: the workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes on demand. In the repository settings choose Pages, source "GitHub Actions", then run the workflow by hand from the Actions tab. It sets `SITE_URL` and `BASE_PATH` from the repository address. It never runs on its own: publishing is a manual decision.

Before publishing: run `npm run check:pending`, then `npm run build`, and look at the site once with `npm run preview`.

## How it is built

| Path | What |
| --- | --- |
| `src/content/site.ts` | All content: placeholders, figures, links and the English copy. Start here. |
| `src/content/site.es.ts` | The Spanish words only. Same shape as the English copy. |
| `src/content/sources.json` | Source tables, generated by `npm run sync:sources`. Do not edit by hand. |
| `src/pages/` | `index.astro` (home), `[page].astro` (the inner pages: `/science/`, `/about/`, `/credits/`), `ai-use.astro` (full AI declaration), `sources.astro` (sources and evaluation), `404.astro`, and the same under `es/`. Each is a thin wrapper around a `Page*.astro` component. |
| `src/components/` | One component per section, plus `PageHome.astro`, `SciencePage.astro` and `About.astro`, which say which sections each page shows. `Header.astro` is the menu, `Storm.astro` the storm sequence. |
| `src/assets/frames/` | Renders of the game's 3D base for the storm sequence, wide and tall. |
| `src/assets/shots/` | Screenshots of the game in English. |
| `src/styles/global.css` | Colours, fonts and shared styles, taken from the game. |
| `scripts/` | Image capture and content helpers (below). |

English is the main language and lives at the root; the EN / ES switch in the header leads to the Spanish version under `/es/`. Link the English address from the challenge's project page.

**The site map.** The menu has three pages. **Home** tells the whole game: first screen, the storm sol by sol, the four systems, the problem, how a sol plays, the four ranks, the video, and three figures that lead to the next page. **Science & AI** puts the AI rule, the science, the evidence and the honest status on one page, with an in-page menu that follows the reader. **About us** has the story of the project and the six of us. Sources, the AI declaration and Credits are linked from the footer. The language switch and the play button sit at the far right of the header, apart from the menu; on narrow screens the menu folds into a panel that opens without JavaScript.

**Without JavaScript or with reduced motion** every page is complete and still: the storm is told as a series of pictures with captions and numbers. With JavaScript and motion allowed, the same pictures move into one pinned stage and cross-fade as you scroll, with a light dust layer. On wide screens the stage is a mission console (the scene, the caption, a power chart that draws itself sol by sol and a clickable ten-sol strip); on phones and small windows the scene fills the screen with a compact readout. There is no WebGL on the site; the 3D base was rendered ahead of time from the game.

## Regenerating the images

The images come from the running game, which is never modified. In the game repository:

```
npm run build -w @physix/web
LLM_PROVIDER=none PORT=8790 npx tsx apps/server/src/index.ts --serve-client
```

Then, from this repository (both scripts use the game's own copy of `playwright-core` and the Chrome at `/usr/bin/google-chrome`, or `CHROME_PATH`):

```
node scripts/capture-frames.mjs --game /path/to/game-repo --out /tmp/frames   # storm sequence
node scripts/capture-shots.mjs  --game /path/to/game-repo --out /tmp/shots    # English screenshots
```

Convert the frames to WebP into `src/assets/frames/` (same file names). The screenshots are cropped to the mission panel before use; the crop sizes are in [DECISIONS.md](DECISIONS.md). Stop the game server when done.

## Rules this site follows

- No NASA logos or identifiers, and nothing that suggests endorsement.
- No AI-generated images. Only real screenshots of the game, graphics drawn in code and one public-domain NASA image with its credit.
- No images, video or audio of people under 18.
- Every external resource is listed in the Credits section of the site, which is also the list for the challenge form.
- The site only states what the game repository supports. In the game the sky opacity reaches about 4 to 5; the real 2018 value, 10.8, appears only as a real-world fact and never over game images.
- AI use is declared in the footer and in full at `/ai-use/`.
