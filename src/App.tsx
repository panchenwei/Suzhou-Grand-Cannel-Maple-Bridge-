/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  DraftingCompass,
  Layers,
  Layout,
  Menu,
  Search,
  Smartphone,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

const PRODUCT_URL = "https://panchenwei.github.io/temple_bridge_human_center/";

const IMAGES = {
  hero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuALcjVU7SggPR88CjH0ILasu7PLkfDb7fM-4ul9egVc8I3hDqZVtHxmne0ngKwzJ3lc_5ue9VcNK9jdRq3IoH-x2rP-GOVK-bKJhpoM01qaocL6QVcxvXAxMuk8wxVd_D1GUCQva2Xa-M4Lu33gqaTsIdNEtCa33461fTb-K44_VlMu-kDZfX2npY4JUriiDty86ku6G6mtJ9fqupaL9mSjntf6fHsmWQQkiZvsZ5oVp2UOgK25o2GEr9DoqS1xqLt-5JboPIju4GlX",
  bridge:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBebMxDT2Ru--DbK0HUhKLsOB9KvFyAWaXt3GPw7TFOyJ_ymnrJGv3XZrQZ3IZSsIayK3RXZauhfie_b1cX4n8YyPoBvlBrOz4dEE_9i21ngzDnGmPwnYTOIJZxy5s5KzYKqH8EzwIzxJfX8CdBv0-xdZ-XdaBvP6fnAh9KmGGOViKVTUIdRPwV8kXxMPIoWO2X0fzaut-06D8MQyKoOsH3efxG3VhmMNOA470doj7M1GHuSeV7KoaZij12KSOsgJo7NxkZBiiO43xd",
  hifi:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD7mQHKXb3NNrhMsgqc7CgtEAqIFV3EA-sHYvnFZNuQYFrGQpKq-n11O61BriW1zVUnFslej8j0V4__xRuDq1_SXRau7HizeDIMIPXbNtFDsGbXpCdoKVExXITH4VcAOKCW9l2tuT04i4oo7lpH17-lkyvIUt75cxLhE86upZaqRUyLjdv9RltXsNr5RYWvkPm4Lw9jEfiO3sd4Ecl7Fz-ujxgNw3FfLfMVmlMxnIbcZWJZJ6ZmvGY3UBw_KbX4khVuKp_dwzQTaJN2",
  sketches:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB2DLJ1gBncqs23siAgo4WDKOpKusjP5IhpfXyrPSKvvmmUfVS0ArZyDJx2Q5fU-fVR7ghwLRfx6RqIO3NhvUtEQpLY_J6s227chtYNLBoj1BF1Q_3Dx-8gMrigPb8f5-O3JcNWm-w0_XSmcacRIv3f7Wo-3G-OVFEOUb905mkwdVtuiucEQAOHsxk-Cgi43xs2skPAWHciJvKWQrPh9M1u1D1RwnDBzu3nq8SKW3b_nlmKIgepLH-0YeUv42w_K7AlU1Nk2nl7RTCa",
  wireframe1:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBcsArCdFyaJcqntoBR6TxI2ipFzycniFcQpWp3VaguPJkwGwGkFmvLfxsRuBNcu39dcxb3UNfTQUHODP3So_MbtdljvO9-Z1WziV_wqfCCQ7zbi6kQ8LpjcZ_iJPyrN69QzNimyRBhBIrjsohMVfJQ9zeR057cqqVOedoM1nGdf-XukOjAwHKBKjOZ3bq935dCJ27o-qcwLXUr8qZ5fmhojguaBFh7djZt3HGREuVJYPC-pnkHTyKqtnD-9H4wnC3dOGkWVusLR1iU",
  wireframe2:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAmaiQj5X_qTgy5hKmFFVZEL77xByJ2_6XpndN8M1Ml6z2-33ivfE0fo_mp7sL1sTn5uUMLXvFrcRCW5iWbueY1gW1fBgRqX9-2TljCKxFCs8qIds8iHI-a1rCs7kLlVVsWEwFh9kEgvo2Yp1tcp6h2A9lUUOorjNPMBy3lYCD3wR8YNiP48sxWBCg6OzDX0LWc5-z1yzJpHQ5kqkfzX--HFEtdOSDMIkxI7XXYQq74YrJOU6U0WU-2BMEq4h5LHEyD4ZNnlZgP1oET",
  person1: `${import.meta.env.BASE_URL}guo.png`,
  person2: `${import.meta.env.BASE_URL}yiming-wang.png`,
  collectiveChai: `${import.meta.env.BASE_URL}collective/Chai.jpg`,
  collectiveDuan: `${import.meta.env.BASE_URL}collective/Duan.jpg`,
  collectiveNie: `${import.meta.env.BASE_URL}collective/Nie.jpg`,
  collectivePan: `${import.meta.env.BASE_URL}collective/Pan.jpg`,
};

const JOURNEY_MAP_IMAGES = [
  {
    name: "Xicheng Guo",
    image: new URL("../journalmap/XichengGuo.png", import.meta.url).href,
  },
  {
    name: "Yiming Wang",
    image: new URL("../journalmap/YimingWang.png", import.meta.url).href,
  },
];

