import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
            <div className="main-contact-div">
                <div className="header-contact-div"><p style={{padding: '95px', fontSize: '40px'}}>Contact</p></div>
            </div>
            <div className="mid-contact-div">
            <div className="header-contact-div"><h3 style={{padding: '95px', fontSize: '40px'}}>Map of location</h3></div>
            </div>
            <div className="lower-contact-div">
            <div className="header-contact-div"><h3 style={{padding: '95px', fontSize: '40px'}}>Social Media</h3></div>
            </div>
            <div className="main-contact-div">
                <div className="header-contact-div"><p style={{padding: '95px', fontSize: '40px'}}>Embededded Emails</p></div>
            </div>
            </div>
        )
    }
}
