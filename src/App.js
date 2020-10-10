import React from 'react';
import { Link,Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/Contact">Contact</Link>
      </div>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={About} exact path="/about" />
          <Route component={Work} exact path="/work" />
          <Route component={Contact} exact path="/contact" />
        </Switch>
    </div>
  );
}

export default App;
