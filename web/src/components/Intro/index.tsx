import React from "react";

import './styles.css';

import { GeneralButton } from "../../components/GeneralButton";


export const Intro = () => {
  return (
    <div className="intro">
      <h1>Procurando uma vidraçaria</h1>
      <h1>ou um serviço de quadros e molduras?</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
      <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <GeneralButton title="Conheça mais sobre nós!" link="/about-us" />
    </div>
  );
};