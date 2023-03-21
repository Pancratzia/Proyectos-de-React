
import './App.css';
import logo from './imgs/freecodecamp-logo.png';
import Lista from './components/Lista';

function App() {
  return (
    <div className="aplicacion-tareas">

      <div className="contenedor-logo">
        <img src={logo} className="logo" alt='Logo de FreeCodeCamp' />
      </div>

      <div className="lista-tareas">
        <h1>Mis Tareas</h1>

        <Lista />

      </div>

    </div>
  );
}

export default App;
