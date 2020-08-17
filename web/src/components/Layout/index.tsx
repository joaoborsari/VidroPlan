import React, { FunctionComponent } from 'react';

import './styles.css';
import { PageFooter } from '../PageFooter';
import NavBar from '../PageHeader/NavBar';
import { ContactFooter } from '../ContactFooter';

export const Layout: FunctionComponent<any> = (props) => {
  return (
    <div className="main-layout" >
      <div className="content-from-top">
        <div className="header">
          <NavBar />
        </div>
        <div className="main-content">
          { props.children }
        </div>
      </div>
      <div className="content-from-bottom">
        <div className="footer">
          <ContactFooter />
          <PageFooter />
        </div>
      </div>
    </div>
  );
}