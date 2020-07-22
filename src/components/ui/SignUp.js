import React from "react"
import classnames from "classnames"
import hash from "object-hash"
import { v4 as getUuid } from "uuid"
import { Link } from "react-router-dom"

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)
    console.log("Im in a new class component")
    this.state = {
      isDisplayingInputs: false,
      emailError: "",
      passwordError: "",
      fullNameError: "",
      hasEmailError: false,
      hasPasswordError: false,
      hasFullNameError: false,
    }
  }

  toggleSignUpInputs() {
    this.setState({
      isDisplayingInputs: true,
    })
  }
  async setEmailState(emailInput) {
    //eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const lowerCaseEmailInput = emailInput.toLowerCase()

    if (emailInput === "")
      this.setState({
        emailError: "Please enter your email address. ",
        hasEmailError: true,
      })
    else if (emailRegex.test(lowerCaseEmailInput) === false) {
      console.log(" NOT A VALID EMAIL")
      this.setState({
        emailError: "Please enter a valid email address. ",
        hasEmailError: true,
      })
    } else {
      this.setState({ emailError: "", hasEmailError: false })
    }
  }

  checkHasLocalPart(passwordInput, emailInput) {
    const localPart = emailInput.split("@")[0]
    if (localPart === "") return false
    else if (localPart.length < 4) return false
    else return passwordInput.includes(localPart)
  }
  async setPasswordState(passwordInput, emailInput) {
    console.log(passwordInput)
    const uniqChars = [...new Set(passwordInput)]

    if (passwordInput === "")
      this.setState({
        passwordError: "Please create your password. ",
        hasPasswordError: true,
      })
    else if (passwordInput.length < 9) {
      this.setState({
        passwordError: "Your Password must be at least 9 characters. ",
        hasPasswordError: true,
      })
    } else if (this.checkHasLocalPart(passwordInput, emailInput)) {
      this.setState({
        passwordError:
          "For your safety, your password cannot contain your email address. ",
        hasPasswordError: true,
      })
    } else if (uniqChars.length < 3) {
      this.setState({
        passwordError:
          "For your safety, your password must contain ar least 3 unique characters",
        hasPasswordError: true,
      })
    } else {
      this.setState({ passwordError: "", hasPasswordError: false })
    }
  }
  async setFullNameState(fullNameInput) {
    //eslint-disable-next-line
    const lowerCaseFullName = fullNameInput.toLowerCase()

    if (fullNameInput.length === 0) {
      this.setState({
        fullNameError: "Please enter your full name. ",
        hasFullNameError: true,
      })
    } else {
      this.setState({ fullNameError: "", hasFullNameError: false })
    }
  }

  async validateAndCreateUser() {
    const emailInput = document.getElementById("email-input").value
    const passwordInput = document.getElementById("password-input").value
    const fullNameInput = document.getElementById("full-name-input").value
    await this.setEmailState(emailInput)
    await this.setPasswordState(passwordInput, emailInput)
    await this.setFullNameState(fullNameInput)
    if (
      this.state.hasEmailError === false &&
      this.state.hasPasswordError === false
    ) {
      const user = {
        id: getUuid(),
        fullName: fullNameInput,
        email: emailInput,
        passwordInput: hash(passwordInput),
        createdAt: Date.now(),
      }
      console.log(user)
    }
  }

  render() {
    return (
      <div className="col-xl-5 col-sm-6 col-12 modalCard">
        <div className="card">
          <div className="card-body text-sans">
            <h2 className="card-title text-serif">
              Welcome to Landlord Review{" "}
            </h2>
            <p className="card-text mb-4">Let's Evaluate your Experience.</p>
            {this.state.isDisplayingInputs && (
              <>
                <p
                  style={{ color: "blue", fontSize: "13px" }}
                  className="mb-3"
                  id="sign-up-text"
                >
                  Let's get you signed up.
                </p>
                <form>
                  <div class="form-row">
                    <div class="col">
                      <h4 className="text-muted mt-4">Full Name</h4>
                      <input
                        type="text"
                        className={classnames({
                          "form-control": true,
                          "is-invalid": this.state.hasFullNameError,
                        })}
                        id="full-name-input"
                      />
                      {this.state.hasFullNameError && (
                        <p
                          id="full-name-error"
                          className="mb-2 text-danger"
                          style={{ fontSize: "13px" }}
                        >
                          {this.state.fullNameError}
                        </p>
                      )}
                    </div>
                  </div>
                </form>

                <div id="drop-assign">
                  <h4 className="text-muted mt-4">Email address</h4>
                  <input
                    className={classnames({
                      "form-control": true,
                      "mb-2": true,
                      "is-invalid": this.state.hasEmailError,
                    })}
                    type="email"
                    id="email-input"
                  />
                  {this.state.hasEmailError && (
                    <p
                      id="error-email"
                      className="mb-4 text-danger"
                      style={{ fontSize: "13px" }}
                    >
                      {this.state.emailError}
                    </p>
                  )}
                  <p
                    className="mb-4 text-danger"
                    style={{ fontSize: "13px" }}
                  ></p>
                  <h4 className="text-muted">Create a password</h4>
                  <input
                    className={classnames({
                      "form-control": true,
                      "is-invalid": this.state.hasPasswordError,
                    })}
                    type="password"
                    id="password-input"
                  />
                  {this.state.hasPasswordError && (
                    <p
                      id="passwordError"
                      className="text-danger"
                      style={{ fontSize: "13px" }}
                    >
                      {this.state.passwordError}
                    </p>
                  )}
                  <Link
                    to="/"
                    type="button"
                    className="mt-4 btn btn-success btn-block"
                    id="lets-go"
                    onClick={() => {
                      this.validateAndCreateUser()
                    }}
                  >
                    Let's go!
                  </Link>
                </div>
              </>
            )}

            {!this.state.isDisplayingInputs && (
              <button
                type="button"
                className="btn btn-success btn-block mt-3"
                id="sign-up"
                onClick={() => {
                  this.toggleSignUpInputs()
                }}
              >
                Sign up
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
