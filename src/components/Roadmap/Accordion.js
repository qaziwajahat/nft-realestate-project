import React, { useState } from "react";
import "./roadmap.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="row">
      <div className="col-md-10 mx-auto my-auto  bg-black">
        <div className="accordion-item bg-black ">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="inlineLeft">{title}</div>
            <div className="inlineRight">{isActive ? "-" : "+"}</div>
            <div>
              <hr
                style={{
                  color: "red",
                  height: 3,
                }}
              />
            </div>
          </div>
          {isActive && (
            <div className="accordion-content accContent">
              {content} <br />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
