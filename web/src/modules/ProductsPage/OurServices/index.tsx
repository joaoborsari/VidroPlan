import React from 'react';

import './styles.css';
import { FaTools, FaDraftingCompass, FaCog } from "react-icons/fa";

export const OurServices = () => {
  return (
    <div className="our-services-box">

      <div className="service-item">
        <div className="item-title">
          <FaCog className="item-icon" />
          <h2>Manutenção</h2>
        </div>
        <p className="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="service-item">
        <div className="item-title">
          <FaTools className="item-icon" />
          <h2>Instalação</h2>
        </div>
        <p className="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="service-item">
        <div className="item-title">
          <FaDraftingCompass className="item-icon" />
          <h2>Corte sob medida</h2>
        </div>
        <p className="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      
    </div>
  );
}