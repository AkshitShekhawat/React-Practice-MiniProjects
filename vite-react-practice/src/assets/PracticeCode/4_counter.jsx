import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial count value
  const [step, setStep] = useState(1);   // Step value

  const increment = () => {
    setCount(count + step); // Increase by step value
  };

  const incrementTwice = () => {
    setCount(akshit => akshit + 1);
    setCount(akshit => akshit + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>

      <input
        type="number"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))}
      />

      <button onClick={increment}>Increase</button>
      <button onClick={() => setCount(count - step)}>Decrement</button>
      <button onClick={incrementTwice}>+2</button>
    </div>
  );  
}

export default Counter;
