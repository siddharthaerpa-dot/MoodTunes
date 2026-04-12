import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

function SongCard({ song, index }) {
  const { playSong } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playSong(song, index)}
      className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] cursor-pointer flex justify-between"
    >
      <span>🎵 {song.name}</span>
      <span>▶</span>
    </div>
  );
}

export default SongCard;
