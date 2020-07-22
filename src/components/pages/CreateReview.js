import React from "react"
import starIcon from "../../icons/star-regular.svg"
import { Link } from "react-router-dom"
import Header from "../ui/Header"

export default function CreateReview() {
  return (
    <>
      <div id="background-buildings">
        <div className="container">
          <Header />

          <div class="card">
            <h5 class="card-header">Address of home</h5>
            <img src={starIcon} alt="" style={{ width: "20px" }} />
            <img src={starIcon} alt="" style={{ width: "20px" }} />
            <img src={starIcon} alt="" style={{ width: "20px" }} />
            <img src={starIcon} alt="" style={{ width: "20px" }} />
            <img src={starIcon} alt="" style={{ width: "20px" }} />

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
                for="customControlValidation2"
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
                for="customControlValidation3"
              >
                Property Manager
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1" />
              <label class="form-check-label" for="gridCheck1">
                Remain Anonymous
              </label>
            </div>
            <div class="card-body">
              <textarea
                rows="3"
                col="40"
                class="form-control z-depth-1"
                id="textBox"
              >
                Pros: Cons:
              </textarea>

              <Link
                to="/most-recent-review"
                id="CreateReviewSubmit"
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// add fontawesome stars in
// develop a state so when user wants to hover or click on the stars to rate propertys
// add time stamp on the botton of the card
//move button to the right. the button will bring the modal up.
// modal title revision
// if user wants to edit, we can either make them go back to the createview page or do it from the modal????
//the button inside the modal will route to most recentreview
