import './App.css';
//JSX and Functions

function WelcomeMessage(name) {
  return <h1>Welcome, {name}!</h1>;
}

function Greeting(isMorning) {
  if (isMorning) {
    return <h1>Good Moring!</h1>
    
  }
  return <h1>Good Evening!</h1>;
}

function AlertBox(message) {
  return <div>{message}</div>;
}

function showAlert(condition, message) {
  if (condition) {
    return AlertBox(message);
  }
  return null;
}
function App() {
  const now  = new Date();
  const isMorning = now.getHours() < 12;
  return (
    <div>
      {WelcomeMessage('Akshit')}
      {WelcomeMessage('John')}
      {Greeting(isMorning)}

      {showAlert(true, "This is Important!")}
    </div>
  );
}

export default App;
