import React from "react"
import PeterGriffin404 from "../../img/peterGriffin404.jpg"

// have sound  work on the page
// aligning the picture to be center
// place a simple background design

export default function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img src={PeterGriffin404} alt="" />
        </div>
      </div>
    </div>
  )
}
