import { useRef, useState, useEffect } from "react";

function Scan() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const [mood, setMood] = useState("");
  const [scanned, setScanned] = useState(false);

  // 📸 START CAMERA + AUTO SCAN
  const startCamera = async () => {
    try {
      stopCamera(); // reset camera first

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;

      setScanned(false);

      // 🔥 AUTO SCAN AFTER 2 SEC
      setTimeout(() => {
        captureAndDetect();
      }, 2000);

    } catch {
      alert("Camera permission needed");
    }
  };

  // 📸 CAPTURE + DETECT
  const captureAndDetect = async () => {
    if (scanned) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (!video.videoWidth) return; // safety

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/jpeg");

    try {
      const res = await fetch("http://127.0.0.1:5000/detect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image }),
      });

      const data = await res.json();

      let detectedMood = data.mood?.toLowerCase().trim();

      // 🔥 EMOTION MAPPING
      if (detectedMood === "surprise") detectedMood = "happy";
      if (detectedMood === "fear") detectedMood = "sad";
      if (detectedMood === "disgust") detectedMood = "angry";

      setMood(detectedMood);
      setScanned(true);

      // 🔥 MOOD → QUERY
      const moodKeywords = {
        happy: "happy songs",
        sad: "sad songs",
        neutral: "chill songs",
        angry: "workout songs",
      };

      const extras = ["mix", "top", "viral", "best"];
      const extra = extras[Math.floor(Math.random() * extras.length)];

      const query = `${moodKeywords[detectedMood]} ${extra}`;

      const url = `https://open.spotify.com/search/${encodeURIComponent(query)}`;

      stopCamera();

      // 🔥 AUTO OPEN NEW TAB
      window.open(url, "_blank");

    } catch (err) {
      console.log(err);
      alert("Backend error");
    }
  };

  // ❌ STOP CAMERA
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      streamRef.current = null;
    }
  };

  // 🔁 SCAN AGAIN (AUTO)
  const resetScan = () => {
    setMood("");
    setScanned(false);

    // 🔥 DIRECT AUTO RESTART
    startCamera();
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">

      <div className="glass p-6 w-[320px] text-center">

        <h2 className="text-xl font-bold mb-4">📸 Mood Scan</h2>

        {!scanned && (
          <video ref={videoRef} autoPlay className="rounded mb-4" />
        )}

        <canvas ref={canvasRef} className="hidden" />

        {!scanned ? (
          <button
            onClick={startCamera}
            className="bg-green-500 px-4 py-2 rounded"
          >
            Start Scan
          </button>
        ) : (
          <>
            <p className="mt-2 mb-2">
              Mood: <b>{mood}</b>
            </p>

            <button
              onClick={resetScan}
              className="bg-blue-500 px-4 py-2 rounded"
            >
              Scan Again
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default Scan;