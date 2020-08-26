import React from "react";

import './styles.css';

import homeImg from '../../assets/images/frontStore.jpeg';
import { Layout } from "../../components/Layout";
import { Intro } from "../../components/Intro";

function Landing() {
  return (
    <Layout>
      <div className="landing">

        <div className="landing-welcome-images">
          <img src={homeImg} alt="Home" className="home-images" />
        </div>
        
        <div className="landing-main-content">

          <Intro />
          <hr/>

        </div>
        
      </div>
    </Layout>
  );
}

export default Landing;
