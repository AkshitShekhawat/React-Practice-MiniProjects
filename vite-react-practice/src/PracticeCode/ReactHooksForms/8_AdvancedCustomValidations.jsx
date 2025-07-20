import React, { useEffect } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const {register, handleSubmit, watch, reset, formState: {errors}} = useForm({
    mode: 'onChange'
  });

  const existingUsernames = ['admin' , 'user123', 'john']
  const checkIfUsernameExist = async (username) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return existingUsernames.includes(username);
  };

  const onSubmit = (data) => {
    console.log('Form Data: ', data);
    reset();
  }

  const watchedName = watch('name');
  const watchedEmail = watch('email');

  useEffect(() => {
    console.log('Name ', watchedName);
    
  }, [watchedName]);

  useEffect(() => {
    console.log('Email ', watchedEmail);

  }, [watchedEmail]);

  // const validateName = (value) => {
  //   if (value !== 'admin') {             // if (value === 'admin')
  //     return 'Admin is not allowed';     // return 'only admin is allowed';
  //   }
  //   return true;
  // };

  return(
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input {...register('name', {
             required: 'Name is required',
              minLength:{value: 2, 
                         message: 'Name should be atleast 2 characters'
                         },
              // validate: validateName, below ones also correct
              //validate: (value) => value !== "admin" || "Admin is not allowed",
                 validate: {
                      notAdmin: (value) => value !== "admin" || "Admin is not allowed",
                      isNotNumber: (value) => isNaN(value) || "Name cannot be number",
                      checkUserName: async (value) => {
                        const exist = await checkIfUsernameExist(value);
                        return !exist || 'UserName already taken';
                      }
                    }        
                })}/> 

        <br/>          
        </label>
        {errors.name && <p>{errors.name.message}</p>}  {/* {errors.name.message || "Name should be atleast 5 characters"} */}
        <br/>
        <label>
          Email:
          <input {...register('email', {required: true,pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/})}/>
        </label>
        {errors.email && <p>Email is required or not valid</p>}
        <br/>
        <label>
          Password:
          <input type='password' {...register('password', {
             required: true,
              minLength: 2
                  })}>       
          </input>
        </label>
        {errors.password && <p>{errors.password.message}</p>}
        <br/>
        <label>
          Confirm Password:
          <input type='password' {...register('confirmPassword', {
             required: true,
              minLength: 2,
              validate: value => (value) === watch('password') || 'Passwords do not match'           
                  })}>       
          </input>
        </label>
           {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          <br/>
          <button type='submit'>Submit</button>
          <button type='button' onClick={() => reset()}>reset</button>
      </form>
    </div>
  );
}
  
export default App; 