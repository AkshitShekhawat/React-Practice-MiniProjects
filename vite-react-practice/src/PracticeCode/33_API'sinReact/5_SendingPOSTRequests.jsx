import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
  
function App() {
  const [data, setData] = useState();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost ={title: 'foo',
                    body: 'bar',
                    userId: 1}
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)  // we have axios.post and specify the url and newPost this is the object that we want to post
      .then(response => {                                    // and then we have the handeling over here, From this we can handle the response
        console.log('New Post Added: ', response.data);
        setData([response.data]);
        
      })
  };
  return(
    <div>
      <h1>Api's in React</h1>
      <form onSubmit={handleSubmit}>
        <button type = 'submit'>Add Post</button>
      </form>
    </div>
  );
}
  
export default App; 