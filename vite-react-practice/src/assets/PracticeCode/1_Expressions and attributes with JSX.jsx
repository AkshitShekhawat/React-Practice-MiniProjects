import './App.css';

// 1. You can embed any valid JavaScript expression in JSX by wrapping it in curly braces {}.
// 2. JSX attributes can be set using camelCase syntax.

function App() {
  
  const name = "Akshit";
  const buttonLabel = "Click me";
  const imageurl = 'https://placehold.co/100x100';

  return (
    <div className="App">
      <h1>Hello, World!, {name}</h1>
      <button style={{ backgroundColor: 'green', color: 'white' }}> 
        {buttonLabel}
      </button>
      <button onClick={() => alert('Button clicked!')}>
        Message Alert!
      </button>
      {/* <img src='https://placehold.co/100x100'></img> */}
      <img src={imageurl} />
    </div>
  );
}

export default App;