const LOW_FI_IMAGES = [
  {
    label: "Guide home screen",
    image: `${import.meta.env.BASE_URL}lowfi-guide.png`,
    fallback: IMAGES.wireframe1,
  },
  {
    label: "On-site mission screen",
    image: `${import.meta.env.BASE_URL}lowfi-map.png`,
    fallback: IMAGES.wireframe2,
  },
];

const NAV_ITEMS = [
  { name: "Brief", href: "#brief", icon: Layout },
  { name: "Research", href: "#research", icon: Search },
  { name: "Personas", href: "#personas", icon: User },
  { name: "Journey", href: "#journey", icon: Layers },
  { name: "Principles", href: "#principles", icon: CheckCircle2 },
  { name: "Prototype", href: "#prototype", icon: Smartphone },
  { name: "Data", href: "#data-handling", icon: DraftingCompass },
  { name: "AI Use", href: "#ai-reflection", icon: Layers },
  { name: "Evaluation", href: "#evaluation", icon: DraftingCompass },
  { name: "Team", href: "#team", icon: User },
];

const COURSE_ALIGNMENT = [
  {
    label: "User-centred approach",
    text: "The process began with visitor needs, pain points and journey-map evidence rather than visual style alone.",
  },
  {
    label: "Interactive system",
    text: "The final GitHub Pages product translates the research into an explorable cultural storytelling experience.",
  },
  {
    label: "Critical evaluation",
    text: "Heuristic review, questionnaire feedback and interview notes shaped the final refinements.",
  },
];

const PROJECT_INFO = [
  { label: "Group ID", value: "A2-1" },
  { label: "Project Title", value: "Maple Bridge / Suzhou Whispers" },
  { label: "Module", value: "CPT208 Human-Centric Computing" },
  { label: "Submission", value: "Process Portfolio + Web Prototype" },
];

const RESEARCH_METHODS = [
  "Desk research on Chang Gate, Maple Bridge, Grand Canal heritage and the poem A Night Mooring by Maple Bridge.",
  "Semi-structured interviews with XJTLU students and local visitors to understand motivation, confusion and expectations.",
  "Questionnaire prompts to compare interest in static information, guided routes, audio stories and interactive exploration.",
  "Ethics-aware participation: voluntary involvement, clear purpose, anonymous reporting and the right to stop at any time.",
];

const INVESTIGATION_LOG = [
  {
    method: "Academic literature review",
    evidence: "4 academic sources were checked against their source pages or DOI metadata: Suzhou Museum smart-tourism HCI, Humble Administrator's Garden route experience, immersive design in historic districts, and Tongli walking willingness.",
    question: "How do visitors understand cultural meaning while moving through historic Suzhou spaces?",
    output: "We converted the findings into route-based storytelling, short cultural prompts and a design rule that the phone should support the site rather than replace it.",
  },
  {
    method: "Applied product / case comparison",
    evidence: "4 applied or comparative cases were checked: classical garden multisensory experience, Pingjiang Road perception differences, Suzhou water-land spatial narrative, and the tourism evolution of Pingjiang Road and Shantang Street.",
    question: "What do current smart-tourism systems do well, and where do they fail in outdoor heritage contexts?",
    output: "We identified three risks to avoid: heavy technology, deep screen interaction and exclusion of older or less confident phone users.",
  },
  {
    method: "Heuristic and cognitive walkthrough",
    evidence: "The literature was read through CPT208 concepts: visibility, consistency with the real world, usability efficiency, affordance, accessibility and inclusive design.",
    question: "Would a first-time visitor notice the correct next action without needing instructions?",
    output: "The prototype uses large tap targets, short reading blocks, direct route prompts and visible progress cues.",
  },
  {
    method: "Requirement synthesis",
    evidence: "Insights from papers, cases, personas and journey maps were grouped into must-have requirements for a playful Maple Bridge visit.",
    question: "Which findings directly affect what the web app must allow users to do?",
    output: "The final system focuses on quick orientation, situated story fragments, lightweight interaction and accessible mobile use.",
  },
];

