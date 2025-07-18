import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    text:'',
    checkbox: false,
    radio:'',
    select:''
  });

  const handleChange = (e)  => {
    const {name, value, type, checked} = e.target;
    setFormData({
      ...formData,
      [name]: type == 'checkbox' ? checked : value
    });
  };

  return (
    <div className='form-container'>
      <h1>Form Example</h1>
      <form>
        {/* Text Input */}
        <div className='form-field'>
          <label>Text:</label>
          <input
            type='text'
            name='text'
            value={formData.text}
            onChange={handleChange}>
          </input>
        </div>
        {/* ChenckBox */}
        <div className='form-field'>
          <label>
            <input
              type='checkbox'
              name='checkbox'
              checked={formData.checkbox}
              onChange={handleChange}></input>
              Checkbox
          </label>

          {/* Radio Buttons */}
          <div className='form-field'>
          <label>Radio:</label>

          <label>
          <input
            type='radio'
            name='radio'
            value='option1'
            checked={formData.radio == 'option1'}
            onChange={handleChange}>
          </input>
          Option 1
          </label>

          <label>
          <input
            type='radio'
            name='radio'
            value='option2'
            checked={formData.radio == 'option2'}
            onChange={handleChange}>
          </input>
          Option 2
          </label>

        </div>

        {/* Dropdown */}
        <div className='form-field'>
          <label>Select:</label>
          <select 
            name='select'
            value={formData.select}
            onChange={handleChange}>
          <option value="">-- Choose an option --</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          </select>
        </div>

        <div className='form-data'>
          <h3>Form Data</h3>
          <p><strong>Text:</strong> {formData.text || 'N/A'}</p>
          <p><strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'unchecked'}</p>
          <p><strong>Radio:</strong> {formData.radio || 'N/A'}</p>
          <p><strong>Select:</strong> {formData.select || 'N/A'}</p>
          
        </div>

        </div>
      </form>
    </div>
  )
}

export default App

{/* CSS for this 
    
    .form-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0,1);
    background-color: lightgray;
    font-family: sans-serif;
}

h2, h3 {
    text-align: center;
    color: black;
}
.form-field {
    margin-bottom: 20px;
}

label {
    display: block;
    font-size: 14px;
    font-weight: 5px;
    margin-bottom: 5px;
    color: black;
}

input[type="text"], select {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 16px;
}

input[type="checkbox"], select {
    margin-right: 10px;
}

input[type="radio"], select {
    margin-right: 5px;
}

.form-data {
    margin-top: 30px;
    padding: 10px;
    background-color: #e9f7f9;
    border: 1px solid #a3d2d6;
    border-radius: 4px;
}

.form-data p{
    font-size: 16px;
    color: #555;
}

strong {
    color: #333;
}    
    */}



