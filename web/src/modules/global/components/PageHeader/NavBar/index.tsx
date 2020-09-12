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

        <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
        <nav className="top-bar-content">
          
          <ul className="top-bar-links">
            {
              navBarItems.map((item: NavBarItensProps) => {
                return <li key={ item.title } ><NavBarItem title={item.title} link={item.link} /></li>
              })
            }
            
            <li>
              <button className="contact-link-item" onClick={scrollToBottom}>
                <p>Contato</p>
              </button>
            </li>

            
          </ul>
          
          <div className="top-bar-contact">
            <LinkToWhatsapp />
          </div>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label" >
          <span></span>
        </label>
      </div>
    </header>
  );
}

export default NavBar;