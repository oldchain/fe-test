import logo from './logo.svg';
import Header from './components/header'
import './App.css';
import './default.scss';
import Item from './components/item';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
      <Item />
      <Item />
      <Item />
      </div>

    </div>
  );
}

export default App;
