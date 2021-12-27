import React from "react";
import logo from "../../assets/logo.jpg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-fluid navBar">
      <div className="row">
        <div className=" col-12 mx-auto">
          <nav className=" navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <a href="#Home" className="navbar-brand a" to="/">
                <img src={logo} alt="Logo" />
              </a>
              <button
                className="navbar-toggler bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a href="#Home" className={`nav-link navLink `} to="/">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#About" className={`nav-link navLink `}>
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#Roadmap" className={`nav-link navLink `}>
                      ROADMAP
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#Team" className={`nav-link navLink `}>
                      TEAM
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#Buynft" className={`nav-link `}>
                      <button class="btn btn-warning nav-btn-nav">
                        Buy NFT
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="https://opensea.io/" className={`nav-link `}>
                      <button type="button" class="btn btn-warning nav-btn-nav">
                        OPENSEA
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
