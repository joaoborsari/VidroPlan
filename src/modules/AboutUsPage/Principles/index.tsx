import React from 'react';

import './styles.css';
import { FaChartLine, FaCrosshairs, FaHandshake } from "react-icons/fa";


export const Principles = () => {
  return (
    <div className="principles">

      <div className="principles-item">
        <div className="item-title">
          <FaHandshake className="item-icon" />
          <h2>Valores</h2>
        </div>
        <p className="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="principles-item">
        <div className="item-title">
          <FaCrosshairs className="item-icon" />
          <h2>Missão</h2>
        </div>
        <p className="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="principles-item">
        <div className="item-title">
          <FaChartLine className="item-icon" />
          <h2>Visão</h2>
        </div>
        <p className="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      
    </div>
  );
}