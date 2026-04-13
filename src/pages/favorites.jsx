function Favorites({ favs, onSelect }) {
  if (favs.length === 0) return <p className="p-6">No favorites yet</p>;

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {favs.map((song, i) => (
        <div key={i} className="bg-gray-900 p-4 rounded">
          <img src={song.image} className="h-40 w-full object-cover rounded" />
          <h2>{song.name}</h2>

          <button
            onClick={() => onSelect(song)}
            className="mt-2 bg-green-500 px-2 py-1 rounded"
          >
            Play
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
