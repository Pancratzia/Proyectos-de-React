import React from "react";
import '../stylesheets/Boton.css';

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  }


  return (

    <div className={`contenedor-boton ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
        
    );
}

export default Boton;