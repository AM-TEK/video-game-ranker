
const VideoGameCard = ({ videoGames }) => {
  return (
    <div className="container grid grid-cols gap-2 justify-center items-center">
      {videoGames.map((videoGame, index) => (
        <div 
          key={index} 
          draggable="true"
          className="draggable bg-gray-200 border border-gray-400 rounded-md p-2 text-black cursor-move w-4/5 justify-self-center">
            <h2 className="text-md font-semibold">{videoGame.title}</h2>
            <p className="text-sm text-gray-500">{videoGame.developer}</p>
            <p className="text-sm text-gray-500">{videoGame.year}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoGameCard;
