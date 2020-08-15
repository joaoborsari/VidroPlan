import React from "react";
import "./styles.css";
import { NavBarItem } from "../NavBarItem";
import { myRoutes } from "../../constants";

function PageHeader() {
  return (
    <nav>
      <div className='top-bar-container'>
        <p className='logo'>
          <strong>VidroPlan</strong>
        </p>
        {myRoutes.map((element) => (
          <NavBarItem pageName={element.title} link={element.link} />
        ))}
      </div>
    </nav>
  );
}

export default PageHeader;
