import React, { Component, Fragment } from "react";
import Modal from "react-modal";
import { ModalProvider, ModalConsumer } from "./ModalContext";
import ModalRoot from "./ModalRoot";

const Modal1 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-1">
    <div className="overlay-modal">
    <div className="modal-inside-text">
      <h1>Ohhoney</h1>
    "Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat."
    </div>
    </div>
    </div>
  </Modal>
);

const Modal2 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-2">
    <div className="overlay-modal">Content</div>
    </div>
  </Modal>
);

const Modal3 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-3">
    <div className="overlay-modal">Content</div>
    </div>
  </Modal>
);

const Modal4 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-4">
    <div className="overlay-modal">Content</div>
    </div>
  </Modal>
);

const Modal5 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-5">
    <div className="overlay-modal">Content</div>
    </div>
  </Modal>
);

const Modal6 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-6">
    <div className="overlay-modal">Content</div>
    </div>
  </Modal>
);

export default class Work extends Component {
  render() {
    return (
      <div>
        <div className="main-work-div">
          <div className="header-work-div">
            <p style={{ padding: "95px", fontSize: "40px" }}>Past Work</p>
          </div>
        </div>
        <div className="lower-work-div">

           <div class="diagonal-box">
            <div class="content">
            <div class="grid">
					<figure class="effect-romeo">
						<img src={require('../../assets/ohhoney1.jpg')} alt="img17" style={{ backgroundPosition: 'top',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',width:'100%'}}/>
						<figcaption>
							<h2>Ohhoney<span>.net</span></h2>
              <ModalProvider>
                  <ModalRoot />
                  <ModalConsumer>
                    {({ showModal }) => (
                      <Fragment>
                        <div
                          style={{ width: "100%", height: "inherit", backgroundColor: 'rgba(0,0,0,0.5)'}}
                          onClick={() => showModal(Modal1)}
                        >
                          
                        </div>
                      </Fragment>
                    )}
                  </ModalConsumer>
                </ModalProvider>
						</figcaption>			
					</figure>
				</div>
        </div>
        </div>

          <div class="diagonal-box-rev">
            <div class="content-rev">
            <div class="grid">
					<figure class="effect-romeo">
						<img src={require('../../assets/AMLandscaping.jpg')} alt="img17" style={{ backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',width:'100%'}}/>
						<figcaption>
							<h2>AM <span> Landscaping</span></h2>
              <ModalProvider>
                  <ModalRoot />
                  <ModalConsumer>
                    {({ showModal }) => (
                      <Fragment>
                        <div
                          style={{ width: "100%", height: "inherit", backgroundColor: 'rgba(0,0,0,0.5)' }}
                          onClick={() => showModal(Modal2)}
                        >
                          
                        </div>
                      </Fragment>
                    )}
                  </ModalConsumer>
                </ModalProvider>
						</figcaption>			
					</figure>
				</div>
        </div>
        </div>
       
                 
        <div class="diagonal-box">
            <div class="content">
            <div class="grid">
					<figure class="effect-romeo">
						<img src={require('../../assets/techchat1.jpg')} alt="img17" style={{ backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',width:'100%'}}/>
						<figcaption>
							<h2>Tech<span>Chat</span></h2>
              <ModalProvider>
                  <ModalRoot />
                  <ModalConsumer>
                    {({ showModal }) => (
                      <Fragment>
                        <div
                          style={{ width: "100%", height: "inherit",backgroundColor: 'rgba(0,0,0,0.5)'}}
                          onClick={() => showModal(Modal3)}
                        >
                          
                        </div>
                      </Fragment>
                    )}
                  </ModalConsumer>
                </ModalProvider>
						</figcaption>			
					</figure>
				</div>
        </div>
        </div>

          <div class="diagonal-box-rev">
            <div class="content-rev">
            <div class="grid">
					<figure class="effect-romeo">
						<img src={require('../../assets/carlslist2.jpg')} alt="img17" style={{ backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',width:'100%'}}/>
						<figcaption>
							<h2>Carls<span>List</span></h2>
              <ModalProvider>
                  <ModalRoot />
                  <ModalConsumer>
                    {({ showModal }) => (
                      <Fragment>
                        <div
                          style={{ width: "100%", height: "inherit", backgroundColor: 'rgba(0,0,0,0.5)' }}
                          onClick={() => showModal(Modal4)}
                        >
                          
                        </div>
                      </Fragment>
                    )}
                  </ModalConsumer>
                </ModalProvider>
						</figcaption>			
					</figure>
				</div>
        </div>
        </div>

                                
           <div class="diagonal-box">
            <div class="content">
            <div class="grid">
					<figure class="effect-romeo">
						<img src={require('../../assets/xposure1.jpg')} alt="img17" style={{ backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',width:'100%'}}/>
						<figcaption>
							<h2>X<span>posure</span></h2>
              <ModalProvider>
                  <ModalRoot />
                  <ModalConsumer>
                    {({ showModal }) => (
                      <Fragment>
                        <div
                          style={{ width: "100%", height: "inherit", backgroundColor: 'rgba(0,0,0,0.5)'}}
                          onClick={() => showModal(Modal5)}
                        >
                          
                        </div>
                      </Fragment>
                    )}
                  </ModalConsumer>
                </ModalProvider>
						</figcaption>			
					</figure>
				</div>
        </div>
        </div>

          <div class="diagonal-box-rev">
            <div class="content-rev">
            <div class="grid">
					<figure class="effect-romeo">
						<img src={require('../../assets/xplor1.jpg')} alt="img17" style={{ backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',width:'100%'}}/>
						<figcaption>
							<h2>X<span>Plor</span></h2>
              <ModalProvider>
                  <ModalRoot />
                  <ModalConsumer>
                    {({ showModal }) => (
                      <Fragment>
                        <div
                          style={{ width: "100%", height: "inherit", backgroundColor: 'rgba(0,0,0,0.5)'  }}
                          onClick={() => showModal(Modal6)}
                        >
                          
                        </div>
                      </Fragment>
                    )}
                  </ModalConsumer>
                </ModalProvider>
						</figcaption>			
					</figure>
				</div>
        </div>
        </div>

        </div>
      </div>
    );
  }
}
