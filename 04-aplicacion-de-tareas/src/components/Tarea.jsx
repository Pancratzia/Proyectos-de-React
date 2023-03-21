import React from "react";
import "../stylesheets/Tarea.css";
import {AiOutlineCloseCircle} from "react-icons/ai";

function Tarea( {texto, completada, id, completarTarea, eliminarTarea} ) {
  return(

    <div className={completada ? 'contenedor-tarea completada' : 'contenedor-tarea'}>
      <div className="texto-tarea" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="contenedor-iconos-tarea" >
        <AiOutlineCloseCircle className="icono-tarea" onClick={() =>eliminarTarea(id)} />
      </div>
    </div>

  );

}

export default Tarea;