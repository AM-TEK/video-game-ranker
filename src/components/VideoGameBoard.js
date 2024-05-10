
const VideoGameBoard = ({ videoGames }) => {
  return (
    <div className="container grid grid-cols gap-2">
      {videoGames.map((videoGame, index) => (
        <div
          key={videoGame.id}
          draggable="true"
          className="draggable bg-gray-200 border border-gray-400 rounded-md p-4 min-h-24 cursor-move"
        >
          {index + 1} 
        </div>
      ))}
    </div>
  );
};

export default VideoGameBoard;