import React from 'react';

const VideoGameCard = ({ title, developer, year }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 mb-2 h-24">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-500">{developer}</p>
      <p className="text-sm text-gray-500">{year}</p>
    </div>
  );
};

export default VideoGameCard;
