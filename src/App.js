// block import libraries
import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
// end block import libraries

// block import components
import HelloWorld from './components/HelloWorld.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
// end block import components

// block import assets files (styles and images)
import logo from './assets/images/logo.svg';
import './assets/styles/App.css';
// end block import assets files (styles and images)

export default function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route path='/hello_world' component={HelloWorld} />
        </Switch>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to='/'>Home</Link>
        <Link to='/hello_world'>Hello</Link>
      </header>
      <Footer />
    </div>
  );
}


