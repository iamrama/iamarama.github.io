export type Metric = {
  value: string;
  label: string;
};

export type Challenge = {
  title: string;
  problem: string;
  solution: string;
};

export type DesignDecision = {
  title: string;
  description: string;
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  category: string;
  timeframe: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  uxThinking: string;
  tech: string[];
  keyFeatures: string[];
  result: string;
  metrics: Metric[];
  overview: string;
  research: string[];
  wireframes: string[];
  designDecisions: DesignDecision[];
  developmentApproach: string[];
  challenges: Challenge[];
  outcome: string[];
};

export type MoreProject = {
  title: string;
  category: string;
  note: string;
};

export const profile = {
  name: 'Ramakrishnan',
  role: 'Senior Mobile App Developer + UX Designer',
  headline: 'Designing and Building Scalable Mobile Experiences',
  intro:
    'I help startups and product teams turn complex workflows into mobile apps that feel simple, fast, and commercially sharp.',
  supporting:
    'From product strategy and UX architecture to Flutter delivery and performance tuning, I work end-to-end with a bias for measurable outcomes.',
};

export const credibilityStats: Metric[] = [
  {
    value: '10+',
    label: 'Years shipping mobile products across B2B and consumer apps',
  },
  {
    value: '25+',
    label: 'Apps launched, rebuilt, or scaled with production teams',
  },
  {
    value: '60%',
    label: 'Typical crash-rate reduction on stabilization engagements',
  },
];

