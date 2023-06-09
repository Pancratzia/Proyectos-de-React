import React from "react";
import "../stylesheets/ContenedorPrincipal.css";
import Carta from "./Carta";


function ContenedorPrincipal() {

  const cartas = [
    { id: 1, titulo: 'Testimoniales', contenido: 'Clon de los Testimonales de FreeCodeCamp con tres cartas de perfil (No Responsive)', github: "https://github.com/Pancratzia/Proyectos-de-React/tree/master/01-testimoniales", netlify: "https://testimoniales-react-pancratzia.netlify.app/", imagen: "testimoniales"},
    { id: 2, titulo: 'Contador', contenido: 'Contador de clicks que puede incrementar de uno en uno y reiniciarse cuando el usuario lo desee', github: "https://github.com/Pancratzia/Proyectos-de-React/tree/master/02-contador", netlify: "https://contador-react-pancratzia.netlify.app/", imagen: "contador" },
    { id: 3, titulo: 'Calculadora', contenido: 'Calculadora que realiza operaciones básicas como sumar, restar, multiplicar y dividir', github: "https://github.com/Pancratzia/Proyectos-de-React/tree/master/03-calculadora", netlify: "https://calculadora-react-pancratzia.netlify.app/", imagen: "calculadora" },
    { id: 4, titulo: 'Aplicación de Tareas', contenido: 'Aplicación de tareas que puede crear una tarea, modificarla y borrarla de acuerdo a las necesidades del usuario', github: "https://github.com/Pancratzia/Proyectos-de-React/tree/master/04-aplicacion-de-tareas", netlify: "https://aplicaciondetareas-react-pancratzia.netlify.app/", imagen: "tareas" }

  ];

  return (
    <main>
      <div className="contenedor">
        <div className=" row row-cols-1 row-cols-md-2 g-4">
          {cartas.map((carta) => (
            <Carta key={carta.id} titulo={carta.titulo} contenido={carta.contenido} github={carta.github} netlify={carta.netlify} imagen={carta.imagen} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ContenedorPrincipal;