import React from 'react';

import './styles.css';

import mapsImg from '../../assets/images/maps.png';

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
          <img src={mapsImg} alt="Location"></img>
        </div>
      </div>
      <div className="social-medias">
        <h2>Você também pode nos encontrar em:</h2>
        <p>VidroPlan Araraquara</p>
        <p>VidroPlan Araraquara</p>
      </div>
    </div>
  );
}