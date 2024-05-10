
const VideoGameCard = ({ videoGames }) => {
  return (
    <div className="container grid grid-cols gap-2">
      {videoGames.map((videoGame, idx) => (
        <div 
          key={idx} 
          draggable="true"
          className="draggable bg-gray-200 border border-gray-400 rounded-md p-4 text-lg text-black cursor-move">
            <h2 className="text-lg font-semibold">{videoGame.title}</h2>
            <p className="text-sm text-gray-500">{videoGame.developer}</p>
            <p className="text-sm text-gray-500">{videoGame.year}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoGameCard;
