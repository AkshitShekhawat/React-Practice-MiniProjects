import React, { useEffect, useRef, useState } from 'react';
import './App.css';


function App() {
  const inputRef = useRef(null);
  const inputRefNext = useRef(null);

  useEffect(() => {
    console.log(`Component Rendered`);
    
  });

  const focusInput = () => {
    // console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';
  };

  const focusInputNext = () => {
    inputRefNext.current.focus();
    inputRefNext.current.style.backgroundColor = 'lightgrey';

  };

  const restFocus = () => {
    inputRef.current.style.backgroundColor = 'white';
    inputRefNext.current.style.backgroundColor = 'white';
  };

  return (
    <div className='ui'>
      <h1>useRef with HTML element</h1>

      <div className='input-section'>
      <input ref={inputRef} type='text' placeholder='Focus Me'></input>
      <button onClick={focusInput}>Focus and HighLight </button>
      
      <input ref={inputRefNext} type='text' placeholder='Focus Me'></input>
      <button onClick={focusInputNext}>Focus and HighLight </button>
      </div>

      <div className='reset-section'>
        <button onClick={restFocus}>Reset</button>
      </div>
    </div>
  )
}

export default App


// .ui {
//     text-align: center;
// }


// .input-section {
//   justify-content: center;
//   margin-bottom: 20px;
//   display: flex;
//   gap: 10px;
// }


// .reset-section {
//   margin-top: 20px;
// }