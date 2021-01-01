import React, { useState, useEffect }from 'react';
import Header from './components/header'
import './App.css';
import './default.scss';
import Item from './components/item';
import Filter from './components/filter';
import  axios from "axios";

function App() {

  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('/data/whiskies.json')
    .then(res =>{
      setItems(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Filter regions={items.map(item => item.region)}/>
      <div className="row">
        {
          items.map((item,i) => <Item key={i}
           details={
             item 
            }
           />)
        }
      </div>

    </div>
  );
}

export default App;
