import React from 'react';

import './styles.css';

import sampleImg from '../../../assets/images/home.webp';
import { Link } from 'react-router-dom';

export interface ProductCardProps {
  title: string,
  description: string,
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <div className="product-card">
      <Link to="/products" className="product-card-link">
        <img src={sampleImg} alt="Product"/>
        <div className="description">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </Link>
    </div>
  );
}