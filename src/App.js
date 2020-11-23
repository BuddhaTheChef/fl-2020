import React from 'react';
import { Link,Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="header-nav">
        <h3>Wi-tech</h3>
        </div>
        <div className="link-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/Contact">Contact</Link>
        </div>
      </div>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={About} exact path="/about" />
          <Route component={Work} exact path="/work" />
          <Route component={Contact} exact path="/contact" />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
