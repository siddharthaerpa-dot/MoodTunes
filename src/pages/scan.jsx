import { useRef, useState } from "react";

function Scan({ setSong }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [scanned, setScanned] = useState(false);

  const songs = [
    { mood: "happy", url: "https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b" },
    { mood: "sad", url: "https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg" },
    { mood: "neutral", url: "https://open.spotify.com/embed/track/2VxeLyX666F8uXCJ0dZF8B" },
    { mood: "angry", url: "https://open.spotify.com/embed/track/6habFhsOp2NvshLv26DqMb" },
  ];

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();

    setTimeout(scan, 2000);
  };

  const scan = () => {
    // 🔥 Fake mood (backend connect cheyyali if needed)
    const moods = ["happy", "sad", "neutral", "angry"];
    const mood = moods[Math.floor(Math.random() * moods.length)];

    const filtered = songs.filter((s) => s.mood === mood);
    const random = filtered[Math.floor(Math.random() * filtered.length)];

    setSong(random);

    setScanned(true);

    // stop cam
    videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
  };

  return (
    <div className="flex flex-col items-center p-6">

      {!scanned && (
        <>
          <video ref={videoRef} className="w-72 rounded" />
          <button onClick={start} className="mt-4 bg-green-500 px-4 py-2 rounded">
            Start Scan
          </button>
        </>
      )}

      {scanned && (
        <button onClick={() => {
          setScanned(false);
          start();
        }} className="bg-blue-500 px-4 py-2 rounded">
          Scan Again
        </button>
      )}

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}

export default Scan;
