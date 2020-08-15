import React from 'react';

import './styles.css';

import whatsappIcon from '../../../assets/images/icons/whatsapp.svg'

import { NavBarItem } from '../NavBarItem';
import { navBarItems, NavBarItensProps } from '../constants/index'

function NavBar() {
  return (
    <nav className="page-header">
      <div className="top-bar-container">
        <h1 className="logo"><strong>VidroPlan</strong></h1>

        <div className="top-bar-content">

          <div className="top-bar-links">
            {navBarItems.map((item: NavBarItensProps) => {
              return <NavBarItem key={ item.title } title={item.title} link={item.link} />
            })}
          </div>

          <div className="top-bar-contact">
            <a 
              href="https://wa.me/+5516997928737"
              className="whatsapp"
            >
                <img src={whatsappIcon} alt="Whatsapp"/>
                <p>(16) 99792-8737</p>
            </a>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;