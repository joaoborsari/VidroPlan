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

      <div className="shape-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="shape-top-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
          <path className="shape-top-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
          <path className="shape-top-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
        </svg>
      </div>

      <div className="footer-container">
        <div className="contact footer-container-item">
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

        <div className="found-us footer-container-item">
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

        <div className="social-medias footer-container-item">
          <h2>Siga nossas redes sociais!</h2>
          <hr className="title-divider" />
          <div className="links">
            <LinkToFacebook />
            <LinkToInstagram />
            <LinkToLinkedin />
          </div>
        </div>
      </div>

    </div>
  );
}