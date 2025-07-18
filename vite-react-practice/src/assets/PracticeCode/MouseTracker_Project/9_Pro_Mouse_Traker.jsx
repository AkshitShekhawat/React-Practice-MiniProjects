import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({x:0, y:0});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({x: event.clientX, y: event.clientY })
    };
    window.addEventListener('mousemove', handleMouseMove);
  }, [])

  return (
    <div className='ui'>
      <h1>Mouse Position Tracker</h1>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  )
}

export default App