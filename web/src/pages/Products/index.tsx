import React from 'react';
import { TextInfo } from '../../modules/AboutUsPage/TextInfo';
import { Layout } from "../../modules/global/Layout";
import { alumniumProducts, boardsProducts, glassesProducts, ProductProps } from '../../modules/ProductsPage/constants/products';
import { OurServices } from '../../modules/ProductsPage/OurServices';
import { Partners } from '../../modules/shared/Partners';
import { ProductCard } from '../../modules/shared/ProductCard';

import './styles.css';

export const Products = () => {
  return (
    <Layout>
      <div className="products-page">

        <div className="our-products">
          <TextInfo
            title="Nossos produtos"
            description=""
          /> 

          <div className="glasses product-section">
            <h1>Vidros</h1>
            <hr className="title-divider"/>
            <div className="products-grid">
              {
                glassesProducts.map((item: ProductProps) => {
                  return (
                    <ProductCard 
                      title={item.title}
                      description={item.description}
                      image={item.imageLink}
                    />
                  );
                })
              }
            </div>
          </div>

          <hr className="element-divider" />

          <div className="boards product-section">
            <h1>Quadros e Molduras</h1>
            <hr className="title-divider"/>
            <div className="products-grid">
              {
                boardsProducts.map((item: ProductProps) => {
                  return (
                    <ProductCard 
                      title={item.title}
                      description={item.description}
                      image={item.imageLink}
                    />
                  );
                })
              }
            </div>
          </div>

          <hr className="element-divider" />

          <div className="alumnium product-section">
            <h1>Alumínios</h1>
            <hr className="title-divider"/>
            <div className="products-grid">
            {
                alumniumProducts.map((item: ProductProps) => {
                  return (
                    <ProductCard 
                      title={item.title}
                      description={item.description}
                      image={item.imageLink}
                    />
                  );
                })
              }
            </div>
          </div>

        </div>

        <div className="our-services">
          <TextInfo
            title="Nossos serviços"
            description=""
          />
          <OurServices />
        </div>

        <div className="our-partners">
          <TextInfo
            title="Nossos parceiros"
            description=""
          />
          <Partners />
        </div>
        
      </div>
    </Layout>
  );
}