/**
 * Work history. Each role carries either a flat `bullets` array or a `groups`
 * array of { heading, bullets } for roles detailed enough to warrant sub-sections.
 * `**text**` inside a bullet is rendered bold by <RichText />.
 */

export const experience = [
  {
    company: 'Contentstack',
    location: 'Pune, India — Remote',
    period: 'Nov 2022 – Aug 2026',
    titles: [
      { title: 'Senior Software Engineer I', period: 'Aug 2024 – Aug 2026' },
      { title: 'Software Engineer II', period: 'Nov 2022 – Jul 2024 (promoted)' },
    ],
    groups: [
      {
        heading: 'Backend Platform & Scale',
        bullets: [
          'Optimized backend services handling approximately **2–3B requests daily** by contributing to a high-throughput runtime migration and redesigning policy evaluation and Redis caching data models, cutting **p95 latency from ~6s to under 200ms**.',
          'Re-engineered service logging around high-signal events, improving observability and RCA precision while reducing **Datadog/Observe consumption costs**, and built **p95/p99 latency dashboards**.',
          'Owned end-to-end production incident response, increasing incident resolution throughput by **3×** and reducing average resolution time by **~30%**, consistently maintaining SLA commitments for enterprise accounts.',
        ],
      },
      {
        heading: 'Distributed Services & Shared Libraries',
        bullets: [
          'Built an internal **gRPC-backed package adopted by 9 product teams**, letting them consume authentication and authorization without reimplementing either.',
          'Architected the multi-tenant **RBAC framework**, transforming two fixed roles into an **unlimited, multi-product** model enforced through **OPA/Rego policies**, becoming a recurring differentiator in enterprise sales.',
          'Shipped the **multi-org invitation and onboarding workflow** for a multi-tenant model where users belong to several organizations, supporting **two product teams** through end-to-end RBAC adoption.',
          'Built a unified authentication layer spanning **multi-tenant OAuth 2.0, SAML-based enterprise SSO, and SCIM provisioning**, partnering with **Okta and Microsoft Entra ID** engineering to ship native marketplace applications.',
        ],
      },
      {
        heading: 'Security & Reliability',
        bullets: [
          'Launched a self-service **session-management suite** covering configurable idle/absolute timeouts, user-level whitelisting, and active session termination, achieving **zero findings** in a third-party security audit.',
          'Drove remediation of a separate third-party security audit, cutting open findings **from ~150 to 10 within two quarters**, and extended 2FA from SMS-based to authenticator-app-based across the platform.',
        ],
      },
      {
        heading: 'Cross-Team & Technical Leadership',
        bullets: [
          'Guided a new team member and junior engineers on the team\'s core stack through pairing sessions and design walkthroughs.',
          'Advised other product teams on **policy design and RBAC adoption**, unblocking rollout beyond the team\'s own scope.',
        ],
      },
      {
        heading: 'AI-Augmented Engineering',
        bullets: [
          'Built a **RAG-based Slack support bot** over internal docs and ticket history, answering questions across the team\'s service domain for Contentstack\'s support team — live in production.',
          'Integrated AI across the software delivery lifecycle, applying Claude Code, GPT, and GitHub Copilot to development, pre-review, test generation, debugging, merge-conflict resolution, incident RCA, and security analysis.',
          'Contributed to a **2–3× increase in PRs per sprint** while improving automated test coverage **from 75% to 85%+**, increasing engineering throughput without proportional headcount growth.',
          'Authored the **AGENT.md/SKILLS.md and cross-repo agent-navigation docs** mapping features and flows to exact files, and a feature-wise prompt/playbook library (RCA, test generation, conflict resolution) that **cut bug turnaround from 2–3 days to a single day** with the fix ready.',
        ],
      },
    ],
    awards: [
      'Thank You Award — Q1 2026 · session-management roll-out with zero security-audit findings',
      'Thank You Award — Q4 2024 · sustained ownership and leadership of the RBAC platform initiative',
      'Thank You Award — Q3 2023 · resolving customer-facing failures and hardening policies',
    ],
  },
  {
    company: 'Bestpeers Infosystem',
    location: 'Indore, India — Hybrid',
    period: 'Sep 2020 – Nov 2022',
    titles: [
      { title: 'Senior Software Engineer', period: 'Sep 2021 – Nov 2022' },
      { title: 'Software Engineer', period: 'Sep 2020 – Sep 2021 (promoted)' },
    ],
    bullets: [
      'Technically led **5+ developers** across concurrent client engagements, running Agile ceremonies (Scrum/Kanban) — sprint planning, grooming, and retrospectives.',
      'Accelerated feature releases by decomposing a monolithic application into **3 independently deployable microservices**, reducing cross-team dependencies and enabling parallel development across healthcare, edtech, and staffing platforms.',
      'Sustained **80%+ on-time delivery** across concurrent client engagements, protecting schedule commitments, client relationships, and renewal opportunities in high-pressure environments.',
      'Strengthened software quality by driving test coverage **beyond 85%**, reducing regression incidents and lowering post-release defect remediation effort.',
      'Developed full-stack product enhancements across APIs, back-end services, user management, integrations, and web applications for multiple client-facing SaaS products.',
    ],
  },
  {
    company: 'Gyrix Technolabs',
    location: 'Indore, India — On-site',
    period: 'Feb 2019 – Sep 2020',
    titles: [{ title: 'Software Engineer', period: 'Feb 2019 – Sep 2020 (includes a 2-month internship)' }],
    bullets: [
      'Accelerated deployment cycles by implementing CI/CD pipelines, reducing deployment time **from 2–3 hours to under 30 minutes** while eliminating manual deployment errors.',
      'Modernized legacy front-end architecture by migrating AngularJS applications to **React.js micro-frontends**, cutting load time **from 3–4s to under 1.5s** and reducing front-end development effort.',
      'Maintained **80%+ test coverage** across applications, strengthening release quality and reducing production defects.',
      'Established a predictable release cadence through biweekly product demonstrations for **2 platforms across a 19-month engagement**, iterative feedback cycles, and consistent execution across web and mobile applications.',
    ],
  },
];
