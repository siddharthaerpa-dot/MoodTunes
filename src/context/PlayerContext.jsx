import { createContext, useState, useRef, useEffect } from "react";
import { songs } from "../utils/songs";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const audioRef = useRef(new Audio());

  const [currentIndex, setCurrentIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const playSong = (song, index) => {
    audioRef.current.src = song.file;
    audioRef.current.play();
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (!audioRef.current.src) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % songs.length;
    playSong(songs[nextIndex], nextIndex);
  };

  const prevSong = () => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(songs[prevIndex], prevIndex);
  };

  // 🔥 TRACK PROGRESS
  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  // 🔥 SEEK FUNCTION
  const seekSong = (e) => {
    const audio = audioRef.current;
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;

    const newTime = (clickX / width) * audio.duration;
    audio.currentTime = newTime;
  };

  const currentSong =
    currentIndex !== null ? songs[currentIndex] : null;

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        playSong,
        togglePlay,
        nextSong,
        prevSong,
        isPlaying,
        progress,
        seekSong,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
