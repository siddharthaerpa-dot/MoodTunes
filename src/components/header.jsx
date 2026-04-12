import { useState } from "react";

function Header({ setSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-[#181818]">
      
      <input
        type="text"
        placeholder="Search songs..."
        value={input}
        onChange={handleSearch}
        className="bg-[#282828] px-4 py-2 rounded-full w-1/2 outline-none"
      />

      <div className="space-x-4 text-xl">
        <span>📸</span>
        <span>👤</span>
      </div>
    </div>
  );
}

export default Header;
