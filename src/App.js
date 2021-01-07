import React from 'react';
import { NavLink,Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

import './App.css';
import Footer from './components/Footer';

const App = (props) => {

  React.useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links-a");
    hamburger.addEventListener('click', (event) => {
      navLinks.classList.toggle('open');
    });
  });

  return (
    <div className="App">
      <div className="nav-a">
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="nav-links-a">
        <NavLink exact to="/" className="header-link" activeClassName="header-link-active">Home</NavLink>
        <NavLink exact to="/about" className="header-link" activeClassName="header-link-active">About</NavLink>
        <NavLink exact to="/work" className="header-link" activeClassName="header-link-active">Work</NavLink>
        <NavLink exact to="/Contact" className="header-link" activeClassName="header-link-active">Contact</NavLink>
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
