import React from 'react';

import './styles.css';

import { navBarItems, NavBarItensProps } from '../constants';
import { NavBarItem } from '../components/NavBarItem';
import { LinkToWhatsapp } from '../../../../shared/SocialMediaContactLink';

function NavBar() {

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
     })
  }

  return (
    <header className="page-header">
      <div className="top-bar-container">

        <h1 className="logo"><strong>VidroPlan</strong></h1>

        <nav className="top-bar-content">
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
          
          <div className="top-bar-contact">
            <LinkToWhatsapp />
          </div>
        </nav>
        
      </div>
    </header>
  );
}

export default NavBar;