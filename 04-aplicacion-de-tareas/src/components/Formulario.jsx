import React from "react";
import "../stylesheets/Formulario.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Formulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <input type="text" className="input" placeholder="Escribe una Tarea" name="texto" onChange={manejarCambio} />
      <button className="btn-tarea" >Agregar Tarea</button>
    </form>
  );
}

export default Formulario;