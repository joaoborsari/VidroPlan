import React from 'react';

import './styles.css';

export interface CarouselItemProps {
    image: string
}

export const CarouselItem: React.FC<CarouselItemProps> = (props) => {
    return (
        <div className="item-wraper">
            <div className="carousel-item">
                <img src={require(`../../../assets/images/${props.image.toLowerCase()}`)} alt="Our work"/>
            </div>
        </div>
    );
}