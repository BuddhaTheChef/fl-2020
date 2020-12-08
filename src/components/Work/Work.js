import React, { Component, Fragment } from "react";
import Modal from "react-modal";
import { ModalProvider, ModalConsumer } from "./ModalContext";
import ModalRoot from "./ModalRoot";

const Modal1 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-1">I am a modal #1
    <div className="overlay-modal">Content</div>
    </div>
  </Modal>
);

const Modal2 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-2">I am a modal #2
    <div className="overlay-modal">Content</div>
    </div>
  </Modal>
);

const Modal3 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-3">I am a modal #3
    <div className="overlay-modal">Content</div>
    </div>
  </Modal>
);

const Modal4 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-4">I am a modal #4
    <div className="overlay-modal">Content</div>
    </div>
  </Modal>
);

const Modal5 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-5">I am a modal #5
    <div className="overlay-modal">Content</div>
    </div>
  </Modal>
);

const Modal6 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-6">I am a modal #6
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
						<img src="https://images.unsplash.com/photo-1527903789995-dc8ad2ad6de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img17" style={{ backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',width:'100%'}}/>
						<figcaption>
							<h2>Wild <span>Romeo</span></h2>
              <ModalProvider>
                  <ModalRoot />
                  <ModalConsumer>
                    {({ showModal }) => (
                      <Fragment>
                        <div
                          style={{ width: "100%", height: "inherit" }}
                          onClick={() => showModal(Modal1)}
                        >
                          
                        </div>
                      </Fragment>
                    )}
                  </ModalConsumer>
                </ModalProvider>
							<p>Romeo never knows what he wants. He seemed to be very cross about something.</p>
						</figcaption>			
					</figure>
				</div>
        </div>
        </div>

          <div class="diagonal-box-rev">
            <div class="content-rev">
            <div class="grid">
					<figure class="effect-romeo">
						<img src="https://images.unsplash.com/photo-1527903789995-dc8ad2ad6de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img17" style={{ backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',width:'100%'}}/>
						<figcaption>
							<h2>Wild <span>Romeo</span></h2>
              <ModalProvider>
                  <ModalRoot />
                  <ModalConsumer>
                    {({ showModal }) => (
                      <Fragment>
                        <div
                          style={{ width: "100%", height: "inherit" }}
                          onClick={() => showModal(Modal2)}
                        >
                          
                        </div>
                      </Fragment>
                    )}
                  </ModalConsumer>
                </ModalProvider>
							<p>Romeo never knows what he wants. He seemed to be very cross about something.</p>
						</figcaption>			
					</figure>
				</div>
        </div>
        </div>
       
                 
        <div class="diagonal-box">
            <div class="content">
            <div class="grid">
					<figure class="effect-romeo">
						<img src="https://images.unsplash.com/photo-1527903789995-dc8ad2ad6de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img17" style={{ backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',width:'100%'}}/>
						<figcaption>
							<h2>Wild <span>Romeo</span></h2>
              <ModalProvider>
                  <ModalRoot />
                  <ModalConsumer>
                    {({ showModal }) => (
                      <Fragment>
                        <div
                          style={{ width: "100%", height: "inherit" }}
                          onClick={() => showModal(Modal3)}
                        >
                          
                        </div>
                      </Fragment>
                    )}
                  </ModalConsumer>
                </ModalProvider>
							<p>Romeo never knows what he wants. He seemed to be very cross about something.</p>
						</figcaption>			
					</figure>
				</div>
        </div>
        </div>

          <div class="diagonal-box-rev">
            <div class="content-rev">
            <div class="grid">
					<figure class="effect-romeo">
						<img src="https://images.unsplash.com/photo-1527903789995-dc8ad2ad6de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img17" style={{ backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',width:'100%'}}/>
						<figcaption>
							<h2>Wild <span>Romeo</span></h2>
              <ModalProvider>
                  <ModalRoot />
                  <ModalConsumer>
                    {({ showModal }) => (
                      <Fragment>
                        <div
                          style={{ width: "100%", height: "inherit" }}
                          onClick={() => showModal(Modal4)}
                        >
                          
                        </div>
                      </Fragment>
                    )}
                  </ModalConsumer>
                </ModalProvider>
							<p>Romeo never knows what he wants. He seemed to be very cross about something.</p>
						</figcaption>			
					</figure>
				</div>
        </div>
        </div>

                                
           <div class="diagonal-box">
            <div class="content">
            <div class="grid">
					<figure class="effect-romeo">
						<img src="https://images.unsplash.com/photo-1527903789995-dc8ad2ad6de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img17" style={{ backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',width:'100%'}}/>
						<figcaption>
							<h2>Wild <span>Romeo</span></h2>
              <ModalProvider>
                  <ModalRoot />
                  <ModalConsumer>
                    {({ showModal }) => (
                      <Fragment>
                        <div
                          style={{ width: "100%", height: "inherit" }}
                          onClick={() => showModal(Modal5)}
                        >
                          
                        </div>
                      </Fragment>
                    )}
                  </ModalConsumer>
                </ModalProvider>
							<p>Romeo never knows what he wants. He seemed to be very cross about something.</p>
						</figcaption>			
					</figure>
				</div>
        </div>
        </div>

          <div class="diagonal-box-rev">
            <div class="content-rev">
            <div class="grid">
					<figure class="effect-romeo">
						<img src="https://images.unsplash.com/photo-1527903789995-dc8ad2ad6de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="img17" style={{ backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',width:'100%'}}/>
						<figcaption>
							<h2>Wild <span>Romeo</span></h2>
              <ModalProvider>
                  <ModalRoot />
                  <ModalConsumer>
                    {({ showModal }) => (
                      <Fragment>
                        <div
                          style={{ width: "100%", height: "inherit" }}
                          onClick={() => showModal(Modal6)}
                        >
                          
                        </div>
                      </Fragment>
                    )}
                  </ModalConsumer>
                </ModalProvider>
							<p>Romeo never knows what he wants. He seemed to be very cross about something.</p>
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
