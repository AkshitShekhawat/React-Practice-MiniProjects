import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
  const timerId = setInterval(() => {setTime(new Date())}, 1000);
    //setInterval is a function that allows us to runs some code to repeteadly after a set time interval 1000milisec 
  return () => clearInterval(timerId);
  }, []);

  const formattedTime =time.toLocaleTimeString('en-us',
    {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }
  )

  return (
    <div className='clock-container'>
      <div className='clock'>
      {/* {time.toLocaleTimeString()} */}
      {formattedTime}
      </div>
    </div>
  )
}

export default App

// //css
// * {
//     margin: 0px;
// }

// .clock-container {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     background-color: #282c34;
// }

// .clock {
//     font-size: 4rem;
//     font-family: 'Courier New', Courier, monospace;
//     color: #61dafb;
//     background-color: #20232a;
//     padding: 20px 40px;
//     border-radius: 10px;
// }

