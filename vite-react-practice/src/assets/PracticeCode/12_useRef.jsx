import React, { useEffect, useRef, useState } from 'react';
import './App.css';

// useRef
// - persist values across renders
// - Does not cause the component to
//   re-render when the value changes

function App() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  useEffect(() => {
    console.log('Component Re-rendered');
  });

  const IncrementStateCount = () => {
    setStateCount(stateCount + 1);
  };

  const IncrementRefCount = () => {
    refCount.current += 1;
    console.log(`Ref count: ${refCount.current}`);
  };

  return (
    <div className='ui'>
      <p>State Count: {stateCount}</p>
      <button onClick={IncrementStateCount}>Increment state count</button>

      <p>Ref Count: {refCount.current}</p>
      <button onClick={IncrementRefCount}>Increment state count</button>
    </div>
  )
}

export default App