export const featuredProjects: ProjectCaseStudy[] = [
  {
    slug: 'nexloan-10-days',
    title: 'NEXLoan',
    category: 'FinTech',
    timeframe: '10',
    role: 'Rapid UX sprint, Flutter build, launch-ready integration',
    summary:
      'A fast-turnaround lending app designed and delivered under a 10-day timeline for a go-to-market campaign.',
    problem:
      'The client needed a production-ready loan onboarding flow urgently, but the existing process had high drop-off and no mobile-first UX structure.',
    solution:
      'Built a compressed onboarding flow with guided eligibility checks, prefill strategy, and clear repayment summaries.',
    uxThinking:
      'Prioritized trust signals and reduced user hesitation by simplifying form sequencing and exposing repayment clarity at every key step.',
    tech: ['Flutter', 'REST APIs', 'Firebase', 'CI/CD'],
    keyFeatures: [
      'Guided loan eligibility flow',
      'Document upload checkpoints',
      'Repayment summary calculator',
      'KYC status tracking',
    ],
    result:
      'The release hit the campaign deadline and reduced onboarding abandonment through a cleaner, confidence-first UX.',
    metrics: [
      { value: '10', label: 'End-to-end delivery timeline' },
      { value: '31%', label: 'Improved completion in onboarding flow' },
      { value: '0', label: 'Critical issues on launch day' },
    ],
    overview:
      'NEXLoan was delivered as a high-pressure product sprint where speed and trust had equal priority. The build focused on creating a secure, understandable, and conversion-friendly mobile lending experience in less than two weeks.',
    research: [
      'Analyzed existing form abandonment points in previous lending onboarding flows.',
      'Mapped the minimum trust checkpoints needed for first-time borrowers.',
      'Aligned flow priorities with compliance and conversion goals in a rapid workshop.',
    ],
    wireframes: [
      'Designed a four-step onboarding wireframe with explicit progress feedback.',
      'Prototyped a summary-first repayment screen before submission.',
      'Validated document upload placement to avoid late-stage drop-offs.',
    ],
    designDecisions: [
      {
        title: 'Conversion-focused sequence',
        description:
          'Early steps capture intent quickly, while heavier verification appears only after commitment.',
      },
      {
        title: 'Trust-first UI hierarchy',
        description:
          'Loan amount, tenure, and repayment context are always visible near key decisions.',
      },
      {
        title: 'Error-proof form states',
        description:
          'Inline validations and formatting guards reduce correction loops on mobile keyboards.',
      },
    ],
    developmentApproach: [
      'Built the app in Flutter with reusable onboarding modules for fast iteration.',
      'Integrated APIs in parallel with UI finalization to protect timeline certainty.',
      'Shipped through a lean QA and CI pipeline optimized for rapid release.',
    ],
    challenges: [
      {
        title: 'Aggressive timeline',
        problem:
          'Ten-day delivery left little room for multiple redesign loops or delayed integrations.',
        solution:
          'Locked core flow scope early and moved in a design-to-dev parallel sprint model.',
      },
      {
        title: 'Balancing speed and compliance',
        problem:
          'The experience needed to stay lightweight without weakening required checks.',
        solution:
          'Placed mandatory validation in contextual checkpoints to keep momentum without skipping policy steps.',
      },
    ],
    outcome: [
      'The client launched on schedule with a polished mobile product.',
      'The flow improved borrower confidence during first-time submissions.',
      'The foundation was reusable for follow-up lending feature releases.',
    ],
  },
  {
    slug: 'fac-white-labeled-app',
    title: 'FAC White Labeled App',
    category: 'White-Label Platform',
    timeframe: '8',
    role: 'Design system strategy, modular architecture, multi-brand rollout',
    summary:
      'A configurable mobile platform enabling multiple client brands to ship with one shared codebase.',
    problem:
      'Separate client apps were expensive to maintain and difficult to keep consistent across releases.',
    solution:
      'Introduced a white-label architecture with theme tokens, feature flags, and tenant-aware configuration layers.',
    uxThinking:
      'Created a neutral but premium UX baseline that can be branded per client without breaking usability or interaction consistency.',
    tech: ['Native Android', 'iOS', 'Clean Architecture', 'REST APIs', 'CI/CD'],
    keyFeatures: [
      'Tenant-aware branding engine',
      'Feature toggles per client package',
      'Shared component system',
      'Independent environment configuration',
    ],
    result:
      'The business shipped multiple branded apps faster while reducing maintenance overhead and preserving quality.',
    metrics: [
      { value: '5', label: 'Brand variants launched from one codebase' },
      { value: '45%', label: 'Reduction in duplicate development effort' },
      { value: '2x', label: 'Faster branding rollout cycle' },
    ],
    overview:
      'FAC needed scale without chaos. The new white-label model enabled branded delivery at speed while preserving consistent interaction quality and release governance.',
    research: [
      'Reviewed recurring customization requests from client onboarding teams.',
      'Mapped where brand-level exceptions were breaking release consistency.',
      'Prioritized configurable touchpoints that deliver visible differentiation.',
    ],
    wireframes: [
      'Created a shared information architecture that survives theme-level changes.',
      'Designed token-based screen variants to preview brand adaptation quickly.',
      'Tested configuration pathways for onboarding and dashboard modules.',
    ],
    designDecisions: [
      {
        title: 'Tokenized design language',
        description:
          'Visual customization sits in theme tokens so brand changes do not require component rewrites.',
      },
      {
        title: 'Single interaction grammar',
        description:
          'All variants follow one UX behavior model, reducing training and support burden.',
      },
      {
        title: 'Config-safe navigation',
        description:
          'Navigation and role access are centrally controlled to prevent client-specific regressions.',
      },
    ],
    developmentApproach: [
      'Modularized app domains so each tenant configuration remains isolated and testable.',
      'Automated per-brand build generation through environment-driven pipelines.',
      'Applied QA matrices for brand permutations before release approval.',
    ],
    challenges: [
      {
        title: 'Brand variance complexity',
        problem:
          'Each client wanted customization that risked fragmenting UX and code quality.',
        solution:
          'Defined strict extension boundaries for color, content, and feature exposure.',
      },
      {
        title: 'Release coordination',
        problem:
          'Multi-tenant releases introduced risk when one variant changed shared modules.',
        solution:
          'Introduced tenant regression suites and release checklist automation.',
      },
    ],
    outcome: [
      'Client onboarding accelerated with predictable white-label delivery.',
      'The team reduced duplicate implementation work across brands.',
      'The product retained UX consistency across all released variants.',
    ],
  },
  {
    slug: 'amplitech-iot',
    title: 'Amplitech IoT',
    category: 'Industrial IoT',
    timeframe: '14',
    role: 'UX architecture, Flutter engineering, real-time device dashboard design',
    summary:
      'A mobile monitoring and control app for IoT deployments requiring real-time visibility and actionable alerts.',
    problem:
      'Operators struggled with delayed status awareness and fragmented controls across different interfaces.',
    solution:
      'Built a unified live dashboard with device health views, alert prioritization, and quick control actions.',
    uxThinking:
      'Focused on signal-over-noise interfaces where operators can identify critical events in seconds, not minutes.',
    tech: ['Native Android', 'MQTT', 'REST APIs', 'Clean Architecture', 'Sentry'],
    keyFeatures: [
      'Real-time telemetry cards',
      'Critical alert prioritization',
      'Quick-action control panel',
      'Historical trend snapshots',
    ],
    result:
      'Operations teams improved incident response speed and gained clearer visibility across active IoT nodes.',
    metrics: [
      { value: '42%', label: 'Faster incident response time' },
      { value: '35%', label: 'Improvement in dashboard scan efficiency' },
      { value: '58%', label: 'Reduction in missed critical alerts' },
    ],
    overview:
      'Amplitech IoT needed a mobile command center for distributed hardware operations. The product design emphasized clarity, reliability, and fast response workflows under operational pressure.',
    research: [
      'Observed operator behavior during live monitoring to identify bottlenecks in response workflows.',
      'Mapped alert fatigue patterns caused by low-priority notification noise.',
      'Prioritized the data points needed for first-pass diagnosis on small screens.',
    ],
    wireframes: [
      'Built a tiered dashboard hierarchy for status, warning, and critical states.',
      'Prototyped a one-tap control path for urgent device actions.',
      'Designed trend cards for rapid anomaly detection in the field.',
    ],
    designDecisions: [
      {
        title: 'Critical-first hierarchy',
        description:
          'The most severe alerts dominate the visual hierarchy to reduce delayed response risk.',
      },
      {
        title: 'Dense but readable telemetry',
        description:
          'Information cards were tuned for quick comparison without overwhelming operators.',
      },
      {
        title: 'Action confidence',
        description:
          'Control actions include explicit confirmation states and feedback loops to prevent mistakes.',
      },
    ],
    developmentApproach: [
      'Integrated MQTT streams with optimized state handling for live UI updates.',
      'Used modular architecture to isolate dashboard, alerts, and control domains.',
      'Instrumented crash and latency monitoring for reliability-focused iterations.',
    ],
    challenges: [
      {
        title: 'Real-time load handling',
        problem:
          'High telemetry volume could degrade responsiveness on lower-end devices.',
        solution:
          'Applied selective updates and prioritized rendering paths for critical data lanes.',
      },
      {
        title: 'Alert fatigue',
        problem:
          'Operators ignored frequent low-priority alerts after repeated noise.',
        solution:
          'Introduced severity grouping and contextual alert bundling to improve focus.',
      },
    ],
    outcome: [
      'Teams reacted faster to high-impact events in active deployments.',
      'Dashboard readability improved operational confidence during busy shifts.',
      'The system established a scalable UX pattern for future IoT modules.',
    ],
  },
];

