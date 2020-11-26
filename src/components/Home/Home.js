import React, { Component } from "react";

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
            <h1>Ecommerce Websites</h1>
        </div>

        <div className="home-lower-div-2">
            <h1>Graphic Design</h1>
        </div>

        <div className="home-lower-div-3">
            <h1>Microservices</h1>
        </div>
        </div>
        <div className="home-lower-subdiv">
          <h1>Technologies</h1>
        </div>

        <div className="main-lower-div">
        <div className="home-lower-div-4">
            <h1>Full Stack Applications</h1>
        </div>

        <div className="home-lower-div-5">
            <h1>Mobile Appications</h1>
        </div>

        <div className="home-lower-div-6">
            <h1>Consulting</h1>
        </div>
        </div>
      </div>
    );
  }
}
