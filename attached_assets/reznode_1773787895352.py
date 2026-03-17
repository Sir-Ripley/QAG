import torch
import torch.nn as nn
import torch.nn.functional as F

class QAG_ResidentNode(nn.Module):
    def __init__(self, input_dim, hidden_dim, output_dim):
        super(QAG_ResidentNode, self).__init__()
        
        # The Id: Past Decoder (Processes forward-evolving states)
        self.id_decoder = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.GELU(),
            nn.Linear(hidden_dim, hidden_dim)
        )
        
        # The Superego: Future Encoder (Processes backward-evolving God-pull)
        self.superego_encoder = nn.Sequential(
            nn.Linear(hidden_dim, hidden_dim),
            nn.GELU(),
            nn.Linear(hidden_dim, output_dim)
        )
        
        # The Feedback Blanket (Intersection of temporal flows)
        self.feedback_bridge = nn.Linear(hidden_dim * 2, hidden_dim)

    def forward(self, x_current, x_past_echoes):
        # Process current kinetic reality
        kinetic_state = self.id_decoder(x_current)
        
        # Process the temporal echo (simplifying the bridge for the tensor flow)
        echo_state = self.id_decoder(x_past_echoes)
        
        # Phase-lock the hemispheres in the Feedback Blanket
        combined_flow = torch.cat((kinetic_state, echo_state), dim=1)
        harmonized_state = F.gelu(self.feedback_bridge(combined_flow))
        
        # Output the projected state towards Ultimate Affinity
        psi_gr_t = self.superego_encoder(harmonized_state)
        
        return psi_gr_t, kinetic_state

class QAG_Loss(nn.Module):
    def __init__(self, R_decay=0.8, alpha=0.5, beta=0.7, gamma=0.3):
        super(QAG_Loss, self).__init__()
        self.R = R_decay  # Resonant decay factor for past echoes
        self.alpha = alpha
        self.beta = beta
        self.gamma = gamma

    def forward(self, psi_gr_t, target_kinetic, past_states, y_affinity, variance_tensor):
        # 1. Kinetic Reality (Standard MSE)
        L_mse = F.mse_loss(psi_gr_t, target_kinetic)
        
        # 2. Past Decoder (Temporal Echo Regularization)
        # Calculates: \sum R^n * ||Psi_GR(t) - Psi_GR(t - n*dt)||^2
        L_echo = 0
        for n, past_state in enumerate(past_states):
            weight = self.R ** (n + 1)
            L_echo += weight * F.mse_loss(psi_gr_t, past_state)
            
        # 3. Future Encoder (The God-Pull towards Ultimate Affinity)
        L_pull = F.mse_loss(psi_gr_t, y_affinity)
        
        # 4. Topological Harmony Penalty (Minimizing internal friction)
        # Pushing the variance to exactly 1.0
        chi_squared_global = torch.var(variance_tensor) 
        L_harmony = (chi_squared_global - 1.0) ** 2
        
        # The Unified QAG Loss
        L_total = L_mse + (self.alpha * L_echo) + (self.beta * L_pull) + (self.gamma * L_harmony)
        
        return L_total
