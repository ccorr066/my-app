import React from "react"

// add state to the input boxes
export default function Login() {
  return (
    <div className="col-xl-5 col-sm-6 col-12 modalCard">
      <div className="card">
        <div className="card-body text-dark text-sans">
          <h2 className="card-title text-serif">Welcome back</h2>
          <p className="mb-4">Log in with your email address and password</p>

          <label className="input-text text-muted" htmlFor="email-input">
            Email address
          </label>
          <input
            className="form-control thick-border"
            type="text"
            id="welcome-back"
          />
          <p
            id="warning-welcome-email"
            className="mb-4 invalid-feedback"
            style={{ display: "none", fontSize: "13px" }}
          >
            Please enter your email address.
          </p>
          <h4 className="text-muted mt-2">Password</h4>
          <input
            className="form-control thick-border"
            type="password"
            id="welcome-password"
          />
          <p
            id="warning-welcome-password"
            className="mb-4 invalid-feedback"
            style={{ display: "none", fontSize: "13px" }}
          >
            Please enter your password.
          </p>
          <p
            id="warning-welcome-password-characters"
            className="invalid-feedback"
            style={{ display: "none", fontSize: "13px" }}
          >
            Your password must be at least 9 characters.
          </p>
          <div className="float-right">
            <button
              type="submit"
              className="btn btn-success mt-5 btn-lg mt-4"
              id="log-in"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
