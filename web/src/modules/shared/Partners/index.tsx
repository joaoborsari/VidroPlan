import React from 'react';

import './styles.css';

import BlindexImg from '../../../assets/images/blindex.jpg';
import AldecImg from '../../../assets/images/aldec.png';
import AlumperfisImg from '../../../assets/images/alumperfis.png';
import ArtemperImg from '../../../assets/images/artemper.png';
import EspacoMoldurasImg from '../../../assets/images/espaco-molduras.jpg';
import EsquadrimaxImg from '../../../assets/images/exquadrimax.png';
import SandoliImg from '../../../assets/images/sandoli.png';
import StartemperImg from '../../../assets/images/startemper.png';

export const Partners = () => {
  return (
    <div className="partners-box">
      <h1>Nossos parceiros</h1>
      <div className="partners-grid">
        <img src={BlindexImg} className="blindex" alt="Blindex logo"/>
        <img src={ArtemperImg} className="blindex" alt="Blindex logo"/>
        <img src={StartemperImg} className="blindex" alt="Blindex logo"/>
        <img src={AlumperfisImg} className="blindex" alt="Blindex logo"/>
        <img src={EsquadrimaxImg} className="blindex" alt="Blindex logo"/>
        <img src={SandoliImg} className="blindex" alt="Blindex logo"/>
        <img src={AldecImg} className="blindex" alt="Blindex logo"/>
        <img src={EspacoMoldurasImg} className="blindex" alt="Blindex logo"/>
      </div>
    </div>
  );
}