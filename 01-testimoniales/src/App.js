import logo from './logo.svg';
import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Testimonios de Nuestros Alumnos: ¿Qué Opinan Sobre Nosotros?</h1>
        <Testimonio
          nombre='Emma Bostian'
          pais='Suiza'
          img='emma'
          empresa='Amazon'
          cargo='Ingeniera de Software'
          testimonio='Nullam eget semper magna, eu porta dolor. Integer sit amet arcu in arcu rutrum venenatis rutrum et erat. Donec tempor viverra neque, in molestie mauris porta ac. Nam libero erat.' />

        <Testimonio
          nombre='Shawn Wang'
          pais='China'
          img='shawn'
          cargo='Programador FullStack'
          empresa='FreeCodeCamp'
          testimonio='Nullam eget semper magna, eu porta dolor. Integer sit amet arcu in arcu rutrum venenatis rutrum et erat. Donec tempor viverra neque, in molestie mauris porta ac. Nam libero erat.' />

        <Testimonio
          nombre='Sarah Jhonson'
          pais='Estados Unidos'
          img='sarah'
          cargo='Ingeniera en Computación'
          empresa='Google'
          testimonio='Nullam eget semper magna, eu porta dolor. Integer sit amet arcu in arcu rutrum venenatis rutrum et erat. Donec tempor viverra neque, in molestie mauris porta ac. Nam libero erat.' />

      </div>
    </div>
  );
}

export default App;
