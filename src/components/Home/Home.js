import React, { Component } from "react";

import Anglogo from '../../assets/angular.png';
import Csslogo from '../../assets/css.png';
import Fblogo from '../../assets/firebase2.png';
import Htmlogo from '../../assets/html.png';
import Jslogo from '../../assets/Javascript.png';
import Nodejslogo from '../../assets/nodejs2.png';
import Pylogo from '../../assets/python-logo.png';
import Reactlogo from '../../assets/react.png';
import Sqlogo from '../../assets/sql7.png';

export default class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "whitesmoke", height: "300vh" }}>
        <div className="home-head">
        <div className="home-title">
          <h3>Aj Wietecha II - Freelance Contractor</h3>
          <h4>Providing Solutions for Small Businesses, Independent Contractors and Coorperations</h4>
        </div>
          <section id="home">
            <div class="home-container">
              
            </div>
            <div class="home-img-container">
            </div>
            <div class="diagonal"></div>
          </section>
        </div>
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
          <h1>Technologies</h1>
          <div className="home-lower-inner-div">
          <img style={{height:'60px'}} src={Anglogo} alt="angular logo" />
          <img style={{height:'60px'}} src={Csslogo} alt="CSS logo" />
          <img style={{height:'60px'}} src={Fblogo} alt="Firebase logo" />
          <img style={{height:'60px'}} src={Htmlogo} alt="HTML logo" />
          <img style={{height:'60px'}} src={Jslogo} alt="Javascript logo" />
          <img style={{height:'60px'}} src={Nodejslogo} alt="Node logo" />
          <img style={{height:'60px'}} src={Pylogo} alt="Python logo" />
          <img style={{height:'60px'}} src={Reactlogo} alt="React logo" />
          <img style={{height:'60px'}} src={Sqlogo} alt="SQL logo" />
          </div>
        </div>

        <div className="main-lower-div">
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
    );
  }
}
