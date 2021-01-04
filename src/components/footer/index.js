import React from "react";
import './styles.scss';

const Footer = props =>{  
    
    return(
      <div href={props.article.url} target="_blank" className="footer-img">
            <img src={require('./../../assets/' + props.article.img).default} alt={props.article.title}></img>
            <div className="text-block">
                <h1><i>{props.article.title.toUpperCase()}</i></h1>
                <p>{props.article.teaser}
                </p>
            </div>

      </div>
    );
};

export default Footer;