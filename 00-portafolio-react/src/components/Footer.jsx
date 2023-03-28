import React from "react";
import '../stylesheets/Footer.css';

function Footer() {
  return (
    <footer class="flex-shrink-0 py-4 bg-dark text-white-50">
    <div class="container text-center">
      <small>Copyright &copy; { new Date().getFullYear() } Portafolio de Proyectos en React - Por <a href="https://github.com/Pancratzia" target={"_blank"}>Laura Ortega</a></small>
    </div>
  </footer>
  );
}

export default Footer;