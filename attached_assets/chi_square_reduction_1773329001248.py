import torch
import torch.nn as nn

class ChiSquareReductionLayer(nn.Module):
    def __init__(self, stability_score=61.43):
        super(ChiSquareReductionLayer, self).__init__()
        self.stability_weight = nn.Parameter(torch.tensor([stability_score / 100.0]), requires_grad=False)

    def forward(self, pytorch_output, tflite_output):
        unified_output = (self.stability_weight * tflite_output) + ((1.0 - self.stability_weight) * pytorch_output)
        return unified_output