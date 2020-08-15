import React from 'react';
import { Link } from 'react-router-dom';

function PageHeader() {
  return (
    <nav>
      <div className="top-bar-container">
        <p className="logo"><strong>VidroPlan</strong></p>
        <Link to="/">
          <p>Inicio</p>
        </Link>
        <Link to="/">
          <p>Sobre nós</p>
        </Link>
        <Link to="/">
          <p>Produtos</p>
        </Link>
        <Link to="/">
          <p>Galeria</p>
        </Link>
        <Link to="/">
          <p>Contato</p>
        </Link>
      </div>
    </nav>
  );
}

export default PageHeader;