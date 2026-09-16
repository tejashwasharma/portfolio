/** Identity, contact details and the hero copy. */

export const profile = {
  name: 'Tejashwa Sharma',
  role: 'Senior Software Engineer · Backend & Platform Engineering',
  thesis:
    'I build authentication and authorization infrastructure that stays fast and audit-clean at billions of requests a day.',
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
  { term: 'Focus', value: 'Backend · Platform Engineering · IAM' },
  { term: 'Experience', value: '7+ years' },
  { term: 'Auth scale', value: '2–3B requests / day' },
  { term: 'Core', value: 'RBAC, OAuth2, SAML, OIDC, SCIM, OPA/Rego' },
  { term: 'Based in', value: 'Agra, India' },
  { term: 'Status', value: 'Open to senior & architect roles' },
];

export const summary = {
  lead: 'Senior software engineering professional with over 7 years architecting and delivering enterprise SaaS platforms, identity & access management, and distributed systems across high-scale product environments. Most recently at Contentstack I owned the platform’s RBAC framework and authentication infrastructure end to end — policy design in OPA/Rego, enterprise SSO and SCIM, incident response, and the observability around it.',
  facets: [
    {
      title: 'IAM & security architecture',
      body: 'RBAC, OAuth 2.0, SAML 2.0, OIDC, SCIM, JWT, SSO, OPA and Rego; modernised the authorization architecture into a scalable, multi-product RBAC framework with granular, policy-based access controls.',
    },
    {
      title: 'Backend engineering',
      body: 'Hands-on with Node.js, NestJS, Golang, GraphQL, gRPC, microservices, MongoDB, PostgreSQL, Redis, and AWS; engineered authentication infrastructure supporting 2–3B daily requests with high availability and performance.',
    },
    {
      title: 'Production & reliability engineering',
      body: 'Security-critical enterprise initiatives, architecture modernisation, observability, compliance, and SLA excellence; shipped solutions that cleared third-party audits with zero findings, accelerated incident resolution 3×, and cut resolution time ~30%.',
    },
    {
      title: 'AI-augmented engineering',
      body: 'Claude Code, GPT, and GitHub Copilot across the SDLC for development velocity, code quality, testing, debugging, RCA, and security analysis; built a RAG-based Slack support bot answering auth/RBAC/SSO questions, live with the internal support team; contributed to 2–3× PR throughput and 85%+ test coverage, alongside React.js, TypeScript, CI/CD, Docker, and Jenkins.',
    },
  ],
  closing:
    'Currently targeting senior software engineering, technical architect, and technical manager roles — to lead architecture and technology strategy, drive engineering excellence, and deliver product modernisation.',
};
