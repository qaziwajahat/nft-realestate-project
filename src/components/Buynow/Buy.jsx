import { React, useState, useEffect } from "react";
// import Web3 from "web3";
// import abi from "../abi.json";
import i2 from "../../assets/i2.jpg";
import "./buy.css";
const Buy = ({ connecctstatus, setConnectedstatus }) => {
  // const [connectedAccount, setConnectedAccount] = useState("Connect Wallet");
  // const [contract, setContract] = useState(null);
  // const [tokenId, setTokenId] = useState(null);
  // const [supply, setTokenSupply] = useState(0);
  // const [price, setPrice] = useState();
  // const [priceInEth, setPriceInEth] = useState(0.06);
  const [quantity, setQuantity] = useState(1);
  // const [minted, setMinted] = useState(false);

  useEffect(() => {
    // loadWeb3();
  }, []);

  // async function loadWeb3() {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum);
  //     // await window.ethereum.enable();
  //     const web3 = window.web3;
  //     // creating contract instance
  //     const contractaddress = "0x3A368d7B329a079Dbc7e9BAD0a5c43E47823034a";
  //     const ct = new web3.eth.Contract(abi, contractaddress);
  //     setContract(ct);
  //     console.log("ct", ct);
  //     let price = await ct.methods.firstPrice().call();
  //     setContract(ct);
  //     setPrice(price);
  //     setPriceInEth(web3.utils.fromWei(price, "ether"));
  //     const totalSupply = await ct.methods.totalSupply().call();
  //     setTokenSupply(totalSupply);
  //   } else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider);
  //   } else {
  //     window.alert(
  //       "Non-Ethereum browser detected. You should consider trying MetaMask!"
  //     );
  //   }
  // }
  // async function mint() {
  //   const web3 = window.web3;
  //   const _value = parseInt(price) * parseInt(quantity);
  //   const address = await web3.eth.getAccounts();

  //   await contract.methods
  //     .publicMint(quantity)
  //     .send({ from: address.toString(), value: _value })
  //     .then((resp) => {
  //       console.log("RESP", resp);
  //     });
  //   setMinted(true);
  //   const totalSupply = await contract.methods.totalSupply().call();
  //   if (totalSupply) setTokenSupply(totalSupply);
  // }
  // async function connectWallet() {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum);
  //     await window.ethereum.enable();
  //     const web3 = window.web3;
  //     const metaMaskAccount = await web3.eth.getAccounts();
  //     setConnectedstatus(true);
  //     let splitedMetaMaskAddress;
  //     if (metaMaskAccount) {
  //       splitedMetaMaskAddress =
  //         metaMaskAccount[0].substring(0, 6) +
  //         "......" +
  //         metaMaskAccount[0].substring(
  //           metaMaskAccount[0].length - 4,
  //           metaMaskAccount[0].length
  //         );
  //     }
  //     setConnectedAccount(splitedMetaMaskAddress);
  //   } else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider);
  //   } else {
  //     window.alert(
  //       "Non-Ethereum browser detected. You should consider trying MetaMask!"
  //     );
  //   }
  // }
  return (
    <>
      <div id="Buynft" className="data">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <img className="image" src={i2} alt="Pic" />
            </div>
            <div className="col-md-6  ">
              <div className="col-md-12 btngroup ">
                <h1 className="mint-heading">10000 UNIQUE REAL ESTATE NFTs</h1>

                <hr
                  style={{
                    color: "red",
                    height: 2,
                    padding: "0.rem",
                    margin: "0.3rem",
                    background: "red",
                  }}
                />
                <div className="row">
                  <div className="col-md-4">
                    <h4 style={{ color: "white" }}>Price</h4>
                  </div>
                  <div className="col-md-4 ">
                    <h3 className="mint-mid">-</h3>
                  </div>
                  <div className="col-md-4 mx-auto">
                    <h4 style={{ color: "white" }} className="float-right">0.01ETH</h4>
                  </div>
                </div>
                <hr
                  style={{
                    color: "red",
                    height: 2,
                    padding: "0.rem",
                    margin: "0.3rem",
                    background: "red",
                  }}
                />

                <div className="row">
                  <div className="col-md-4">
                    <h4 style={{ color: "white" }}>Quantity</h4>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="d-flex rounded btngroup justify-content-center"
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        type="button"
                        className="btn bg-black text-white fw-bold btn-size "
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity(quantity - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <button type="button" className="btn text-white btn-size">
                        {quantity}
                      </button>
                      <button
                        type="button"
                        className="btn bg-black fw-bold text-white btn-size"
                        onClick={() => {
                          if (quantity < 5) {
                            setQuantity(quantity + 1);
                          }
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <button className="nav-btn-nav float-right">MAX</button>
                  </div>
                </div>
                <hr
                  style={{
                    color: "red",
                    height: 2,
                    padding: "0.rem",
                    margin: "0.3rem",
                    background: "red",
                  }}
                />
                <div className="row">
                  <div className="col-md-4">
                    <h4 style={{ color: "white" }}>Total</h4>
                  </div>
                  <div className="col-md-4">
                    <h3 className="mint-mid">-</h3>
                  </div>
                  <div className="col-md-4 mx-auto">
                    <h4 style={{ color: "white" }} className="float-right">10000</h4>
                  </div>
                </div>
                <hr
                  style={{
                    color: "red",
                    height: 2,
                    padding: "0.rem",
                    margin: "0.3rem",
                    background: "red",
                  }}
                />

                <p className="text-center py-5">
                  <a href="#Buynft"
                    className="btn connect-btn  mint-btn"
                    // onClick={async () => {
                    //   await connectWallet();
                    //   mint();
                    // }}
                  >
                    Mint Now
                  </a>
                  <br />
                  <span className="spanNFT">90 / 10000</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Buy;
