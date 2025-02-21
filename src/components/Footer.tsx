/* eslint-disable @next/next/no-img-element */
"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-700 w-full text-white py-12 mt-100vh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex w-full md:w-[40vw] lg:w-[30vw] flex-row justify-center sm:justify-normal">
            <img
              src="/logo.png"
              alt="Galvani Logo"
              className="h-[10vh] w-[10vw] my-auto hidden md:block"
            />
            <div className="md:grid grid-cols-2 px-4 flex-col  w-full hidden">
              <a href="#about" className="my-auto">
                Sobre Nós
              </a>{" "}
              <a href="#services" className="my-auto">
                Serviços
              </a>
              <a href="#location" className="my-auto">
                Contato
              </a>
              <a href="/antares" className="my-auto">
                Antares
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 mt-4 md:mt-0 mb-4 md:mb-0">
            <div className="flex flex-col gap-y-4 justify-start ">
              <div className="flex space-x-6 items-center mx-auto">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-500"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-700"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>
              <p className="text-sm text-start  mt-4 md:mt-0">
                Endereço: Avenida Brasilia, 625 <br />
                Alvorada, Anapolis <br /> GO, CEP:75.084-677
              </p>
            </div>
          </div>
        </div>
        <div className="mb-4 md:mb-0 flex justify-center">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Galvani. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
