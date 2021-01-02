import React, { useState, useEffect } from 'react';
import "./styles.scss";


const Filter = props =>{  

    let unique = [...new Set(props.regions)];
    const [filtered, setFiltered] = useState("all");

    useEffect(() => {
        props.onFilter(filtered);
        console.log(filtered)
    }, [filtered]);

    const handleEvent = (e) => {
        setFiltered(e.target.value);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }     
    unique.sort();

    return(
      <div className="link">
            <button onClick={handleEvent} value={"all"}>All</button>
            {
                unique.map((region,i) => <button key={i} onClick={handleEvent} value={region}>{capitalizeFirstLetter(region)}</button>)
            }
      </div>
    );
};

export default Filter;