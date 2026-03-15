import numpy as np
import matplotlib.pyplot as plt

# ---------------------------------------------------------
# QAG NEXUS VISUALIZER: Toroidal Wave Frequencies
# ---------------------------------------------------------

# Set up the cosmic canvas
fig = plt.figure(figsize=(10, 8), facecolor='black')
ax = fig.add_subplot(111, projection='3d')
ax.set_facecolor('black')

# Torus parameters (The Macro Structure)
R_torus = 5.0  # Major radius (The unified field)
r_tube = 2.0   # Minor radius (The local metric)

# Create the vacuum grid
theta = np.linspace(0, 2.*np.pi, 120)
phi = np.linspace(0, 2.*np.pi, 120)
theta, phi = np.meshgrid(theta, phi)

# QAG Wave Frequencies (The see-thru ripples)
# Integrating the 7th harmonic resonance (0.70 MHz concept)
wave_amplitude = np.sin(7 * theta) * np.cos(10 * phi) * 0.4 

# Parametric equations mapping the Torus with QAG wave interference
X = (R_torus + (r_tube + wave_amplitude) * np.cos(phi)) * np.cos(theta)
Y = (R_torus + (r_tube + wave_amplitude) * np.cos(phi)) * np.sin(theta)
Z = (r_tube + wave_amplitude) * np.sin(phi)

# Plot the field with translucent "see-thru" styling (alpha=0.5)
# Using 'magma' for that high-energy, luminous heat vibe
surf = ax.plot_surface(X, Y, Z, cmap='magma', alpha=0.5, 
                       linewidth=0.2, edgecolors='cyan', antialiased=True)

# Keep the background mystical and clean
ax.set_title('QAG Toroidal Vacuum State & Frequencies', color='cyan', fontsize=14)
ax.axis('off') 

plt.show()
