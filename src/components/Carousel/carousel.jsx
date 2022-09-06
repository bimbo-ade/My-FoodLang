import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { Div } from "./carousel.style";

const Carousel = ({ images }) => {
  const settings = {
    infinite: true,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Div>
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} width={300} />
            </div>
          ))}
        </Slider>
      </Div>
    </>
  );
};
export default Carousel;
