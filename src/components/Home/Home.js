import React, { Component } from "react";

import mylogo from '../../assets/witecha.jpg'
import Anglogo from '../../assets/angular.png';
import Csslogo from '../../assets/css.png';
import Fblogo from '../../assets/firebase2.png';
import Htmlogo from '../../assets/html.png';
import Jslogo from '../../assets/Javascript.png';
import Nodejslogo from '../../assets/nodejs2.png';
import Pylogo from '../../assets/python-logo.png';
import Reactlogo from '../../assets/react.png';
import Sqlogo from '../../assets/sql7.png';

import picome from '../../assets/picome.PNG';

export default class Home extends Component {
  render() {
    return (
      <div className="main-home">
        <div className="home-head">
        <div className="home-title">
          <h3 id="h3-x" style={{fontSize: '30px', marginBottom: '55px'}}>Aj Wietecha II - Freelance Developer</h3>
          <h4>Providing Solutions for Small Businesses, Independent Contractors and Coorperations</h4>
        </div>
          <section id="home">
            <div className="home-container">
              
            </div>
            <div className="home-img-container">
              <img className="picome" src={picome} alt="me"/>
            </div>
            <div className="diagonal">
              <img src={mylogo} alt="mylogo" className="mylogo"/>
            </div>
          </section>
        </div>
        <div style={{backgroundColor: 'white',position:'relative',height:'auto'}}>
        <div className="main-lower-div">
        <div className="home-lower-div-1">
          <div className="header-home-div-overlay">
             <h1 style={{paddingLeft:"15px", textAlign: 'left'}}>Ecommerce Websites</h1>
          </div>
        </div>

        <div className="home-lower-div-2">
          <div className="header-home-div-overlay">
            <h1 style={{paddingLeft:"14px", textAlign: 'left'}}>Graphic Design</h1>
          </div>
        </div>

        <div className="home-lower-div-3">
        <div className="header-home-div-overlay">
            <h1 style={{paddingLeft:"14px", textAlign: 'left'}}>Microservices</h1>
        </div>
        </div>
        </div>
        <div className="home-lower-subdiv">
          <h1 className="tech-title">TECH</h1>
          <div className="home-lower-inner-div">
          <img id="tl1" className="tech-logo" style={{height:'60px'}} src={Anglogo} alt="angular logo" />
          <img id="tl2" className="tech-logo" style={{height:'60px'}} src={Csslogo} alt="CSS logo" />
          <img id="tl3" className="tech-logo" style={{height:'60px'}} src={Fblogo} alt="Firebase logo" />
          <img id="tl4" className="tech-logo" style={{height:'60px'}} src={Htmlogo} alt="HTML logo" />
          <img id="tl5" className="tech-logo" style={{height:'60px'}} src={Jslogo} alt="Javascript logo" />
          <img id="tl6" className="tech-logo" style={{height:'60px'}} src={Nodejslogo} alt="Node logo" />
          <img id="tl7" className="tech-logo" style={{height:'60px'}} src={Pylogo} alt="Python logo" />
          <img id="tl8" className="tech-logo" style={{height:'60px'}} src={Reactlogo} alt="React logo" />
          <img id="tl9" className="tech-logo" style={{height:'60px'}} src={Sqlogo} alt="SQL logo" />
          </div>
        </div>

        <div className="main-lower-div" id="main-lower-div-bot">
        <div className="home-lower-div-4">
        <div className="header-home-div-overlay">
            <h1 style={{paddingLeft:"14px",textAlign: 'left'}}>Full Stack Applications</h1>
          </div>
        </div>

        <div className="home-lower-div-5">
        <div className="header-home-div-overlay">
            <h1 style={{paddingLeft:"14px",textAlign: 'left'}}>Mobile Appications</h1>
            </div>
        </div>

        <div className="home-lower-div-6">
        <div className="header-home-div-overlay">
            <h1 style={{paddingLeft:"14px",textAlign: 'left'}}>Consulting</h1>
            </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}
