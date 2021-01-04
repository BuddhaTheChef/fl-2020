import React, { Component } from 'react';
import ContactUs from './ContactUs';

export default class Contact extends Component {
    render() {
        return (
            <div>
            <div className="main-contact-div">
                <div className="header-contact-div"><p style={{padding: '95px', fontSize: '40px'}}>Contact</p></div>
            </div>
            <div className="mid-contact-div">
            <div className="header-contact-div-2"><h3 style={{padding: '95px', fontSize: '40px'}}>Map of location</h3></div>
            </div>
            <div className="lower-contact-div">
            <div className="header-contact-div">


              <a
                href="https://github.com/BuddhaTheChef"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-twitter"
                style={{ fontSize: "90px" }}
              ><i></i></a>
              <a
                href="https://github.com/BuddhaTheChef"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-github"
                style={{ fontSize: "90px" }}
              ><i></i></a>
               <a
                href="https://github.com/BuddhaTheChef"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-instagram"
                style={{ fontSize: "90px" }}
              ><i></i></a>
               <a
                href="https://github.com/BuddhaTheChef"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-facebook"
                style={{ fontSize: "90px" }}
              ><i></i></a>
               <a
                href="https://github.com/BuddhaTheChef"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-twitch"
                style={{ fontSize: "90px" }}
              ><i></i></a>
               <a
                href="https://github.com/BuddhaTheChef"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-linkedin"
                style={{ fontSize: "90px" }}
              ><i></i></a>


            </div>
            </div>
            <div className="main-contact-div-lower">
                <div className="footer-contact-div">
                  <ContactUs/>
                </div>
            </div>
            </div>
        )
    }
}
