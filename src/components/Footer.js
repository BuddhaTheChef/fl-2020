import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="jumbo-footer">
          <div className="main-footer-div">
            <div className="footer-sub-div-left">
              <div className="sub-footer-div-1">
                <h3>Created by <span style={{color:'teal'}}>AJ Wietecha</span></h3>
                <h6 style={{color:'teal'}}>All rights reserved &#169; Wi-tech 2021</h6>
              </div>
            </div>
            <div className="sub-footer-div-4">
              <Link
                to="https://www.google.com"
                id="twit-foot"
                className="fa fa-twitter"
                style={{ fontSize: "40px" }}
              ></Link>
              <Link
                to="#"
                className="fa fa-instagram"
                style={{ fontSize: "40px" }}
              ></Link>
              <Link
                to="#"
                className="fa fa-facebook"
                style={{ fontSize: "40px" }}
              ></Link>
              <Link
                to="#"
                className="fa fa-twitch"
                style={{ fontSize: "40px" }}
              ></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
