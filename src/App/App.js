
import Global from '../Global';
import './App.css';

import Formulario from '../Components/Formulario';


function App() {
 const [ciudad, setCiudad] = ('')

  return (
    <div className='text-center'>
      <h1 className='font-extrabold tracking-wider'>Weather</h1>
      <Formulario />
    </div>
  );
}

export default App;
