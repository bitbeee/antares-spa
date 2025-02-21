"use client";

export default function About() {
  return (
    <div className="bg-white w-full flex flex-col items-center  mb-8 mt-[16vh] ">
      <div className="flex flex-col md:flex-row items-start justify-between mt-4 bg-white rounded-lg md:w-4/5 w-full p-4 md:p-0">
        <div className="md:w-1/2 pr-0 mt-4 w-full my-auto">
          <h1 className="text-4xl font-extrabold text-black mb-4 md:mb-4">
            SOBRE NÓS
          </h1>
          <p className="md:text-lg mt-4 md:mt-6 text-gray-700 leading-relaxed text-justify">
            Na Antares, transformamos ideias em realidade. Somos especializados
            na incorporação de empreendimentos imobiliários, sejam eles
            residenciais ou comerciais, proporcionando recursos financeiros,
            técnicos e materiais necessários para sua execução. Trabalhamos lado
            a lado com profissionais de engenharia e arquitetura para garantir
            projetos inovadores, funcionais e de alta qualidade que atendam às
            expectativas dos nossos clientes.
          </p>
        </div>
        <div className="mt-4 md:mt-0 p-0 md:p-4">
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-[40vh] rounded-md"
            src="/galvani.jpeg"
            alt="Galvani"
          />
        </div>
      </div>
    </div>
  );
}
