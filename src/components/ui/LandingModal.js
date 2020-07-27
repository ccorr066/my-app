import React from "react";
import classnames from "classnames";
import SignUp from "../ui/SignUp";
import Login from "../ui/Login";
// import { Link } from "react-router-dom"

// fix the design on the cards.
// adjust both cards to have margin from the border and each other
// change color on layout

export default class LandingModal extends React.Component {
  constructor() {
<<<<<<< HEAD
    super()
    this.state = { setShow: false, isLoggedIn: false }
  }

  handleClose() {
    this.handleLoginStatus()
    this.setState({ setShow: false })
=======
    super();
    this.state = { setShow: false, isLoggedIn: false };
  }

  handleClose() {
    this.handleLoginStatus();
    this.setState({ setShow: false });
>>>>>>> 3aaf0cf7c08bd6d60d83480665bdec766c9eee33
  }

  handleShow() {
    this.setState({ setShow: true });
  }

  handleLoginStatus() {
    let toggle = !this.state.isLoggedIn;
    this.setState({ isLoggedIn: toggle });
  }

  handleLoginStatus() {
    let toggle = !this.state.isLoggedIn
    this.setState({ isLoggedIn: toggle })
  }

  render() {
<<<<<<< HEAD
    const loginState = this.state.isLoggedIn
    let btnText
    if (loginState === true) {
      btnText = "Logout"
    } else {
      btnText = "Signup | Login"
=======
    const loginState = this.state.isLoggedIn;
    let btnText;
    if (loginState === true) {
      btnText = "Logout";
    } else {
      btnText = "Signup | Login";
>>>>>>> 3aaf0cf7c08bd6d60d83480665bdec766c9eee33
    }
    return (
      <>
        <button
          onClick={() => this.handleShow()}
          type="button"
          id="navSigninButton"
          className="btn btn-primary float-right"
          style={{
            marginTop: "70px",
          }}
          data-toggle="modal"
          data-target="#exampleModal"
        >
          {btnText}
        </button>
        <div
          className={classnames("modal fade", {
            modalHack: this.state.setShow,
          })}
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header border-0"></div>
              <div className={classnames({ modalBody: this.state.setClose })}>
                <div className="row">
                  <SignUp handleClick={this.handleClose.bind()} />

                  <Login />
                </div>
                <div className="modal-footer border-0">
                  <button
                    onClick={() => this.handleClose()}
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
