import React from 'react';

import './styles.css';

import { NavBarItem } from '../NavBarItem';
import { navBarItems, NavBarItensProps } from '../constants/index'
import { LinkToContact } from '../../LinkToContact';

function NavBar() {
  return (
    <nav className="page-header">
      <div className="top-bar-container">
        {/* logo */}
        <h1 className="logo"><strong>VidroPlan</strong></h1>
        {/* navigation */}
        <div className="top-bar-content">
          {/* pages */}
          <div className="top-bar-links">
            {
              navBarItems.map((item: NavBarItensProps) => {
                return <NavBarItem key={ item.title } title={item.title} link={item.link} />
              })
            }
          </div>
          {/* link to contact */}
          <div className="top-bar-contact">
            <LinkToContact />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;