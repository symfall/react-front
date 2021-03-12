// block import libraries
import React from 'react'
// end block import libraries

// block import components
import HelloWorld from './components/HelloWorld.jsx'
// end block import components

// block import assets files (styles and images)
import logo from './assets/images/logo.svg';
import './assets/styles/App.css';
// end block import assets files (styles and images)

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


