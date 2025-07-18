import React, { createContext, useContext, useState } from 'react';
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

//// Context.Provider is used to provide a
// modified value to the components within its
// tree. This value is only accessible to the
// components wrapped by the Provider.


const ThemeContext = createContext('light');

function App() {
  //const theme = 'light';

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme == 'light' ? 'dark' : 'light'))
  };

  return (

    // Understanding Context Scope: Inside vs. Outside the Provider

    <div>
      <GlobalComponent/>   {/* this use the default value of context */}

    <ThemeContext.Provider value={theme}>
    <div style={{border: '2px solid black', padding: '20px', textAlign: 'center'}}>
      <h1>App (Parent)</h1>                             {/* The value inside this tree is now available outside */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ComponentA/>
    </div>

    </ThemeContext.Provider>
    <ThemeContext.Provider value="dark">  {/* here we use different provider value wrapped by another provider */}
      <GlobalComponent/>
    </ThemeContext.Provider>



    </div>
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

function GlobalComponent() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{border: '2px solid pink', padding: '20px', textAlign: 'center'}}>
      <h2>GlobalComponent (outside Provider)</h2>
    <div>The current theme is: {theme}</div>
    </div>
  );
}

export default App