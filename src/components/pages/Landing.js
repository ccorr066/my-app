import React from "react"
import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand"></Link>
        <p className="navLink">
          <Link to="/login-signup">Write A Review</Link>
        </p>
        <p className="navLink">
          <Link to="/login-signup">Sign Up / Login</Link>
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
            <div className="mt-10">
              <form className="form-inline">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for your address, zip code, or city "
                  aria-label="Search"
                />
                <Link
                  to="/search-it"
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
