import os
import tarfile
import numpy as np
import tensorflow as tf
from google.cloud.aiplatform.prediction import Predictor

class TFLiteHarmonicPredictor(Predictor):
    def __init__(self):
        self._interpreter = None
        self._input_details = None
        self._output_details = None
        self._harmonic_factor = 12.0  # Base-12 Harmonic Scaling

    def load(self, artifacts_uri: str):
        # Path where Vertex AI mounts model artifacts
        archive_path = os.path.join(artifacts_uri, 'model.tar.gz')
        extract_path = './model_extracted'
        
        with tarfile.open(archive_path, 'r:gz') as tar:
            tar.extractall(path=extract_path)
        
        # Locate the .tflite file in the extracted archive
        tflite_file = [f for f in os.listdir(extract_path) if f.endswith('.tflite')][0]
        model_path = os.path.join(extract_path, tflite_file)
        
        self._interpreter = tf.lite.Interpreter(model_path=model_path)
        self._interpreter.allocate_tensors()
        self._input_details = self._interpreter.get_input_details()
        self._output_details = self._interpreter.get_output_details()
        print(f'TFLite model loaded from {tflite_file}')

    def predict(self, instances):
        results = []
        for instance in instances:
            input_data = np.array(instance, dtype=np.float32)
            if input_data.ndim == 1:
                input_data = np.expand_dims(input_data, axis=0)
            
            self._interpreter.set_tensor(self._input_details[0]['index'], input_data)
            self._interpreter.invoke()
            
            raw_output = self._interpreter.get_tensor(self._output_details[0]['index'])
            # Apply Base-12 harmonic scaling factor
            harmonic_output = raw_output * self._harmonic_factor
            results.append(harmonic_output.tolist())
        return results