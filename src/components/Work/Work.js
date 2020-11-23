import React, { Component } from 'react'

export default class Work extends Component {
    render() {
        return (
            <div>
            <div className="main-work-div">
                <div className="header-work-div"><p style={{padding: '95px', fontSize: '40px'}}>Work</p></div>
            </div>
            <div className="lower-work-div">
            <div class="diagonal-box">
	        <div class="content"><div className="work-div-subcontent-1"><h4>Work 1</h4></div> </div>
            </div>
            <div class="diagonal-box-rev">
	        <div class="content-rev"> <div className="work-div-subcontent-2"><h4>Work 2</h4></div> </div>
            </div>
            <div class="diagonal-box">
	        <div class="content"> <div className="work-div-subcontent-3"><h4>Work 3</h4></div> </div>
            </div>
            <div class="diagonal-box-rev">
	        <div class="content-rev"> <div className="work-div-subcontent-4"><h4>Work 4</h4></div> </div>
            </div>
            <div class="diagonal-box">
	        <div class="content"> <div className="work-div-subcontent-5"><h4>Work 5</h4></div> </div>
            </div>
            <div class="diagonal-box-rev">
	        <div class="content-rev"> <div className="work-div-subcontent-6"><h4>Work 6</h4></div> </div>
            </div>
            </div>
            </div>
        )
    }
}
