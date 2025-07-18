import React, { useEffect, useState } from 'react';
import './App.css';

function MOuseTracker() {
  const [mousePosition, setMousePosition] = useState({x:0, y:0});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({x: event.clientX, y: event.clientY })
    };
    window.addEventListener('mousemove', handleMouseMove);
    console.log("Mouse move listener added"); 

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      console.log("Mouse move listener removed");  
    };
  }, [])

  return (
    <div className='ui'>
      <h1>Mouse Position Tracker</h1>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  )
}

export default MOuseTracker;