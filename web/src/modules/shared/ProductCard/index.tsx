import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

export interface ProductCardProps {
  title: string,
  description: string,
  image: string
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <div className="product-card">
      <Link to="/products" className="product-card-link">
        <img src={require(`../../../assets/images/${props.image.toLowerCase()}`)} alt="Product"/>
        <div className="description">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </Link>
    </div>
  );
}