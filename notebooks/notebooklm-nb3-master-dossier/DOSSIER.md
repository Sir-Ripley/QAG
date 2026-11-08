# NB3 DOSSIER — ⚛️ QAG & Affy Master Research Dossier

**Notebook ID:** 45ddd73d-b17d-407e-968f-86cd7e300ea6 · **Created:** Sep 20, 2026 · **Ingested:** 2026-11-08 via Squish Bridge
**Stated size:** 79 sources — **reconciled exactly: 66 file sources + 13 Gemini-chat sources.**
**Coverage:** 10 priority sources opened and read (guide + opening text). The remaining file sources are the same documents in alternate formats/copies (AffyNew ×2, Agy Offline ×3, AfySetup9a ×2, MODEL_STACK_REPORT ×3, DualHemisphereEngine ×2, tools.kt ×2, Ecosystem Dossier ×2) or were already verdicted in NB1 (QVR set, Master Synthesis, Lab Test Blueprint, Prospectus, August26QAGTesting).
**Home repos:** Sir-Ripley/QAG (this dossier + inventory + captures, `notebooks/notebooklm-nb3-master-dossier/`); ecosystem pointer note in Sir-Ripley/Aestheria (`docs/NOTEBOOKLM_NB3.md`).

## What this notebook is
The **bridge notebook**: the one place where the QAG physics programme and the Affy AI ecosystem are filed together as a single research dossier. Its centre of gravity is the ecosystem's founding stratum (Oct 2026): the Affy architecture documents, the Kotlin engine files, the model-stack report, the Oct 22 ecosystem dossier, and the IDE checklist from the Oct 22 build night — with the QAG theory core (Master Synthesis, QVR, Lab Test Blueprint, Prospectus) carried alongside as the physics the AI is built around.

## Source verdicts (the 10 read)

### Ecosystem founding stratum
- **MODEL_STACK_REPORT.md** (also .pdf ×2) — "AI-Offline Model Stack — Inventory, Geometry Simulation & Recommendation": evaluates the **3+1 Hybrid** manifest (three physical models + a synthetic baseline tier) through offline geometry simulations; validates the stack as structurally sound for its cascading roles, with deployment TODOs listed. **This is the source report behind the 2026-11-04 ratified stack** (T1 gemma-3-270m int8 / T2 gemma3-1b int4 / T3 Gemma-4 E2B / T4 synthetic; geometry contract [1,32,16,16], χ² gate ≤ 1.05) — lineage confirmed end to end.
- **AI-Ecosystem-Technical-Dossier-2026-10-22.pdf (×2)** — the original ecosystem dossier: **four interconnected code spaces** sharing a duodecimal/QAG physics core; a governance guide (local privacy, CUDA-free substrates, secrets kept out of repos). The direct ancestor of ECOSYSTEM DOSSIER v1.2 (Nov 6), which refined the pool to 4 repos + 2 incorporated projects.
- **IDE-Tonight-Checklist-2026-10-22.md** — the Oct 22 build-night checklist (prepared by Squish): Aestheria Android in Android Studio → ToroidalDirectML PC engine in Visual Studio → the self-contained project; acceptance gates = Python tests passing, golden-vector parity, backend smoke tests, no manual secret keys. A provenance artifact of the working pipeline itself — and its golden-vector-parity gate is the same contract the ToroidalDirectML CI now enforces (see the GV-1 finding parked in the CI lane).

### Affy architecture & code
- **Agy Offline (1).pdf** (series ×3 + agy_offline variants) — the Agy/Affy offline architecture: autonomous on-device system on Tensor, a local **IPC socket** bridging UI and background process, fast-track/logical model arbitration with statistical checks, automated local-file indexing, pruning + prediction background workers. The design stratum AI-Offline was built from.
- **com.quantumaffinity.affy.engine.kt.txt** — the dual-engine decision maker in code: two models run concurrently; the statistical divergence between their outputs is measured; below threshold the primary answer ships, otherwise the alternative perspective does. The DualHemisphere arbitration pattern, pre-rename (package com.quantumaffinity.affy — the namespace later unified to com.qag.affy).
- **HealingAPI.py (1).txt** — a FastAPI service with two endpoints: (1) spatial coordinates + mass metrics → stellar-rotation evaluation; (2) biological data (charges, molecular weights) organised across animal species — the heavy-math-behind-an-API pattern of the research-console family (cf. NB7).
- **QAG Real-Time Field Suite & Live API Engine (1).pdf** — the live-data platform concept: real-time API integration to assess phenomena from molecular biology to cosmic structure in one framework. The conceptual ancestor of Aestheria's live data tools and the grounding service (the senses layer of the adopted Grounding/Mind architecture).

### Physics core (as carried in this notebook)
- **Quantum Affinity Gravity (QAG) — Master Technical Dossier & Production Architecture** — the combined dossier: astrophysical anomalies + lithium solution + targeted biological-disruption applications + the mobile↔workstation production architecture, with empirical performance benchmarks as documented (claims stratum, as with all pre-replication-lab validation material).
- **qag_math.pdf** — the foundational QAG maths module: configurable constants (coupling strength, echo count, scale factors), modified-velocity predictions with spatial affinity + cumulative echo effects, reduced-χ² evaluation tooling.
- **Technical Feasibility_Assessment (1).pdf** — the feasibility framing: inert-vacuum → resonant-superfluid paradigm shift, vacuum-resonance energy extraction, cryogenic LH₂ + precision transducers (the Zero-Point Resonator engineering line), spatial re-indexing for propulsion.

## Contradictions & cautions
1. **Namespace drift, resolved:** engine code here is `com.quantumaffinity.affy`; the settled identity is **com.qag.affy** (Rodney's 2026-11-07 decision, applied in AI-Offline commit 6565405a). These notebook copies are the pre-decision stratum.
2. **Model-stack versions:** this notebook's report is the *recommendation-stage* document; the governing stack is the 2026-11-04 ratification (T1–T4 with named artifacts). Where they differ, the ratification governs.
3. The Oct 22 dossier's "four code spaces" ≠ the Nov 6 pool definition (4 repos + 2 incorporated projects) — an evolution, not a contradiction; v1.2 governs.
4. Validation language in the Master Technical Dossier predates the replication lab, as in NB1/NB2 — the Phase 0–3 record governs validation status.

## Repo synchronisation
- **QAG:** this dossier, INVENTORY.md, 10 capture extracts → `notebooks/notebooklm-nb3-master-dossier/`.
- **Aestheria:** `docs/NOTEBOOKLM_NB3.md` pointer note (model-stack lineage, Oct-22 dossier → v1.2, Field Suite → grounding ancestry; full record in QAG).
- **Pointers:** Kotlin engine files → AI-Offline (NB6 lane); QVR set → patent-track record (NB1); HealingAPI/Field Suite → research consoles (NB7 lane).

*Method note: reads are the NotebookLM source-guide + opening text of each source (bridge accessibility window).*
