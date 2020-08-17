import React from "react";
import { Link } from "react-router-dom";

interface navBarProps {
  pageName: string;
  link: string;
}

export const NavBarItem: React.FC<navBarProps> = (props) => {
  return (
    <Link to={props.link}>
      <p>{props.pageName}</p>
    </Link>
  );
};
