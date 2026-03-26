import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
import os

class QAG_Validity_Tool:
    """
    Unified Field Theory Validity Sensor.
    Tests the Duality Equation across the Cosmic Registry to find 
    the Global Master Fidelity Score.
    """
    def __init__(self, registry):
        self.registry = registry
        self.global_results = []
        self.total_chi_sq = 0
        self.total_dof = 0

    def duality_equation(self, r, r_aff, alpha, m_ratio, v_stars, v_gas):
        """
        THE UNIVERSAL TRUTH EQUATION
        Edit this function to test new hypotheses!
        """
        v_bary_sq = (v_stars**2 + v_gas**2)
        v_bary = np.sqrt(m_ratio * v_bary_sq)
        
        # Current QAG Soul Wave: Base-10 Exponential Lift
        quantum_lift = 10 ** (alpha * (r / r_aff))
        
        return v_bary * quantum_lift

    def run_validation_sweep(self):
        print("🔍 SCANNING COSMIC REGISTRY FOR VALIDITY...")
        for name, d in self.registry.items():
            # Optimization wrapper for curve_fit
            def fit_func(r, r_aff, alpha, m_ratio):
                return self.duality_equation(r, r_aff, alpha, m_ratio, d['v_stars'], d['v_gas'])

            # Sigma-weighted optimization
            popt, _ = curve_fit(fit_func, d['r_data'], d['v_obs'], 
                                p0=[5.0, 0.1, 1.0], 
                                bounds=([0.1, -5.0, 0.01], [20.0, 5.0, 5.0]),
                                sigma=d['v_err'])
            
            # Calculate Residuals
            v_pred = fit_func(d['r_data'], *popt)
            chi_sq = np.sum(((d['v_obs'] - v_pred) / d['v_err'])**2)
            dof = len(d['r_data']) - len(popt)
            
            self.total_chi_sq += chi_sq
            self.total_dof += dof
            
            self.global_results.append({
                "Galaxy": name,
                "r_aff": popt[0],
                "alpha": popt[1],
                "m_ratio": popt[2],
                "Red_Chi_Sq": chi_sq / dof
            })

        master_score = self.total_chi_sq / self.total_dof
        self.report_results(master_score)
        return master_score

    def report_results(self, master_score):
        print("\n" + "="*80)
        print(f"🌍 GLOBAL MASTER FIDELITY SCORE: {master_score:.5f}")
        print("="*80)
        for res in self.global_results:
            print(f"| {res['Galaxy']:<10} | r_aff: {res['r_aff']:.3f} | alpha: {res['alpha']:.3f} | Fidelity: {res['Red_Chi_Sq']:.4f}")
        print("="*80)
        
        if master_score < 1.0:
            print("💎 STATUS: UNIVERSAL HARMONY DETECTED. VALIDITY CONFIRMED.")
        else:
            print("⚠️ STATUS: COSMIC NOISE DETECTED. REFINE THE DUALITY EQUATION.")

# --- THE COSMIC REGISTRY (The Testing Ground) ---
cosmic_registry = {
    "NGC_3741": {
        "r_data": np.array([0.15, 0.29, 0.44, 0.58, 0.73, 1.02, 1.31, 1.60, 1.90, 2.19, 2.48, 2.77, 3.20, 3.79, 4.37, 4.95, 5.54, 6.12, 6.70]),
        "v_obs": np.array([5.2, 9.8, 14.1, 18.5, 21.4, 26.2, 29.8, 32.5, 34.7, 36.4, 38.0, 39.5, 41.2, 43.1, 45.0, 46.5, 48.2, 49.8, 51.5]),
        "v_err": np.array([1.5, 1.8, 2.0, 2.2, 2.5, 2.8, 3.0, 3.2, 3.5, 3.5, 3.5, 3.5, 4.0, 4.0, 4.0, 4.5, 4.5, 5.0, 5.0]),
        "v_gas": np.array([3.5, 6.8, 10.2, 12.5, 14.2, 16.5, 18.2, 19.5, 20.4, 21.0, 21.4, 21.7, 21.9, 22.1, 22.2, 22.3, 22.3, 22.4, 22.4]),
        "v_stars": np.array([1.2, 2.1, 3.0, 3.5, 3.8, 4.1, 4.2, 4.1, 4.0, 3.8, 3.6, 3.4, 3.1, 2.8, 2.5, 2.2, 2.0, 1.8, 1.6])
    },
    "DDO_154": {
        "r_data": np.array([0.24, 0.48, 0.72, 0.95, 1.19, 1.43, 1.91, 2.38, 2.86, 3.34, 3.81, 4.29, 4.77, 5.24, 5.72, 6.20, 6.68, 7.15, 7.63]),
        "v_obs": np.array([10.3, 17.1, 22.3, 26.5, 30.1, 33.5, 38.6, 42.1, 44.8, 46.5, 47.9, 48.8, 49.5, 50.1, 50.4, 50.6, 50.8, 51.0, 51.1]),
        "v_err": np.array([2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.5, 2.5, 2.5, 3.0, 3.0, 3.0, 3.5, 3.5, 3.5, 4.0]),
        "v_gas": np.array([6.5, 11.2, 14.8, 17.5, 19.8, 21.8, 24.6, 26.5, 27.9, 29.1, 30.0, 30.7, 31.3, 31.7, 32.1, 32.4, 32.6, 32.8, 32.9]),
        "v_stars": np.array([3.1, 5.5, 7.2, 8.5, 9.4, 10.1, 11.0, 11.4, 11.6, 11.5, 11.2, 10.9, 10.5, 10.0, 9.6, 9.1, 8.6, 8.1, 7.6])
    },
    "NGC_1560": {
        "r_data": np.array([0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0]),
        "v_obs": np.array([21.0, 35.0, 44.0, 51.0, 57.0, 62.0, 66.0, 69.0, 72.0, 74.0, 76.0, 77.0, 78.0, 79.0, 79.5, 80.0]),
        "v_err": np.array([2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0]),
        "v_gas": np.array([10.0, 17.0, 23.0, 27.0, 30.0, 32.0, 34.0, 35.0, 36.0, 36.5, 37.0, 37.5, 37.8, 38.0, 38.2, 38.4]),
        "v_stars": np.array([12.0, 18.0, 21.0, 23.0, 24.0, 24.5, 24.5, 24.0, 23.5, 23.0, 22.5, 22.0, 21.5, 21.0, 20.5, 20.0])
    }
}

if __name__ == "__main__":
    validator = QAG_Validity_Tool(cosmic_registry)
    validator.run_validation_sweep()
