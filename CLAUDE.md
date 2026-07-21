@AGENTS.md

## Vercel credit rule (added 2026-07-20)

Every `git push` to main triggers a paid Vercel cloud build (billed per build-CPU-minute). On 2026-07-20 the team burned 12 build-CPU-hours ($2.51) in a single day, almost all of it from pushing after every individual commit.

- Commit locally as often as you want, but push in batches: finish the milestone, verify it locally, then push once. Target 1-3 pushes per working session. Never push once per commit.
- Push immediately only when Andreas says ship now, or when production is broken.
- Never enable paid Vercel add-ons (Speed Insights, Observability Plus, etc.). Speed Insights was silently costing $10/month and got disabled 2026-07-20.
- Do not undo the team cost guardrails: Standard build machines, on-demand concurrency off, $1 spend alert.
