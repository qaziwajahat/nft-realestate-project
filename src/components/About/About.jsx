import React from "react";
import "./about.css";
import "react-slideshow-image/dist/styles.css";
import Slide from "./Slide";
import Card from "./Card";
import i9 from "../../assets/i9.jpg"
import i10 from "../../assets/i10.jpg"
import i11 from "../../assets/i11.jpg"


const About = () => {
  const srcImg = [
    i9,i10,i11
  ];
  return (
    <>
      <div id="About" className="dataaa">
        <div className="container">
          <div className="row">
            <div className="col-md-8 d-flex">
              <h1 className="homeHeading2">
                <span className="span-color"> MEET </span>THE NFT'S META HOUSE
                ART
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="dataaa">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row gy-1">
                <Slide />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dataaa">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex">
              <h1 className="homeHeading2">
                <span className="span-color"> TOP </span>META HOUSE NFTs
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="dataaa">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row gy-4">
                {srcImg.map((val, ind) => {
                  if (srcImg.length === 0) return <h1>Loading......</h1>;
                  return <Card key={ind} imgsrc={val} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
