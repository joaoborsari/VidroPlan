import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

export interface ProductCardProps {
  title: string,
  description: string,
  image: string
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const isCurrentPageSelected = window.location.pathname === "/products";
  return (
    <div className="product-card">
      {
        isCurrentPageSelected ?
        <div className="product-card-content">
          <img src={require(`../../../assets/images/${props.image.toLowerCase()}`)} alt="Product"/>
          <div className="description">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
        </div>
        :
        <Link to="/products" className="product-card-content">
          <img src={require(`../../../assets/images/${props.image.toLowerCase()}`)} alt="Product"/>
          <div className="description">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
        </Link>
      }
    </div>
  );
}