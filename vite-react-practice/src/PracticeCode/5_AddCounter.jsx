import React, { useState } from 'react'
import './App.css'

//You can store arrays, objects, or even more
//complex data structurs in state

function App() {
  const [counters, setCounters] = useState([{id: 1,value: 0}]);
  const addCounters = () => {
    // [{id: 1,value: 0},{id: 2,value: 0}, {id: 3,value: 0}]
    setCounters([...counters, {id: counters.length + 1,value: 0}]);  // its creating a new array by sperading the existing array and appending 
                                                                    // a new eliment in the array in the end and it is making shure the
                                                                    //id is incerementing by 1
  };
  const incrementCounter = (id) => {
    setCounters(counters.map(counter =>
      counter.id === id ? {...counter, value: counter.value + 1}: counter
    )    
    );
  };
  return (
    <div>
      <button onClick={addCounters}>Add Counter</button>
      <ul>
        {counters.map(counter => (
                                         //counter 1:0 BUTTON
          <li key={counter.id}> Counter {counter.id} : {counter.value} 
          <button onClick={() => incrementCounter(counter.id)}>Increment</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App