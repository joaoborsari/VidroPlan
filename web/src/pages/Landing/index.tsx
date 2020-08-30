import React from "react";

import './styles.css';

import homeImg from '../../assets/images/frontStore.jpeg';
import { Intro } from "../../modules/LandingPage/Intro";
import { LandingProducts } from "../../modules/LandingPage/LandingProducts";
import { Layout } from "../../modules/global/Layout";
import { LandingInfos } from "../../modules/LandingPage/LandingInfos";
import { Partners } from "../../modules/shared/Partners";

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
          <LandingProducts />
          <hr/>
          <LandingInfos />
        </div>
        
      </div>
    </Layout>
  );
}

export default Landing;
