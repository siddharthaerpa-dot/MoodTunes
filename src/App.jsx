import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Player from "./components/Player";
import Home from "./pages/home";
import Favorites from "./pages/Favorites";
import Playlists from "./pages/Playlists";
import Scan from "./pages/Scan";

function App() {
  const [page, setPage] = useState("scan");
  const [search, setSearch] = useState("");
  const [song, setSong] = useState(null);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(saved);
  }, []);

  const addFav = (s) => {
    const updated = [...favs, s];
    setFavs(updated);
    localStorage.setItem("favs", JSON.stringify(updated));
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col">

      {/* TOP */}
      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR */}
        <div className="w-64 bg-black border-r border-gray-800">
          <Sidebar setPage={setPage} />
        </div>

        {/* CENTER */}
        <div className="flex-1 flex flex-col overflow-y-auto">

          <Header setSearch={setSearch} />

          <div className="p-4">

            {page === "scan" && <Scan setSong={setSong} />}

            {page === "home" && (
              <Home search={search} onSelect={setSong} onFav={addFav} />
            )}

            {page === "favorites" && (
              <Favorites favs={favs} onSelect={setSong} />
            )}

            {page === "playlists" && <Playlists />}
          </div>
        </div>

        {/* RIGHT PANEL (NEW 🔥) */}
        <div className="w-72 bg-black border-l border-gray-800 p-4 hidden lg:block">
          
          <h2 className="text-lg font-semibold mb-4">Now Playing</h2>

          {song ? (
            <>
              <img
                src={song.image}
                className="rounded-lg w-full h-40 object-cover"
              />
              <h3 className="mt-3">{song.name}</h3>
              <p className="text-gray-400 text-sm">{song.artist}</p>
            </>
          ) : (
            <p className="text-gray-500">No song playing</p>
          )}

        </div>
      </div>

      {/* BOTTOM PLAYER */}
      <Player song={song} />
    </div>
  );
}

export default App;
