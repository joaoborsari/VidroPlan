import React from 'react';

import whatsappIcon from '../../../assets/images/icons/whatsapp.svg'

import './styles.css';

export const LinkToContact = () => {
  return (
    <a 
      href="https://wa.me/+5516997928737"
      className="whatsapp"
    >
        <img src={whatsappIcon} alt="Whatsapp"/>
        <p>(16) 99792-8737</p>
    </a>
  );
}