"use client";

export default function About() {
  return (
    <div className="bg-white w-full flex flex-col items-center  mb-8 mt-8 sm:mt-0">
      <div className="flex flex-col md:flex-row items-start justify-between mt-4 bg-white rounded-lg md:w-4/5 w-full p-4 md:p-0">
        <div className="md:w-1/2 pr-0 mt-4 w-full">
          <h1 className="text-4xl font-extrabold text-black mb-4 md:mb-4">
            SOBRE NÓS
          </h1>
          <p className="md:text-lg mt-4 md:mt-6 text-gray-700 leading-relaxed text-justify">
            Somos uma empresa especializada em soluções de aço para diversos
            setores da indústria. Com anos de experiência, oferecemos produtos
            de alta qualidade que atendem aos padrões mais exigentes. Nosso
            compromisso é fornecer materiais confiáveis e inovadores para seus
            projetos.
          </p>
          <p className="text-justify md:text-lg mt-4 md:mt-6 text-gray-700 leading-relaxed">
            Conte com nossa equipe de especialistas para ajudá-lo a escolher o
            material ideal para suas necessidades. Estamos sempre prontos para
            superar suas expectativas e agregar valor aos seus negócios.
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

      <div className="w-full">
        <div className="bg-red-700 p-8  text-center text-white">
          <h2 className="text-4xl font-bold mb-4">GALVANI</h2>
          <p className="mb-8 text-lg">
            Descubra a excelência em aço! Baixe nosso catálogo e conheça nossas
            soluções de alta qualidade para a sua indústria.
          </p>
          <a
            href="/catalogo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-700 px-6 py-3 rounded-lg uppercase font-bold transition duration-300 hover:bg-gray-200 mb-8"
          >
            Baixar Catálogo
          </a>
        </div>
      </div>
    </div>
  );
}
