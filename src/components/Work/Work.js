import React, { Component, Fragment } from 'react'
import Modal from 'react-modal';
import { ModalProvider, ModalConsumer } from './ModalContext';
import ModalRoot from './ModalRoot';

const Modal1 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div>I am a modal</div>
  </Modal>
);

const Modal2 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div>second modal</div>
  </Modal>
);

export default class Work extends Component {
    render() {
        return (
            <div>
            <div className="main-work-div">
                <div className="header-work-div"><p style={{padding: '95px', fontSize: '40px'}}>Work</p></div>
            </div>
            <div className="lower-work-div">
            <div class="diagonal-box">
	        <div class="content"><div className="work-div-subcontent-1">
             

            <ModalProvider>
    <ModalRoot />
    <ModalConsumer>
      {({ showModal }) => (
        <Fragment>
          <button onClick={() => showModal(Modal1)}>Open Modal</button>
        </Fragment>
      )}
    </ModalConsumer>
  </ModalProvider>
                
                </div> 

                </div>
            </div>
            <div class="diagonal-box-rev">
	        <div class="content-rev"> <div className="work-div-subcontent-2">

            <ModalProvider>
    <ModalRoot />
    <ModalConsumer>
      {({ showModal }) => (
        <Fragment>
          <button onClick={() => showModal(Modal2)}>
            Open Second Modal
          </button>
        </Fragment>
      )}
    </ModalConsumer>
  </ModalProvider>

                </div> </div>
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
