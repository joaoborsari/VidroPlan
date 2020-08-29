import React from 'react';

import './styles.css';

import { GeneralButton } from '../../shared/GeneralButton';
import { ProductCard } from '../../shared/ProductCard';

export const LandingProducts = () => {
  return (
    <div className="landing-products">
      <h1>Conheça nossos produtos!</h1>
      <div className="products">

        <ProductCard 
          title="Produto 1"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <ProductCard  
          title="Produto 2"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <ProductCard  
          title="Produto 3"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />

      </div>
        <GeneralButton title="Conheça mais sobre nossos produtos!" link="/products" />
    </div>
  );
}