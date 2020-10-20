import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
            <div className="main-about-div">
                <div className="header-about-div-l"><p style={{padding: '95px', fontSize: '40px'}}>This is a small description. Or a little bit ab out your career.</p></div>
                <div className="header-about-div-r"><h1 className="title">About</h1></div>
            </div>
            <div className="lower-about-div">
                    <h1 style={{color:'black', display: 'inline'}}>Other content</h1>
            </div>
            </div>
        )
    }
}
