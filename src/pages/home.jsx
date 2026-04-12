import SongCard from "../components/songcard";
import { songs } from "../utils/songs";

function Home({ search }) {
  const filteredSongs = songs.filter((song) =>
    song.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 flex-1 overflow-y-auto">
      <h2 className="text-2xl mb-4">Your Mood: 😊 Happy</h2>

      {filteredSongs.length === 0 && (
        <p className="text-gray-400">No songs found 😔</p>
      )}

      <div className="space-y-4">
        {filteredSongs.map((song, i) => (
          <SongCard key={i} song={song} index={i} />
        ))}
      </div>
    </div>
  );
}

export default Home;
