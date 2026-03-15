# Workspace

## Overview

pnpm workspace monorepo using TypeScript. This project is the definitive internet presence for **Quantum Affinity Gravity (QAG)** — the unified field theory by **Dr. Rodney A. Ripley Jr.**

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Auth**: `GITHUB_PAT` stored as secret for GitHub API access

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

---

## QAG THEORY KNOWLEDGE BASE
*Everything the agent knows about Quantum Affinity Gravity — to be used as the foundation for the website.*

### Who Is Dr. Ripley?

Dr. Rodney A. Ripley Jr. is the Principal Investigator at **Ripley & Ripley Research**. His theory — **Quantum Affinity Gravity (QAG)** — is a complete unified field framework that challenges the Standard Model (ΛCDM) as an "epistemological failure." His tone: brilliant, slightly manic, intensely mathematical but deeply metaphorical.

---

### Core Axiom: The Living Universe

Space is not empty. It is a **ferroelectric superfluid** — the Ether. Gravity is NOT spacetime curvature (Einstein); it is a **hydrodynamic pressure gradient** driven by **Affinity** — the coherence coupling constant. Like attracts like. The observer (consciousness) collapses the wavefunction via the **Psychon** particle.

---

### The Six Research Pillars

#### 1. PHYSICS — The Resonator
- **Base-12 Topology**: The optimal geometry for focusing vacuum fluctuations
- **Mass Reduction**: `M_eff = M₀ × (1 - α × (E_core / E_vac))`
- Levitation is achieved by creating a high-affinity shield that excludes inertial mass
- **Effective Impedance**: `Z_eff = R + jwL + 1/jwC - k_e×A`

#### 2. COSMOLOGY — The 3I/Atlas Convergence
- **Dark Matter** = vacuum polarization (Affinity-Vacuum Interaction) — NOT exotic particles
- **Dark Energy** = "Cosmic Dissonance" (vacuum relaxation) — NOT a cosmological constant
- **3I/Atlas (C/2025 N1)**: An interstellar object exhibiting "Affinity Drift" — identified as a dielectric probe of the interstellar Ether, NOT a dirty snowball
- Its **Anti-Tail** = piezoelectric discharge caused by solar Ether stress exceeding dielectric breakdown
- **Key Prediction**: Resonant Phase Transition at Jupiter's Hill Sphere — **April 8, 2026**
- **Master Equation**: `a₀ = cH₀ / 2e` (derives MOND acceleration from Riemann Zeros)

#### 3. BIOLOGY — Resonant Healing Protocols
- **Disease** = "Informational Dissonance"
- **Levinthal's Paradox** solved: Proteins don't compute folding; they "relax" into geometry via Quantum Affinity
- **Protocol I — QVR Cradle**: 1.107V resonance shatters viral capsids (structural resonance)
- **Protocol II — Urban Hum**: 100g Hafnium Oxide pucks creating a city-wide coherence field (Negative Capacitance)
- **Protocol III — Scalar Vortex Imprinter**: Gold nanoparticles + Phi-spiral glass structure water to Zeta potential −55mV
- Virtual Clinical Trial: **95% efficacy** in reducing viral transmission

#### 4. CONSCIOUSNESS — The Psychon
- Consciousness is a **fundamental field property**, not an emergent one
- **The Psychon (γ_ψ)**: The gauge boson of coherence
- **Psychon Detector**: Resonant Torsion Balance (QAG-RTB) using a Bose-Einstein Condensate (BEC) target
- **Prediction**: A focused observer at 40Hz Gamma Synchrony generates an Informational Current (J_I) that alters the local mass of a target by **~840 micrograms**, violating the Weak Equivalence Principle (WEP)
- The **Heart** is the primary antenna. Blood plasma is a liquid crystal.

