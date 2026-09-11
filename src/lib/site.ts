export const projects = [
  {
    slug: "nova-commerce",
    title: "Nova Commerce",
    tag: "E-commerce Platform",
    category: "E-commerce",
    year: "2026",
    client: "Nova Retail",
    backed: true,
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    ],
    desc: "A headless e-commerce platform built for speed, conversion and scale — serving 50k+ daily visitors with sub-second load times.",
    challenge:
      "Nova Retail's existing platform was slow, hard to customise and couldn't handle traffic spikes during sales events. They needed a complete rebuild without losing SEO equity or existing customer data.",
    solution:
      "We built a Next.js storefront with a headless commerce backend, migrated 12,000+ products with structured data, and implemented edge caching for instant page loads. The checkout flow was redesigned based on heatmap analysis to reduce cart abandonment.",
    results: [
      { value: "3.2x", label: "Revenue increase" },
      { value: "<0.8s", label: "Average load time" },
      { value: "42%", label: "Lower cart abandonment" },
      { value: "99.99%", label: "Uptime during peak" },
    ],
    testimonial: {
      quote: "Our sales doubled in three months. The speed difference alone changed how customers interact with our store.",
      name: "Priya Sharma",
      role: "Head of Digital, Nova Retail",
    },
    technologies: ["Next.js", "Shopify Hydrogen", "Tailwind CSS", "Vercel", "Algolia"],
    services: ["Web Development", "UI/UX Design", "SEO & Performance"],
  },
  {
    slug: "pulse-analytics",
    title: "Pulse Analytics",
    tag: "SaaS Dashboard",
    category: "SaaS",
    year: "2026",
    client: "Pulse Data Co.",
    backed: true,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
    ],
    desc: "Real-time analytics dashboard processing millions of events daily with a clean, intuitive interface that makes complex data simple.",
    challenge:
      "Pulse had a powerful data engine but their dashboard was clunky, slow and only usable by technical teams. They needed a product redesign that non-technical stakeholders could actually use.",
    solution:
      "We redesigned the entire dashboard experience — from data visualisation to report generation. Built with React and D3.js for real-time charts, with role-based views so each stakeholder sees exactly what matters to them.",
    results: [
      { value: "85%", label: "Faster report generation" },
      { value: "4x", label: "User adoption increase" },
      { value: "60%", label: "Support tickets reduced" },
      { value: "4.8★", label: "App store rating" },
    ],
    testimonial: {
      quote: "Our clients actually love using the dashboard now. That's never happened before in six years.",
      name: "Arjun Patel",
      role: "CTO, Pulse Data Co.",
    },
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    services: ["UI/UX Design", "Web Development"],
  },
  {
    slug: "lumen-studio",
    title: "Lumen Studio",
    tag: "Brand & Web Design",
    category: "Branding",
    year: "2025",
    client: "Lumen Creative",
    backed: true,
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200&auto=format&fit=crop",
    ],
    desc: "Complete brand identity and website redesign for a creative agency — from logo to launch in eight weeks.",
    challenge:
      "Lumen's brand felt dated and inconsistent across touchpoints. Their website didn't reflect the quality of their creative work, and they were losing pitches to agencies with stronger visual presence.",
    solution:
      "We ran brand workshops with their team, developed a new identity system with flexible brand rules, and designed a portfolio-driven website that lets their work speak. The new brand balances professionalism with creative energy.",
    results: [
      { value: "2.5x", label: "Inbound leads" },
      { value: "3x", label: "Social engagement" },
      { value: "95%", label: "Brand recall score" },
      { value: "40%", label: "Higher project value" },
    ],
    testimonial: {
      quote: "The new brand changed how clients perceive us. We're winning bigger projects because we finally look the part.",
      name: "Maya Kapoor",
      role: "Founder, Lumen Creative",
    },
    technologies: ["Figma", "Framer", "Illustrator", "After Effects"],
    services: ["Brand & Strategy", "UI/UX Design", "Web Development"],
  },
  {
    slug: "vertex-saas",
    title: "Vertex SaaS",
    tag: "Product Build",
    category: "SaaS",
    year: "2025",
    client: "Vertex Labs",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    ],
    desc: "End-to-end product build for a developer tools startup — from MVP to Series A, serving 2,000+ teams.",
    challenge:
      "Vertex had a working prototype but needed production-grade infrastructure, a polished UI, and the scalability to handle rapid growth after their Series A funding round.",
    solution:
      "We rebuilt the product from the ground up with a microservices architecture, implemented a design system for consistency, and set up CI/CD pipelines that deploy multiple times daily with zero downtime.",
    results: [
      { value: "2000+", label: "Teams onboarded" },
      { value: "99.99%", label: "Platform uptime" },
      { value: "50ms", label: "Avg. API response" },
      { value: "$4.2M", label: "Series A raised" },
    ],
    testimonial: {
      quote: "They didn't just build our product — they built the foundation for our entire company. The code quality and architecture are exceptional.",
      name: "Kabir Singh",
      role: "CEO, Vertex Labs",
    },
    technologies: ["Next.js", "Go", "Kubernetes", "PostgreSQL", "Stripe"],
    services: ["Web Development", "UI/UX Design", "Support & Care"],
  },
  {
    slug: "aria-app",
    title: "Aria App",
    tag: "Mobile Experience",
    category: "Mobile",
    year: "2024",
    client: "Aria Health",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    ],
    desc: "A wellness app that makes mental health support accessible — 100k+ downloads in the first quarter with a 4.9 App Store rating.",
    challenge:
      "Aria needed to make mental health support feel approachable, not clinical. The app had to work seamlessly across iOS and Android while meeting strict healthcare data compliance requirements.",
    solution:
      "We designed and built a calming, intuitive mobile experience using React Native. The app features guided sessions, mood tracking, and therapist matching — all wrapped in a design language that feels warm and safe.",
    results: [
      { value: "100k+", label: "Downloads in Q1" },
      { value: "4.9★", label: "App Store rating" },
      { value: "78%", label: "Weekly retention" },
      { value: "45min", label: "Avg. session time" },
    ],
    testimonial: {
      quote: "People tell us the app feels like a friend, not a tool. That's exactly what we wanted — and AmbrScale nailed it.",
      name: "Dr. Riya Mehta",
      role: "Founder, Aria Health",
    },
    technologies: ["React Native", "TypeScript", "Firebase", "Node.js", "Figma"],
    services: ["UI/UX Design", "Web Development"],
  },
  {
    slug: "contour-legal",
    title: "Contour Legal",
    tag: "Marketing Campaign",
    category: "Marketing",
    year: "2024",
    client: "Contour & Partners",
    backed: true,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    ],
    desc: "Full-funnel digital marketing for a corporate law firm — from brand awareness to client acquisition, generating 3x ROI.",
    challenge:
      "Contour needed to establish digital presence in a competitive legal market. Their marketing was entirely referral-based with no online acquisition channel.",
    solution:
      "We built a content-driven marketing engine — thought leadership articles, targeted LinkedIn campaigns, and SEO-optimized practice area pages. Each piece was designed to build authority and capture high-intent searches.",
    results: [
      { value: "3x", label: "Marketing ROI" },
      { value: "180%", label: "Organic traffic growth" },
      { value: "25+", label: "Qualified leads/month" },
      { value: "45%", label: "Lower cost per lead" },
    ],
    testimonial: {
      quote: "We went from zero online presence to being the first firm people find when they search for corporate law in our city.",
      name: "Adv. Rohan Desai",
      role: "Managing Partner, Contour & Partners",
    },
    technologies: ["Google Ads", "HubSpot", "SEMrush", "GA4", "Mailchimp"],
    services: ["Digital Marketing", "SEO & Performance", "Brand & Strategy"],
  },
];

