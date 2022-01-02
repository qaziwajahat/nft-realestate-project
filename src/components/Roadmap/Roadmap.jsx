import React from "react";
import "./roadmap.css";
import Accordion from "./Accordion";
import { accordionData } from "./AccordionData";
import i12 from "../../assets/i12.jpg"

const Roadmap = () => {
  return (
    <>
      <div id="Roadmap" className="dataa">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              <h1 className="homeHeading2">NFT'S META HOUSE ROADMAP</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                className="iimage"
                src={i12}
                alt="No"
              />
            </div>
            <div className="col-md-6">
              {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Roadmap;
