import React from "react";

import homeImg from '../../assets/images/home.webp'
import { Layout } from "../../components/Layout";

function Landing() {
  return (
    <Layout>
      <div className="landing">
        <img src={homeImg} alt="Home" className="home-images" />
      </div>
    </Layout>
  );
}

export default Landing;
