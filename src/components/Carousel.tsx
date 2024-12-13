'use client'

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel: React.FC = () => {
  interface CarouselSettings {
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
    arrows: boolean;
    appendDots: (dots: React.ReactNode) => React.ReactElement;
    customPaging: (i: number) => React.ReactElement;
  }

  const settings: CarouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots): React.ReactElement => (
      <div>
        <ul className="m-0 mt-4 p-0"> {dots} </ul>
      </div>
    ),
    customPaging: (i): React.ReactElement => (
      <div className="w-6 h-6 bg-gray-400 rounded-full hover:bg-gray-600"></div>
    )
  };

  return (
    <div className="mx-auto bg-white">
      <Slider {...settings} className="relative">
        <div className="overflow-hidden shadow-lg">
          <img src="img02.jpg" alt="Imagem 1" className="w-full h-[484px] object-cover"/>
        </div>
        <div className="overflow-hidden shadow-lg">
          <img src="img03.jpg" alt="Imagem 2" className="w-full h-[484px] object-cover "/>
        </div>
        <div className="overflow-hidden shadow-lg">
          <img src="img04.jpg" alt="Imagem 3" className="w-full h-[484px] object-cover "/>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;