import React from 'react';

import './styles.css';

import { RiWhatsappLine } from 'react-icons/ri';

export const LinkToContact = () => {
  return (
    <a 
      href="https://wa.me/+5516997928737"
      className="whatsapp"
    >
        <RiWhatsappLine className="whatsapp-icon" />
        <p>(16) 99792-8737</p>
    </a>
  );
}