import { useState, useEffect } from "react";

function Playlists({ setSelectedPlaylist }) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("playlists")) || [];
    setPlaylists(data);
  }, []);

  const createPlaylist = () => {
    const name = prompt("Enter playlist name:");
    if (!name) return;

    const newList = { name, songs: [] };

    const updated = [...playlists, newList];
    localStorage.setItem("playlists", JSON.stringify(updated));
    setPlaylists(updated);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">📁 Playlists</h2>

      <button
        onClick={createPlaylist}
        className="bg-green-500 px-4 py-2 rounded mb-4"
      >
        ➕ Create Playlist
      </button>

      <div className="space-y-3">
        {playlists.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelectedPlaylist(p)}
            className="bg-[#181818] p-3 rounded cursor-pointer hover:bg-[#282828]"
          >
            🎶 {p.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlists;
