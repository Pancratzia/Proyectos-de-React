import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import fccLogo from './imgs/freecodecamp-logo.png';

function App() {


  const clickEvent = () => {
    console.log('click');
  }

  const resetEvent = () => {
    console.log('reset');
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

        <Contador clicks='5' />

        <Boton
          texto='Reiniciar'
          isClick={false}
          clickEvent={resetEvent} />


        <Boton
          texto='Incrementar'
          isClick={true}
          clickEvent={clickEvent} />
      </div>

    </div>
  );
}

export default App;
