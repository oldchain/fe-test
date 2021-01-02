import React from "react";
import './styles.scss';
import glassImage from "./../../assets/whiskey-glass.jpg";

const Footer = props =>{  

    return(
      <div className="footer-img">
            <img src={glassImage}></img>
      </div>
    );
};

export default Footer;