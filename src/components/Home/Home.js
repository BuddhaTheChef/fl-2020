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
        <div className="home-lower-div">
            <h1>Other Content</h1>
        </div>

        <div className="home-lower-div">
            <h1>Other Content</h1>
        </div>

        <div className="home-lower-div">
            <h1>Other Content</h1>
        </div>
        </div>
        <div className="home-lower-subdiv">
          <h1>Other content</h1>
        </div>

        <div className="main-lower-div">
        <div className="home-lower-div">
            <h1>Other Content</h1>
        </div>

        <div className="home-lower-div">
            <h1>Other Content</h1>
        </div>

        <div className="home-lower-div">
            <h1>Other Content</h1>
        </div>
        </div>
        <div style={{backgroundColor: 'rgb(66,66,66)', height: '250px', padding:'60px'}}>
               <div className="main-footer-div">
                 <div className="footer-sub-div-left">
                 <div className="sub-footer-div-1">
                 <h3>Connect</h3>
                 <h3>Contribute on GitHub</h3>
                 <h3>Support on Patreon</h3>
                 <h3>Join the Discord server</h3>
                 <h3>Follow us on Twitch</h3>
                 <h3>Find out more</h3>
                 <h3>Contact</h3>
                 </div>
                 <div className="sub-footer-div-2">
                 <h3>Get Help</h3>
                 <p>Order Status</p>
                 <p>Shipping and Delivery</p>
                 <p>Returns</p>
                 <p>Payment Options</p>
                 <p>Gift Cards</p>
                 <p>Contact Support</p>
                 </div>
                 <div className="sub-footer-div-3">
                   <h3>About Me</h3>
                   <p>News</p>
                   <p>Careers</p>
                   <p>Blog</p>
                   <p>Contct</p>
                   <p>Team</p>
                   <p>Future Plans</p>
                  </div>
                  </div>
                 <div className="sub-footer-div-4">
                   <h4>Twitter</h4>
                   <h4>Instagram</h4>
                   <h4>Facebook</h4>
                   <h4>Twitch</h4>
                  </div>
               </div>
            </div>
            <div style={{backgroundColor: 'rgb(30,30,30)', width: '100%', height: '50px', display: 'flex', alignItems: 'center',justifyContent: 'center'}}>Copyright 2020 ajwietecha</div>
      </div>
    );
  }
}
