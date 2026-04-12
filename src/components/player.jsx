import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

function Player() {
  const { currentSong } = useContext(PlayerContext);

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[60%] glass p-4 flex justify-between items-center shadow-lg">
      
      <div>
        <p className="font-bold">{currentSong.name}</p>
        <p className="text-sm text-gray-300">{currentSong.mood}</p>
      </div>

      <div className="text-green-400 animate-pulse">
        ▶ Playing
      </div>
    </div>
  );
}

export default Player;
