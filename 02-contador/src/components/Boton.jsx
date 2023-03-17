import React from "react";
import '../stylesheets/Boton.css';

function Boton({texto, isClick, clickEvent}){
  return (
    <button className={ isClick ? "clickBtn" : "resetBtn" }
    onClick={clickEvent}>
      {texto}
    </button>
  )
}

export default Boton;