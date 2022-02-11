import React from "react";
import { Carousel, Wrap } from "./styles";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="slider-img" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="slider-img" />
      </Wrap>
    </Carousel>
  );
};

export default ImageSlider;
