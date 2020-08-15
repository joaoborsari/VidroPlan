import React from 'react';

import './styles.css';

import { navBarItems, NavBarItensProps } from '../PageHeader/constants';
import { NavBarItem } from '../PageHeader/NavBarItem';

export const PageFooter = () => {
  return (
    <div className="page-footer">
      <div className="botton-bar-links">
        {
          navBarItems.map((item: NavBarItensProps) => {
            return <NavBarItem key={ item.title } title={item.title} link={item.link} />
          })
        }
      </div>
      <div className="copyright">
        <p>©Copyright 2020 VidroPlan</p>
      </div>
    </div>
  );
}