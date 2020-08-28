import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface GeneralButtonProps {
  title: string,
  link: string
}

export const GeneralButton:React.FC<GeneralButtonProps> = (props) => {
  return (
    <button className="general-button">
      <Link to={props.link} className="button-link">
        {props.title}
      </Link>
    </button>
  );
};