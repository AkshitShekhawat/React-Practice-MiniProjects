import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  // register is a function that is provide inside the useForm hook which is provided to us by react. And it is used to 
  // register the details that you want react hook form to handle. For example, if there is an input field, you might want to register that particular field with a react
  // hook form and why you want to register because you want react to form to manage the validation, submission,
  // everything you want to react to form to keep track of change in each input field and all of that.So, because of that, you would want to tell React Hook Form, “Hey, 
  // manage this particular field for me. How would you help that you do that with help of rgisterover here?

  // register we are making use to register the input field for management. Handlesubmit does the job of handeling the form submission and gathering
  // the form data for us and on submit is a custom function that is triggered on form subbmision, and it does a simple job of logging the form data

  // Benifits of the useForm Hook 1. is reduce lots of boiler plate code and component is also looks simple, better performance means it meanimizes the 
  // re-rendering on every value change and this makes faster for large application 
  const {register, handleSubmit} = useForm(); 
  const onSubmit = (data) => console.log(data);  //we need to tell handlesubmit that hey use this function ((onSubmit)) to handlesubmit for me 
  

  return(
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input {...register('name')}/>
        </label>

        <label>
          Email:
          <input {...register('email')}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
  
export default App; 