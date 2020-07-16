import React from "react"
import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <>
      <div className="background-image">
        <nav className="navbar navbar-light bg-light">
          <p className="navLink">
            <button
              type="button"
              className="btn btn-link"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Sign Up | Login
            </button>
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

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
