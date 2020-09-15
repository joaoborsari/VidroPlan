import React from 'react';

import './styles.css';

import { Layout } from '../../modules/global/Layout';
import { GeneralButton } from '../../modules/shared/GeneralButton';
import { FaChartLine, FaCrosshairs, FaHandshake } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";

export const AboutUs = () => {
  return (
    <Layout>
      <div className="about-us">

        <div className="about-us-content">   
          <div className="about-us-intro text-info">
            <h1>Sobre a VidroPlan</h1>
            <hr className="text-divider" />
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
          </div>
        </div>
        
        <section className="landing-image">
          <div className="overlay"></div>
        </section>

        <div className="about-us-content">
          <div className="history text-info">
            <h1>Nossa história</h1>
            <hr className="text-divider" />
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
          </div>

          <div className="principles">
            <div className="principles-item">
              <div className="item-title">
                <FaHandshake className="item-icon" />
                <h2>Valores</h2>
              </div>
              <p className="item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="principles-item">
              <div className="item-title">
                <FaCrosshairs className="item-icon" />
                <h2>Missão</h2>
              </div>
              <p className="item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="principles-item">
              <div className="item-title">
                <FaChartLine className="item-icon" />
                <h2>Visão</h2>
              </div>
              <p className="item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="our-products-button">
            <GeneralButton link="/products" title="Conheça nossos produtos!" />
          </div>
        </div>

      </div>
    </Layout>
  );
}