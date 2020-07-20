import React from "react"
import { Link } from "react-router-dom"
import Header from "../ui/Header"

export default function MostRecentReview() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="card w-75"
              style={{
                width: "18rem",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <div className="card-body w-75">
                <h5 className="card-title">Address</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/create-review" className="card-link">
                  Card link
                </Link>
              </div>
            </div>
            <div
              className="card w-75"
              style={{ width: "18rem", marginBottom: "20px" }}
            >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/create-review" className="card-link">
                  Card link
                </Link>
              </div>
            </div>
            <div
              className="card w-75"
              style={{ width: "18rem", marginBottom: "20px" }}
            >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/create-review" className="card-link">
                  Card link
                </Link>
              </div>
            </div>
            <div
              className="card w-75"
              style={{ width: "18rem", marginBottom: "20px" }}
            >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/create-review" className="card-link">
                  Card link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// will list out mostrecent reviews
