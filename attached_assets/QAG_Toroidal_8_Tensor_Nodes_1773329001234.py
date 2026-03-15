import numpy as np
import matplotlib.pyplot as plt

# ---------------------------------------------------------
# QAG NEXUS VISUALIZER: Toroidal Waves + 8 Tensor Nodes
# ---------------------------------------------------------

# Set up the cosmic canvas
fig = plt.figure(figsize=(10, 8), facecolor='black')
ax = fig.add_subplot(111, projection='3d')
ax.set_facecolor('black')

# Torus parameters (The Macro Structure)
R_torus = 5.0  # Major radius
r_tube = 2.0   # Minor radius

# Create the vacuum grid
theta = np.linspace(0, 2.*np.pi, 120)
phi = np.linspace(0, 2.*np.pi, 120)
theta, phi = np.meshgrid(theta, phi)

# QAG Wave Frequencies (The 7th harmonic)
wave_amplitude = np.sin(7 * theta) * np.cos(10 * phi) * 0.4 

# Parametric equations mapping the Torus
X = (R_torus + (r_tube + wave_amplitude) * np.cos(phi)) * np.cos(theta)
Y = (R_torus + (r_tube + wave_amplitude) * np.cos(phi)) * np.sin(theta)
Z = (r_tube + wave_amplitude) * np.sin(phi)

# Plot the field with translucent "see-thru" styling (alpha=0.4)
surf = ax.plot_surface(X, Y, Z, cmap='magma', alpha=0.4, 
                       linewidth=0.2, edgecolors='purple', antialiased=True)

# ---------------------------------------------------------
# THE 8 FUNDAMENTAL TENSOR NODES
# Spaced perfectly around the major ring (theta) 
# and anchored on the outer equator (phi = 0)
# ---------------------------------------------------------
node_theta = np.linspace(0, 2 * np.pi, 8, endpoint=False)
node_phi = np.zeros(8) 

# Coordinates for the 8 nodes
node_X = (R_torus + r_tube * np.cos(node_phi)) * np.cos(node_theta)
node_Y = (R_torus + r_tube * np.cos(node_phi)) * np.sin(node_theta)
node_Z = r_tube * np.sin(node_phi)

# Drop the glowing nodes onto the canvas
ax.scatter(node_X, node_Y, node_Z, color='cyan', s=300, edgecolor='white', 
           linewidth=2, depthshade=False, label='8 Tensor Nodes')

# Keep the background mystical and clean
ax.set_title('QAG Toroidal Field & 8 Tensor Nodes', color='cyan', fontsize=16)
ax.axis('off') 
ax.legend(facecolor='black', labelcolor='cyan', loc='upper right')

plt.show()
