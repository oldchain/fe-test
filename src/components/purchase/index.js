import { React } from "react";
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";



const Purchase = props =>{

    let { itemUri } = useParams();

    return(
        <div className="header">
            <h1 className="logo"><i>{itemUri}</i></h1>
        </div>
    );
};

export default Purchase;