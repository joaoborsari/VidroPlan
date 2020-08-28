import React, { FunctionComponent } from 'react';

import './styles.css';
import NavBar from '../components/PageHeader/NavBar';
import { ContactFooter } from '../components/PageFooter/ContactFooter';
import { Footer } from '../components/PageFooter/Footer';

export const Layout: FunctionComponent<any> = (props) => {
  return (
    <div className="main-layout" >
        <div className="header">
          <NavBar />
        </div>
        <div className="main-content">
          { props.children }
        </div>
        <div className="footer">
          <ContactFooter />
          <Footer />
        </div>
    </div>
  );
}