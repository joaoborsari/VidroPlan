import React from 'react';

import './styles.css';

import { RiCalculatorLine } from 'react-icons/ri';
import { FaTools, FaAward } from 'react-icons/fa';

export const LandingInfos = () => {
  return (
    <div className="landing-infos">
      <div className="info-card">
        <div className="info-card-title">
          <RiCalculatorLine className="title-icon" />
          <h3>Orçamento</h3>
        </div>
        <p>Entre em contato através do WhatsApp, telefone ou E-mail para receber seu orçamento.</p>
      </div>

      <div className="info-card">
        <div className="info-card-title">
          <FaTools className="title-icon" />
          <h3>Instalação</h3>
        </div>
        <p>Após seu pedido ser confirmado, iremos realizar a encomenda e entregar seus produtos o mais rápido possivel.</p>
      </div>

      <div className="info-card">
        <div className="info-card-title">
          <FaAward className="title-icon" />
          <h3>Garantia</h3>
        </div>
        <p>Os nossos clientes contam com produtos de alta qualidade e garantias do fabricante.</p>
      </div>
    </div>
  );
}