import React from "react"
import { Link } from "react-router-dom"
import logo from "../../img/Landlord Review-logo/landlordReview.svg"
import starIcon from "../../icons/star-regular.svg"
import LandingModal from "../ui/LandingModal"

export default function SearchIt() {
  return (
    <>
      <div id="background-buildings">
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
        <div className="col-12">
          <div
            className="card w-75"
            style={{
              width: "18rem",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            <div className="card-body border-0">
              <h5 className="card-title ">
                174 Solid Lime St., Enterprise, NV 89187
              </h5>
              <h5 className="card-title text-muted">PLC Holdings LLC</h5>
              <h6 className="card-subtitle">
                <img
                  src={starIcon}
                  alt=""
                  className="star"
                  style={{ width: "20px" }}
                />
                <img
                  src={starIcon}
                  alt=""
                  className="star"
                  style={{ width: "20px" }}
                />
              </h6>
              <p className="card-text">
                I rented this house for four years and all four years were hell
                dealing with this landlord. We payed our rent on time every
                month and yet we still had to fight to get any repairs or
                maintenance done on the property. While the neighborhood was
                initially every quiet, once the houses began to fill, the
                parking situation was horrid - we'd be required to park 4 blocks
                away in a community parking area often. The landlord was very
                difficult to deal with when it came to any maintenance on the
                house.
              </p>
              <p className="d-inline p-2 text-muted">June 22, 2020</p>
              <Link to="/create-review" className="card-link float-right">
                Create a Review
              </Link>
            </div>
          </div>
          <div
            className="card w-75"
            style={{ width: "18rem", marginBottom: "20px" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                770 Claughton Island Drive, Enterprise, NV 89187
              </h5>
              <h5 className="card-title text-muted">ANONYMOUS</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <img src={starIcon} alt="" style={{ width: "20px" }} />
              </h6>
              <p className="card-text">
                This is one of the worst areas of town to live in. Expect cock
                roaches and bed bugs as roommates, no matter how clean you are.
                The apartments are a decent price, however they hire
                untrustworthy ex-cons to watch over the place and protect their
                residents. One security guard in particular sexually harasses
                the female tenants, using his tenure and authority to take
                advantage whenever possible. Property management is not
                friendly. Because the management is corrupt, there are too many
                evictions.
              </p>
              <p className="d-inline p-2 text-muted">May 02, 2020</p>
              <Link to="/create-review" className="card-link float-right">
                Create a Review
              </Link>
            </div>
          </div>
          <div
            className="card w-75"
            style={{ width: "18rem", marginBottom: "20px" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                7540 SW 59TH Court, Enterprise, NV 89187
              </h5>
              <h5 className="card-title text-muted">Nolan Garcia</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <img src={starIcon} alt="" style={{ width: "20px" }} />
                <img src={starIcon} alt="" style={{ width: "20px" }} />
                <img src={starIcon} alt="" style={{ width: "20px" }} />
                <img src={starIcon} alt="" style={{ width: "20px" }} />
                <img src={starIcon} alt="" style={{ width: "20px" }} />
              </h6>
              <p className="card-text">
                The landlord at this building is one of the sweetest, kindest
                property owners my wife and I have ever had the pleasure of
                knowing. They are quick to correct issues and always friendly
                and fair. We could not have asked for a better experience
              </p>
              <p className="d-inline p-2 text-muted">July 11, 2020</p>
              <Link to="/create-review" className="card-link float-right">
                Create a Review
              </Link>
            </div>
          </div>
          <div
            className="card w-75"
            style={{ width: "18rem", marginBottom: "20px" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                100 Edgewater Drive, Enterprise, NV 89187
              </h5>
              <h5 className="card-title text-muted">
                Don't Play With Your Girl
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <img src={starIcon} alt="" style={{ width: "20px" }} />
                <img src={starIcon} alt="" style={{ width: "20px" }} />
              </h6>
              <p className="card-text">
                Stay far away from Unit 223 and Landlord, Reggie Kaminsky. The
                bottom line is that the only thing Reggie cares about is money.
                She is an inflexible human being that is incapable of
                negotiating with another person on even the most insignificant
                of things. She constantly made up lies about her expenses going
                up to try to extort more rent money from me. When my lease was
                up she refused to meet me for a final walkthrough and then tried
                to charge me for numerous things that fall under the landlords
                responsibility, and when I confronted her about it she backed
                down and agreed to return my full deposit. Of course when I
                received my deposit back, she had flat out lied to me and took
                out money for bogus things. She of course made sure to take
                enough money (about 10%) to make it worth her while, while
                keeping is small enough that it wouldn't be worth my while
                making a stink about it. She is stuck in the distant past and
                little to no people skills. She does not use email nor does she
                offer electronic payment. Instead she communicates with the
                tenant through letters sent via snail mail, shows up
                unannounced, adds unreasonable terms to her contract, refuses to
                negotiate for anything, charges a cleaning fee for items that
                are the landlords responsibility and basically treats her
                tenants like second class citizens. I should have recognized the
                red flags when I observed her heatedly arguing with the previous
                tenant when I was moving in. If I was a business and chose to
                work with Reggie a first time, I would most certainly never work
                with her a second time.
              </p>
              <p className="d-inline p-2 text-muted">May 17, 2020</p>
              <Link to="/create-review" className="card-link float-right">
                Create a Review
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
