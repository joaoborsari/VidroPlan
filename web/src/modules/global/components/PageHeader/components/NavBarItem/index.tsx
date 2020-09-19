import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarItensProps } from '../../constants/navbarItems';

import './styles.css'


export const NavBarItem: React.FC<NavBarItensProps> = (props) => {
  const isCurrentPageSelected = window.location.pathname === props.link;
  return (
    <Link to={props.link} className={`page-link-item${isCurrentPageSelected ? "--modified" : ""}`}>
      {props.title}
    </Link>
  );
}