import React from "react";

import './styles.css';

import { GeneralButton } from "../../shared/GeneralButton";

export const Intro = () => {
  return (
    <div className="intro">
      <h1>Procurando uma vidraçaria ou um serviço de quadros e molduras?</h1>
      <hr className="title-divider"/>
      <div className="intro-description">
        <p>
          A Vidroplan é uma empresa especializada em vidros em geral, realizando obras desde 1973 em Araraquara e em toda região do estado de São Paulo. Sempre prezando pela excelência em nossos serviços, nós contamos com profissionais capacitados para a instalação e manutenção de todos os serviços que realizamos. Aqui o cliente encontra vidros temperados, espelhos, box para banheiro, vidros refletivos, e muito mais.
        </p>
        <p>
          Além de vidraçaria, fornecemos serviços de serralheria de alumínio em geral, oferecendo produtos como portas, perfis e janelas de alta qualidade, personalizadas sob a medida que o cliente procura. Especializados também em quadros e molduras, o cliente da Vidroplan pode personalizar as suas gravuras, quebra-cabeças, diplomas e muito mais!
        </p>
      </div>
      <GeneralButton title="Conheça mais sobre nós!" link="/about-us" />
    </div>
  );
};