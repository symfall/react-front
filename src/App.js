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
import './assets/styles/App.scss';
import './assets/styles/Header.scss';
import './assets/styles/Footer.scss';
// end block import assets files (styles and images)

export default function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path='/hello_world' component={HelloWorld} />
        </Switch>
      <Footer />
    </div>
  );
}


