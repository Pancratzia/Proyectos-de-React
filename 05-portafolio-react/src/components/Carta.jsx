import React from "react";
import '../stylesheets/Carta.css';

function Carta(props) {
  return (
    <div class="col">
      <div class="card">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top"
          alt="Hollywood Sign on The Hill" />
        <div class="card-body">
          <h5 class="card-title"> {props.titulo} </h5>
          <p class="card-text">
            {props.contenido}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carta;