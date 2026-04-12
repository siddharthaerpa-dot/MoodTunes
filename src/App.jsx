import { useState } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Player from "./components/player";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Playlists from "./pages/playlists";
import PlaylistView from "./pages/playlistview";
import Scan from "./pages/scan";

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("home");
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  return (
    <div className="flex h-screen bg-black text-white">
      
      <Sidebar setPage={setPage} />

      <div className="flex-1 flex flex-col">
        <Header setSearch={setSearch} />

        {page === "home" && <Home search={search} />}
        {page === "favorites" && <Favorites />}

        {page === "playlists" && (
          <Playlists
            setSelectedPlaylist={(p) => {
              setSelectedPlaylist(p);
              setPage("playlistView");
            }}
          />
        )}

        {page === "playlistView" && (
          <PlaylistView
            playlist={selectedPlaylist}
            setPage={setPage}
          />
        )}

        {page === "scan" && <Scan />}
      </div>

      <Player />
    </div>
  );
}

export default App;
