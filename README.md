# QAG — Quantum Affinity Gravity (web presence)

The internet presence for **Quantum Affinity Gravity (QAG)**, the unified field
theory by Dr. Rodney A. Ripley Jr. Default branch: `master`.

## Stack

- pnpm workspaces monorepo, TypeScript 5.9, Node 24
- Frontend: React 19 + Vite 7, Tailwind CSS v4 (`artifacts/qag-nexus`)
- API: Express 5 (`artifacts/api-server`) — includes the Aetheria AI chat endpoint
  (`POST /api/chat`)
- Database: PostgreSQL + Drizzle ORM; Zod validation; Orval API codegen from the
  OpenAPI spec
- Build: esbuild

## Layout

- `artifacts/qag-nexus/` — the main React+Vite site (sections: Hero,
  Physics/Resonator, Base-12 Topology, Cosmology, Wave Functions, QAI Drop
  Experiment, Validation, Resonant Codex, Biology, Consciousness, Energy, Math,
  Capabilities, Partnerships, Aetheria chat)
- `artifacts/api-server/` — the Express API server
- `artifacts/mockup-sandbox/` — design mockups
- `lib/` — shared packages (`api-spec`, `api-client-react`, `api-zod`, `db`,
  OpenAI integrations)
- `scripts/` — workspace scripts
- `legal-docs/` — legal documents; `LICENSE.md` (MIT)

## Run

You must use **pnpm** — the preinstall script rejects npm/yarn:

```bash
pnpm install
pnpm run typecheck   # workspace-wide typecheck
pnpm run build       # typecheck + recursive builds
```

Individual packages under `artifacts/` and `lib/` carry their own
`dev`/`build` scripts.

## Status

Monorepo builds via pnpm; site content is the QAG theory presentation plus the
Aetheria chat API.
