function Header({ setSearch }) {
  return (
    <div className="flex items-center justify-between bg-black px-6 py-3 border-b border-gray-800">

      {/* SEARCH BAR */}
      <input
        placeholder="What do you want to play?"
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-900 px-4 py-2 rounded-full w-80 outline-none"
      />

      {/* USER */}
      <div className="bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full">
        S
      </div>

    </div>
  );
}

export default Header;
