import React from "react"
import logo from "../../img/Landlord Review-logo/landlordReview.svg"
import { Link } from "react-router-dom"
import LandingModal from "../ui/LandingModal"
import ReactStars from "react-rating-stars-component"

export default class CreateReview extends React.Component {
  constructor() {
    super()
    this.state = { rating: 0 }
  }
  ratingChanged(newRating) {
    console.log(newRating)
  }

  render() {
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
                <LandingModal />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card" id="reviewCard">
              <div className="card-body">
                <h5 className="card-title border-0">
                  {" "}
                  174 Solid Lime St., Enterprise, NV 89187
                </h5>
                <div className="d-inline">
                  <h6 className="card-subtitle mb-2 text-muted mb-10">
                    <ReactStars
                      count={5}
                      onChange={this.ratingChanged}
                      size={24}
                      activeColor="red"
                      isHalf={true}
                    />
                  </h6>
                  <div>
                    <div className="custom-control custom-control-inline custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="customControlValidation2"
                        name="radio-stacked"
                        required
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customControlValidation2"
                      >
                        LandLord
                      </label>
                    </div>
                    <div className="custom-control custom-control-inline custom-radio mb-3">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="customControlValidation3"
                        name="radio-stacked"
                        required
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customControlValidation3"
                      >
                        Property Manager
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <textarea
                    rows="3"
                    col="40"
                    autoFocus={true}
                    // defaultValue={""}
                    className="form-control z-depth-1"
                    id="textBox"
                  >
                    Pros:
                  </textarea>
                  <textarea
                    rows="3"
                    col="40"
                    // defaultValue={""}
                    className="form-control z-depth-1"
                    id="textBox"
                  >
                    Cons:
                  </textarea>
                  <div className="form-check" style={{ marginTop: "20px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck1"
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      Remain Anonymous
                    </label>

                    <Link
                      to="/most-recent-review"
                      className="btn btn-secondary float-right"
                      type="submit"
                    >
                      Submit
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
}

// add time stamp on the botton of the card

// modal title revision
// if user wants to edit, we can either make them go back to the createview page or do it from the modal????
//the button inside the modal will route to most recentreview
