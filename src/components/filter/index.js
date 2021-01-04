import React, { useState, useEffect } from 'react';
import "./styles.scss";


const Filter = props =>{  

    let unique = [...new Set(props.regions)]; // this is an array that has all distinct region values

    const [filtered, setFiltered] = useState("all"); //controling the filtered state

    useEffect(() => {
        props.onFilter(filtered); //invoking the getData function we got from App Componenet as an onFilter Prop whenever we chose a category/region
        console.log(filtered)
    }, [filtered]);

    const handleEvent = (e) => { //this function for assigning the filtered value to the chosen category
        setFiltered(e.target.value);
    }

    function capitalizeFirstLetter(string) { //capitalizing the first letter 
        return string.charAt(0).toUpperCase() + string.slice(1);
    }     
    
    unique.sort(); //sorting the regions 

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