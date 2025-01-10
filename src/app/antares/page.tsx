'use client'

import React from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FaHome, FaBuilding, FaHandsHelping } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Antares() {
  const services = [
    {
        title: "Residenciais Sob Medida",
        description: "Criamos lares que unem conforto, funcionalidade e design, valorizando o terreno e as necessidades do cliente.",
        icon: <FaHome size={40} className="text-red-700" />
    },
    {
        title: "Espaços Comerciais",
        description: "Planejamos áreas comerciais eficientes, com design estratégico e alto potencial de retorno financeiro.",
        icon: <FaBuilding size={40} className="text-red-700" />
    },
    {
        title: "Consultoria Completa",
        description: "Acompanhamos todas as etapas, do planejamento ao projeto final, com gestão financeira e técnica integrada.",
        icon: <FaHandsHelping size={40} className="text-red-700" />
    },
  ];

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
    <>
      <Header isAntaresPage={true} />   
      <Slider {...settings} className="relative">
        <div className="overflow-hidden shadow-lg relative">
          <img src="antares01.jpg" alt="Imagem 1" className="w-full h-[950px] object-cover"/>
        </div>
        <div className="overflow-hidden shadow-lg relative">
          <img src="antares02.jpg" alt="Imagem 2" className="w-full h-[950px] object-cover"/>
        </div>
        <div className="overflow-hidden shadow-lg relative">
          <img src="antares03.jpg" alt="Imagem 3" className="w-full h-[950px] object-cover"/>
        </div>
      </Slider>
      <div className="absolute mt-52 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-6">
        <div className="bg-red-700 bg-opacity-75 p-8 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-4">ANTARES</h2>
          <p className="mb-4">ENTRE EM CONTATO CONOSCO</p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-green-600 ml-2 text-white px-4 py-2 rounded-lg">Contato</a>
        </div>
      </div>
      <div className="bg-white w-full flex flex-col items-center mt-20 mb-16">
        <div className="flex flex-col md:flex-row items-start justify-center mt-2 p-4 md:p-8 bg-white shadow-lg rounded-lg w-full max-w-2xl md:max-w-5xl">
          <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
            <img
              className="h-96 w-full object-cover object-right rounded-lg"
              src="/galvani.jpeg"
              alt="Galvani"
            />
          </div>
          <div className="md:w-1/2 ml-10 ">
            <h1 className="text-3xl md:text-3xl font-extrabold text-black mb-6 md:mb-10">
              SOBRE NÓS
            </h1>
            <p className="text-left md:text-lg mt-4 md:mt-4 max-w-2xl md:max-w-5xl text-black">
              Na Antares, transformamos ideias em realidade. Somos
              especializados na incorporação de empreendimentos imobiliários,
              sejam eles residenciais ou comerciais, proporcionando recursos
              financeiros, técnicos e materiais necessários para sua execução.
              Trabalhamos lado a lado com profissionais de engenharia e
              arquitetura para garantir projetos inovadores, funcionais e de
              alta qualidade que atendam às expectativas dos nossos clientes.
            </p>
          </div>
        </div>
      </div>

      <section className="relative bg-red-700 h-[500px]">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">NOSSOS SERVIÇOS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-lg">
            {services.map((service, index) => (
              <div key={index} className="bg-white bg-opacity-75 shadow-md rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black">{service.title}</h3>
                <p className="text-black text-sm mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white mt-8 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <h2 className="text-3xl font-extrabold text-center text-black mb-12">ONDE ESTAMOS</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="w-full h-auto bg-gray-200 rounded-lg p-8">
              <h1 className='text-black text-3xl font-semibold text-center mb-8'>Entre em contato com o nosso time!</h1>
              <form className='space-y-6'>
                <label className='text-black flex flex-col'>
                  Nome Completo:
                  <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"/>
                </label>
                <label className='text-black flex flex-col'>
                  Email para contato:
                  <input type="email" className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"/>
                </label>
                <label className='text-black flex flex-col'>
                  Mensagem:
                  <textarea className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"/>
                </label>
                <button type="submit" className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition duration-300">Enviar</button>
              </form>
            </div>
            <div className="w-full h-92 bg-gray-300 rounded-lg">
              <img
                src="mapa.png"
                alt="Imagem da localização"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}