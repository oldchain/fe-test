import React, { useState, useEffect }from 'react';
import Header from './components/header'
import './App.css';
import './default.scss';
import Item from './components/item';
import Filter from './components/filter';
import  axios from "axios";
import Footer from "./components/footer";

function App() {

  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState("all");
  useEffect(() => {
    axios.get('/data/whiskies.json')
    .then(res =>{
      setItems(res.data);
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  function getData(string){
    setFiltered(string)
  }

  return (
    <div className="App">
      <Header />
      <Filter regions={items.map(item => item.region)} onFilter={getData}/>
      <div className="row">
        {
          filtered !== "all" ? items.map((item,i) => item.region === filtered ? <Item key={i} details={item}/>  : "") :  items.map((item,i) => <Item key={i} details={item}/> )
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
