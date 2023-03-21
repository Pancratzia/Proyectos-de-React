import React from 'react';
import './App.css';
import Header from './components/Header';
import ContenedorPrincipal from './components/ContenedorPrincipal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ContenedorPrincipal />
      <Footer />
    </div>
  );
}

export default App;
