import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-700 w-full text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src="/logo.png"
              alt="Galvani Logo"
              className="h-10 w-auto sm:h-16 sm:mt-6"
            />
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Galvani. Todos os direitos
              reservados.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-6">
            <div className="flex  space-x-6">
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
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <p className="text-sm text-center md:text-left mt-4 md:mt-0">
                Endereço: Rua dos Bobos, nº 0, São Paulo - SP
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
