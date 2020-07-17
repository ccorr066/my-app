import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CreateReview() {
  return (
    <>
      <div class="card">
        <h5 class="card-header">
          Address of home
          <FontAwesomeIcon icon={"fa-star-o"} />
        </h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
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
                Toggle this custom radio
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
                Or toggle this other custom radio
              </label>
              <div className="invalid-feedback">
                More example invalid feedback text
              </div>
            </div>
            <div className="form-group">
              <select className="custom-select" required>
                <option default>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
              <div className="invalid-feedback">
                Example invalid custom select feedback
              </div>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" for="defaultCheck1">
                Default checkbox
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
                disabled
              />
              <label className="form-check-label" for="defaultCheck2">
                Disabled checkbox
              </label>
            </div>
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <input
            class="btn btn-primary justify-content-end"
            type="submit"
            value="Submit"
          />
        </div>
      </div>
    </>
  )
}

// add time stamp on the botton of the card
//move button to the right. the button will bring the modal up.
// modal title revision
// if user wants to edit, we can either make them go back to the createview page or do it from the modal????
//the button inside the modal will route to most recentreview
