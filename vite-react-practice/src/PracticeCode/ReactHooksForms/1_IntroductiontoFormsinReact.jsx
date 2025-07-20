import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [formData, setFromData] = useState({
        name:'', email:''});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submited ', formData);
  };

  const handleChange = (e) => {   // it passes the event object which has the details of the entire event
    // console.log(formData.name);  //(e.target.value)
    setFromData({                 // here we are saying setformdata it always pick the latest data that exist and it  will update the form state
      ...formData,    //Destructure the current form data, with this sperad operator we are saying keep existing values of form data. so it spread itself
      [e.target.name]: e.target.value, // and then we are getting the name of the filed over here and it become name: whatever value you typed here
        //And when you add this what happens is the field that has changed because this /[e.target.name]: e.target.value/ is a field we are taking about
        //the field that has changed will get replaced inside ((...formData)) this speraded data over here.
    })
  };

  return(
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type = 'text'
            name='name'
            // value={0}
            value={formData.name}
            onChange={handleChange}>  
            </input>
        </label>

        <label>
          Email:
          <input
            type = 'email'
            name='email'
            // value={0}
            value={formData.email}
            onChange={handleChange}>  
            </input>
        </label>
        
        
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
  
export default App; 