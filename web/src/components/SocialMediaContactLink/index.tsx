import React from 'react';

import './styles.css';
import { RiWhatsappLine } from 'react-icons/ri';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export const LinkToWhatsapp = () => {
  return (
    <a 
      href="https://wa.me/+5516997928737"
      className="whatsapp"
      title="Abrir conversa no WhatsApp"
    >
        <RiWhatsappLine className="whatsapp-icon" />
        <p>(16) 99792-8737</p>
    </a>
  );
}

export const LinkToFacebook = () => {
  return (
    <a 
      href="https://www.facebook.com/"
      className="facebook"
      title="Abrir no Facebook"
    >
        <FaFacebookSquare className="facebook-icon" />
        <p>VidroPlan Araraquara</p>
    </a>
  );
}

export const LinkToInstagram = () => {
  return (
    <a 
      href="https://www.instagram.com/"
      className="instagram"
      title="Abrir no Instagram"
    >
        <FaInstagram className="instagram-icon" />
        <p>VidroPlan Araraquara</p>
    </a>
  );
}