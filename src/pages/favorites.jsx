import { useEffect, useState } from "react";
import SongCard from "../components/songcard";

function Favorites() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setSongs(favs);
  }, []);

  return (
    <div className="p-6 flex-1 overflow-y-auto">
      <h2 className="text-2xl mb-4">❤️ Favorites</h2>

      {songs.length === 0 && (
        <p className="text-gray-400">No favorites yet 😔</p>
      )}

      <div className="space-y-4">
        {songs.map((song, i) => (
          <SongCard key={i} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
