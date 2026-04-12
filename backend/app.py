from flask import Flask, request, jsonify
from flask_cors import CORS
from deepface import DeepFace
import base64
import cv2
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route("/detect", methods=["POST"])
def detect():
    try:
        data = request.json["image"]

        # Remove base64 header
        image_data = data.split(",")[1]

        img_bytes = base64.b64decode(image_data)
        np_arr = np.frombuffer(img_bytes, np.uint8)
        frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        result = DeepFace.analyze(frame, actions=['emotion'], enforce_detection=False)

        mood = result[0]['dominant_emotion']

        return jsonify({"mood": mood})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
