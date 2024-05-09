import React from 'react';

const VideoGameBoard = ({ videoGames, onDrop }) => {
  return (
    <div className="grid grid-cols gap-2">
      {videoGames.map((videoGame, index) => (
        <div
          key={videoGame.id}
          className="bg-gray-200 p-4 border border-gray-400 rounded-md min-h-24"
          onDrop={e => onDrop(e, index)}
          onDragOver={e => e.preventDefault()}
        >
          {index + 1} 
        </div>
      ))}
    </div>
  );
};

export default VideoGameBoard;
