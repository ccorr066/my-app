import React from "react"
import classnames from "classnames"
import SignUp from "../ui/SignUp"
import Login from "../ui/Login"
// import { Link } from "react-router-dom"

// fix the design on the cards.
// adjust both cards to have margin from the border and each other
// change color on layout

export default class LandingModal extends React.Component {
  constructor() {
    super()
    this.state = { setShow: false }
  }

  handleClose() {
    this.setState({ setShow: false })
  }

  handleShow() {
    this.setState({ setShow: true })
  }

  render() {
    return (
      <>
        <button
          onClick={() => this.handleShow()}
          type="button"
          id="navSigninButton"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{
            marginTop: "25px",
            marginBottom: "80px",
            marginLeft: "939px",
          }}
        >
          Sign Up | Login
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
                  <SignUp />

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
    )
  }
}
