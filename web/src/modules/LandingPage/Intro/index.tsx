import React from "react";

import './styles.css';

import { GeneralButton } from "../../shared/GeneralButton";

export const Intro = () => {
  return (
    <div className="intro">
      <h1>Procurando uma vidraçaria ou um serviço de quadros e molduras?</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
      <p>"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <GeneralButton title="Conheça mais sobre nós!" link="/about-us" />
    </div>
  );
};