export const moreProjects: MoreProject[] = [
  {
    title: 'MDU-One Home app',
    category: 'Utility',
    note: 'Home-focused mobile workflows with stable production delivery.',
  },
  {
    title: 'Profile Manager SDK',
    category: 'SDK',
    note: 'Reusable profile management capabilities packaged for product teams.',
  },
  {
    title: 'Smart Rio ERP App',
    category: 'ERP',
    note: 'Flutter-based enterprise app for operations and workflow management.',
  },
  {
    title: 'Prooptics',
    category: 'Business',
    note: 'Mobile product experience for optical/business service operations.',
  },
  {
    title: 'Power IQ',
    category: 'Enterprise',
    note: 'Xamarin.Forms app delivery with reliability and UX focus.',
  },
  {
    title: 'Mage 2 Mobile',
    category: 'Native Android',
    note: 'Native Android app implementation with production-first architecture.',
  },
  {
    title: 'Farm fresh',
    category: 'Native Android',
    note: 'Native Android commerce and ordering user flow delivery.',
  },
  {
    title: 'Staybula',
    category: 'Native Android',
    note: 'Native Android booking and hospitality product development.',
  },
  {
    title: 'The Independent SG',
    category: 'Native Android',
    note: 'Native Android news/content app delivery and optimization.',
  },
  {
    title: 'Smart eagles',
    category: 'Native Android',
    note: 'Native Android implementation tailored for business workflows.',
  },
  {
    title: 'Zambia Reports',
    category: 'Native Android',
    note: 'Native Android report-focused app for field and desk teams.',
  },
  {
    title: 'FreeOpenVPN',
    category: 'Native Android',
    note: 'Native Android network utility app with smooth UX interactions.',
  },
  {
    title: 'Cook a curry',
    category: 'Native Android',
    note: 'Native Android recipe and cooking content experience.',
  },
  {
    title: 'Thirukkural Ulaga Podhu Marai',
    category: 'Native Android',
    note: 'Native Android educational and literary app delivery.',
  },
  {
    title: 'Sathiyam TV',
    category: 'Media',
    note: 'Native Android streaming app delivery with UX and performance tuning.',
  },
  {
    title: 'Sawyouu',
    category: 'Social',
    note: 'Community interaction workflows and engagement-oriented product iteration.',
  },
  {
    title: 'Nagercoil.com',
    category: 'Local Platform',
    note: 'Hyperlocal content, discovery, and utility-first mobile experience design.',
  },
  {
    title: 'Islamic Shop',
    category: 'Commerce',
    note: 'Shopping, catalog UX, and smooth checkout optimization for mobile users.',
  },
  {
    title: 'Globeevents',
    category: 'Events',
    note: 'Event discovery, registration flow simplification, and ticketing experience.',
  },
  {
    title: 'Break the Love',
    category: 'Lifestyle',
    note: 'Booking and activity-based mobile flow design with conversion-focused UX.',
  },
];

