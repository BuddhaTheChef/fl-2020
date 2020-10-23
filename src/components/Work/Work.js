import React, { Component } from 'react'

export default class Work extends Component {
    render() {
        return (
            <div>
            <div className="main-work-div">
                <div className="header-work-div"><p style={{padding: '95px', fontSize: '40px'}}>Work</p></div>
            </div>
            <div className="lower-work-div">
                <div className="work-div-subcontent"><h4>Work 1</h4></div>
                <div className="work-div-subcontent"><h4>Work 2</h4></div>
                <div className="work-div-subcontent"><h4>Work 3</h4></div>
            </div>
            </div>
        )
    }
}
