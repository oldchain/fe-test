import React, { useState, useEffect } from 'react';
import "./styles.scss";


const Filter = props =>{  

    let unique = [...new Set(props.regions)];

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }     
    unique.sort();
    return(
      <div className="link">
          <a>ALL</a>
            {
                unique.map((region,i) => <a key={i} >{capitalizeFirstLetter(region)}</a>)
            }
      </div>
    );
};
export default Filter;