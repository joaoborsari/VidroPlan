import React from 'react';

import './styles.css';

import { NavBarItem } from '../NavBarItem';
import { navBarItems, NavBarItensProps } from '../constants/index';
import { LinkToWhatsapp } from '../../SocialMediaContactLink';

function NavBar() {

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
     })
  }

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
            <button className="contact-link-item" onClick={scrollToBottom}>
              <p>Contato</p>
            </button>
          </div>
          {/* link to contact */}
          <div className="top-bar-contact">
            <LinkToWhatsapp />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;