import React from "react";
import "./Team.css";
// import "react-slideshow-image/dist/styles.css";
import CardTeam from "./CardTeam";
import t1 from "../../assets/t1.jpg"
import t2 from "../../assets/t2.jpg"
import t3 from "../../assets/t3.jpg"


import { FaTwitter, FaInstagram, FaMask } from "react-icons/fa";
const About = () => {
  const fontStyles = { color: "white", fontSize: "4rem", paddingLeft: "2rem" };
  const srcImg = [
    {
      name: "Nikol",
      post:"Designer",
      src: t1,
      insta:"https://instagram.com/the_real_nikol?utm_medium=copy_link"
    },
    {
      name: "Natan Usupov",
      post:"CEO",
      src: t2,
      insta: "https://instagram.com/natan_usupov?utm_medium=copy_link"
    },
    {
      name: "Basement_Dev",
      post:"Developer",
      src:t3,
      insta:""
        },
    
  ];
  return (
    <>
      <div id="Team" className="dataTeam">
        <div className="container">
          <div className="row">
            <div className="col-8 d-flex">
              <h1 className="homeHeading2">
                <span className="span-color"> NFTREALESTATE </span>TEAM
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="dataTeam">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row gy-4">
                {srcImg.map((val, ind) => {
                  if (srcImg.length === 0) return <h1>Loading......</h1>;
                  return (
                    <CardTeam key={ind} imgsrc={val.src} name={val.name} post={val.post} insta={val.insta} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dataTeam2 bg">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <h1 className="homeHeading2">
                <span className="span-color"> JOIN </span>OUR COMMUNITY
              </h1>
              <p className="TeamPara">
                Come join the community now to follow our latest announcements,
                and participate
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dataFooter ">
        <div className="container">
          <div className="row">
            <div className="col-7 mx-auto">
              <p className="TeamPara">Copyright © 2021 nftsrealestate</p>
            </div>
            <div className="col-5 mx-auto">
              <a href="https://discord.gg/P4N5DVuQaK">
              <FaMask style={fontStyles} />
              </a>
              <a href="https://twitter.com/NftsReal">
              <FaTwitter style={fontStyles} />
              </a>
              <a href="https://instagram.com/nfts_real_estate?utm_medium=copy_link">

              <FaInstagram style={fontStyles} />
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
