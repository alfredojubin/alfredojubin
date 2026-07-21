/**
 * data.js
 * Single source of truth for project content, in English.
 *
 * To add a new project (e.g. the 5th one you're still preparing):
 *   1) Copy one of the objects below.
 *   2) Give it a unique "id" (no spaces/accents) and fill in the fields.
 *   3) Drop the real images into /images/real and point "cover",
 *      "heroImage" and "gallery" to them.
 *   4) No HTML needs to change — the home grid and the project template
 *      both render themselves from this file.
 */

const PROJECTS = [
  {
    id: "bac",
    order: 1,
    title: "BAC",
    category: "Mobile app · Motion Design",
    client: "BAC — Central American Bank",
    role: "Visual Designer, focused on Motion Design",
    year: "2025 — 2026",
    summary:
      "Animations, transitions and micro-interactions for BAC's mobile banking app across Central America.",
    problem:
      "The banking app needed clearer transitions and loading states: the team had scattered criteria for animating screen changes, onboarding flows and sensitive confirmations like money transfers.",
    process: [
      {
        title: "Importance",
        text: "Relevance of Motion Design: which models and references to consider before defining the system."
      },
      {
        title: "Qualities, concepts and auditing",
        text: "Translating brand qualities into animation concepts, backed by research and an audit of the existing product."
      },
      {
        title: "Tools and construction",
        text: "Defining which tools and workflow to use (Adobe After Effects) to produce and document every pattern."
      },
      {
        title: "Handoff",
        text: "Documentation and delivery of each animation pattern to the development team, to keep implementation faithful to the design."
      }
    ],
    solution:
      "A consistent transition pattern was built for the whole navigation — including the onboarding experience — plus over 90 animations in After Effects for onboardings, bottom sheets, empty states and messages. In parallel, interface design work covered key transfer-related screens, keeping information hierarchy and alignment with the product's design system.",
    results: [
      "Unified transition criteria across states and screens of the app.",
      "Visual consistency between design and development across the whole navigation.",
      "Launch graphics and layouts for Android and iOS aligned with the product's identity."
    ],
    cover: "images/real/cover-bac.jpg",
    heroImage: "images/real/bac-hero.gif",
    galleryColumns: 1,
    gallery: [
      { src: "images/real/bac-gallery-1.png", alt: "BAC mobile app onboarding and account screens" },
      { src: "images/real/bac-gallery-2.png", alt: "BAC transfer flow, step by step" }
    ]
  },
  {
    id: "clippers",
    order: 2,
    title: "LA Clippers",
    category: "Mobile app · UI & Design System",
    client: "LA Clippers — Intuit Dome, United States",
    role: "Visual Designer",
    year: "2023 — 2024",
    summary:
      "Interface design and component system for the team's digital experience at the new Intuit Dome arena.",
    problem:
      "The Intuit Dome launch needed a high-profile app that reflected the team's identity, with reusable components that different flows (tickets, events, club content) could share without losing consistency.",
    process: [
      {
        title: "Visual asset creation",
        text: "Defining icons, graphics and illustrations that enrich usability and reinforce the team's identity."
      },
      {
        title: "UI screen design",
        text: "Designing attractive, functional interfaces built around an intuitive, enjoyable experience."
      },
      {
        title: "Components and consistency",
        text: "Building components aligned with the design system, keeping color, typography and image style consistent across the product."
      }
    ],
    solution:
      "Custom interface elements and illustrations were designed, and reusable components were developed that keep color, typography and imagery coherent across the whole app — achieving strong integration of the team's identity within a high-profile digital environment.",
    results: [
      "A consistent component system across the app's different sections.",
      "The team's identity coherently integrated throughout the digital experience.",
      "A scalable visual foundation for future club features."
    ],
    cover: "images/real/cover-clippers.jpg",
    heroImage: "images/real/cover-clippers.jpg",
    gallery: [],
    caseStudy: {
      thumb: "images/real/clippers-case-thumb.jpg",
      full: "images/real/clippers-case-full.jpg",
      alt: "Full LA Clippers Intuit Dome design process case study document"
    }
  },
  {
    id: "alsea",
    order: 3,
    title: "Alsea",
    category: "Web · Multi-brand Design System",
    client: "Alsea — Spain",
    role: "Visual Designer",
    year: "2023",
    summary:
      "A scalable design system for multiple restaurant brands operated by Alsea.",
    problem:
      "Alsea operates global brands like Starbucks, Domino's Pizza and Burger King. Each one needed its own assets and interfaces, but the team needed a shared foundation to keep consistency, usability and production speed across brands.",
    process: [
      {
        title: "Understanding and context",
        text: "Research into Alsea's business model: customer experience, local product adaptation and sustainability as core pillars of the proposal."
      },
      {
        title: "Libraries",
        text: "Building UI libraries and foundations — color systems, typography and styles — to scale from low to high fidelity and support collaboration with development."
      },
      {
        title: "Interface screen design",
        text: "Applying the foundations to real screens and assets for each brand within the Club-by ecosystem."
      },
      {
        title: "Responsive screen design",
        text: "Creating flexible layouts and adaptive components, keeping alignment between design foundations and development implementation."
      }
    ],
    solution:
      "The resulting system lets multiple brands live under one component logic, with layouts optimized for different resolutions and a consistent cross-device experience, without losing each brand's individual identity.",
    results: [
      "One reusable design system shared across several brands at once.",
      "Consistent responsive experiences across desktop, tablet and mobile.",
      "Less design effort required when scaling new campaign assets."
    ],
    cover: "images/real/cover-alsea.jpg",
    heroImage: "images/real/alsea-hero.jpg",
    heroBorder: false,
    galleryColumns: 1,
    gallery: [
      { src: "images/real/alsea-gallery-1.jpg", alt: "Alsea Club-by campaign card and banner component library" },
      { src: "images/real/alsea-gallery-2.jpg", alt: "Club-by responsive landing page across laptop and mobile" },
      { src: "images/real/alsea-gallery-3.jpg", alt: "Club-by mobile app screens across VIPS menus and content" }
    ]
  },
  {
    id: "keralty",
    order: 4,
    title: "Keralty",
    category: "App + Web · UX Research & UI",
    client: "Keralty — value-based healthcare group, Colombia",
    role: "Visual & UX Designer",
    year: "2021 — 2022",
    summary:
      "User research and interface design for healthcare digital products, with direct stakeholder interaction.",
    problem:
      "Patients and clinical staff described the app as hard to navigate: it was difficult to find the information they needed, and communication with doctors felt unclear in what are often urgent situations.",
    process: [
      {
        title: "Research stage",
        text: "Gathering user and stakeholder comments. Patients asked for a more intuitive, appealing app; medical staff asked for simpler, faster access."
      },
      {
        title: "Benchmarking stage",
        text: "Reviewing local and international clinics to identify visual and information-structure strengths applicable to the product."
      },
      {
        title: "User profiles",
        text: "Defining demographic profiles and goals (for example, María, a 36-year-old woman) to ground design decisions in real needs."
      },
      {
        title: "Wireframing and mockups",
        text: "Building wireframes and high-fidelity prototypes in Figma to validate flows before development."
      }
    ],
    solution:
      "The information architecture was redesigned to prioritize quick access to urgent actions (booking a consultation, contacting a doctor), with a warmer, more trustworthy visual language, keeping constant communication with the client to validate every deliverable.",
    results: [
      "A clearer information structure for app users on mobile.",
      "High-fidelity prototypes validated with stakeholders before development.",
      "A consistent design foundation across the Command Center, patient app and responsive web."
    ],
    cover: "images/real/cover-keralty.jpg",
    heroImage: "images/real/keralty-hero.jpg",
    gallery: [],
    caseStudy: {
      thumb: "images/real/keralty-case-thumb.jpg",
      full: "images/real/keralty-case-full.jpg",
      alt: "Full Keralty UX research and design case study document"
    }
  },
  {
    id: "corphub",
    order: 5,
    title: "Corporate HUB",
    category: "Web platform · Enterprise UX/UI",
    client: "Glob.AI OS — Globant's enterprise AI operating system",
    role: "UX/UI Designer",
    year: "2026",
    summary:
      "Designing the data governance backbone for enterprise AI: a full-scope UX/UI initiative from blank PRD to interactive prototype.",
    problem:
      "CorpHub is the data infrastructure layer of Glob.AI OS. Without it, every team managed data in isolation — inconsistent schemas, no lineage, no reuse. The goal was to design the entire web application, from the home screen and navigation architecture through every feature area, working directly from PRDs, so data could become a governed product: published once, consumed everywhere by both humans and AI agents.",
    process: [
      {
        title: "PRD analysis",
        text: "Identifying scope, open questions and contradictions before designing anything."
      },
      {
        title: "Questions first",
        text: "Gaps went back to the PM as questions — not design decisions made in isolation."
      },
      {
        title: "HTML prototype",
        text: "Self-contained interactive mockups built before committing anything to Figma."
      },
      {
        title: "Figma handoff",
        text: "Versioned frames using Mercury components, with each iteration placed right of the previous one."
      }
    ],
    solution:
      "Six core modules were designed from scratch: Data Model (catalog, ERD/DDL schema viewer, versioning with diff, import flow), Data Sets (a 4-step wizard to create data products from one or more sources), Client Data Source (registration of external sources — databases, APIs, SaaS and MCP servers), Data Store (provisioned storage units with catalog list and detail view), Ontologies (a semantic layer for enterprise concepts with entity relationships and domain classification), and Home & Navigation (the home screen, sidebar, global topbar and full navigation architecture for Glob.AI OS). Claude was woven into the workflow throughout: a dedicated project held every PRD, spec and meeting note as shared context, was used to surface scope contradictions and generate question lists for the PM, powered rapid interactive HTML prototyping directly against CorpHub's design tokens, and helped prepare precise technical questions ahead of engineering syncs.",
    results: [
      "6+ feature areas designed from scratch, each with its own interactive HTML prototype before Figma handoff.",
      "User research covering 6 profiles: Data Engineer, PM, Agent Builder, Data Scientist, Tech Manager and Security.",
      "3 active sprints shipped in parallel — DataModel, Datasets and Client Sources — on a shared, versioned design system.",
      "A consistent handoff process using Mercury components, keeping design and engineering aligned sprint over sprint."
    ],
    cover: "images/real/cover-corphub.jpg",
    heroImage: "images/real/cover-corphub.jpg",
    gallery: [],
    caseStudy: {
      thumb: "images/real/corphub-case-thumb.jpg",
      full: "images/real/corphub-case-full.jpg",
      alt: "Full Corporate HUB (Glob.AI OS) design process case study document"
    }
  }
];