export const products = [
  {
    slug: "fluxboard",
    name: "Fluxboard",
    tagline: "Real-time analytics for product teams",
    status: "LIVE",
    stat: { value: "2M+", label: "events / day" },
    desc: "A live analytics dashboard that turns raw product events into decisions your whole team can act on.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "payreach",
    name: "PayReach",
    tagline: "Borderless billing & payouts",
    status: "LIVE",
    stat: { value: "$12M+", label: "processed" },
    desc: "Subscription billing, invoicing and payouts engineered for startups that sell across borders.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "mailflow",
    name: "Mailflow",
    tagline: "Email the way product teams want it",
    status: "BETA",
    stat: { value: "18k", label: "activations" },
    desc: "Timed, triggered and transactional email sequences that actually look like your brand.",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "orbit-cms",
    name: "Orbit CMS",
    tagline: "A surprisingly fast content engine",
    status: "IN DEV",
    stat: { value: "Q1 '27", label: "public launch" },
    desc: "The content layer behind our flagship stack — versioned, headless and absurdly quick.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
  },
];

export const flagship = {
  codename: "Project Aurora",
  status: "In development",
  target: "Q1 2027",
  stream:
    "The biggest thing we've ever built — a commerce network that helps creators, teams and brands ship, fund and scale products in weeks, never months.",
  progress: 62,
  team: 14,
  phase: "Build · Phase 2 of 3",
  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
};

