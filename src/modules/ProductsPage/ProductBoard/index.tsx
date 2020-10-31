import React, { useState } from 'react';


// import './styles.css';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export interface BoardProps {
    productType : object,
}

export const ProductBoard = () => {
  let [showBoards, setShowBoard] = useState(true);
    return(
        <div className="product-section">
            <div className="section-title">
              <h1>Alumínios</h1>
              <button onClick={() => setShowBoard(!showBoards)}
              >
                {
                  showBoards ? 
                  <FaAngleUp title="Esconder" className="toggle-button" /> : 
                  <FaAngleDown title="Mostrar" className="toggle-button"  />
                }
              </button>
            </div>
            <hr className="title-divider"/>
        </div>
    );
}