import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "whitesmoke", height: "300vh" }}>
        <div className="home-head">
        <h1>Home Page</h1>
          <section id="home">
            <div class="home-container">
              
            </div>
            <div class="home-img-container">
            </div>
            <div class="diagonal"></div>
          </section>
        </div>
        <div className="home-lower-div">
            <h1>Other Content</h1>
        </div>
      </div>
    );
  }
}
