import { songs } from "../data/songs";

function Home({ search, onSelect, onFav }) {
  const filtered = songs.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

        {filtered.map((song, i) => (
          <div
            key={i}
            className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition cursor-pointer group"
          >

            {/* IMAGE */}
            <div className="relative">
              <img
                src={song.image}
                alt={song.name}
                className="w-full h-28 object-cover rounded-md"
              />

              {/* PLAY BUTTON */}
              <button
                onClick={() => onSelect(song)}
                className="absolute bottom-2 right-2 bg-green-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                ▶
              </button>
            </div>

            {/* TEXT */}
            <h3 className="mt-2 text-sm font-semibold truncate">
              {song.name}
            </h3>

            <p className="text-gray-400 text-xs truncate">
              {song.artist}
            </p>

            {/* FAVORITE */}
            <button
              onClick={() => onFav(song)}
              className="text-pink-400 text-xs mt-1"
            >
              ❤️ Favorite
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Home;
