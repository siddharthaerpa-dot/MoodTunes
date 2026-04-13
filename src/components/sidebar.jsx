function Sidebar({ setPage }) {
  return (
    <div className="p-5 space-y-4">

      <h1 className="text-2xl font-bold">MoodTunes</h1>

      <button onClick={() => setPage("scan")} className="block">📸 Scan</button>
      <button onClick={() => setPage("home")} className="block">🏠 Home</button>
      <button onClick={() => setPage("favorites")} className="block">❤️ Favorites</button>
      <button onClick={() => setPage("playlists")} className="block">📁 Playlists</button>

    </div>
  );
}

export default Sidebar;
