import React from 'react';
import './App.css';
import useCounter from './assets/PracticeCode/CustomHooks/useCounter';
  
//Custom hooks in React are functions that let you resue logic across multiple component. 
function App() {
  const {count, increment, decrement, reset} = useCounter(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
};

export default App