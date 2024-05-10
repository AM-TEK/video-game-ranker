import { useEffect, useState, useRef } from 'react';
// import VideoGameCard from './VideoGameCard';
// import VideoGameBoard from './VideoGameBoard';

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


////////////////////////////////////////////////////////////////////////


const VideoGameList = () => {
  const [videoGames, setVideoGames] = useState([]);
  // console.log('draggablesRef:', draggablesRef.current);
  // console.log('containersRef:', containersRef.current);
  const draggablesRef = useRef([]);
  const containersRef = useRef([]);

  useEffect(() => {
    fetch('http://localhost:8082/videoGames')
      .then(response => response.json())
      .then(data => setVideoGames(data));
  }, []);

  useEffect(() => {
    draggablesRef.current = document.querySelectorAll(".draggable");
    containersRef.current = document.querySelectorAll(".container");

    draggablesRef.current.forEach(draggable => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging")
        // console.log("drag start");
      })

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging")
      })
    })
    
    containersRef.current.forEach(container => {
      container.addEventListener("dragover", (e) => {
        e.preventDefault()
        const draggable = document.querySelector(".dragging")
        container.appendChild(draggable)
        // console.log("drag over");
      })
    });
  }, [videoGames]);

  function getDragAfterElement(container, y) {
    
  }

  return (
    <div className="p-8 bg-gray-300">
      <h1 className="text-2xl font-bold text-black">
        Video Games (1990-2009)
      </h1>

      <div className="grid grid-cols-2 gap-4 mt-4">
          <VideoGameBoard 
            videoGames={videoGames}
          />
          <VideoGameCard 
            videoGames={videoGames}
          />
      </div>
    </div>
  );
};

export default VideoGameList;