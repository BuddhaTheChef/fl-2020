import React, { Component, Fragment } from "react";
import Modal from "react-modal";
import { ModalProvider, ModalConsumer } from "./ModalContext";
import ModalRoot from "./ModalRoot";

const Modal1 = ({ onRequestClose, ...otherProps }) => (
  <Modal
    isOpen
    onRequestClose={onRequestClose}
    style={{ overlay: {}, content: { backgroundColor: "transparent", border: "none !important",width: '106%', padding: '20px',marginLeft: '-52px'}}}
  >
    <button className="modalButton" onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-1">
      <div className="overlay-modal">
        <div className="modal-inside-text">
          <h1>Ohhoney</h1>
          <h4 style={{lineHeight: 3}}>| HTML | CSS | SCSS | JavaScript |</h4>
          "Professional website done for podcast website to grow online
          presence."
        </div>
      </div>
    </div>
  </Modal>
);

const Modal2 = ({ onRequestClose, ...otherProps }) => (
  <Modal
    isOpen
    onRequestClose={onRequestClose}
    {...otherProps}
    style={{ overlay: {}, content: {backgroundColor: "transparent", border: "none !important",width: '106%', padding: '20px',marginLeft: '-52px'}}}
  >
    <button className="modalButton" onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-2">
      <div className="overlay-modal">
        <div className="modal-inside-text">
          <h1>AM Landscaping LLC</h1>
          <h4 style={{lineHeight: 3}}>| Wix | HTML | CSS |</h4>
          "Professional website done for Landacping comapny to grow web
          presence."
        </div>
      </div>
    </div>
  </Modal>
);

const Modal3 = ({ onRequestClose, ...otherProps }) => (
  <Modal
    isOpen
    onRequestClose={onRequestClose}
    {...otherProps}
    style={{ overlay: {}, content: { backgroundColor: "transparent", border: "none !important",width: '106%', padding: '20px',marginLeft: '-52px' } }}
  >
    <button className="modalButton" onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-3">
      <div className="overlay-modal">
        <div className="modal-inside-text">
          <h1>Tech Chat</h1>
          <h4 style={{lineHeight: 3}}>| React.js | Redux | Firebase | CSS | Moment |</h4>
          "A spin off discord and slack where you can directly communicate with
          indviduals in your specific field."
        </div>
      </div>
    </div>
  </Modal>
);

const Modal4 = ({ onRequestClose, ...otherProps }) => (
  <Modal
    isOpen
    onRequestClose={onRequestClose}
    {...otherProps}
    style={{ overlay: {}, content: {backgroundColor: "transparent", border: "none !important",width: '106%', padding: '20px',marginLeft: '-52px'} }}
  >
    <button className="modalButton" onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-4">
      <div className="overlay-modal">
        <div className="modal-inside-text">
          <h1>Carlslist</h1>
          <h4 style={{lineHeight: 3}}>
            | React | Redux | Node | Express | SQL | Firebase | Javascript | CSS
            |
          </h4>
          "Essentially this web application is a craigslist redesig. For a more clean modern look."
        </div>
      </div>
    </div>
  </Modal>
);

const Modal5 = ({ onRequestClose, ...otherProps }) => (
  <Modal
    isOpen
    onRequestClose={onRequestClose}
    {...otherProps}
    style={{ overlay: {}, content: { backgroundColor: "transparent", border: "none !important",width: '106%', padding: '20px',marginLeft: '-52px'} }}
  >
    <button className="modalButton" onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-5">
      <div className="overlay-modal">
        <div className="modal-inside-text">
          <h1>Xposure</h1>
          <h4 style={{lineHeight: 3}}>
            | Angular | SQL | Node | Express | Javascript |
            EventBrite API |
          </h4>
          "A web app used to showcase your talents by setting up events and find events happening in
          your area."
        </div>
      </div>
    </div>
  </Modal>
);

const Modal6 = ({ onRequestClose, ...otherProps }) => (
  <Modal
    isOpen
    onRequestClose={onRequestClose}
    {...otherProps}
    style={{ overlay: {}, content: { backgroundColor: "transparent", border: "none !important",width: '106%', padding: '20px',marginLeft: '-52px' } }}
  >
    <button className="modalButton" onClick={onRequestClose}>close</button>
    <div className="modal-work-div-subcontent-6">
      <div className="overlay-modal">
        <div className="modal-inside-text">
          <h1>Xplor</h1>
          <h4 style={{lineHeight: 3}}>
            | Angular | HTML5 | CSS | Javascript | Yelp API | Google Maps API |
          </h4>
          " A web app used to search by city anywhere in the world and find the
          top places to visit ranking from highest to lowest."
        </div>
      </div>
    </div>
  </Modal>
);

