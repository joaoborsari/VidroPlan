import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductCard } from '../../shared/ProductCard';
import { CarouselItem } from '../CarouselItem';

import './styles.css';

const responsive = {
    desktop: {
        breakpoint: {
        max: 3000,
        min: 1100
        },
        items: 3,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: {
        max: 800,
        min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: {
        max: 1100,
        min: 800
        },
        items: 2,
        partialVisibilityGutter: 30
    }
  };

const colors = ["red", "green", "blue", "orange"];

export interface CarouselBlockProps {
    sectionType: string[]
  }

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
export const CarouselBlock: React.FC<CarouselBlockProps> = (props) => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
        {
          props.sectionType.map(img => {
            return (
              <CarouselItem image={img} />
            );
          })
        }
    </Carousel>
  );
};