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
    const renderProduct = (item) => {
        return(
                    <Link to={`/purchase${item.uri}`} className="card">
                        <div className="content">
                            <div className="description">
                                <h2>{capitalizeFirstLetter(item.title)}</h2>
                                <h3>{capitalizeFirstLetter(item.region)}</h3>
                                <h2 className="price">${item.cost}</h2>
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