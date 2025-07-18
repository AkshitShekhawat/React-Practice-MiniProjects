import React, { useEffect, useState } from 'react';
import './App.css';
  
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

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