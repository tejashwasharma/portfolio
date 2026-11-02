/** Headline impact numbers. `emphasis` is rendered in the accent colour. */

export const metrics = [
  { label: 'p95 service latency', emphasis: '~6s → <200ms' },
  { label: 'open security-audit findings', emphasis: '~150 → 10', suffix: 'in 2 quarters' },
  { label: 'session-management audit', emphasis: '0 findings' },
  { label: 'internal gRPC shared package', prefix: 'adopted by', emphasis: '9 teams' },
  { label: 'backend scale', emphasis: '2–3B', suffix: 'requests/day' },
  {
    label: 'incident resolution',
    emphasis: '3×',
    suffix: 'throughput, ~30% lower MTTR',
  },
  {
    label: 'PR throughput / test coverage',
    emphasis: '2–3×',
    suffix: '· 75% → 85%+',
  },
];
