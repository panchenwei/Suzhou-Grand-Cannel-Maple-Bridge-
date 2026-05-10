# Maple Bridge Echoes - Process Portfolio

This repository contains the CPT208 Human-Centric Computing process portfolio for **Maple Bridge Echoes**, a user-centred cultural heritage web experience for the Suzhou Grand Canal / Maple Bridge topic.

## Submission Information

| Item | Details |
| --- | --- |
| Module | CPT208 Human-Centric Computing |
| Track | A2 / Suzhou Grand Canal - Maple Bridge |
| Submission | Process Portfolio + Web Prototype |
| Platform | GitHub Pages / React / Vite |
| Team | Pan Chenwei, Zihan Chai, Yichong Nie, Qinglin Duan |

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

## Coursework Alignment

This repository is organised around the CPT208 process portfolio requirements:

| Requirement | Where it appears in the portfolio |
| --- | --- |
| Motivation and research | Brief and Research sections |
| 4 academic papers and 4 applied cases | Research source matrix |
| Stakeholders and personas | Personas section |
| User journey map | Journey Maps section |
| Requirements list | Design Principles section |
| Design alternatives | Conceptual Prototyping section |
| Low-fi and high-fi evidence | Prototype section and final product link |
| Data handling / interaction states | Input & State Flow section |
| AI use and technical reflection | AI Use & Reflection section |
| Evaluation and iteration | Evaluation section |
| Individual team information | Team Contribution section |

## Research Sources

The portfolio includes a checked source matrix covering:

- AP1: Suzhou Museum smart-tourism HCI and visitor loyalty
- AP2: Humble Administrator's Garden route and visual-field experience
- AP3: immersive design in historic districts
- AP4: walking willingness in Tongli Ancient Town
- CP1: multisensory experience in Chinese classical gardens
- CP2: perception differences in Pingjiang Road
- CP3: water-land spatial narrative in Suzhou Ancient City
- CP4: tourism evolution in Pingjiang Road and Shantang Street

Each source is connected to an investigated question, a design finding, and a direct response in the Maple Bridge prototype.

## Team

| Member | Student ID |
| --- | --- |
| Pan Chenwei | 2364486 |
| Zihan Chai | 2361580 |
| Yichong Nie | 2362358 |
| Qinglin Duan | 2364027 |

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

For manual deployment checks:

```bash
npm run build
git status --short
```

The `dist/` output is included in the repository so the submitted source and generated static site can be inspected together.

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

Recommended review order:

1. Open the process portfolio URL.
2. Review the Research, Journey Maps, Prototype, Input & State Flow, and AI Use sections.
3. Open the final interactive prototype from the portfolio call-to-action.
4. Check this README for setup and implementation context.