export const uxShowcase = [
  {
    title: 'Flow Simplification',
    description:
      'I reduce taps, surface intent early, and build flows around what the user must decide now versus later.',
  },
  {
    title: 'Design Systems for Delivery',
    description:
      'Reusable tokens and component logic keep product teams shipping consistent experiences without slowing engineering.',
  },
  {
    title: 'Usability with Metrics',
    description:
      'Every design change is tied to a behavioral metric: faster completion, lower abandonment, higher retention, or fewer errors.',
  },
];

export const skillGroups = [
  {
    title: 'Mobile',
    items: ['Flutter', 'Android', 'iOS', 'Cross-platform delivery', 'App Store releases'],
  },
  {
    title: 'UX',
    items: ['Wireframing', 'Interaction design', 'Usability reviews', 'User flows', 'Design systems'],
  },
  {
    title: 'Architecture',
    items: ['MVVM', 'Clean Architecture', 'Modular features', 'Offline-first patterns', 'Scalable state management'],
  },
  {
    title: 'Tools',
    items: ['Firebase', 'REST APIs', 'CI/CD', 'Fastlane', 'Analytics and crash reporting'],
  },
];

export const experienceTimeline = [
  {
    role: 'Lead Mobile Product Consultant',
    company: 'Independent / Client Projects',
    duration: '2021 - Present',
    achievements: [
      'Helped teams turn product ideas into launch-ready mobile experiences from discovery to delivery.',
      'Improved app performance and release stability on rescue and modernization engagements.',
      'Defined UX and architecture systems that shortened iteration cycles across teams.',
    ],
  },
  {
    role: 'Senior Flutter Engineer',
    company: 'Product Studio',
    duration: '2018 - 2021',
    achievements: [
      'Built production Flutter apps for healthcare, finance, and operations use cases.',
      'Reduced crash rates and simplified feature delivery through reusable architecture patterns.',
      'Worked directly with founders and designers to align product strategy with execution.',
    ],
  },
  {
    role: 'Mobile UX Engineer',
    company: 'Digital Agency',
    duration: '2015 - 2018',
    achievements: [
      'Bridged wireframes and implementation for native mobile launches with strong usability outcomes.',
      'Introduced evidence-based interaction design reviews to improve product decisions.',
      'Built internal UI patterns that reduced rework during client delivery.',
    ],
  },
];

export const services = [
  {
    title: 'Mobile App Development',
    description:
      'End-to-end product delivery for Flutter, Android, and iOS experiences with production-ready architecture.',
  },
  {
    title: 'UX Design and Optimization',
    description:
      'Flow audits, wireframes, prototype direction, and interaction improvements that remove friction.',
  },
  {
    title: 'Performance Improvement',
    description:
      'Crash reduction, startup optimization, rendering cleanup, and release hardening for existing apps.',
  },
  {
    title: 'Product and App Consulting',
    description:
      'Technical direction, roadmap input, architecture review, and delivery planning for ambitious product teams.',
  },
];

export const contactLinks = [
  { label: 'Email', href: 'mailto:rkk027@gmail.com' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ramakrishnan-lakshmana-perumal-2ba9a4aa/',
  },
  { label: 'GitHub', href: 'https://github.com/iamrama' },
  { label: 'Medium', href: 'https://medium.com/@rk27' },
];

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}