const SOURCE_MATRIX = [
  {
    code: "AP1",
    type: "Academic",
    title: "Exploring the Influence of Human-Computer Interaction Experience on Tourist Loyalty in the Context of Smart Tourism: A Case Study of Suzhou Museum",
    url: "https://www.mdpi.com/2076-328X/15/7/949",
    investigated: "How HCI experience in a Suzhou smart-tourism setting affects visitors' loyalty and experience.",
    finding: "Digital interaction should improve perceived experience, clarity and emotional engagement, not only add technical novelty.",
    designResponse: "Maple Bridge Echoes uses concise story moments and clear action feedback instead of treating technology itself as the attraction.",
  },
  {
    code: "AP2",
    type: "Academic",
    title: "Spatio-Temporal Experience of Tour Routes in the Humble Administrator's Garden Based on Isovist Analysis",
    url: "https://www.mdpi.com/2071-1050/15/16/12570",
    investigated: "How tour routes and visual fields shape the spatio-temporal experience of a classical Suzhou garden.",
    finding: "Historic spaces are understood through movement, viewpoints and sequential attention.",
    designResponse: "The product guides visitors through a sequence of route points instead of presenting content as isolated articles.",
  },
  {
    code: "AP3",
    type: "Academic",
    title: "Revitalizing Cultural Spaces in Historic Districts based on Immersive Design",
    url: "https://drpress.org/ojs/index.php/ijeh/article/view/32451",
    investigated: "How immersive design can revitalise cultural spaces in historic districts.",
    finding: "Cultural spaces need interpretation methods that make hidden stories perceptible and participatory.",
    designResponse: "The content tone combines cultural background with human, place-based story fragments so Maple Bridge is not reduced to a static photo spot.",
  },
  {
    code: "AP4",
    type: "Academic",
    title: "Investigating Tourists' Willingness to Walk (WTW) to Attractions within Scenic Areas: A Case Study of Tongli Ancient Town, China",
    url: "https://www.mdpi.com/2071-1050/13/23/12990",
    investigated: "What makes visitors willing to keep walking in a heritage environment.",
    finding: "Walking motivation increases when the next destination feels clear and rewarding.",
    designResponse: "The interface uses visible progress and short route tasks to encourage continued exploration.",
  },
  {
    code: "CP1",
    type: "Applied",
    title: "Multisensory Health and Well-Being of Chinese Classical Gardens: Insights from Humble Administrator's Garden",
    url: "https://www.mdpi.com/2073-445X/14/2/317",
    investigated: "How multisensory qualities in a Suzhou classical garden influence visitor perception and well-being.",
    finding: "Heritage experience is bodily and sensory, so digital support should not pull users away from the physical environment.",
    designResponse: "The web app treats the phone as an attention guide, not as a screen-heavy replacement for the bridge.",
  },
  {
    code: "CP2",
    type: "Applied",
    title: "Perceptual Differences in Historic Urban Areas: A Comparative Study of Architects and the General Public in Pingjiang Road, Suzhou",
    url: "https://www.tandfonline.com/doi/pdf/10.1080/13467581.2025.2595393",
    investigated: "How different user groups perceive the same historic urban area.",
    finding: "Experts and general visitors may notice different qualities, so the interface should translate heritage details into accessible visitor language.",
    designResponse: "We added situated micro-stories so the experience feels connected to place rather than like a generic guide.",
  },
  {
    code: "CP3",
    type: "Applied",
    title: "A Study on the Spatial Narrative of Historical Urban Landscape Based on Water-Land Symbiosis: The Case of Suzhou Ancient City in China",
    url: "https://www.mdpi.com/2073-445X/14/12/2413",
    investigated: "How Suzhou's historical urban landscape can be narrated through water-land relationships.",
    finding: "Narrative structure helps visitors understand waterways, streets and landmarks as a linked heritage system.",
    designResponse: "Maple Bridge is framed as part of the Grand Canal story rather than a single photo spot.",
  },
  {
    code: "CP4",
    type: "Applied",
    title: "Spatial Evolution and Influence Mechanism of Tourism in Historic Quarters from the Postmodern Consumption Perspective: A Case Study of Pingjiang Road and Shantang Street, Suzhou, China",
    url: "https://www.tandfonline.com/doi/abs/10.1080/10941665.2022.2150558",
    investigated: "How tourism and consumption reshape historic quarters such as Pingjiang Road and Shantang Street.",
    finding: "Overly commercial or consumption-led spatial experiences can weaken cultural perception.",
    designResponse: "The design avoids aggressive gamification and keeps interaction quiet, readable and culturally respectful.",
  },
];

const RESEARCH_SYNTHESIS = [
  {
    label: "What works",
    points: [
      "Combine official history with local memory so cultural content feels visible and real.",
      "Use route-based prompts to motivate walking without forcing long screen time.",
      "Guide attention to real bridge details through simple cognitive-walkthrough-friendly actions.",
    ],
  },
  {
    label: "What fails",
    points: [
      "Heavy AR or 3D interaction can be fragile under strong sunlight, heat and weak networks.",
      "Deep menus break the continuous spatial experience of heritage sites.",
      "Complex gestures or fashionable UI patterns exclude older visitors and non-digital-native users.",
    ],
  },
  {
    label: "Design decision",
    points: [
      "Keep each interaction short enough for outdoor use.",
      "Make the next action visually obvious through large tap targets and direct wording.",
      "Use a lightweight web app so users can open it quickly from a public URL.",
    ],
  },
];

const REQUIREMENTS = [
  "Make cultural meaning visible before visitors lose attention.",
  "Support quick orientation for first-time visitors and deeper discovery for returning visitors.",
  "Use inclusive language, readable contrast and simple navigation for mixed cultural backgrounds.",
  "Connect physical locations with story fragments so the bridge is not reduced to a photo spot.",
];

const PERSONAS = [
  {
    name: "Xicheng Guo",
    archetype: "Persona 01 / First-time explorer",
    role: "21, XJTLU student, first-time cultural visitor",
    goal: "Find a clear route and quickly understand why Maple Bridge matters.",
    quote: "I want Maple Bridge to be more than just a place for taking photos.",
    image: IMAGES.person1,
    needs: ["Clear route guidance", "Short cultural interpretation", "Interactive participation"],
    pain: "Does not know where to start and quickly loses interest when the site feels like a photo-only stop.",
  },
  {
    name: "Yiming Wang",
    archetype: "Persona 02 / Local revisitor",
    role: "32, Suzhou resident, familiar with the place",
    goal: "Rediscover a familiar landmark through deeper stories and a reason to stay longer.",
    quote: "I know Maple Bridge is famous, but I still want a better reason to stay and explore.",
    image: IMAGES.person2,
    needs: ["Fresh narrative angle", "Structured revisit experience", "Shareable family-friendly content"],
    pain: "Feels the visit can be shallow and passive, especially when cultural meaning is difficult to access on-site.",
  },
];

