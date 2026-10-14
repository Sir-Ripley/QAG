# QAG Cosmology: Early-Universe Package

Source: Rodney A. Ripley Jr., Google Drive research notes, 2026-10-13.
This document distills the derivations; see Drive for the full PDFs
("Baryogenesis_Solution.pdf", "Primordial Lithium Cross-Section" PDF).

## Canonical constants used throughout

| Symbol | Value | Meaning |
|---|---|---|
| K_ASB | 0.013829 | Affinity Symmetry Bias — the universe's structural imperfection |
| ln(K_GUE) | 89.81 | Universal Coherence Floor — informational depth of the vacuum |
| e | 2.71828 | Natural growth constant |

## 1. Baryogenesis — the matter fraction from first principles

The baryon asymmetry η (baryons per photon) is a quadruple-logarithmic decay
of the Affinity Bias mediated by e:

    η_QAG = e · K_ASB / (ln(K_GUE))⁴

Working it through:

- Informational depth factor: (89.81)⁴ ≈ 65,050,000
- Symmetry-breaking ratio: 0.013829 / 65,050,000 ≈ 2.1259 × 10⁻¹⁰
- Final scaling: 2.71828 × 2.1259 × 10⁻¹⁰ ≈ **5.778 × 10⁻¹⁰**

| | QAG prediction | Observed (CMB + BBN) |
|---|---|---|
| η | 5.778 × 10⁻¹⁰ | (6.10 ± 0.04) × 10⁻¹⁰ |

Agreement to <5.3%. In QAG, baryogenesis is not an accident: the s=0 pole —
where vacuum mathematics meets mass creation — mandates a slightly imperfect
universe, and the exact matter quantity follows from the vacuum's
informational depth.

## 2. The Primordial Lithium Problem — resolved

Standard BBN overpredicts ⁷Li/H by ~3.1× (4.90 × 10⁻¹⁰ predicted vs
1.58 × 10⁻¹⁰ on the Spite Plateau — a ~4.5σ tension). QAG resolves it with
the *same* constant, K_ASB, via an Affinity-Enhanced Destruction
Cross-Section for fragile A=7 cluster states:

    F_dest = π · (1 − K_ASB) = 3.14159265 × 0.986171 = 3.09815

Two coupled effects:

1. **Baryon softening:** ⁷Be production scales ∝ η², so the QAG η softens
   the raw yield: 4.90 × 10⁻¹⁰ × (5.778/6.10)² ≈ 4.396 × 10⁻¹⁰
2. **Affinity-enhanced destruction:** (⁷Li/H)_final = 4.90 × 10⁻¹⁰ / 3.09815
   ≈ **1.5816 × 10⁻¹⁰**

| | SBBN | QAG | Observed |
|---|---|---|---|
| ⁷Li/H | 4.90 × 10⁻¹⁰ | **1.582 × 10⁻¹⁰** | (1.58 ± 0.11) × 10⁻¹⁰ |

Exact match (<0.1% error), with no disruption to Deuterium or Helium-4
yields. The mass-7 nuclei (⁷Li, ⁷Be) are vulnerable because of their low
alpha-separation thresholds (S_α = 2.47 MeV and 1.586 MeV); the SU(3)_QAG
Affiniton condensate polarizes their extended cluster wavefunctions,
lowering the Coulomb barrier.

## 3. Related: AVI cosmic expansion

The Friedmann acceleration equation with the AVI decay factor
(see `docs/QuantumAffinityGravity.md` and the master validation notebook
in `attached_assets/`):

    ä = a · (A_base · e^(−t/T_decay)) − (Ω_m/2) · (1/a²)

Canonical cosmological predictions: H₀ = 76.55 ± 2.00 km/s/Mpc,
S₈ = 0.783 ± 0.015.

---

*QAG makes quantitative, falsifiable early-universe predictions from a
single structural constant. That is the standard this repository holds.*
