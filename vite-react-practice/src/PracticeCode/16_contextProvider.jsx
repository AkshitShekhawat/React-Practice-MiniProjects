import React, { createContext, useContext } from 'react';
import './App.css';
  // -c1    - App = Has Theme - light
  //  -c2    - ComponentA
  //    -c3    - ComponentB
  //     -c4     - ThemedComponent = Needs acces to theme

// useContext()

// Create a Context:
// const MyContext = createContext(defaultValue);

// Consume the Context:
// const contextValue = useContext(MyContext);

  // Provide the Context:
  //<MyContext.Provider value={someValue}>
   // <ComponentA />
  //</MyContext.Provider>
  
//Provider wraps the component that needs access to the context value 

const ThemeContext = createContext('light');

function App() {
  //const theme = 'light';
  
  return (
    <ThemeContext.Provider value='dark'>
    <div style={{border: '2px solid black', padding: '20px', textAlign: 'center'}}>
      <h1>App (Parent)</h1>
      <ComponentA/>  
    </div>
    </ThemeContext.Provider>
  );
}

function ComponentA() {    //componentA passing it to componentB
  return (
      <div style={{border: '2px solid green', padding: '20px', textAlign: 'center'}}>
        <h2>ComponentA (Child)</h2>
      <ComponentB/>
      </div>
  );
}

function ComponentB({ theme }) {
  return (
    <div style={{border: '2px solid blue', padding: '20px', textAlign: 'center'}}>
      <h2>ComponenetB(Great-GrandCh)</h2>
    <ThemedComponent/>
    </div>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{border: '2px solid red', padding: '20px', textAlign: 'center'}}>
      <h2>ThemedComponent (Great-GrandCh)</h2>
    <div>The current theme is: {theme}</div>
    </div>
  );
}

export default App