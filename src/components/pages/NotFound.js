import React from "react"
import ReactAudioPlayer from "react-audio-player"
import PeterGriffinLaugh from "../../img/01 www.101soundboards.com.mp3"
import PeterGriffin404 from "../../img/peterGriffin404.jpg"
export default function NotFound() {
  return (
    <div className="container ">
      <div className="row mt-10">
        <div className="col-12">
          <img src={PeterGriffin404} alt="" />
          <ReactAudioPlayer src={PeterGriffinLaugh} autoPlay />
        </div>
      </div>
    </div>
  )
}
