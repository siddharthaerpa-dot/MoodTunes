function Player({ song }) {
  if (!song) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black p-3 flex justify-center">
      <iframe
        src={song.url}
        width="300"
        height="80"
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
}

export default Player;
