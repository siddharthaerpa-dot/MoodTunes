import SongCard from "../components/songcard";

function PlaylistView({ playlist, setPage }) {
  if (!playlist) return null;

  return (
    <div className="p-6">
      <button
        onClick={() => setPage("playlists")}
        className="mb-4"
      >
        ⬅ Back
      </button>

      <h2 className="text-2xl mb-4">🎶 {playlist.name}</h2>

      {playlist.songs.length === 0 && (
        <p className="text-gray-400">No songs yet 😔</p>
      )}

      <div className="space-y-4">
        {playlist.songs.map((song, i) => (
          <SongCard key={i} song={song} />
        ))}
      </div>
    </div>
  );
}

export default PlaylistView;
