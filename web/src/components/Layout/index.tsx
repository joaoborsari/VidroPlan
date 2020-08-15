import React, { FunctionComponent } from 'react';

import './styles.css';
import { PageFooter } from '../PageFooter';
import NavBar from '../PageHeader/NavBar';

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
        <PageFooter />
      </div>
    </div>
  );
}