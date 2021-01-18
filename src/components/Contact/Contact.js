import React, { Component } from "react";
import ContactUs from "./ContactUs";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Contact extends Component {
  render() {
    return (
      <div>
       <div className="main-contact-div">
          <div className="header-contact-div" id="main-div-cons">
            <p className="main-divs-cons-title">Contact</p>
          </div>
        </div>
        <div className="mid-contact-div">
          <div className="header-contact-div-2">
            <div className="inner-header-contact-div-2">
            <h3 className="inner-header-contact-div-2-header">
              CATCH ME HERE
            </h3>
            <div className="inner-header-contact-p-arecodes">
            <p className="inner-header-contact-div-2-p">Seattle, WA</p>
            <p className="inner-header-contact-div-2-p">98121</p>
            </div>
            <p className="inner-header-contact-div-2-p-mob">M-F (9am - 5pm)</p>
            <p className="inner-header-contact-div-2-p-mob">Pacific Standard Time (PST)</p>

            </div>
            <Map google={this.props.google} initialCenter={{
            lat: 47.6180,
            lng: -122.3483,
          }}
          zoom={13} disableDefaultUI={true} className="goog-map" style={{width:'50%', height: '50%', margin: 'auto 740px', borderRadius: '20px'}} id="map-outline">
              <Marker onClick={this.onMarkerClick} name={"Current location"} />

              <InfoWindow onClose={this.onInfoWindowClose}>
            
              </InfoWindow>
            </Map>
          </div>
        </div>
        <div className="lower-contact-div">
          <div className="header-contact-div" id="head-contact-div2">
            <a
              href="https://github.com/BuddhaTheChef"
              target="_blank"
              id="cnt-app"
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
              id="cnt-app"
              style={{ fontSize: "90px" }}
            >
              <i></i>
            </a>
            <a
              href="https://github.com/BuddhaTheChef"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-instagram"
              id="cnt-app"
              style={{ fontSize: "90px" }}
            >
              <i></i>
            </a>
            <a
              href="https://github.com/BuddhaTheChef"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-facebook"
              id="cnt-app"
              style={{ fontSize: "90px" }}
            >
              <i></i>
            </a>
            <a
              href="https://github.com/BuddhaTheChef"
              target="_blank"
              rel="noopener noreferrer"
              id="cnt-app"
              class="fa fa-twitch"
              style={{ fontSize: "90px" }}
            >
              <i></i>
            </a>
            <a
              href="https://github.com/BuddhaTheChef"
              target="_blank"
              rel="noopener noreferrer"
              id="cnt-app"
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
