import React from "react"
import { Link } from "react-router-dom"
import Header from "../ui/Header"
// import logo from "../../img/Landlord Review-logo/landlordReview.svg"
// import LandingModal from "../ui/LandingModal"

export default function Landing() {
  return (
    <>
      <div className="background-image">
        <div className="container">
          <div className="row">
            <Header />

            <h1 className="title text-center" style={{ marginTop: "-80px" }}>
              Get to Know your future Landlords and their rental properties.
            </h1>
          </div>

          <div className="col-12">
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
    </>
  )
}
