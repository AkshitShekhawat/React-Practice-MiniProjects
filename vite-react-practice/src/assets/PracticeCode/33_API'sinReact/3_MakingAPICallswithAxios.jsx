import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
  
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts') // fetch('https://jsonplaceholder.typicode.com/posts')
      // .then(response => response.json()) we don't need bez it Automatic JSON data handeling in response
      .then(response => {   // .then(json => {
        console.log(response);
        
      setData((response.data))   // setData(json)
        setLoading(false);
        // throw new Error('Something went wrong');
      })
      .catch((error) => {
        console.error(`Error fetching data: `, error);
        setError('Failed to fetch the data');
        setLoading(false)
      });
  }, []);

  if (loading) {
    return <p>Loading....</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return(
    <div>
      <h2>Api's in React</h2>
      {/* <p>Todo id: {data.id}</p>
      <p>User id: {data.userId}</p>
      <p>Todo title: {data.title}</p> */}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
              <p><strong>{post.title}</strong></p>
              <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
  
export default App; 