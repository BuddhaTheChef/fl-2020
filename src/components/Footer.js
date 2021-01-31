import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="jumbo-footer">
          <div className="main-footer-div">
            <div className="footer-sub-div-left">
              <div className="sub-footer-div-1">
                <h3>Created by <span style={{color:'mediumpurple'}}>AJ Wietecha</span></h3>
                <h6 className="sub-footer-mid-desc" style={{color:'mediumpurple'}}>All rights reserved &#169; Wi-tech 2021</h6>
              </div>
            </div>
            <div className="sub-footer-div-4">
              <a
                href="https://github.com/BuddhaTheChef"
                id="twit-foot"
                style={{ fontSize: "40px" }}
                target="_blank"
                rel="noopener noreferrer"
              ><i className="fa fa-github"></i></a>
              <a
                href="https://twitter.com/____a____j____"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "40px" }}
              ><i className="fa fa-twitter"></i></a>
              <a
                href="https://www.instagram.com/____a____j____/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "40px" }}
              ><i className="fa fa-instagram"></i></a>
              <a
                href="https://www.twitch.tv/buddhathechef"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "40px" }}
              ><i className="fa fa-twitch"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
