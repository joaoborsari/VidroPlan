import React from 'react';

import './styles.css';

export const Footer = () => {
  return (
    <div className="page-footer">
      <div className="copyright">
        <p>© 2020 VidroPlan | CNPJ 45.277.209/0001-35</p>
      </div>
      <div className="developed-by">
        <p>Desenvolvido por </p>
        <p className="developer">
          <a href="https://www.linkedin.com/in/jo%C3%A3o-borsari/">João Borsari</a>
        </p>
      </div>
    </div>
  );
}