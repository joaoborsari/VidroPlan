import React from 'react';

import './styles.css';

import { NavBarItem } from '../components/NavBarItem';
import { LinkToWhatsapp } from '../../../../shared/SocialMediaContactLink';
import { navBarItems, NavBarItensProps } from '../constants/navbarItems';
import { Link } from 'react-router-dom';

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

        <div className="logo-container">
          <div className="surprise logo-properties"></div>
          <Link to="/" className="logo-link" title="Início" >
            <div className="logo logo-properties"></div>
          </Link>
        </div>
        
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