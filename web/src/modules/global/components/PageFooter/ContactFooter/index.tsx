import React from 'react';

import './styles.css';

// import mapsImg from '../../../../../assets/images/location.png';
import { IoIosTime } from "react-icons/io";
import { RiWhatsappLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { LinkToFacebook, LinkToInstagram, LinkToLinkedin } from '../../../../shared/SocialMediaContactLink';

export const ContactFooter = () => {
  return (
    <div className="contact-footer-container">
      
      <div className="contact footer-container">
        <h1>Contatos</h1>
        <hr className="title-divider" />
        <div className="contact-infos">
        <div className="footer-info">
            <FaPhoneAlt className="footer-icon" />
            <p>(16) 3336-9878</p>
          </div>
          <div className="footer-info">
            <RiWhatsappLine className="footer-icon" />
            <p>(16) 99792-8737</p>
          </div>
          <div className="footer-info">
            <MdEmail className="footer-icon" />
            <a title="Enviar email" href="mailto:vidroplan2012@hotmail.com">vidroplan2012@hotmail.com</a>
          </div>
        </div>
      </div>

      <div className="found-us footer-container">
        <h1>Como nos encontrar?</h1>
        <hr className="title-divider" />
        <div className="contact-infos">
          <div className="address footer-info">
            <MdLocationOn className="footer-icon" />
            <a title="Abrir endereço no Google maps" href="https://www.google.fr/maps/place/Av.+Maria+Antonia+Camargo+de+Oliveira,+1997,+Araraquara+-+SP,+14801-260,+Br%C3%A9sil/@-21.7881266,-48.174597,17z/data=!3m1!4b1!4m5!3m4!1s0x94b8f3e39ce7edd9:0xc77294e0db8fd7ce!8m2!3d-21.7881266!4d-48.1724083?hl=fr&authuser=0">
              <p>Av Antonia Camargo de Oliveira, 1997</p>
              <p>Centro | Araraquara | SP</p>
            </a>
          </div>
          <div className="opening footer-info">
            <IoIosTime className="footer-icon" />
            <div className="open-time">
              <p>Segunda à Sexta - Das 8h às 18h</p>
              <p>Sábado - Das 8h às 13h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="social-medias footer-container">
        <h2>Siga nossas redes sociais!</h2>
        <hr className="title-divider" />
        <div className="links">
          <LinkToFacebook />
          <LinkToInstagram />
          <LinkToLinkedin />
        </div>
      </div>

    </div>
  );
}