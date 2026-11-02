/** Identity, contact details and the hero copy. */

export const profile = {
  name: 'Tejashwa Sharma',
  role: 'Senior Software Engineer · Backend & Distributed Systems',
  thesis:
    'I build backend services and distributed systems that stay fast, reliable and cost-efficient at billions of requests a day.',
  location: 'Agra, India',
  resumeFile: '/tejashwasharma_resume.pdf',
  resumeDownloadName: 'tejashwasharma_resume.pdf',
};

export const contactLinks = [
  { label: 'email', href: 'mailto:tejsharma407@gmail.com', display: 'tejsharma407@gmail.com' },
  {
    label: 'linkedin',
    href: 'https://linkedin.com/in/tejashwasharma',
    display: 'linkedin.com/in/tejashwasharma',
    external: true,
  },
  {
    label: 'github',
    href: 'https://github.com/tejashwasharma',
    display: 'github.com/tejashwasharma',
    external: true,
  },
  {
    label: 'instagram',
    href: 'https://instagram.com/directedbytej',
    display: 'instagram.com/directedbytej',
    external: true,
  },
  { label: 'phone', href: 'tel:+917869097744', display: '+91 78690 97744' },
];

export const quickFacts = [
  { term: 'Role', value: 'Senior Software Engineer' },
  { term: 'Focus', value: 'Backend · Distributed Systems · Platform Engineering' },
  { term: 'Experience', value: '7+ years' },
  { term: 'Scale', value: '2–3B requests / day' },
  { term: 'Core', value: 'Node.js, NestJS, TypeScript, Microservices, gRPC, Redis, AWS, System Design' },
  { term: 'Based in', value: 'Agra, India' },
  { term: 'Status', value: 'Immediate joiner · Open to Remote / Relocation' },
];

export const summary = {
  lead: 'Senior software engineer with over 7 years building and scaling backend services, APIs and distributed systems for enterprise SaaS platforms. Most recently at Contentstack I built Node.js and TypeScript backend infrastructure serving 2–3B requests a day, cutting p95 latency from ~6s to under 200ms, shipping shared internal libraries adopted by 9 product teams, and owning production incident response and observability.',
  facets: [
    {
      title: 'Backend engineering',
      body: 'Node.js, NestJS, Express.js, Fastify, TypeScript, REST, GraphQL, gRPC, microservices, MongoDB, PostgreSQL, Redis, Kafka and AWS; designed multi-tenant services and shared libraries that product teams adopt without reimplementing the plumbing.',
    },
    {
      title: 'Performance, reliability & observability',
      body: 'Redesigned policy evaluation and Redis caching to cut p95 latency from ~6s to under 200ms at 2–3B requests a day; accelerated incident resolution 3×, cut resolution time ~30%, and reduced Datadog/Observe costs through high-signal logging.',
    },
    {
      title: 'Security & authorization',
      body: 'Multi-tenant RBAC enforced through OPA/Rego, OAuth 2.0, JWT, SSO and MFA; drove third-party security audits to zero findings and cut open findings from ~150 to 10 in two quarters.',
    },
    {
      title: 'AI-augmented engineering',
      body: 'Claude Code, GPT, and GitHub Copilot across the SDLC for development velocity, code quality, testing, debugging and RCA; built a RAG-based Slack support bot, live with the internal support team; contributed to 2–3× PR throughput and 85%+ test coverage, alongside React.js, TypeScript, CI/CD, Docker, and Jenkins.',
    },
  ],
  closing: 'Immediately available, open to remote work and relocation, for backend and distributed-systems roles in any language or stack.',
};
