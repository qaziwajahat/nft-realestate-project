// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Roadmap from "./components/Roadmap/Roadmap";
import Team from "./components/Team/Team";
import { useState, useEffect } from "react";
import Web3 from "web3";
import Buy from "./components/Buynow/Buy.jsx";

function App() {
  const [connecctstatus, setConnectedstatus] = useState(false);

  const [connectedAccount, setConnectedAccount] = useState("Connect Wallet");
  useEffect(() => {
    if (connecctstatus) {
      connectWallet();
    }
  });

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
      console.log("CCC", connecctstatus);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  return (
    <>
      <Navbar />
      <Home />
      <Buy
        connecctstatus={connectedAccount}
        setConnectedstatus={setConnectedstatus}
      />
      <About />
      <Roadmap />
      <Team />
    </>
  );
}

export default App;
