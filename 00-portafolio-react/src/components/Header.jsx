import React from "react";
import '../stylesheets/Header.css';
import { FaReact } from "react-icons/fa";

function Header() {
  return (
    <div class="bg-dark text-secondary px-4 py-5 text-center">
      <div class="py-5">
        <div className="title mb-5">
          <FaReact className="logo" /> <h1 class="display-5 fw-bold text-white text-uppercase"> Proyectos en React</h1> <FaReact className="logo" /> 
        </div>
        
        <div class="col-lg-6 mx-auto">
          <p class="fs-5 mb-4">¡Bienvenidos a mi portafolio de proyectos en React! Aquí podrás encontrar los proyectos que desarrollé durante el curso Aprende React Desde Cero, de FreeCodeCamp en Español. Todos estos proyectos utilizan React para crear interfaces de usuario interactivas y dinámicas. ¡Explora mi portafolio y descubre cómo React puede ayudarte en tus proyectos web!</p>
        </div>
      </div>
    </div>
  );
}

export default Header;