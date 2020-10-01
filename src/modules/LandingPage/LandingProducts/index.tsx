import React from 'react';

import './styles.css';

import { GeneralButton } from '../../shared/GeneralButton';
import { ProductCard } from '../../shared/ProductCard';

export const LandingProducts = () => {
  return (
    <div className="landing-products">
      <h1>Conheça nossos produtos</h1>
      <hr className="title-divider" />
      <div className="products">

        <ProductCard 
          title="Box e Vidros"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          image="boxVidro.png"
        />
        <ProductCard  
          title="Películas de vidro"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          image="insufilm.jpg"
        />
        <ProductCard  
          title="Quadros e Molduras"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          image="quadros.jpg"
        />

      </div>
        <GeneralButton title="Saiba mais!" link="/products" />
    </div>
  );
}