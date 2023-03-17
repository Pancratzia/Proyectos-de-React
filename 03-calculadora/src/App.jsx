
import './App.css';
import logo from './imgs/freecodecamp-logo.png';
import Boton from './components/Boton';

function App() {
  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img
        src={logo}
        className='logo'
        alt='Logo de FreeCodeCamp' />
      </div>
      <div className="contenedor-calculadora">
        <div className="fila">
          <Boton>1</Boton>
        </div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;
