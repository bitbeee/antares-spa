"use client";

import { useState } from "react";

export default function Header() {
    const [isClick, setIsClick] = useState(false);

    const toggleNavBar = (): void => {
        setIsClick(!isClick);
    }

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-red-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a href="/">
                                <img src="/logo.png" alt="E-CONTROL Logo" className="h-10 w-auto sm:h-12" />
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <span className="text-white">Telefone: (11) 1234-5678</span>
                            <span className="text-white">Email: contato@e-control.com</span>
                        </div>
                        <div className="md:hidden sm:hidden flex items-center ml-auto">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-white 
                            hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={toggleNavBar}
                            >
                                {isClick ? (
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
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
                                        stroke="currentColor">
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

                    <div className="flex items-center justify-center sm:bg-white h-16 rounded-t-lg">
                        <div className="hidden sm:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <a href="/" className="text-black hover:bg-red-700 hover:text-white rounded-lg p-2">SOBRE NÓS</a>
                                <a href="/sales" className="text-black hover:bg-red-700 hover:text-white rounded-lg p-2">SERVIÇOS</a>
                                <a href="/about" className="text-black hover:bg-red-700 hover:text-white rounded-lg p-2">ONDE ESTAMOS</a>
                                <a href="/perfil" className="text-black hover:bg-red-700 hover:text-white rounded-lg p-2">CONTATO</a>
                            </div>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden ">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">SOBRE NÓS</a>
                            <a href="/sales" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">SERVIÇOS</a>
                            <a href="/about" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">ONDE ESTAMOS</a>
                            <a href="/perfil" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">CONTATO</a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}