import React from 'react';
import { TextInfo } from '../../modules/AboutUsPage/TextInfo';
import { CarouselBlock } from '../../modules/GaleryPage/CarouselBlock';
import { glasses } from '../../modules/GaleryPage/constants/glasses';
import { Layout } from '../../modules/global/Layout';
import { GeneralButton } from '../../modules/shared/GeneralButton';

import './styles.css';

export const Galery = () => {
    return (
        <Layout>
            <div className="galery-page">
                
                <div className="our-work">
                    <TextInfo 
                        title='Nossos trabalhos'
                        description=''
                    />

                    <div className="glasses work-section">
                        <div className="section-title">
                            <h1>Vidros</h1>
                        </div>
                        <hr className="title-divider"/>
                        <div className="photos">
                            <CarouselBlock sectionType={glasses} />
                        </div>
                    </div>

                    <hr className="element-divider" />

                    <div className="boards work-section">
                        <div className="section-title">
                            <h1>Quadros e Molduras</h1>
                        </div>
                        <hr className="title-divider"/>
                        <div className="photos">
                            <CarouselBlock sectionType={glasses} />
                        </div>
                    </div>

                    <hr className="element-divider" />

                    <div className="aluminium work-section">
                        <div className="section-title">
                            <h1>Aluminios</h1>
                        </div>
                        <hr className="title-divider"/>
                        <div className="photos">
                            <CarouselBlock sectionType={glasses} />
                        </div>
                    </div>

                    {/* <hr className="last-divider" /> */}
                    <TextInfo 
                        title='Gostou do nosso trabalho?'
                        description=''
                    />
                </div>

                <div className="our-services-button">
                    <GeneralButton link="/products" title="Conheça nossos produtos!" />
                </div>
            </div>
        </Layout>
    );
}