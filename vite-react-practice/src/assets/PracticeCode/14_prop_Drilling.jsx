import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { useContext } from 'react';

  // -c1    - App
  //  -c2    - ComponentA
  //    -c3    - ComponentB
  //     -c4     - ThemedComponent = Needs acces to theme

function App() {
  const theme = 'dark';

  return (
    <div style={{border: '2px solid black', padding: '20px', textAlign: 'center'}}>
      <h1>App (Parent)</h1>
      <ComponentA theme={theme} />
    </div>
  )
}

function ComponentA({ theme }) {    //componentA passing it to componentB
  return (
      <div style={{border: '2px solid black', padding: '20px', textAlign: 'center'}}>
        <h2>ComponentA (Child)</h2>
      <ComponentB theme={theme}/>
      </div>
  );
}

function ComponentB({ theme }) {
  return (
    <div style={{border: '2px solid black', padding: '20px', textAlign: 'center'}}>
      <h2>ComponenetB(Great-GrandCh)</h2>
    <ThemedComponent theme={theme}/>
    </div>
  );
}

function ThemedComponent({ theme }) {
  return (
    <div style={{border: '2px solid black', padding: '20px', textAlign: 'center'}}>
      <h2>ThemedComponent (Great-GrandCh)</h2>
    <div>The current theme is: {theme}</div>
    </div>
  );
}

export default App