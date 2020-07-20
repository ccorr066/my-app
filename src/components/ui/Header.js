import React from "react"
import logo from "../../img/Landlord Review-logo/landlordReview.svg"
import LandingModal from "../ui/LandingModal"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-light" id="mainNav">
        <Link to="/">
          <img src={logo} className="justify-content-start" alt="" />
        </Link>
        <LandingModal />
      </nav>
    </>
  )
}
