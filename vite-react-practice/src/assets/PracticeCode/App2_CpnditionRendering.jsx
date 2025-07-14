import './App.css';

function App() {
  const isLoggedin = true;

  /*if (isLoggedin) {
    return <h1>Welcome back!</h1>;
  }

  return <h1>Please log in.</h1>;
  */
 const akshit = isLoggedin ? <h1> welcome baack</h1> : <h1> please login</h1>
 const element = <h1>
   {isLoggedin ? 'Welcome back!' : 'Please log in.'}
   </h1>
  const messages = ["goodmorning", "goodafternoon", "goodevening"];

  return (
    <div className="App">
      {element}
      {messages.length > 0 && <h2>You have {messages.length} unread message.</h2> }
    </div>
  );
}

export default App;