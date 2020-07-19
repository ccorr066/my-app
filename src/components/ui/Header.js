import React from "react"
import { Link } from "react-router-dom"
import LandingModal from "../ui/LandingModal"
import logo from "../../img/Landlord Review-logo/default.png"

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" type="logo" className="mr-2 ">
        <img src={logo} alt="" />
      </Link>
      <LandingModal />
    </nav>
  )
}
