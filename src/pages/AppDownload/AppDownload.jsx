import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

export default function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p>
        Pentru O Experienta Mai Buna Descarca <br /> Udemy - Online Courses
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />

        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}
