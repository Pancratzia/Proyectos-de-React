import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import fccLogo from './imgs/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [clicks, setClicks] = useState(0);

  const clickEvent = () => {
    setClicks(clicks + 1);
  }

  const resetEvent = () => {
    setClicks(0);
  }

  return (
    <div className="App">
      <div className="contenedor-logo">
        <img
          className='logo'
          src={fccLogo}
          alt="logo" />
      </div>

      <div className="contenedor-principal">

        <Contador clicks={clicks} />

        <Boton
          texto='Incrementar'
          isClick={true}
          clickEvent={clickEvent} />

        <Boton
          texto='Reiniciar'
          isClick={false}
          clickEvent={resetEvent} />

      </div>

    </div>
  );
}

export default App;
