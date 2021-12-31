import React from "react";
import "./Team.css";
import { FaInstagram } from "react-icons/fa";

const CardTeam = (props) => {
  const fontStyles = { color: "white", fontSize: "5rem", padding: "1rem"  };

  return (
    <>
      <div className="col-md-4 col-10 mx-auto cardCustom">
        <div className="card ">
          <img src={props.imgsrc} className="card-img-top img-cus-card" alt="..." />
          <div className="card-body bg-black cardCustom">
            <a href={props.insta} target="_blank" className="card-title cardHeading">{props.name}</a>
            <div className="row">
              <div className="col-md-6">
                <a href={props.insta} target="_blank" className="btn btn-Custom">{props.post}</a>
              </div>
              <div className="col-md-6 p-3 ">
                <a href={props.insta} target="_blank" className="card-title align-items-center">
                  <FaInstagram  className="card-logo"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTeam;
