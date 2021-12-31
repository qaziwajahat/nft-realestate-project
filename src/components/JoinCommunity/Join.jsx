
import "./Join.css"
import { FaTwitter, FaInstagram, FaMask } from "react-icons/fa";
const fontStyles = { color: "white", fontSize: "4rem", paddingLeft: "2rem" };

const Join = () => {
    return (
        <>
            <div id="#Join" className="container-fluid bg-join">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h1 className="join-heading">
                            Join the community
                        </h1>
                        <p className="join-para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima nulla reiciendis modi quis beatae id, ad, quibusdam eaque, explicabo aliquam aspernatur eos cupiditate saepe. Omnis itaque fugit nam recusandae!
                        </p>

                        <div className="row">
                            <div className="col-md-3  connected">
                                <a href="#Buynft" className={`nav-social `}>
                                    Discord
                                </a>
                            </div>
                            <div className="col-md-3">

                            </div>
                            <div className="col-md-3 connected">
                                <a href="#Buynft" className={`nav-social  `}>
                                    Twitter

                                </a>
                            </div>
                            <div className="col-md-3">

                            </div>
                        </div>
                    </div>

                </div>
                <div className="row margin-set">

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

        </>
    )
}
export default Join;