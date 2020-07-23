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
              <img src={logo} className="float-left" alt="" />
            </Link>
          </div>
          <div className="col-12">
            <LandingModal />
          </div>
        </div>
      </div>
    </>
  )
}
