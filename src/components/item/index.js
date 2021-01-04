import React from 'react';
import "./styles.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  
//array of the static colors we got
const colors = {
    "islay": ["#A5238E", "#6E2671"],
    "islands": ["#D71E44", "#9E1B34"],
    "highlands": ["#563494", "#322773"],
    "lowlands": ["#0663AE","#174272"],
    "speyside": ["#1AB467", "#007B46"],
    "campbeltown": ["#F3B41B", "#D29D2A"]
}

const Item = props =>{
      
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }      

    // here I was trying some functional stuff so if you don't like it consider it as we don't have the  function and we have this in the componenet return();
    const renderProduct = (item) => {
        return(
                    <Link to={`${item.uri}`} className="card">
                        <div className="content">
                            <hr className="colored-hr" style={{background: "linear-gradient(to right bottom, " + colors[item.region][0] + ", " + colors[item.region][1] + ")"}}></hr>
                            <div className="description">
                                <h2>{capitalizeFirstLetter(item.title)}</h2>
                                <h3>{capitalizeFirstLetter(item.region)}</h3>
                                <h2 className="price">${item.cost}</h2>
                                {/* here we have an inline style for BackgroundImage with the linear-gradient to compine the 2 colors together */}
                                <div className="winery-components" style={{backgroundImage: "linear-gradient(to right bottom, " + colors[item.region][0] + ", " + colors[item.region][1] + ")"}}>
                                    {
                                        item.tasting_notes.map((item,i) => <a key={i}>{capitalizeFirstLetter(item)}</a>)
                                    }
                                </div>
                            </div>
                            <div className="item-img">
                                <img src={require('./../../assets/' + item.image).default} alt={item.title}></img>
                            </div>
                        </div>
                    </Link>
        );
    }
    return(
        renderProduct(props.details)
    );
};

export default Item;