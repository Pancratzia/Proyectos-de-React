import React from "react";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import "../stylesheets/Lista.css";
import { useState } from "react";

function Lista() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasListado = [tarea, ...tareas];
      setTareas(tareasListado);
    }
  }

  const eliminarTarea = (id) => {
    const tareasListado = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasListado);
  }

  const completarTarea = (id) => {
    const tareasListado = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasListado);
  }

  return (
    <>
      <Formulario onSubmit={agregarTarea} />
      <div className="contenedor-lista-tareas">
        {
          tareas.map((tarea) => (
            <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto} completada={tarea.completada} eliminarTarea={eliminarTarea} completarTarea={completarTarea} />
          ))
        }
      </div>
    </>
  );
}

export default Lista;