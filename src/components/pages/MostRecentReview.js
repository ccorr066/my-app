import React from "react"
import starIcon from "../../icons/star-regular.svg"
import Header from "../ui/Header"

export default function MostRecentReview() {
  return (
    <>
      <div id="background-buildings">
        <div className="container">
          <div className="row">
            <Header />
            <div
              className="card w-75"
              style={{
                width: "18rem",
                marginBottom: "20px",
                marginTop: "40px",
              }}
            >
              <div className="card-body w-75">
                <h5 className="card-title">Address</h5>
                <h6 className="card-subtitle mb-2 text-muted">
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div
              className="card w-75"
              style={{ width: "18rem", marginBottom: "20px" }}
            >
              <div className="card-body">
                <h5 className="card-title">Address</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  <img src={starIcon} alt="" style={{ width: "20px" }} />
                  <img src={starIcon} alt="" style={{ width: "20px" }} />
                  <img src={starIcon} alt="" style={{ width: "20px" }} />
                  <img src={starIcon} alt="" style={{ width: "20px" }} />
                  <img src={starIcon} alt="" style={{ width: "20px" }} />{" "}
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div
              className="card w-75"
              style={{ width: "18rem", marginBottom: "20px" }}
            >
              <div className="card-body">
                <h5 className="card-title">Address</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  <img src={starIcon} alt="" style={{ width: "20px" }} />
                  <img src={starIcon} alt="" style={{ width: "20px" }} />
                  <img src={starIcon} alt="" style={{ width: "20px" }} />
                  <img src={starIcon} alt="" style={{ width: "20px" }} />
                  <img src={starIcon} alt="" style={{ width: "20px" }} />{" "}
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div
              className="card w-75"
              style={{ width: "18rem", marginBottom: "20px" }}
            >
              <div className="card-body">
                <h5 className="card-title">Address</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  <img src={starIcon} alt="" style={{ width: "20px" }} />
                  <img src={starIcon} alt="" style={{ width: "20px" }} />
                  <img src={starIcon} alt="" style={{ width: "20px" }} />
                  <img src={starIcon} alt="" style={{ width: "20px" }} />
                  <img src={starIcon} alt="" style={{ width: "20px" }} />{" "}
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// will list out mostrecent reviews
