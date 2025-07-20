import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [formData, setFromData] = useState({
        name:'', email:''});

    const [errors, setErrors] = useState({});

  const validate = () => {  //This complete, it is validating and creating error message and returning th ekey value pair
    const newErrors = {};  // the key is the name of the filed over below which is name field
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'; // this is name attribut with mesasge 
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateionErrors = validate();

    if (Object.keys(validateionErrors).length > 0) {
      setErrors(validateionErrors);
    } else {
      console.log('Form Data Submited ', formData);
    }
    // console.log('Form Data Submited ', formData);
    
  };

  const handleChange = (e) => {   
    const {name, value} = e.target; // we are getting the field name and the value where changes happening -- handleChange

    setFromData({             
      ...formData,    
      [e.target.name]: e.target.value, 
    });

    if (errors[name]) {
      const newErrors = {...errors};
      delete newErrors[name];
      setErrors(newErrors);
    }
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
            {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
            <br/>
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