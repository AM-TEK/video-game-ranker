import { useEffect, useState, useRef } from 'react';
import VideoGameCard from './VideoGameCard';
import VideoGameBoard from './VideoGameBoard';


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
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector(".dragging")
        if (afterElement == null) {
          container.appendChild(draggable)
        } else {
          container.insertBefore(draggable, afterElement)
        }
        // console.log("afterElement");
      })
    });
  }, [videoGames]);

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")]
    
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child}
      } else {
        return closest
      }
    }, {offset: Number.NEGATIVE_INFINITY}).element
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