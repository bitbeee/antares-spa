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
    <div className="relative w-full mx-auto bg-white">
      <Slider {...settings} className="relative">
        <div className="overflow-hidden shadow-lg relative">
          <img src="img02.jpg" alt="Imagem 1" className="w-full h-[950px] object-cover"/>
        </div>
        <div className="overflow-hidden shadow-lg relative">
          <img src="img03.jpg" alt="Imagem 2" className="w-full h-[950px] object-cover"/>
        </div>
        <div className="overflow-hidden shadow-lg relative">
          <img src="img04.jpg" alt="Imagem 3" className="w-full h-[950px] object-cover"/>
        </div>
      </Slider>
      <div className="absolute mt-52 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-6">
        <div className="bg-red-700 bg-opacity-75 p-8 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-4">GALVANI</h2>
          <p className="mb-4">Baixe o nosso catalogo de produtos</p>
          <a href="/catalogo.pdf" target="_blank" rel="noopener noreferrer" className="bg-red-700 text-white px-4 py-2 rounded-lg">Baixar</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-green-600 ml-2 text-white px-4 py-2 rounded-lg">Contato</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;