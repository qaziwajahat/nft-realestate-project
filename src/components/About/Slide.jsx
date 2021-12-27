import React from "react";
import { Slide } from "react-slideshow-image";
import "./about.css";
import i3 from "../../assets/i3.jpg"
import i4 from "../../assets/i4.jpg"
import i5 from "../../assets/i5.jpg"
import i6 from "../../assets/i6.jpg"
import i7 from "../../assets/i7.jpg"
import i8 from "../../assets/i8.jpg"

const MultipleSlidesExample = () => {
  const style = {
    textAlign: "center",
    padding: "20.rem ",
    fontSize: "3.0rem",
  };

  const properties = {
    duration: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    indicators: true,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <Slide {...properties}>
            <div style={style}>
              <img
                className="imageSlide"
                src={i3}
                alt="No"
              />
            </div>
            <div style={style}>
              <img
                className="imageSlide"
                src={i4}
                alt="No"
              />
            </div>
            <div style={style}>
              <img
                className="imageSlide"
                src={i5}
                alt="No"
              />
            </div>
            <div style={style}>
              <img
                className="imageSlide"
                src={i6}
                alt="No"
              />
            </div>
            <div style={style}>
              <img
                className="imageSlide"
                src={i7}
                alt="No"
              />
            </div>
            <div style={style}>
              <img
                className="imageSlide"
                
                src={i8}
                alt="No"
              />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default MultipleSlidesExample;
