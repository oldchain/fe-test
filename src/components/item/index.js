import React from 'react';
import "./styles.scss";
import ReactLogo from './../../assets/card-bg.svg';
import itemImg from './../../assets/auchentoshan.png';

const Item = props =>{
    return(
        <div className="card">
            <div className="content">
                <div className="description">
                    <h2>Auchentoshan</h2>
                    <h3>lowlands </h3>
                    <h2 className="price">$3</h2>
                    <div>
                        <a>Honey</a>
                        <a>Citrus</a>
                        <a>Nutalla</a>
                    </div>
                </div>
                <div className="item-img">
                    <img src={itemImg}></img>
                </div>
            </div>
        </div>
    );
};

export default Item;