export const team = [
  {
    name: "Aarav Mehta",
    role: "Founder · Strategy",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sara Khan",
    role: "Design Lead",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dev Patel",
    role: "Engineering Lead",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff66?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Maya Joshi",
    role: "Brand Strategist",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Rohan Verma",
    role: "Growth Marketing",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Ishita Rao",
    role: "Product Designer",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
];

export const testimonials = [
  {
    quote:
      "They didn't just build us a website — they built a brand people actually remember. Conversions jumped 3x in two months.",
    name: "Ananya Sharma",
    role: "Founder, Nova Commerce",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    quote:
      "Fast, obsessive, and honest. AmbrScale treats your project like their own — rare in this industry.",
    name: "Kabir Singh",
    role: "CEO, Vertex SaaS",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 4,
  },
  {
    quote:
      "From strategy to launch in six weeks. The design taste is elite and the communication was flawless.",
    name: "Riya Kapoor",
    role: "CMO, Pulse Analytics",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    quote:
      "Our sponsor visibility doubled after joining their platform. A real partner, not a vendor.",
    name: "Nikhil Agarwal",
    role: "Brand Partner",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff66?q=80&w=200&auto=format&fit=crop",
    rating: 3,
  },
];

export const blog = [
  {
    slug: "position-a-brand-in-a-crowded-market",
    title: "How to position a brand in a crowded market",
    cat: "Strategy",
    date: "Aug 2026",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop",
    content: [
      {
        heading: "Nobody buys from a category",
        paragraphs: [
          "When customers evaluate your brand, they don't line you up against every other company in your industry. They compare you against one specific slot in their head — the product that 'always solves this pain'. If your brand isn't the one occupying that slot, you're invisible regardless of how good the product is.",
          "Positioning is the act of deliberately picking that slot before your market picks it for you. It's a sentence, honestly. Not a slogan, not a deck slide — a decision about what you will be known for at all costs.",
        ],
        quote: "A brand is the slot you own in someone's mind. Everything else is decoration.",
      },
      {
        heading: "Find the gap, not the trend",
        paragraphs: [
          "Trend opinions chase attention. Positioned brands chase leverage. Look at the categories adjacent to yours and ask where the tension is: what does everyone assume, that we have evidence against? Where is the market over-served and under-served at the same time?",
          "The best positions are uncomfortable at first — they say something a competitor could publish but won't, because it would force them to change how they operate.",
        ],
      },
      {
        heading: "Commit louder than you're comfortable with",
        paragraphs: [
          "Weak positioning fails quietly: it's approved by everyone and remembered by no one. Strong positioning loses you the wrong customers on purpose and makes the right ones feel found, not sold. That trade is the entire point.",
          "Once you pick the slot, repeat it everywhere — pricing page, packaging, support scripts, hiring. Your position isn't real until it's the first thing a new teammate can recite.",
        ],
      },
    ],
  },
  {
    slug: "core-web-vitals-what-moves-ranking",
    title: "Core Web Vitals: what actually moves your ranking",
    cat: "Performance",
    date: "Jul 2026",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    content: [
      {
        heading: "Speed is a feature, not a metric",
        paragraphs: [
          "Chrome gives your pages a score for metrics it calls Core Web Vitals: how fast the biggest element paints, how quickly the page responds to input, and how stable the layout stays while loading. They matter for ranking, but treat them as detection, not the goal.",
          "A fast page that sells nothing is still a waste. The vitals are worth chasing because they usually expose the real problems: too much JavaScript, oversized images, blocking third parties.",
        ],
        quote: "You can't optimise your way into a good offer. But you can absolutely break one with a slow page.",
      },
      {
        heading: "Fix the cheap wins first",
        paragraphs: [
          "Three fixes cover most of the ground: serve images that match their display size and modern format, remove render-blocking scripts your users never interact with, and stop shipping a 3MB framework when a 30KB static render would do.",
          "Then measure once daily, in the field — not in a lab. A page can score 100 in Lighthouse and still feel slow on a budget phone with slow network. Field data is the truth.",
        ],
      },
      {
        heading: "Keep it fast after launch",
        paragraphs: [
          "Performance decays the way code does — silently. Every new dependency, banner and tracker pushes your budget over. Put a performance check into your merge pipeline and celebrate the regression test as loudly as the feature it protects.",
        ],
      },
    ],
  },
  {
    slug: "design-systems-that-survive-real-teams",
    title: "Design systems that survive real teams",
    cat: "Design",
    date: "Jun 2026",
    read: "8 min",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    content: [
      {
        heading: "A design system dies the day it's perfect",
        paragraphs: [
          "Most design systems fail not because they have too few components, but because they have too many and nobody trusts them. The team forks, builds shadow components, and within a quarter the system is a museum nobody visits.",
          "The fix is boring but reliable: ship the 20 components that cover 90% of your screens, make them impossibly easy to import, and let the edge cases be code, not tokens.",
        ],
        quote: "Complexity isn't the enemy of a design system. Momentum after launch is.",
      },
      {
        heading: "Governance is the actual product",
        paragraphs: [
          "Tokens for colour, spacing and type survive because they're cheap to adopt. Components survive because they're convenient. Anything beyond that needs a named owner and a change process that takes minutes, not meetings.",
          "Write the rules down in the same place you commit code, so the 'system' is versioned, reviewed and commented on — just like the product itself.",
        ],
      },
      {
        heading: "Measure adoption, not polish",
        paragraphs: [
          "Two numbers tell you if it's working: the ratio of screens built with system components, and the median time from request to merged component. If either one slips, fix the process before you add another component. Adoption is the metric a design system exists to move.",
        ],
      },
    ],
  },
];

export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    desc: "Blazing-fast, modern websites and platforms engineered for conversion.",
    longDesc:
      "We build high-performance websites and web applications using modern frameworks like Next.js and React. From marketing sites to complex SaaS platforms, every project is engineered for speed, accessibility, and measurable business results. Our development process is transparent — you get weekly previews, clean code, and a production handover that your team can maintain without us.",
    tags: ["Next.js", "React", "E-commerce"],
    highlights: [
      "Frontend architecture that loads in under a second",
      "Headless CMS, commerce and third-party integrations",
      "Accessibility and SEO baked in by default",
      "CI/CD, previews and a clean production handover",
    ],
    features: [
      { title: "Lightning Fast", desc: "Sub-second load times with optimized images, code splitting, and edge rendering." },
      { title: "Conversion Focused", desc: "Every element is placed with purpose — designed to guide users toward action." },
      { title: "Fully Responsive", desc: "Pixel-perfect experience across all devices, from mobile to ultra-wide displays." },
      { title: "SEO Ready", desc: "Structured data, meta tags, and semantic HTML baked into every page." },
    ],
    stats: [
      { value: "<1s", label: "Avg. load time" },
      { value: "99.9%", label: "Uptime" },
      { value: "3x", label: "Faster than industry avg" },
      { value: "100", label: "Lighthouse score target" },
    ],
    deliverables: [
      "Responsive website or web application",
      "Source code with documentation",
      "Deployment pipeline (CI/CD)",
      "Performance audit report",
      "30-day post-launch support",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Sanity CMS", "Stripe", "PostgreSQL"],
    faqs: [
      { q: "How long does a typical web development project take?", a: "Most projects are delivered in 4–8 weeks depending on scope. We break the work into weekly milestones so you always know where things stand." },
      { q: "Do you work with existing codebases?", a: "Yes. We can audit, refactor, or extend your existing code. We'll start with a technical assessment before suggesting any changes." },
      { q: "What happens after launch?", a: "Every project includes 30 days of post-launch support. After that, we offer ongoing maintenance and feature development plans." },
    ],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    desc: "Research-driven interfaces people love to use and keep coming back to.",
    longDesc:
      "Great design isn't about making things look pretty — it's about making things work. Our UI/UX process starts with understanding your users, their pain points, and the jobs they're trying to do. We map user flows, build interactive prototypes, and test before a single pixel goes into production. The result: interfaces that feel intuitive, look stunning, and drive real engagement.",
    tags: ["Product", "Design systems"],
    highlights: [
      "Research and user flows mapped before any pixels",
      "Interactive prototypes that feel like the real thing",
      "Design systems that scale across teams and features",
      "Design-to-dev handoff with zero drift in translation",
    ],
    features: [
      { title: "User Research", desc: "Interviews, surveys, and analytics analysis to understand real user behavior." },
      { title: "Interactive Prototypes", desc: "Clickable prototypes that feel like the real product — test before you build." },
      { title: "Design Systems", desc: "Component libraries that keep your product consistent as it scales." },
      { title: "Accessibility First", desc: "WCAG-compliant designs that work for everyone, not just the average user." },
    ],
    stats: [
      { value: "40%", label: "Avg. conversion lift" },
      { value: "60%", label: "Faster time-to-market" },
      { value: "5★", label: "Avg. client rating" },
      { value: "200+", label: "Screens designed" },
    ],
    deliverables: [
      "Research findings and user personas",
      "User flow diagrams",
      "Interactive Figma prototypes",
      "Component-based design system",
      "Developer handoff files",
    ],
    technologies: ["Figma", "FigJam", "Maze", "Hotjar", "Lottie", "Storybook", "Principle", "Framer"],
    faqs: [
      { q: "Do you conduct user research?", a: "Yes. Every project starts with understanding your users — through interviews, surveys, or analytics review. Research informs every design decision." },
      { q: "Can you work with our existing design system?", a: "Absolutely. We can audit your existing system, identify gaps, and extend it — or build a new one from scratch if needed." },
      { q: "How do you handle design-to-dev handoff?", a: "We provide annotated Figma files, component specs, and token documentation. Our designs are built with developers in mind." },
    ],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    desc: "Data-backed campaigns that put your brand in front of the right people.",
    longDesc:
      "Marketing without strategy is just noise. We build full-funnel campaigns that are measured by revenue, not impressions. From paid ads and content marketing to social media management, every channel is optimized for ROI. We believe in radical transparency — you'll see exactly where your budget goes and what it returns, updated in real-time dashboards.",
    tags: ["Social", "Paid ads", "Content"],
    highlights: [
      "Full-funnel campaign strategies built for ROI",
      "Paid ads managed, tested and optimised weekly",
      "Content that ranks, gets shared and converts",
      "Transparent dashboards — nobody gets vanity reports",
    ],
    features: [
      { title: "Full-Funnel Strategy", desc: "From awareness to conversion, every touchpoint is mapped and optimized." },
      { title: "Paid Ads Management", desc: "Google, Meta, LinkedIn — managed, tested, and optimized weekly for performance." },
      { title: "Content That Converts", desc: "Blog posts, landing pages, and email sequences designed to drive action." },
      { title: "Real-Time Dashboards", desc: "No vanity metrics. See exactly what's working and where budget should go." },
    ],
    stats: [
      { value: "3.5x", label: "Avg. ROAS" },
      { value: "45%", label: "Cost reduction" },
      { value: "2x", label: "Lead volume increase" },
      { value: "24/7", label: "Campaign monitoring" },
    ],
    deliverables: [
      "Marketing strategy document",
      "Campaign setup and management",
      "Content calendar and creation",
      "Performance dashboard access",
      "Monthly strategy reports",
    ],
    technologies: ["Google Ads", "Meta Ads", "HubSpot", "GA4", "SEMrush", "Mailchimp", "Buffer", "Notion"],
    faqs: [
      { q: "How quickly will I see results from paid ads?", a: "Paid campaigns typically show initial results within 2–4 weeks. We optimize continuously, so performance improves month over month." },
      { q: "Do you create the content or just manage distribution?", a: "Both. We handle strategy, creation, and distribution. Content is created by our in-house team and reviewed before publishing." },
      { q: "What's the minimum ad budget you work with?", a: "We recommend a minimum of $1,500/month for paid ads to generate meaningful data. We'll help you allocate it for maximum impact." },
    ],
    img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "brand-strategy",
    title: "Brand & Strategy",
    desc: "Identity, messaging and positioning with a point of view that sticks.",
    longDesc:
      "Your brand is what people say about you when you're not in the room. We help you shape that narrative through sharp positioning, distinctive visual identity, and messaging that resonates. Our brand work isn't decorative — it's strategic. We dig into your market, your audience, and your ambition to build a brand that's both memorable and defensible.",
    tags: ["Identity", "Naming"],
    highlights: [
      "Brand audits and competitive teardowns",
      "Positioning, messaging and a sharp tone of voice",
      "Identity systems built to evolve, not expire",
      "Guidelines your whole team will actually follow",
    ],
    features: [
      { title: "Brand Positioning", desc: "Find the slot you own in your market — and own it with conviction." },
      { title: "Visual Identity", desc: "Logo, color, type, and imagery systems that are unmistakably yours." },
      { title: "Messaging Framework", desc: "Tone of voice, taglines, and copy guidelines that scale across teams." },
      { title: "Brand Guidelines", desc: "Practical documentation your team will actually use, not a PDF nobody opens." },
    ],
    stats: [
      { value: "85%", label: "Brand recall increase" },
      { value: "2.5x", label: "Market differentiation" },
      { value: "50+", label: "Brands built" },
      { value: "92%", label: "Client retention" },
    ],
    deliverables: [
      "Brand strategy deck",
      "Visual identity system (logo, colors, typography)",
      "Messaging and tone of voice guidelines",
      "Brand guidelines document",
      "Asset library and templates",
    ],
    technologies: ["Figma", "Illustrator", "After Effects", "Notion", "Framer", "Readymag"],
    faqs: [
      { q: "How do you approach brand naming?", a: "We explore hundreds of directions, test for memorability and domain availability, and present a shortlist with strategic rationale — not just a list of cool words." },
      { q: "Can you rebrand an existing company?", a: "Yes. We start with a brand audit to understand what's working, what's not, and what needs to change. Then we evolve the brand strategically." },
      { q: "Do you provide ongoing brand support?", a: "Absolutely. We offer retainer packages for brand management, campaign creative, and design system evolution." },
    ],
    img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "seo-performance",
    title: "SEO & Performance",
    desc: "Technical and content optimization that gets you found — fast.",
    longDesc:
      "Rankings don't happen by accident. We combine technical SEO, content strategy, and performance optimization to get your site in front of the right people at the right time. Our approach is data-driven and transparent — no black-hat tactics, no vanity reports. Just sustainable growth backed by real metrics.",
    tags: ["Technical SEO", "Audits"],
    highlights: [
      "Technical audits shipped with a priority roadmap",
      "Core Web Vitals fixes that move rankings",
      "Keyword strategy mapped to revenue, not vanity",
      "Monthly reporting on what actually matters",
    ],
    features: [
      { title: "Technical Audits", desc: "Deep-dive into your site's health — crawlability, speed, structure, and issues." },
      { title: "Core Web Vitals", desc: "Fix the metrics Google actually uses to rank your pages." },
      { title: "Keyword Strategy", desc: "Target keywords that drive revenue, not just traffic." },
      { title: "Content Optimization", desc: "On-page SEO that makes every page work harder for rankings." },
    ],
    stats: [
      { value: "150%", label: "Avg. traffic increase" },
      { value: "Top 10", label: "Ranking target" },
      { value: "60%", label: "Faster page speed" },
      { value: "3x", label: "Organic lead growth" },
    ],
    deliverables: [
      "Technical SEO audit report",
      "Keyword research and strategy",
      "On-page optimization guidelines",
      "Performance improvement plan",
      "Monthly ranking and traffic reports",
    ],
    technologies: ["Ahrefs", "SEMrush", "Screaming Frog", "Google Search Console", "PageSpeed Insights", "GTmetrix"],
    faqs: [
      { q: "How long does SEO take to show results?", a: "Technical fixes can show impact within weeks. Content and authority building typically take 3–6 months for significant ranking improvements." },
      { q: "Do you guarantee rankings?", a: "No one can guarantee rankings — and anyone who does is lying. We guarantee a transparent process, proven strategies, and measurable progress." },
      { q: "What's included in monthly SEO reports?", a: "Rankings, traffic, conversions, technical health, and actionable recommendations. No vanity metrics — just what matters for your business." },
    ],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "support-care",
    title: "Support & Care",
    desc: "Maintenance, hosting and monitoring so you stay fast, safe and online.",
    longDesc:
      "Launching is just the beginning. We keep your digital products running at peak performance with proactive monitoring, security hardening, and fast-fix support. Whether you need ongoing maintenance, hosting management, or growth support, we've got your back — so you can focus on your business, not your uptime.",
    tags: ["Maintenance", "24/7"],
    highlights: [
      "Proactive monitoring and uptime alerts",
      "Battle-tested hosting setups, hardened by default",
      "Fast fixes backed by real service-level agreements",
      "Growth support that scales alongside your product",
    ],
    features: [
      { title: "24/7 Monitoring", desc: "Real-time uptime and performance monitoring with instant alerting." },
      { title: "Security Hardening", desc: "SSL, firewalls, regular audits, and proactive vulnerability patching." },
      { title: "Performance Tuning", desc: "Ongoing optimization to keep your site fast as content and traffic grow." },
      { title: "SLA-Backed Support", desc: "Guaranteed response times for critical issues — not just promises." },
    ],
    stats: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "<15min", label: "Critical response time" },
      { value: "24/7", label: "Monitoring" },
      { value: "0", label: "Security incidents" },
    ],
    deliverables: [
      "Monthly maintenance and updates",
      "Security monitoring and patches",
      "Performance optimization reports",
      "Backup management",
      "Priority support channel",
    ],
    technologies: ["Vercel", "AWS", "Cloudflare", "Datadog", "Sentry", "PagerDuty", "GitHub Actions", "Docker"],
    faqs: [
      { q: "What's included in the maintenance plan?", a: "Regular updates, security patches, backups, performance monitoring, and priority support. Everything you need to keep your site healthy." },
      { q: "Do you support platforms we didn't build?", a: "Yes. We can support and maintain sites built on any modern stack. We'll start with an audit to understand the codebase." },
      { q: "What's your uptime guarantee?", a: "We offer a 99.99% uptime SLA for managed hosting clients. If we miss it, you get credits — that's how confident we are." },
    ],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
  },
];

export const trustedBy = [
  "Nova",
  "Vertex",
  "Pulse",
  "Lumen",
  "Aria",
  "Contour",
  "Flux",
  "Orbit",
];