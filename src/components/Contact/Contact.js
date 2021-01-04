import React, { Component } from "react";
import ContactUs from "./ContactUs";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="main-contact-div">
          <div className="header-contact-div">
            <p style={{ padding: "95px", fontSize: "40px" }}>Contact</p>
          </div>
        </div>
        <div className="mid-contact-div">
          <div className="header-contact-div-2">
            <div style={{display: 'flex', width: '38%',justifyContent: 'center',alignItems: 'center',marginBottom: '150px',height: 'inherit',flexDirection: 'column'}}>
            <h3 style={{ padding: "95px", fontSize: "40px", textAlign:'left' }}>
              Working Out Of
            </h3>
            <p style={{fontSize:' 24px'}}>Seattle, WA</p>
            <p style={{fontSize:' 24px'}}>98121</p>
            <p style={{fontSize:' 24px'}}>M-F (9am - 5pm)</p>
            <p style={{fontSize:' 24px'}}>Pacific Standard Time (PST)</p>

            </div>
            <Map google={this.props.google} initialCenter={{
            lat: 47.6180,
            lng: -122.3483
          }}
          zoom={13} style={{width:'50%', height: '50%', margin: 'auto 740px'}}>
              <Marker onClick={this.onMarkerClick} name={"Current location"} />

              <InfoWindow onClose={this.onInfoWindowClose}>
            
              </InfoWindow>
            </Map>
          </div>
        </div>
        <div className="lower-contact-div">
          <div className="header-contact-div">
            <a
              href="https://github.com/BuddhaTheChef"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-twitter"
              style={{ fontSize: "90px" }}
            >
              <i></i>
            </a>
            <a
              href="https://github.com/BuddhaTheChef"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-github"
              style={{ fontSize: "90px" }}
            >
              <i></i>
            </a>
            <a
              href="https://github.com/BuddhaTheChef"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-instagram"
              style={{ fontSize: "90px" }}
            >
              <i></i>
            </a>
            <a
              href="https://github.com/BuddhaTheChef"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-facebook"
              style={{ fontSize: "90px" }}
            >
              <i></i>
            </a>
            <a
              href="https://github.com/BuddhaTheChef"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-twitch"
              style={{ fontSize: "90px" }}
            >
              <i></i>
            </a>
            <a
              href="https://github.com/BuddhaTheChef"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-linkedin"
              style={{ fontSize: "90px" }}
            >
              <i></i>
            </a>
          </div>
        </div>
        <div className="main-contact-div-lower">
          <div className="footer-contact-div">
            <ContactUs />
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY),
})(Contact);
