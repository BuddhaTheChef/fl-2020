import React, { Component } from 'react'
import { Link } from "react-router-dom";
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


            <Link
                href="#"
                class="fa fa-twitter"
                style={{ fontSize: "90px" }}
              ></Link>
              <Link
                href="#"
                class="fa fa-github"
                style={{ fontSize: "90px" }}
              ></Link>
              <Link
                href="#"
                class="fa fa-instagram"
                style={{ fontSize: "90px" }}
              ></Link>
              <Link
                href="#"
                class="fa fa-facebook"
                style={{ fontSize: "90px" }}
              ></Link>
              <Link
                href="#"
                class="fa fa-twitch"
                style={{ fontSize: "90px" }}
              ></Link>
              <Link
                href="#"
                class="fa fa-linkedin"
                style={{ fontSize: "90px" }}
              ></Link>


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
