import React from "react";

import homeImg from '../../assets/images/frontStore.jpeg';
import { Layout } from "../../components/Layout";

function Landing() {
  return (
    <Layout>
      <div className="landing">
        <img src={homeImg} alt="Home" className="home-images" />

        <div className="intro">
          <h1>Procurando uma vidraçaria ou um serviço de quadros e molduras?</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          
        </div>
        
      </div>
    </Layout>
  );
}

export default Landing;
