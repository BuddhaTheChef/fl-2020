import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
            <div className="main-about-div">
                <div className="header-about-div-l">
                    <div className="header-about-div-overlay"><p style={{padding: '95px', fontSize: '40px'}}>This is a small description. Or a little bit ab out your career.</p></div>
                </div>
                <div className="header-about-div-r"><h1 className="title">About</h1></div>
            </div>

            <div className="main-about-div">
            <div className="header-about-div-r-1">
                    <h1 style={{color:'black', display: 'inline'}}>Other content</h1>
            </div>
            <div className="header-about-div-l-1">
            <div className="header-about-div-overlay"><h1 style={{display: 'inline'}}>Other content</h1></div>
            </div>
            </div>

            <div className="main-about-div">
            <div className="header-about-div-l-2">
            <div className="header-about-div-overlay"><h1 style={{display: 'inline'}}>Other content</h1></div>
            </div>
            <div className="header-about-div-r-2">
                    <h1 style={{color:'black', display: 'inline'}}>Other content</h1>
            </div>
            </div>

            </div>
        )
    }
}
