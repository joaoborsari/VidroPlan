import React, { useState } from 'react';

import './styles.css';

import { FaAngleRight, FaAngleDown } from 'react-icons/fa';

import { TextInfo } from '../../modules/AboutUsPage/TextInfo';
import { Layout } from "../../modules/global/Layout";
import { alumniumProducts, boardsProducts, glassesProducts, ProductProps } from '../../modules/ProductsPage/constants/products';
import { OurServices } from '../../modules/ProductsPage/OurServices';
import { ProductCard } from '../../modules/shared/ProductCard';


export const Products = () => {
  let [showGlasses, setShowGlasses] = useState(true);
  let [showBoards, setShowBoards] = useState(true);
  let [showAlumniums, setShowAlumniums] = useState(true);
  return (
    <Layout>
      <div className="products-page">

        <div className="our-products">
          <TextInfo
            title="Nossos produtos"
            description=""
          /> 

          <div className="glasses product-section">
            <div className="section-title">
              <h1>Vidros</h1>
              <button onClick={() => setShowGlasses(!showGlasses)}
              >
                {
                  showGlasses ?  
                  <FaAngleDown title="Esconder" className="toggle-button" /> : 
                  <FaAngleRight title="Mostrar" className="toggle-button"  />
                }
              </button>
            </div>
            <hr className="title-divider"/>
            <div className={`products-grid${showGlasses ? "" : "--modified"}`}>
              {
                glassesProducts.map((item: ProductProps) => {
                  return (
                    <ProductCard 
                      key={item.title}
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
            <div className="section-title">
              <h1>Quadros e Molduras</h1>
              <button onClick={() => setShowBoards(!showBoards)}
              >
                {
                  showBoards ? 
                  <FaAngleDown title="Esconder" className="toggle-button" /> : 
                  <FaAngleRight title="Mostrar" className="toggle-button"  />
                }
              </button>
            </div>
            <hr className="title-divider"/>
            <div className={`products-grid${showBoards ? "" : "--modified"}`}>
              {
                boardsProducts.map((item: ProductProps) => {
                  return (
                    <ProductCard 
                      key={item.title}
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
            <div className="section-title">
              <h1>Alumínios</h1>
              <button onClick={() => setShowAlumniums(!showAlumniums)}
              >
                {
                  showAlumniums ? 
                  <FaAngleDown title="Esconder" className="toggle-button" /> : 
                  <FaAngleRight title="Mostrar" className="toggle-button"  />
                }
              </button>
            </div>
            <hr className="title-divider"/>
            <div className={`products-grid${showAlumniums ? "" : "--modified"}`}>
              {
                alumniumProducts.map((item: ProductProps) => {
                  return (
                    <ProductCard 
                      key={item.title}
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
      </div>
    </Layout>
  );
}