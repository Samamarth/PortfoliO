import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>samarthchaniyara@gmail.com</span>
        <div className="f-icons">
          <Gitub color="white" size={"3rem"} />
          <Insta color="white" size={"3rem"} />
          <Whatsapp color="white" size={"3rem"} />
          
        </div>
      </div>
    </div>
  );
};

export default Footer;