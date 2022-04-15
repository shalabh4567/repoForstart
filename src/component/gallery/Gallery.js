import React from "react";
import "./Gallery.css";
import Display1 from "../../images/display1.jfif";
import Display2 from "../../images/display2.jfif";
import Display3 from "../../images/display3.jfif";

const gallery = () => {
  return (
    <div className="gallery">
      <h1>Features</h1>
      <div className="gallery-inner">
        <div className="gallery-written">
          <img src={Display1} />
        </div>
        <div className="gallery-written">
          <img src={Display2} />
        </div>
        <div className="gallery-written">
          <img src={Display3} />
        </div>
      </div>
    </div>
  );
};

export default gallery;
