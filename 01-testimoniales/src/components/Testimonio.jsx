import React from "react";
import '../stylesheets/Testimonio.css';

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">

      <img className="imagen-testimonio"
        src={require(`../img/${props.img}.png`)}
        alt="Fotografía Testimonial" />

      <div className="contenedor-texto-testimonio">

        <p className="nombre-testimonio"><strong>{props.nombre}</strong> - {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} de <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>

      </div>

    </div>
  );
}

export default Testimonio;