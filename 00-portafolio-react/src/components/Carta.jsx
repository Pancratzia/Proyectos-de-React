import React from "react";
import '../stylesheets/Carta.css';
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";

function Carta(props) {
  return (
    <div class="col">
      <div class="card">
        <img src={require(`../img/${props.imagen}.png`)} class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title"> {props.titulo} </h5>
          <p class="card-text"> {props.contenido} </p>
        </div>
        <div className="card-footer d-flex justify-content-around">
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
          <a href={props.netlify} target="_blank" rel="noopener noreferrer">
            <SiNetlify />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carta;