const ALTERNATIVES = [
  {
    title: "Alternative A: Achievement Trail",
    status: "Rejected",
    text: "Badges and missions increased activity but risked trivialising a poetic heritage site.",
  },
  {
    title: "Alternative B: Editorial Guide",
    status: "Partial influence",
    text: "A quiet article-like structure was readable, but it did not create enough motivation to explore.",
  },
  {
    title: "Alternative C: Story-led Bridge Echoes",
    status: "Selected",
    text: "A layered route, historical fragments and ambient interaction best matched the emotional goal of the project.",
  },
];

const EVALUATION_POINTS = [
  "Heuristic review checked navigation visibility, consistency, error prevention and information hierarchy.",
  "Questionnaire feedback showed that users valued short story fragments more than long historical descriptions.",
  "Interview comments pushed us to reduce decorative text and make the final action path clearer.",
  "The final iteration increased contrast, simplified section order and linked the process website to the deployed product.",
];

const ARCHITECTURE_STEPS = [
  {
    title: "User input",
    detail: "Visitor taps the mobile menu, route point, story card, progress control or final product link.",
  },
  {
    title: "React state",
    detail: "The interface stores temporary UI state such as open menu, active section, selected story and viewed progress.",
  },
  {
    title: "Content data",
    detail: "Static arrays hold research content, personas, route stories, evaluation notes and team information.",
  },
  {
    title: "Rendered feedback",
    detail: "The page updates visible cards, highlighted sections, navigation state and call-to-action feedback immediately.",
  },
  {
    title: "Privacy boundary",
    detail: "No account, form submission or personal database is required; interaction state stays client-side during the session.",
  },
];

const DATA_EVIDENCE = [
  {
    input: "Navigation/menu tap",
    state: "isMenuOpen controls whether the mobile navigation overlay is visible.",
    feedback: "Users receive immediate open/close feedback, supporting visibility of system status.",
  },
  {
    input: "Route or story selection in the final web app",
    state: "The active story point changes the displayed cultural fragment and progress context.",
    feedback: "Visitors can see which part of the Maple Bridge route they are exploring and what to do next.",
  },
  {
    input: "Prototype link / external CTA",
    state: "The portfolio preserves context while opening the deployed system in a new browser tab.",
    feedback: "Assessors can move from process evidence to the functional high-fidelity system directly.",
  },
  {
    input: "Responsive viewport change",
    state: "Layout state is handled through responsive CSS and component structure rather than separate pages.",
    feedback: "The same content remains readable on mobile and desktop, matching the mobile on-site track.",
  },
];

const AI_TOOLS = [
  {
    tool: "ChatGPT / Codex",
    use: "Assisted with React layout editing, section structuring, wording refinement, debugging build issues and editing the two journey maps for clearer presentation.",
    boundary: "The group provided the project topic, research sources, design direction and coursework requirements; generated text and code were reviewed and edited by the group.",
  },
  {
    tool: "GitHub Pages and Vite tooling",
    use: "Used for deployment and local build verification of the hosted web portfolio and final web prototype.",
    boundary: "Build outputs were manually checked through local preview before inclusion.",
  },
];

const AI_REFLECTION_POINTS = [
  {
    label: "Prompt scope",
    text: "Prompts focused on implementation support: adding portfolio sections, compacting layout, checking links, generating concise wording and troubleshooting build commands.",
  },
  {
    label: "Verification",
    text: "Outputs were checked by running the Vite build, opening the local preview, testing links, inspecting screenshot assets and comparing sections with the CPT208 portfolio requirements.",
  },
  {
    label: "Ethical boundary",
    text: "AI was not treated as a substitute for user research or design judgement. Research sources, personas, journey maps and final design decisions remain group-owned work.",
  },
  {
    label: "Accessibility check",
    text: "AI-assisted edits were reviewed for readable contrast, visible navigation, mobile responsiveness and simple interaction states suitable for outdoor heritage use.",
  },
];

const AI_REFERENCES = [
  "OpenAI ChatGPT / Codex, accessed May 2026, used for code assistance, layout refinement, grammar editing and journey-map presentation editing in the process portfolio.",
];