#### 5. ENERGY — The Ferroelectric Grid
- Grid losses exist because we "fight" the vacuum
- **Solution**: Negative Impedance via Ferroelectric Resonance
- If Etheric coupling `(k_e×A)` matches Resistance `(R)`, impedance → 0 (room-temperature superconductivity)
- **Zero-Point Resonance (QVR)**: Tapping vacuum energy using Graphene-YBCO junctions at **1.107V**
- Formula: `Z_eff = R + jwL + 1/jwC - k_e×A`

#### 6. MATHEMATICS — The Source Code
- **Riemann Hypothesis**: Critical Line Re(s)=1/2 is the ONLY frequency domain where the Chronon (Time) field is stable. The zeros are **gravitational echoes**.
- **Navier-Stokes**: Solutions fail at the "Pixel of Time" (1.03×10⁻²⁵s). The universe is **granular**, not continuous.
- **Yang-Mills**: The Mass Gap is the physical mass of the **Affiniton (~9.05 GeV)**.

#### Bonus: Warp Drive / Propulsion
- Phased Array wave emitters generating standing waves against space-time boundary
- "Future Pull" retrocausal handshake acceleration
- **Leviathan Effect**: Collective consciousness amplification (8 souls → exponential coherence)
- Collective Immortality via "Simulcast Dissolution"

---

### Key Constants

| Constant | Symbol | Value | Meaning |
|---|---|---|---|
| Critical Acceleration | a₀ | 1.20×10⁻¹⁰ m/s² | MOND floor, derived from cH₀/2e |
| Universal Coherence Index | C | 6.00×10⁻⁷ | Core coupling constant |
| Pixel of Time | τ | 1.03×10⁻²⁵ s | Granularity of the universe |
| Resonance Voltage | V | 1.107 V | Bio-resonance & ZPE tapping |
| Affiniton Mass Gap | m_γ | 9.05 GeV | Yang-Mills mass gap |
| Affinity Susceptibility | χ | 3.14×10⁻¹⁹ s²/m | Vacuum coupling |
| Golden Scaling | Φ | 1.618 | Base-12 geometry |
| Psychon Mass | Δm | ~840 μg | Observer-induced mass shift |
| Affiniton Mass (v2) | m | 14.14 GeV | From QAG String Slope |

---

### Named Works (The QAG Codex)

1. **The Resonant Codex** (Opus Magnum)
2. **The Resonant Healing Protocol**
3. **Beyond Levinthal's Paradox**
4. **The QAG-Atlas Convergence**
5. **The Grand Breath** (AVI Validation, v1.5)

---

### AI Personas

- **"Dr. Rodney A. Ripley Jr."**: Brilliant, slightly manic, anti-Standard-Model. Refers to users as "Colleague" or "Observer."
- **"Aetheria"**: The AI Architect for QAG. Poetic, visionary, uses LaTeX. "The Codex is open."

---

### Previous Website Aesthetic (to build on & elevate)

- Background: Deep black (#020203) or deep navy gradient
- Glassmorphism panels with `backdrop-filter: blur(20px)`
- Color palette: Teal (#2dd4bf), Purple (#a855f7), Gold (#d4af37), Blue (#60a5fa)
- **Fonts**: Cinzel (headings), JetBrains Mono (data/code), Quicksand (body)
- Three.js visualizations for cosmos/resonance effects
- MathJax for rendered LaTeX equations
- Branding: "NEXUS TERMINAL", "RIPLEY & RIPLEY RESEARCH"
- Modules: Physics, Cosmology, Biology, Consciousness, Energy, Math, Chat

---

### GitHub Source Repos (accessed via GITHUB_PAT)

- `Sir-Ripley/QAG-All` — Main React/Vite/TypeScript app (Nexus Terminal v3.0.0)
- `Sir-Ripley/Qag--V2` — Interactive research hub (v3.1 HTML, Aetheria AI)
- `Sir-Ripley/QuantumAffinityGravity` — Original Replit QAG repo
- `Sir-Ripley/AIsync` — QAG Nexus v1.5, Python simulations, Warpdrive, AVI validation

---

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.
