import React from 'react';

import './styles.css';

export const Footer = () => {
  return (
    <div className="page-footer">
      <div className="copyright">
        <p>© 2020 VidroPlan | CNPJ  12.345.678/0001-23</p>
      </div>
      <div className="developed-by">
        <p>Desenvolvido por </p>
        <p className="developer">João Borsari</p>
      </div>
    </div>
  );
}