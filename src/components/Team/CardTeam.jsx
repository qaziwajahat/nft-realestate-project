import React from "react";
import "./Team.css";
const CardTeam = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto cardCustom">
        <div className="card ">
          <img src={props.imgsrc} className="card-img-top img-cus-card" alt="..." />
          <div className="card-body bg-black cardCustom">
            <h5 className="card-title cardHeading">{props.name}</h5>
            <a href="#Team" className="btn btn-Custom">{props.post}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTeam;