export default class Work extends Component {
  render() {
    return (
      <div>
        <div className="main-work-div">
          <div className="header-work-div">
            <div className="header-work-div-overlay">
            <p className="header-work-div-title">Past Work</p>
            </div>
          </div>
        </div>
        <div className="lower-work-div">
          <div class="diagonal-box">
            <div class="content">
              <div class="grid">
                <figure class="effect-romeo">
                  <img
                    src={require("../../assets/ohhoney1.jpg")}
                    alt="img17"
                    style={{
                      backgroundPosition: "top",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "100%",
                    }}
                  />
                  <figcaption>
                    <h2>
                      Ohhoney<span>.net</span>
                    </h2>
                    <ModalProvider>
                      <ModalRoot />
                      <ModalConsumer>
                        {({ showModal }) => (
                          <Fragment>
                            <div
                              style={{
                                width: "101%",
                                marginLeft: "-1px",
                                height: "inherit",
                                backgroundColor: "rgba(0,0,0,0.5)",
                              }}
                              onClick={() => showModal(Modal1)}
                            ></div>
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
                  <img
                    src={require("../../assets/AMLandscaping.jpg")}
                    alt="img17"
                    style={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "100%",
                    }}
                  />
                  <figcaption>
                    <h2>
                      AM <span> Landscaping</span>
                    </h2>
                    <ModalProvider>
                      <ModalRoot />
                      <ModalConsumer>
                        {({ showModal }) => (
                          <Fragment>
                            <div
                              style={{
                                width: "101%",
                                marginLeft: "-1px",
                                height: "inherit",
                                backgroundColor: "rgba(0,0,0,0.5)",
                              }}
                              onClick={() => showModal(Modal2)}
                            ></div>
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
                  <img
                    src={require("../../assets/techchat1.jpg")}
                    alt="img17"
                    style={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "100%",
                    }}
                  />
                  <figcaption>
                    <h2>
                      Tech<span>Chat</span>
                    </h2>
                    <ModalProvider>
                      <ModalRoot />
                      <ModalConsumer>
                        {({ showModal }) => (
                          <Fragment>
                            <div
                              style={{
                                width: "101%",
                                marginLeft: "-1px",
                                height: "inherit",
                                backgroundColor: "rgba(0,0,0,0.5)",
                              }}
                              onClick={() => showModal(Modal3)}
                            ></div>
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
                  <img
                    src={require("../../assets/carlslist2.jpg")}
                    alt="img17"
                    style={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "100%",
                    }}
                  />
                  <figcaption>
                    <h2>
                      Carls<span>List</span>
                    </h2>
                    <ModalProvider>
                      <ModalRoot />
                      <ModalConsumer>
                        {({ showModal }) => (
                          <Fragment>
                            <div
                              style={{
                                width: "101%",
                                marginLeft: "-1px",
                                height: "inherit",
                                backgroundColor: "rgba(0,0,0,0.5)",
                              }}
                              onClick={() => showModal(Modal4)}
                            ></div>
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
                  <img
                    src={require("../../assets/xposure1.jpg")}
                    alt="img17"
                    style={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "100%",
                    }}
                  />
                  <figcaption>
                    <h2>
                      X<span>posure</span>
                    </h2>
                    <ModalProvider>
                      <ModalRoot />
                      <ModalConsumer>
                        {({ showModal }) => (
                          <Fragment>
                            <div
                              style={{
                                width: "101%",
                                marginLeft: "-1px",
                                height: "inherit",
                                backgroundColor: "rgba(0,0,0,0.5)",
                              }}
                              onClick={() => showModal(Modal5)}
                            ></div>
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
                  <img
                    src={require("../../assets/xplor1.jpg")}
                    alt="img17"
                    style={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "100%",
                    }}
                  />
                  <figcaption>
                    <h2>
                      X<span>Plor</span>
                    </h2>
                    <ModalProvider>
                      <ModalRoot />
                      <ModalConsumer>
                        {({ showModal }) => (
                          <Fragment>
                            <div
                              style={{
                                width: "101%",
                                marginLeft: "-1px",
                                height: "inherit",
                                backgroundColor: "rgba(0,0,0,0.5)",
                              }}
                              onClick={() => showModal(Modal6)}
                            ></div>
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
