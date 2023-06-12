import { useEffect } from 'react';
import Global from '../Global';
import './App.css';


function App() {
  this.url = Global.weather
  this.key = Global.key
  let url = this.url + this.key

  useEffect(()=>{
    fetch(url)
  })
  return (
    <div className="App">
      <h1> Weather </h1>
    </div>
  );
}

export default App;
