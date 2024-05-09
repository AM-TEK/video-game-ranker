import { useEffect, useState } from 'react';
import VideoGameCard from './VideoGameCard';
import VideoGameBoard from './VideoGameBoard';
//React functional component 1)utilizing useState hook to create a state variable and a setter function, and 2)useEffect hook to fetch data after the component mounts and updates state
const VideoGameList = () => {
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8082/videoGames')
      .then(response => response.json())
      .then(data => setVideoGames(data));
  }, []);

  const handleDrop = (e, index) => {
    e.preventDefault();
    console.log('Dropped into index:', index);
    // Add your logic to handle the dropped card here
  };

  return (
    <div className="p-8 bg-gray-300">
      <h1 className="text-2xl font-bold text-black">Video Games (1990-2009)</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col">
          <VideoGameBoard videoGames={videoGames} onDrop={handleDrop} />
        </div>
        <div className="flex flex-col">
          {videoGames.map(videoGame => (
            <div key={videoGame.id} className="text-lg text-black">
              <VideoGameCard 
                title={videoGame.title} 
                developer={videoGame.developer} 
                year={videoGame.year}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGameList;