import React from 'react';

import './styles.css';

import { Layout } from '../../modules/global/Layout';
import { GeneralButton } from '../../modules/shared/GeneralButton';
import { Principles } from '../../modules/AboutUsPage/Principles';
import { TextInfo } from '../../modules/AboutUsPage/TextInfo';

export const AboutUs = () => {
  return (
    <Layout>
      <div className="about-us">
        <div className="about-us-content">

          <div className="about-us-intro">
            <TextInfo
              title="Sobre a VidroPlan"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
            />   
            <section className="about-us-box">
              <div className="about-us-image"></div>
            </section>
          </div>

          <TextInfo
            title="Nossa história"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
          />

          <Principles />

          <div className="our-products-button">
            <GeneralButton link="/products" title="Conheça nossos produtos!" />
          </div>
          
        </div>
      </div>
    </Layout>
  );
}