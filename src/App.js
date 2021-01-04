import React, { useState, useEffect }from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header'
import './App.css';
import './default.scss';
import Item from './components/item';
import Filter from './components/filter';
import  axios from "axios";
import Footer from "./components/footer";
import Purchase from "./components/purchase";

function App() {

  const [items, setItems] = useState([]); //items state
  const [articles, setArticles] = useState([]); //articles state
  const [filtered, setFiltered] = useState("all"); //categories state
  useEffect(() => {

    //using Axios API to get get the Whiskies data
    axios.get('/data/whiskies.json')
    .then(res =>{
      setItems(res.data);
      console.log(res.data);
    })
    .catch(err => console.log(err));

    //getting the Articles data
    axios.get('/data/articles.json')
    .then(res =>{
      setArticles(res.data);
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  //this function to get the string from the filtered categorie and pass it to the Filter Componenet 
  function getData(string){
    setFiltered(string)
  }

  return (
    <div className="App">
      <Header />
        <Router>
        <Switch>
          <Route exact path="/">
            {/* this is for passing only an array of regions of whiskies and pass the invokte the getData() when we select a cateogry*/}
            <Filter regions={items.map(item => item.region)} onFilter={getData}/>
            <div className="row">
              {
                /* this is filtering the items based on the filtered state so we only pass the filtered items to the Items componenet based on the state (all/1-categorie/none)*/
                filtered !== "all" ? items.map((item,i) => item.region === filtered ? <Item key={i} details={item}/>  : "") :  items.map((item,i) => <Item key={i} details={item}/> )
              }
            </div>
            <div className="row">
              {
                /*mapping the articles to pass it to footer componenet*/
                articles.map((item,i) => <Footer key={i} article={item}/>)
              }
            </div>
          </Route>
              {/* this is the purchase path as we pass in the itemUri we get from the Json file but it's not 100% efficient */}
          <Route path="/:itemUri">
            <Purchase items={items} />
          </Route>
          </Switch>
        </Router>
    </div>
    
  );
}

export default App;
