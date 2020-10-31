import React from 'react';

import './styles.css';
import { RiWhatsappLine } from 'react-icons/ri';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
      className="social-media"
      title="Abrir no Facebook"
    >
        <FaFacebookSquare className="social-media-icon" />
    </a>
  );
}

export const LinkToInstagram = () => {
  return (
    <a 
      href="https://www.instagram.com/vidroplan_araraquara/"
      className="social-media"
      title="Abrir no Instagram"
    >
        <FaInstagram className="social-media-icon" />
    </a>
  );
}

export const LinkToLinkedin = () => {
  return (
    <a 
      href="https://www.linkedin.com/company/vidroplanararaquara/"
      className="social-media"
      title="Abrir no Linkedin"
    >
        <FaLinkedin className="social-media-icon" />
    </a>
  );
}