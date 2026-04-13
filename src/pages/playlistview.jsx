import { useState } from "react";

function Playlists() {
  const [name, setName] = useState("");
  const [lists, setLists] = useState([]);

  const create = () => {
    if (!name) return;
    setLists([...lists, name]);
    setName("");
  };

  return (
    <div className="p-6">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Playlist name"
        className="p-2 text-black"
      />

      <button onClick={create} className="ml-2 bg-green-500 px-3 py-1 rounded">
        Create
      </button>

      <ul className="mt-4">
        {lists.map((l, i) => (
          <li key={i}>📁 {l}</li>
        ))}
      </ul>
    </div>
  );
}

export default Playlists;
