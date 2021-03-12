// block import libraries
import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
// end block import libraries

// block import components
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Settings from './components/Settings.jsx'
import Chat from './components/Chat.jsx'
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
          <Route exact path='/' component={Home} />
          <Route path='/chat' component={Chat} />
          <Route path='/settings' component={Settings} />
          <Route path='/profile' component={Profile} />
        </Switch>
      <Footer />
    </div>
  );
}


