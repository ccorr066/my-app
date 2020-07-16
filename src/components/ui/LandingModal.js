import React from "react"
import classnames from "classnames"

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
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Sign Up | Login
        </button>
        <div
          className={classnames("modal fade", {
            modalHack: this.state.setShow,
          })}
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header"></div>
              <div className={classnames({ modalBody: this.state.setClose })}>
                SignUp Login
              </div>
              <div className="modal-footer">
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
      </>
    )
  }
}