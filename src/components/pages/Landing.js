import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Landlord Review-logo/landlordReview.svg";
import LandingModal from "../ui/LandingModal";
// import logo from "../../img/Landlord Review-logo/landlordReview.svg"
// import LandingModal from "../ui/LandingModal"

export default function Landing() {
  return (
    <>
      <div className="background-image">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Link to="/">
                <img src={logo} style={{ marginTop: "-20px" }} alt="" />
              </Link>
            </div>

            <div className="col-7"></div>
            <div className="col-3">
              {" "}
              <LandingModal />
            </div>
          </div>
        </div>

        <h1
          className="text-brand text-white text-center"
          style={{ marginBottom: "40px" }}
        >
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
    </>
  );
}
