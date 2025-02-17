"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Carousel: React.FC = () => {
  interface CarouselSettings {
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
    arrows: boolean;
  }

  const settings: CarouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full mx-auto bg-white hidden sm:block">
      <Slider {...settings} className="relative">
        <div className="overflow-hidden shadow-lg relative">
          <img
            src="img02.jpg"
            alt="Imagem 1"
            className="w-full h-[70vh] object-cover"
          />
        </div>
        <div className="overflow-hidden shadow-lg relative">
          <img
            src="img03.jpg"
            alt="Imagem 2"
            className="w-full h-[70vh] object-cover"
          />
        </div>
        <div className="overflow-hidden shadow-lg relative">
          <img
            src="img04.jpg"
            alt="Imagem 3"
            className="w-full h-[70vh] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
