import React from "react";
import './styles.scss';
import glassImage from "./../../assets/whiskey-glass.jpg";

const Footer = props =>{  

    return(
      <div className="footer-img">
            <img src={glassImage}></img>
            <div class="text-block">
                <h1><i>THE BEST WHISKIES FROM SCOTLAND</i></h1>
                <p>Ever wanted to get into scotch but don't know where to start? We've reviewed 
                    some of the most popular whiskies and break them down by their tasting notes.
                </p>
            </div>

      </div>
    );
};

export default Footer;