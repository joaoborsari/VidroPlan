import React from 'react';

import { NavBarItem } from '../NavBarItem';

import './styles.css';

function NavBar() {
  return (
    <nav className="page-header">
      <div className="top-bar-container">
        <h1 className="logo"><strong>VidroPlan</strong></h1>
        <div className="top-bar-links">
          <NavBarItem itemName="Inicio" link="/" />
          <NavBarItem itemName="Sobre nós" link="/" />
          <NavBarItem itemName="Produtos" link="/" />
          <NavBarItem itemName="Galeria" link="/" />
          <NavBarItem itemName="Contato" link="/" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;