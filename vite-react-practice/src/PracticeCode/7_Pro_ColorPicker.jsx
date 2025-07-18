import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgorundColor] = useState('#ffffff' );
  
  const color = ['#ff0000', '#00ff00', '#0000FF', '#FFFF00', '#FF00FF', '#00CCCC', '#ffffff', 'black'];

  const handleColorChange = (color) => {
    setBackgorundColor(color);
  }

  return (
    
    <div className='App' style={{backgroundColor}}>   
      <h1>Color Picker</h1>
      <div className='color-palette'>
        {color.map((color, index) => (
          <div 
            key={index}
            className='color-box'
            style={{backgroundColor: color}}
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>

      <div className='custom-color-picker'>
        <label htmlFor="customColor" className='picker-button'>
              🎨 Pick Custom Color
        </label>
        <input
          id="customColor"
          type='color'
          value={backgroundColor}
          onChange={(e) => handleColorChange(e.target.value)}
          />
        </div>

    </div>
    
  )
}

export default App 


// css code

// * {
//     margin: 0;
//     padding: 0;
// }

// .App {
//     font-family: Arial, Helvetica, sans-serif;
//     text-align: center;
//     padding: 40px;
//     min-height: 100vh;
//     color: #f0f0f0;
// }

// h1 {
//     color: #f0f0f0;
// }

// .color-palette{
//     display: flex;
//     justify-content: center;
//     gap: 10px;
//     margin-top: 10px;
// }


// .color-box {
//     width: 50px;
//     height: 50px;
//     cursor: pointer;
//     border: 2px solid #fff;
// }



// .custom-color-picker input[type='color'] {
//   padding: 10px;
//   cursor: pointer;
//   margin: 20px;
//   border-radius: 5px;
// }   

// .picker-button:hover {
//   background-color: #ddd;
//   transform: scale(1.05);
// }

// .picker-button {
//   padding: 10px 20px;
//   background-color: white;
//   color: #333;
//   border-radius: 6px;
//   font-weight: bold;
//   cursor: pointer;
//   box-shadow: 0 4px 8px rgba(0,0,0,0.2);
//   transition: all 0.3s ease;
// }