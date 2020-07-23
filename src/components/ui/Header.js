import React from "react"
import logo from "../../img/Landlord Review-logo/landlordReview.svg"
import LandingModal from "../ui/LandingModal"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link to="/">
              <img
                src={logo}
                style={{ marginTop: "-56px", marginLeft: "-140px" }}
                alt=""
              />
            </Link>
          </div>

          <LandingModal />
        </div>
      </div>
    </>
  )
}
