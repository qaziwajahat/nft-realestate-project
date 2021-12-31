import React from "react";
import Web3 from "web3";
import "./navbar.css";
import discord from "../../assests/social-logo.png"
import t from "../../assests/twiter.png"
import o from "../../assests/opensea.png"


const Navbar = ({ connectedAccount, setConnectedAccount }) => {
  async function connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const metaMaskAccount = await web3.eth.getAccounts();
      let splitedMetaMaskAddress;
      if (metaMaskAccount) {
        splitedMetaMaskAddress =
          metaMaskAccount[0].substring(0, 6) +
          "......" +
          metaMaskAccount[0].substring(
            metaMaskAccount[0].length - 4,
            metaMaskAccount[0].length
          );
      }
      setConnectedAccount(splitedMetaMaskAddress);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  return (
    <div className="container-fluid navBar">
      <div className="row">
        <div className=" col-md-12 ">
          <nav className=" navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <a href="#Home" className="navbar-brand a" to="/">
                <h2 className="logo">Logo here</h2>
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
                  <li className="nav-item bg-link">
                    <a href="#Home" className={`nav-link navLink `} to="/">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item bg-link">
                    <a href="#Mint" className={`nav-link navLink `}>
                      Mint
                    </a>
                  </li>
                  <li className="nav-item bg-link">
                    <a href="#Join" className={`nav-link navLink `}>
                      Join
                    </a>
                  </li>
                  {/* <li className="nav-item bg-link">
                    <a href="#Team" className={`nav-link navLink `}>
                      TEAM
                    </a>
                  </li> */}
                  <li className="nav-item  ">
                    <a href="#Buynft" className={`nav-link  `}>
                      <img  className="bg-social" src={discord} alt="No Pic" />
                    </a>
                  </li>
                  <li className="nav-item  ">
                    <a href="#Buynft" className={`nav-link  `}>
                      <img  className="bg-social" src={t} alt="No Pic" />
                    </a>
                  </li>
                  <li className="nav-item  ">
                    <a href="#Buynft" className={`nav-link  `}>
                      <img  className="bg-social" src={o} alt="No Pic" />
                    </a>
                  </li>
                  <li className="nav-item  ">
                    <a href="#Buynft"
                    className={`nav-link connect `}
                    onClick={async () => {
                      await connectWallet();
                      // mint();
                    }}
                    >
                    {connectedAccount}
                    
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
