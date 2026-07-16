export const PROFILE = {
  name: 'Your Name',
  role: 'Full Stack Developer · AI Engineer · Creative Developer',
  location: 'Earth · Milky Way',
  email: 'hello@yourname.dev',
  socials: {
    github: 'https://github.com/yourhandle',
    linkedin: 'https://linkedin.com/in/yourhandle',
    instagram: 'https://instagram.com/yourhandle',
    x: 'https://x.com/yourhandle'
  },
  resume: '/resume.pdf'
};

export const ABOUT = {
  intro: 'I build immersive digital products at the intersection of engineering, AI and design.',
  story: `From taking apart radios as a kid to shipping full-stack systems and neural networks, my compass has always pointed toward "how does this really work?". Today I craft interfaces that feel like they belong in the next decade.`,
  education: [
    { school: 'Your University', degree: 'B.Tech, Computer Science', years: '2021 — 2025' }
  ],
  passions: ['Creative coding', 'Applied AI', 'Real-time graphics', 'Human-centered design'],
  goals: 'To build products that feel inevitable — obvious in hindsight, magical on first use.',
  facts: [
    '5+ years writing code',
    'Shipped 20+ production projects',
    'Contributor to open source',
    'Loves cinematography and space'
  ]
};

export const TECH = [
  { name: 'React',      years: 4, level: 95 },
  { name: 'Next.js',    years: 3, level: 93 },
  { name: 'TypeScript', years: 3, level: 92 },
  { name: 'Node.js',    years: 4, level: 90 },
  { name: 'Express',    years: 3, level: 88 },
  { name: 'MongoDB',    years: 3, level: 85 },
  { name: 'PostgreSQL', years: 2, level: 82 },
  { name: 'Docker',     years: 2, level: 80 },
  { name: 'AWS',        years: 2, level: 78 },
  { name: 'Python',     years: 4, level: 90 },
  { name: 'TensorFlow', years: 2, level: 78 },
  { name: 'OpenCV',     years: 2, level: 75 },
  { name: 'Three.js',   years: 2, level: 85 },
  { name: 'Tailwind',   years: 3, level: 94 },
  { name: 'GSAP',       years: 2, level: 88 }
];

export const PROJECTS = [
  {
    id: 'nebula-ai',
    title: 'Nebula AI',
    tagline: 'Realtime multimodal assistant',
    description: 'A production RAG assistant with streaming, tools and vision, built on Next.js and a custom vector store.',
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'pgvector', 'Redis'],
    features: ['Streaming responses', 'Vision input', 'Tool calling', 'Fine-grained auth'],
    challenges: 'Achieving sub-200ms first token on cold routes.',
    learning: 'Deep dive into embeddings, streaming protocols and infra.',
    github: 'https://github.com/yourhandle/nebula-ai',
    demo: 'https://nebula.example.com'
  },
  {
    id: 'orbit-os',
    title: 'Orbit OS',
    tagline: 'Web-based creative workstation',
    description: 'A GPU-accelerated in-browser IDE with realtime collaboration and WebGL previews.',
    tech: ['React', 'WebGL', 'CRDTs', 'Rust/WASM'],
    features: ['CRDT sync', 'Live shaders', 'Multi-cursor', 'Offline first'],
    challenges: 'Merging text buffers with binary asset streams.',
    learning: 'Rust/WASM interop and low-level rendering.',
    github: 'https://github.com/yourhandle/orbit-os',
    demo: 'https://orbit.example.com'
  },
  {
    id: 'aurora-vision',
    title: 'Aurora Vision',
    tagline: 'Computer vision for accessibility',
    description: 'Real-time scene description for visually impaired users, running on-device with WebGPU.',
    tech: ['Python', 'PyTorch', 'ONNX', 'WebGPU'],
    features: ['On-device inference', 'Multilingual TTS', 'Haptic guidance'],
    challenges: 'Model compression without accuracy collapse.',
    learning: 'Quantization, distillation, edge deployment.',
    github: 'https://github.com/yourhandle/aurora',
    demo: 'https://aurora.example.com'
  },
  {
    id: 'helios-cli',
    title: 'Helios CLI',
    tagline: 'Developer time-machine',
    description: 'A CLI that snapshots your entire dev environment and lets you rewind bugs across time.',
    tech: ['Go', 'SQLite', 'FUSE'],
    features: ['Content-addressed snapshots', 'Diff any two moments', 'Git integration'],
    challenges: 'Snapshotting live processes without lock contention.',
    learning: 'Systems programming and filesystems.',
    github: 'https://github.com/yourhandle/helios',
    demo: ''
  }
];

export const EXPERIENCE = [
  { role: 'Senior Full-Stack Engineer', company: 'Stellar Labs', period: '2024 — Now',
    points: ['Led migration to Next.js 15', 'Built AI features used by 100k users', 'Mentored 4 engineers'] },
  { role: 'AI Engineer (Contract)', company: 'Photon Studio', period: '2023 — 2024',
    points: ['Shipped vision pipeline in production', 'Reduced inference cost 60%'] },
  { role: 'Full-Stack Developer', company: 'Nova Systems', period: '2022 — 2023',
    points: ['Owned platform infra', 'Introduced design system'] },
  { role: 'Freelance', company: 'Independent', period: '2020 — 2022',
    points: ['20+ shipped projects', 'Clients across 6 countries'] }
];

export const STRENGTHS = [
  { name: 'Problem Solving',   level: 95 },
  { name: 'Team Work',         level: 90 },
  { name: 'Leadership',        level: 85 },
  { name: 'Communication',     level: 88 },
  { name: 'Fast Learner',      level: 96 },
  { name: 'Creative Thinking', level: 93 },
  { name: 'AI',                level: 87 },
  { name: 'Development',       level: 95 }
];

export const CERTIFICATIONS = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: 2024, url: '#' },
  { name: 'Deep Learning Specialization',      issuer: 'DeepLearning.AI',      year: 2023, url: '#' },
  { name: 'Google Cloud Professional',         issuer: 'Google',               year: 2023, url: '#' },
  { name: 'Meta Front-End Developer',          issuer: 'Meta',                 year: 2022, url: '#' }
];

export const ACHIEVEMENTS = [
  { title: 'Winner — Global Hack 2024',      detail: 'Best AI Application (out of 1,200 teams)' },
  { title: 'Top 1% — LeetCode',              detail: '2,300+ rating, 700+ problems' },
  { title: 'Open Source',                    detail: '500+ GitHub stars across libraries' },
  { title: 'Speaker — DevConf 2024',         detail: 'Talk on real-time web graphics' }
];