const TEAM = [
  { name: "Pan Chenwei", studentId: "2364486", img: IMAGES.collectivePan, contribution: "Deployment, portfolio integration and final product connection" },
  { name: "Zihan Chai", studentId: "2361580", img: IMAGES.collectiveChai, contribution: "Research synthesis, content editing and AI-use documentation" },
  { name: "Yichong Nie", studentId: "2362358", img: IMAGES.collectiveNie, contribution: "Journey-map evidence, user requirements and evaluation notes" },
  { name: "Qinglin Duan", studentId: "2364027", img: IMAGES.collectiveDuan, contribution: "Visual assets, prototype evidence and team presentation materials" },
];

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <header className="mb-16 max-w-4xl">
      <p className="text-label mb-5 text-primary">{eyebrow}</p>
      <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight leading-[0.95] text-white">
        {title}
      </h2>
      {text && <p className="mt-8 text-lg md:text-xl text-white/62 leading-relaxed">{text}</p>}
    </header>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-white selection:bg-primary/30 selection:text-white">
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r border-primary/20 bg-surface-low/95 py-10 xl:flex">
        <div className="mb-16 flex items-center gap-4 px-10">
          <div className="flex h-11 w-11 items-center justify-center border border-primary/60 bg-primary/10">
            <span className="font-serif text-xs italic tracking-widest text-primary-bright">MB</span>
          </div>
          <div>
            <div className="font-serif text-sm italic tracking-tight text-white">Maple Bridge</div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.3em] text-primary/70">Process Portfolio</div>
          </div>
        </div>

        <nav className="flex flex-col gap-1 px-6">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative flex items-center gap-4 overflow-hidden p-4 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className={`absolute left-0 h-5 w-0.5 bg-primary-bright ${idx === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
              <item.icon className={`h-4 w-4 ${idx === 0 ? "text-primary-bright" : "text-white/45 group-hover:text-primary-bright"}`} />
              <span className={`text-[10px] uppercase tracking-[0.2em] ${idx === 0 ? "text-white" : "text-white/45 group-hover:text-white"}`}>
                {item.name}
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-auto px-10 pb-8">
          <a href={PRODUCT_URL} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.25em] text-primary-bright underline decoration-primary/30 underline-offset-8">
            Open Final Product
          </a>
        </div>
      </aside>

      <nav className="glass-panel fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b border-primary/15 px-4 sm:px-8 xl:hidden">
        <div className="font-serif text-xl font-light italic tracking-tight text-white">Maple Bridge</div>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white"
        >
          {isMenuOpen ? <X className="h-6 w-6 stroke-[1.5]" /> : <Menu className="h-6 w-6 stroke-[1.5]" />}
        </button>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 z-40 flex flex-col gap-7 bg-surface p-10 pt-32 xl:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-white/10 pb-4 font-serif text-4xl font-light italic text-white"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}

      <main className="xl:ml-64">
        <section id="brief" className="relative flex min-h-screen flex-col overflow-hidden p-8 pt-28 md:p-16 lg:p-24 xl:pt-24">
          <div className="absolute inset-0">
            <img src={IMAGES.hero} alt="" className="h-full w-full object-cover opacity-70" referrerPolicy="no-referrer" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-black/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(245,205,124,0.24),transparent_32%)]" />
          </div>

          <div className="relative z-10 mb-auto flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-label mb-3">CPT208 Human-Centric Computing</p>
              <p className="max-w-xl text-white/62">A process portfolio for a user-centred cultural heritage website.</p>
            </div>
            <a href={PRODUCT_URL} target="_blank" rel="noreferrer" className="btn-primary inline-flex h-12 w-fit items-center gap-4 px-7">
              Final Product <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative z-10 mt-10 grid max-w-6xl gap-3 border-y border-white/10 py-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECT_INFO.map((item) => (
              <div key={item.label}>
                <p className="text-label mb-2 text-primary-bright/70">{item.label}</p>
                <p className="text-sm leading-relaxed text-white/72">{item.value}</p>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative z-10 mt-20 max-w-6xl"
          >
            <h1 className="font-serif text-7xl font-light leading-[0.86] tracking-tight text-white md:text-9xl lg:text-[11rem]">
              Maple Bridge <span className="block italic text-primary-bright">Echoes</span>
            </h1>
            <p className="mt-12 max-w-3xl text-xl font-light leading-relaxed text-white/72 md:text-2xl">
              We redesigned a visit to Maple Bridge as a story-led digital experience, turning a short photo stop into a route of orientation, cultural context and emotional discovery.
            </p>
          </motion.div>
        </section>

        <section className="border-t border-primary/15 bg-surface-lowest p-8 py-28 md:p-16 lg:p-32">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {COURSE_ALIGNMENT.map((item) => (
              <div key={item.label} className="border border-primary/25 bg-white/[0.035] p-8">
                <CheckCircle2 className="mb-8 h-6 w-6 text-primary-bright" />
                <h3 className="mb-5 font-serif text-2xl italic text-white">{item.label}</h3>
                <p className="text-sm leading-loose text-white/62">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="research" className="border-t border-primary/15 p-8 py-32 md:p-16 lg:p-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="01 / Discovering Requirements"
              title="Research Before Interface"
              text="The coursework emphasises user-centred discovery. We therefore framed the project around real visitor tasks: finding what matters, understanding why the place is culturally important, and deciding whether to continue exploring."
            />
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="aspect-[4/5] overflow-hidden border border-primary/25">
                  <img src={IMAGES.bridge} alt="Maple Bridge visual reference" className="h-full w-full object-cover opacity-85 grayscale-[35%]" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="grid gap-5 lg:col-span-7">
                {RESEARCH_METHODS.map((method, idx) => (
                  <div key={method} className="flex gap-5 border border-white/10 bg-white/[0.025] p-6">
                    <span className="font-serif text-3xl italic text-primary-bright/70">{idx + 1}</span>
                    <p className="leading-relaxed text-white/68">{method}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 border-t border-primary/15 pt-12">
              <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-label mb-4">What we investigated</p>
                  <h3 className="font-serif text-3xl font-light italic leading-tight text-white md:text-4xl">
                  Literature Survey and Requirement Evidence
                  </h3>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-white/56">
                  We separated the work into four investigation activities so the portfolio shows what was studied, what question it answered, and how it changed the Maple Bridge prototype.
                </p>
              </div>

              <div className="grid gap-4 lg:grid-cols-4">
                {INVESTIGATION_LOG.map((item, idx) => (
                  <article key={item.method} className="border border-primary/20 bg-white/[0.035] p-5">
                    <div className="mb-4 flex items-start gap-4">
                      <span className="font-serif text-3xl italic text-primary-bright/70">0{idx + 1}</span>
                      <div>
                        <p className="text-label mb-2">Activity</p>
                        <h4 className="font-serif text-xl italic leading-tight text-white">{item.method}</h4>
                      </div>
                    </div>
                    <div className="grid gap-3 text-xs leading-relaxed text-white/62">
                      <p><span className="text-primary-bright">Evidence: </span>{item.evidence}</p>
                      <p><span className="text-primary-bright">Research question: </span>{item.question}</p>
                      <p><span className="text-primary-bright">Design output: </span>{item.output}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-16">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-label mb-3">Source matrix</p>
                    <h3 className="font-serif text-3xl font-light italic text-white">4 Academic Papers + 4 Applied Cases</h3>
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-white/48">
                    Titles and links were checked against the source pages or DOI metadata. Each source is connected to one design question, one finding and one direct response in the prototype.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {SOURCE_MATRIX.map((source) => (
                    <a
                      key={source.code}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block border border-white/10 bg-white/[0.025] p-4 transition-colors duration-300 hover:border-primary/45 hover:bg-primary/[0.06]"
                    >
                      <div>
                        <p className="text-label mb-3 text-primary-bright">{source.code} / {source.type}</p>
                        <h4 className="mb-4 font-serif text-lg leading-snug text-white">{source.title}</h4>
                      </div>
                      <div className="grid gap-3 text-xs leading-relaxed text-white/58">
                        <p><span className="text-primary-bright">Investigated: </span>{source.investigated}</p>
                        <p><span className="text-primary-bright">Finding: </span>{source.finding}</p>
                        <p><span className="text-primary-bright">Design response: </span>{source.designResponse}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-4 lg:grid-cols-3">
                {RESEARCH_SYNTHESIS.map((group) => (
                  <article key={group.label} className="border border-primary/25 bg-white/[0.035] p-5">
                    <p className="text-label mb-4">{group.label}</p>
                    <div className="grid gap-3">
                      {group.points.map((point) => (
                        <div key={point} className="flex gap-4">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary-bright" />
                          <p className="text-xs leading-relaxed text-white/64">{point}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="personas" className="border-t border-primary/15 bg-surface-lowest p-8 py-32 md:p-16 lg:p-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="02 / Personas"
              title="Two Personas Driving the Design"
              text="We used two contrasting personas to keep the design decisions grounded: one visitor needs orientation and confidence, while the other needs renewed motivation and deeper cultural meaning."
            />
            <div className="flex flex-col gap-10">
              {PERSONAS.map((persona) => (
                <motion.article
                  key={persona.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-8 border border-primary/25 bg-white/[0.04] p-6 md:grid-cols-[minmax(260px,34%)_1fr] md:p-8 lg:gap-12"
                >
                  <div className="flex min-h-[380px] items-center justify-center overflow-hidden border border-primary/20 bg-gradient-to-b from-primary/12 via-surface-container to-surface-low p-0">
                    <img src={persona.image} alt={`${persona.name} persona portrait`} className="h-full max-h-[440px] w-full object-contain object-center opacity-100" loading="lazy" decoding="async" />
                  </div>
                  <div className="flex flex-col justify-center py-2 md:py-4">
                    <p className="text-label mb-3">{persona.archetype}</p>
                    <p className="mb-4 text-sm uppercase tracking-[0.18em] text-white/48">{persona.role}</p>
                    <h3 className="mb-6 font-serif text-5xl italic text-white md:text-6xl">{persona.name}</h3>
                    <p className="mb-8 max-w-3xl border-l-2 border-primary-bright pl-6 text-2xl italic leading-relaxed text-primary-bright">"{persona.quote}"</p>
                    <div className="mb-8 max-w-3xl border border-primary/20 bg-white/[0.035] p-6">
                      <p className="text-label mb-3">Primary goal</p>
                      <p className="text-base leading-relaxed text-white/72">{persona.goal}</p>
                    </div>
                    <div className="mb-8 flex max-w-3xl flex-wrap gap-3">
                      {persona.needs.map((need) => (
                        <span key={need} className="border border-primary/25 bg-primary/10 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/75">
                          {need}
                        </span>
                      ))}
                    </div>
                    <p className="max-w-3xl text-base leading-loose text-white/64">{persona.pain}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="border-t border-primary/15 p-8 py-32 md:p-16 lg:p-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="03 / Journey Maps"
              title="Pain Points Became Design Opportunities"
              text="The journey maps were used to track actions, emotions and barriers across the visit. Negative emotional dips were treated as the most valuable prompts for redesign."
            />
            <div className="grid gap-8 lg:grid-cols-2">
              {JOURNEY_MAP_IMAGES.map((map) => (
                <article key={map.name} className="bg-white/[0.025] p-4">
                  <div className="mb-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-label mb-2">Journey map</p>
                      <h3 className="font-serif text-3xl text-white">{map.name}</h3>
                    </div>
                    <p className="text-right text-[10px] uppercase tracking-[0.25em] text-white/45">Evidence board</p>
                  </div>
                  <div className="overflow-hidden bg-black/35">
                    <img src={map.image} alt={`${map.name} journey map`} className="h-auto w-full object-contain" loading="lazy" decoding="async" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="principles" className="border-t border-primary/15 bg-surface-lowest p-8 py-32 md:p-16 lg:p-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="04 / Design Principles"
                title="Inclusive, Readable, Situated"
                text="The interface needed to respect the heritage subject while staying usable for visitors who may not have prior knowledge of Suzhou literature."
              />
            </div>
            <div className="grid gap-5 lg:col-span-7">
              {REQUIREMENTS.map((requirement) => (
                <div key={requirement} className="flex items-start gap-5 border-b border-primary/15 py-6">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary-bright" />
                  <p className="text-lg leading-relaxed text-white/72">{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="prototype" className="border-t border-primary/15 p-8 py-32 md:p-16 lg:p-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="05 / Conceptual Prototyping"
              title="From Alternatives to Final Product"
              text="Following the prototyping lecture, we treated prototypes as tools for thinking and feedback rather than polished artefacts. Each version answered a different design question."
            />

            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {ALTERNATIVES.map((item) => (
                <article key={item.title} className={`border p-8 ${item.status === "Selected" ? "border-primary-bright bg-primary/10" : "border-white/10 bg-white/[0.025]"}`}>
                  <p className="text-label mb-5">{item.status}</p>
                  <h3 className="mb-6 font-serif text-2xl italic text-white">{item.title}</h3>
                  <p className="text-sm leading-loose text-white/62">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="grid min-h-[520px] place-items-center gap-8 overflow-hidden border border-primary/25 bg-neutral-950 p-8 md:grid-cols-2">
                  {LOW_FI_IMAGES.map((item, idx) => (
                    <div key={item.label} className="group flex flex-col items-center gap-5">
                      <div className="relative aspect-[9/16] w-full max-w-[230px] overflow-hidden rounded-[2.25rem] border border-primary/35 bg-primary/[0.08] p-2 shadow-[0_0_60px_rgba(217,184,105,0.16)]">
                        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black/90" />
                        <img
                          src={item.image}
                          alt={item.label}
                          onError={(event) => {
                            event.currentTarget.src = item.fallback;
                          }}
                          className="h-full w-full rounded-[1.75rem] object-cover object-top grayscale-[15%] transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-2 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
                      </div>
                      <p className="text-label text-white">Low-fi {idx + 1} / {item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-8 border border-primary/25 bg-white/[0.035] p-8 lg:col-span-5">
                <div>
                  <p className="text-label mb-6">High fidelity direction</p>
                  <h3 className="mb-8 font-serif text-4xl italic text-white">Maple Bridge Echoes</h3>
                  <p className="leading-loose text-white/68">
                    The final product uses an atmospheric dark-gold visual system, concise story blocks and a direct exploration flow. Compared with the earlier process website, the final version is more focused on visitor action and less on decorative system language.
                  </p>
                </div>
                <a href={PRODUCT_URL} target="_blank" rel="noreferrer" className="btn-primary inline-flex h-14 w-fit items-center gap-4 px-8">
                  Visit Deployed System <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="data-handling" className="border-t border-primary/15 bg-surface-lowest p-8 py-24 md:p-16 lg:p-24">
          <div className="mx-auto max-w-7xl">
            <header className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-label mb-4 text-primary">05 / Data Handling</p>
                <h2 className="font-serif text-4xl font-light leading-none tracking-tight text-white md:text-6xl">
                  Input & State Flow
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-white/58">
                Evidence of how the web app manages user input and temporary interaction states.
              </p>
            </header>

            <div className="mb-8 border border-primary/25 bg-white/[0.035] p-5 md:p-6">
              <p className="text-label mb-5">System architecture diagram</p>
              <div className="grid gap-3 lg:grid-cols-5">
                {ARCHITECTURE_STEPS.map((step, idx) => (
                  <article key={step.title} className="relative border border-white/10 bg-black/25 p-4">
                    <p className="mb-3 font-serif text-3xl italic text-primary-bright/70">0{idx + 1}</p>
                    <h3 className="mb-3 font-serif text-xl italic text-white">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-white/62">{step.detail}</p>
                    {idx < ARCHITECTURE_STEPS.length - 1 && (
                      <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-primary-bright lg:block" />
                    )}
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="border border-primary/25 bg-primary/[0.07] p-5">
                  <p className="text-label mb-4">Evidence summary</p>
                  <h3 className="mb-4 font-serif text-2xl italic text-white">Client-side and privacy-light</h3>
                  <p className="text-sm leading-relaxed text-white/66">
                    The portfolio and final product are designed as lightweight React web pages. User actions change visible interface state, but the prototype does not require login, personal profiles or a remote database. This is suitable for an on-site heritage experience because visitors can open the public URL quickly, interact briefly and return attention to Maple Bridge.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2 lg:col-span-8">
                {DATA_EVIDENCE.map((item, idx) => (
                  <article key={item.input} className="border border-primary/20 bg-white/[0.035] p-5">
                    <div className="mb-4 flex items-start gap-4">
                      <span className="font-serif text-3xl italic text-primary-bright/70">0{idx + 1}</span>
                      <div>
                        <p className="text-label mb-2">Input and state evidence</p>
                        <h3 className="font-serif text-xl italic text-white">{item.input}</h3>
                      </div>
                    </div>
                    <div className="grid gap-3 text-xs leading-relaxed text-white/64">
                      <p><span className="text-primary-bright">Managed state: </span>{item.state}</p>
                      <p><span className="text-primary-bright">User feedback: </span>{item.feedback}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="ai-reflection" className="border-t border-primary/15 p-8 py-24 md:p-16 lg:p-24">
          <div className="mx-auto max-w-7xl">
            <header className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-label mb-4 text-primary">06 / AI Use</p>
                <h2 className="font-serif text-4xl font-light leading-none tracking-tight text-white md:text-6xl">
                  AI Use & Reflection
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-white/58">
                Disclosure of AI-assisted work, verification steps and ethical boundaries for the portfolio and web prototype.
              </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-2">
              {AI_TOOLS.map((item) => (
                <article key={item.tool} className="border-l border-primary/45 bg-white/[0.02] py-2 pl-6">
                  <p className="text-label mb-3">Tool used</p>
                  <h3 className="mb-4 font-serif text-2xl italic text-white">{item.tool}</h3>
                  <div className="grid gap-3 text-sm leading-relaxed text-white/64">
                    <p><span className="text-primary-bright">Purpose: </span>{item.use}</p>
                    <p><span className="text-primary-bright">Boundary: </span>{item.boundary}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-12">
              <div className="grid gap-x-8 gap-y-5 md:grid-cols-2 lg:col-span-8">
                {AI_REFLECTION_POINTS.map((item) => (
                  <article key={item.label} className="border-t border-white/10 pt-5">
                    <p className="text-label mb-3">{item.label}</p>
                    <p className="text-sm leading-relaxed text-white/62">{item.text}</p>
                  </article>
                ))}
              </div>

              <aside className="border-l border-primary/30 bg-primary/[0.04] py-2 pl-6 lg:col-span-4">
                <p className="text-label mb-4">References / acknowledgement</p>
                <div className="grid gap-4">
                  {AI_REFERENCES.map((reference, idx) => (
                    <p key={reference} className="text-sm leading-relaxed text-white/66">
                      <span className="font-serif text-2xl italic text-primary-bright/70">[{idx + 1}] </span>
                      {reference}
                    </p>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="evaluation" className="border-t border-primary/15 bg-surface-lowest p-8 py-32 md:p-16 lg:p-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="07 / Evaluation"
              title="Feedback Closed the Loop"
              text="The evaluation plan combined inspection and user feedback, matching the course focus on heuristic evaluation, questionnaires and interviews."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {EVALUATION_POINTS.map((point, idx) => (
                <div key={point} className="border border-primary/20 bg-white/[0.035] p-8">
                  <p className="mb-6 font-serif text-5xl italic text-primary-bright/60">0{idx + 1}</p>
                  <p className="leading-loose text-white/68">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="border-t border-primary/15 p-8 py-32 md:p-16 lg:p-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="08 / The Collective"
              title="Team Contribution"
              text="The team combined research synthesis, visual design, prototype development and deployment into one public-facing portfolio."
            />
            <div className="mb-10 grid gap-4 border-y border-primary/15 py-6 md:grid-cols-4">
              {PROJECT_INFO.map((item) => (
                <div key={item.label}>
                  <p className="text-label mb-2">{item.label}</p>
                  <p className="text-sm leading-relaxed text-white/64">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {TEAM.map((member) => (
                <article key={member.name} className="border border-primary/20 bg-white/[0.035] p-7 text-center transition-colors duration-500 hover:border-primary-bright">
                  <div className="mx-auto mb-8 h-36 w-36 overflow-hidden border border-primary/25 bg-black p-1">
                    <img src={member.img} alt={`${member.name} portrait`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl italic text-white">{member.name}</h3>
                  <p className="text-label text-primary-bright">Student ID: {member.studentId}</p>
                  <p className="mt-5 text-sm leading-relaxed text-white/58">{member.contribution}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="border-t border-primary/15 bg-surface-lowest p-8 md:p-16 lg:p-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-serif text-3xl italic text-gradient">Maple Bridge Echoes</p>
              <p className="mt-3 text-sm text-white/48">CPT208 process portfolio and deployed cultural heritage system.</p>
            </div>
            <a href={PRODUCT_URL} target="_blank" rel="noreferrer" className="btn-primary inline-flex h-12 w-fit items-center gap-4 px-7">
              Open Final Website <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
