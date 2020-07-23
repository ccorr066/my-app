import React from "react"
import { Link } from "react-router-dom"
import starIcon from "../../icons/star-regular.svg"
import Header from "../ui/Header"

export default function SearchIt() {
  return (
    <>
      <div id="background-buildings">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header />
            </div>
            <div className="col-12">
              <div
                className="card w-75"
                style={{
                  width: "18rem",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                <div className="card-body border-0">
                  <h5 className="card-title ">Card title</h5>
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
                    <img
                      src={starIcon}
                      alt=""
                      className="star"
                      style={{ width: "20px" }}
                    />
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
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
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
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
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
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
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                    <img src={starIcon} alt="" style={{ width: "20px" }} />
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/create-review" className="card-link float-right">
                    Create a Review
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
