import React, { FunctionComponent } from 'react';

import './styles.css';

export const Layout: FunctionComponent<any> = (props) => {
  return (
    <div className="main-layout" >
      { props.children }
    </div>
  );
}