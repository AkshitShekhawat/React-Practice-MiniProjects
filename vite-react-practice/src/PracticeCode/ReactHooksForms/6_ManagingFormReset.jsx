import React, { useEffect } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const {register, handleSubmit, watch, reset, formState: {errors}} = useForm(); 
  const onSubmit = (data) => {
    console.log('Form Data: ', data);
    reset();
  }

  // console.log(watch('name'));
  const watchedName = watch('name');
  const watchedEmail = watch('email');

  useEffect(() => {
    console.log('Name ', watchedName);
    
  }, [watchedName]);

  useEffect(() => {
    console.log('Email ', watchedEmail);
    
  }, [watchedEmail]);

  return(
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name: 
          <input {...register('name', 
            { required: 'Name is required',
              minLength:{value: 5, 
                         message: 'Name should be atleast 5 characters'
                         } })}/>   {/* <input {...register('name', { required: 'Name is required' })}/> */}
          
        </label>
        {/* errors.name && <p>{Name is required and should be 5 char }</p> */}
        {errors.name && <p>{errors.name.message}</p>}

        <label>
  Email:
        <input {...register('email', {required: true,pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/})}/>
</label>
{errors.email && <p>Email is required or not valid</p>}

        <button type='submit'>Submit</button>
        <button type='button' onClick={() => reset()}>reset</button>
      </form>
    </div>
  );
}
  
export default App; 