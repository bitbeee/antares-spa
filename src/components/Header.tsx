"use client";

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  isAntaresPage: boolean;
}

export default function Header({ isAntaresPage }: HeaderProps) {
  const [isClick, setIsClick] = useState(false);

  const toggleNavBar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-red-700 text-white py-4 md:py-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex flex-1">
            <Link href={"/"}>
              {/*  eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="E-CONTROL Logo"
                className="h-10 w-auto sm:h-16 sm:mt-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex md:flex-col items-end gap-2 p-4 my-auto h-full flex-1">
            <span className="text-white">Telefone: (62) 3328-3838</span>
            <span className="text-white">
              Email: contato@metalurgicagalvani.com.br
            </span>
          </div>
          <div className="md:hidden flex items-center ml-auto">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white 
                            hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavBar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center sm:bg-red-700  rounded-t-lg">
          <div className="hidden sm:block">
            <div className="ml-4 flex items-center space-x-4 h-16">
              <Link
                href="#about"
                className="text-white hover:scale-110  rounded-lg p-2"
              >
                SOBRE NÓS
              </Link>
              <Link
                href="#services"
                className="text-white hover:scale-110  rounded-lg p-2"
              >
                SERVIÇOS
              </Link>
              <Link
                href="#location"
                className="text-white hover:scale-110  rounded-lg p-2"
              >
                CONTATO
              </Link>
              <Link
                href="/antares"
                className={`rounded-lg p-2 ${
                  isAntaresPage
                    ? "bg-white text-black hover:scale-110"
                    : "text-white hover:scale-110"
                }`}
              >
                ANTARES
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
            >
              SOBRE NÓS
            </Link>
            <Link
              href="#services"
              className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
            >
              SERVIÇOS
            </Link>

            <Link
              href="#location"
              className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
            >
              CONTATO
            </Link>
            <Link
              href="/antares"
              className={`block rounded-lg p-2 ${
                isAntaresPage
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              }`}
            >
              ANTARES
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
