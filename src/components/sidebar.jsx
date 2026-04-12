function Sidebar({ setPage }) {
  return (
    <div className="w-60 bg-[#181818] p-5">
      <h1 className="text-xl font-bold mb-6">MoodTunes 🎧</h1>

      <div className="space-y-4">
        <p onClick={() => setPage("home")} className="cursor-pointer hover:text-green-400">🏠 Home</p>
        <p onClick={() => setPage("favorites")} className="cursor-pointer hover:text-green-400">❤️ Favorites</p>
        <p onClick={() => setPage("playlists")} className="cursor-pointer hover:text-green-400">📁 Playlists</p>
        <p onClick={() => setPage("scan")} className="cursor-pointer hover:text-green-400">📸 Scan Mood</p>
      </div>
    </div>
  );
}

export default Sidebar;
