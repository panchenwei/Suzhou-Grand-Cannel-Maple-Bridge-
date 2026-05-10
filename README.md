# Maple Bridge Echoes - Process Portfolio

This repository contains the CPT208 Human-Centric Computing process portfolio for **Maple Bridge Echoes**, a user-centred cultural heritage web experience for the Suzhou Grand Canal / Maple Bridge topic.

## Live Links

- Process portfolio: https://panchenwei.github.io/Suzhou-Grand-Cannel-Maple-Bridge-/
- Final interactive prototype: https://panchenwei.github.io/temple_bridge_human_center/

## Project Overview

The portfolio documents the group's design process, including:

- motivation and research evidence
- academic and applied case review
- personas and journey maps
- design requirements and alternatives
- low-fi and high-fi prototype evidence
- data handling and interaction states
- AI use disclosure and technical reflection
- evaluation and team contribution

The final product presents Maple Bridge as a story-led mobile heritage guide, helping visitors move from a short photo stop toward route-based cultural discovery.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React
- GitHub Pages

## Local Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:3000/Suzhou-Grand-Cannel-Maple-Bridge-/
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run TypeScript checks:

```bash
npm run lint
```

## Repository Structure

```text
src/
  App.tsx          Main portfolio page and content sections
  index.css        Tailwind theme and responsive styling
  main.tsx         React entry point

public/
  lowfi-guide.png  Mobile screenshot evidence from the final prototype
  lowfi-map.png    Mobile route/progress screenshot evidence
  collective/      Team member portraits

journalmap/
  XichengGuo.png   Journey map evidence
  YimingWang.png   Journey map evidence

dist/
  Built GitHub Pages output
```

## Deployment

The project is deployed through GitHub Pages. The Vite base path is configured in `vite.config.ts`:

```ts
base: "/Suzhou-Grand-Cannel-Maple-Bridge-/"
```

The GitHub Actions workflow builds the site and uploads the `dist` folder as the Pages artifact.

## AI Use Disclosure

AI assistance was used for code support, layout refinement, grammar editing, and journey-map presentation editing. The group retained responsibility for the project topic, research interpretation, user-centred design decisions, evaluation logic, and final content review.

AI-assisted outputs were checked by:

- running the Vite build
- previewing the page locally
- checking links and assets
- comparing portfolio sections with CPT208 requirements
- reviewing accessibility, contrast, responsiveness, and interaction-state explanations

## Notes for Markers

This repository is the **process portfolio**. The functional interactive system is linked from the portfolio and hosted separately at the final prototype URL above.
