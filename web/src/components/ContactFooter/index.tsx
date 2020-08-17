import React from 'react';

import './styles.css';

import mapsImg from '../../assets/images/location.png';
import { RiWhatsappLine } from "react-icons/ri";
import { LinkToWhatsapp, LinkToFacebook, LinkToInstagram } from '../SocialMediaContactLink';

export const ContactFooter = () => {
  return (
    <div className="contact-footer-container">
      <div className="contact">
        <h1>Como nos encontrar?</h1>
        <p>Av Antonia Camargo de Oliveira, 1997</p>
        <p>Centro | Araraquara | SP</p>
        <p>(16) 3336-9878</p>
        <p>vidroplan2012@hotmail.com</p>
      </div>
      <div className="coordinates">
        <div className="location">
          <a title="Abrir endereço no Google maps" href="https://www.google.fr/maps/place/Av.+Maria+Antonia+Camargo+de+Oliveira,+1997,+Araraquara+-+SP,+14801-260,+Br%C3%A9sil/@-21.7881266,-48.174597,17z/data=!3m1!4b1!4m5!3m4!1s0x94b8f3e39ce7edd9:0xc77294e0db8fd7ce!8m2!3d-21.7881266!4d-48.1724083?hl=fr&authuser=0">
            <img src={mapsImg} alt="Location"></img>
          </a>
        </div>
      </div>
      <div className="social-medias">
        <h2>Você também pode nos encontrar em:</h2>
        <LinkToWhatsapp />
        <LinkToFacebook />
        <LinkToInstagram />
      </div>
    </div>
  );
}