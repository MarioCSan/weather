import { useEffect, useState } from 'react';
import Global from '../Global';
import './App.css';
import Tiempo from '../Components/Tiempo';


function App() {
 const [ciudad, setCiudad] = ('')

  return (
    <div className="App">
      <h1> Weather </h1>
      <Tiempo />
    </div>
  );
}

export default App;
