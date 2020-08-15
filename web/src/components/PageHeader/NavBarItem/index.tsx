import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

export interface NavBarItemProps{
  itemName : string,
  link: string
}

export const NavBarItem: React.FC<NavBarItemProps> = (props) => {
  return (
    <Link to={props.link} className="page-link-item">
      <p>{props.itemName}</p>
    </Link>
  );
}