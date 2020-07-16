import React from "react"
import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <>
      <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="navLink">
                <Link to="/login-signup">Sign Up | Login</Link>
              </p>
            </div>
            <div className="modal-footer">
              <button
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
      <div className="background-image">
        <nav className="navbar navbar-light bg-light">
          <p className="navLink">
            <Link to="/login-signup">Sign Up | Login</Link>
          </p>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="title text-center">
                Get to Know your future Landlords and their rental properties.
              </h1>
              <p className="subTitle text-center">
                Search your city below to read reviews now!
              </p>

              <form className="form-inline">
                <input
                  className="form-control justify-content-center"
                  type="search"
                  id="searchBar"
                  placeholder="Search for your address, zip code, or city "
                  aria-label="Search"
                />
                <Link
                  to="/search-it"
                  id="searchButton"
                  className="btn btn-outline-success"
                  type="submit"
                >
                  Search
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
