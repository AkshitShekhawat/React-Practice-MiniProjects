import React, { useEffect, useState } from 'react';
import './App.css';

// The useEffect hook in React lets you run code
// automatically when something changes or when a
// component loads. [ ]

// It's like setting a task to happen after the
// screen updates or when certain data is ready.

// // SYNTAX:
// useEffect(() => {
//   // Code to run
// }, [dependency]);

function App() {
  const [count, setCount] = useState(0);
  const [anotherValue, setAnotherValue] = useState(10);  

  useEffect( () => {
    // document.title = `Count: ${count + 1}`;
    console.log(`useEffect Triggered`)
  }, [count]);
  // }, []);Triggered only for first time

  const incrementCount = () => {
    setCount(count + 1);
    // document.title = `Count: ${count + 1}`;
  };

  return (
    <div className='ui'>
      <h1>useEffect Hook</h1>
    <button onClick={incrementCount}>Increment</button>
    {/* This Another Value will not triggered bez its not tied up in [count] but if i get rid of this [count] the its triggered */}
    <button onClick={() => setAnotherValue(anotherValue + 1)}>Another value</button>  
    </div>
  )
}

export default App