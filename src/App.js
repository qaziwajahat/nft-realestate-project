import Home from "./components/Home/Home";

import { useState } from "react";
import Join from "./components/JoinCommunity/Join";
import Mint from "./components/Mint/Mint";
import Navbar from "./components/Navbar/Navbar";
// import Roadmap from "./components/Roadmap/Roadmap";
function App() {
  const [connectedAccount, setConnectedAccount] = useState("CONNECT");
  return (
    <>
      <Navbar connectedAccount={connectedAccount} setConnectedAccount={setConnectedAccount} />
      <Home/>
      <Mint connectedAccount={connectedAccount} setConnectedAccount={setConnectedAccount}/>
      {/* <Roadmap/> */}
      <Join/>
    </>
  );
}

export default App;
