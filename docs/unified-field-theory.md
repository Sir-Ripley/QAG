# Unified Field Theory: The QAG Kinematic Engine

Source: "Quantum Affinity Gravity (QAG) — Master Technical Dossier &
Production Specification" (2026-10-13), Rodney Alan Ripley Jr., via Google
Drive. This dossier supersedes the February 2026 UFT PDFs
(`FullQAG_UFT_AVI.pdf`, `Master_QAGUFT.pdf`) and the November 2025
`Unified qag codex.pdf`.

## Foundational axioms — Tripartite Field Theory (TFT)

The framework operates on three field components:

1. **The Active Affiniton Field (A)** — informational vacuum curvature
   governing attractive coherence.
2. **The Entropic Potential (E)** — classical dispersion and thermal decay.
3. **The Chrono-Holographic Rhythm (C)** — retrocausal temporal boundary
   conditions mediating quantum phase echoes.

(Earlier formulation: Affinion / Entanglion / Chronon —
see `docs/tripartite-field-theory.md`.)

## Canonical constants registry

| Constant | Symbol | Value |
|---|---|---|
| Critical Acceleration Scale | a₀ | 1.2047 × 10⁻¹⁰ m/s² |
| Affinity Symmetry Bias | K_ASB | 0.013829 |
| Universal Coherence Index | C | 6.00 × 10⁻⁷ |
| Fundamental Discretization Pixel | t_pixel | 3.41 × 10⁻⁷ s (≈ 2.93 MHz) |
| Universal Resonance Coupling | f_coupling | 0.70 MHz |
| Echo Damping Factor | γ | 0.1735 |
| Base-12→Base-10 Harmonic Scalar | Φ_scalar | 12¹⁸ / 10¹⁹·⁴² = 266.257 |
| Informational Negentropy Lift | Φ_affinity^α | (1.1948)^0.1735 = 1.03138 |
| SU(3)_QAG ground state | Ψ_min | (e^(−2/3), e^(1/3), −1)ᵀ = (0.513417, 1.395612, −1.000000)ᵀ |
| Vacuum unit determinant | det(SU(3)_QAG) | e^(−2/3)·(e^(1/3))² = 1.000000 (zero entropy leakage) |

## The autonomous field equation

A forward-predictive rotation curve derived directly from photometric
stellar light and 21cm HI gas profiles — no dark matter halo:

    v(r) = √( Υ_* · v_star²(r) + v_gas²(r) + v_∞² · (1 − e^(−r/r_aff)) )

- Υ_* — stellar mass-to-light ratio (canonical baseline 0.50 M☉/L☉)
- The vacuum-affinity term v_∞²·(1 − e^(−r/r_aff)) replaces the halo.

## First-principles BTFR

v_∞ is *derived*, not fit, from total baryonic mass
(M_bar = Υ_*·M_star + M_gas):

    v_∞ = 1.03138 · (M_bar / 10⁹ M☉)^(1/4) · 49 km/s

The 1/4 exponent emerges from the 4D vacuum tensor projection —
this is why galaxies empirically follow M_bar ∝ v⁴.

The coherence boundary scales with disk scale length R_d:

    r_aff = 1.68 · (R_d / 0.1735)^0.1735 kpc

Compact dwarfs: r_aff ≈ 1.7–2.0 kpc. Massive spirals: r_aff ≈ 2.7–3.2 kpc.

## Empirical validation — SPARC 12-galaxy sweep

121 kinematic data points, 97 degrees of freedom:

| Galaxy | Reduced χ² | RMSE (km/s) |
|---|---|---|
| UGC 4483 | 0.0392 | 0.2596 |
| DDO 168 | 0.0385 | 0.4156 |
| UGC 2259 | 0.0383 | 0.5673 |
| NGC 1560 | 0.0410 | 0.4786 |
| NGC 3198 | 0.0798 | 1.1149 |
| NGC 2403 | 0.0797 | 0.9129 |
| NGC 6503 | 0.0690 | 0.7916 |
| NGC 3741 | 0.0632 | 0.4931 |
| NGC 2903 | 0.0798 | 1.4908 |
| UGC 128 | 0.0747 | 1.0680 |
| M33 | 0.0672 | 0.8765 |
| DDO 154 | 0.0711 | 0.4917 |

**Global: χ²_global = 0.060895** — vs MOND 21.237, vs Newtonian (no DM)
101.246. Native Android cosmology test suite: 9/9 passed.

## Production engine

The `QAGPredictiveEngine` (NumPy) implements `derive_v_infinity`,
`derive_r_affinity`, and `predict_rotation_curve` exactly as above.
See the MTD for the full listing; the validation notebook lives in
`attached_assets/QAG_MASTER_NOTEBOOK_*.md`.

---

*One vacuum. Three fields. Every galaxy accounted for.*
