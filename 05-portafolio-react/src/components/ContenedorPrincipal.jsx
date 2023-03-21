import React from "react";
import "../stylesheets/ContenedorPrincipal.css";
import Carta from "./Carta";


function ContenedorPrincipal() {

  const cartas = [
    { id: 1, titulo: 'Carta 1', contenido: 'Contenido de la carta 1' },
    { id: 2, titulo: 'Carta 2', contenido: 'Contenido de la carta 2' },
    { id: 3, titulo: 'Carta 3', contenido: 'Contenido de la carta 3' },
  ];

  return (
    <main>
      <div className="contenedor row row-cols-2 g-3">

      {cartas.map((carta) => (
        <Carta key={carta.id} titulo={carta.titulo} contenido={carta.contenido} />
      ))}
        
      </div>
    </main>
  );
}

export default ContenedorPrincipal;