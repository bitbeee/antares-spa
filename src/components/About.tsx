'use client'
import { useState } from 'react';

export default function About() {
    const [selectedOption, setSelectedOption] = useState('antares');

    const renderContent = () => {
        if (selectedOption === 'antares') {
            return (
                <>
                    <h1 className="text-5xl font-extrabold text-black mb-10 -scroll">SOBRE NÓS - ANTARES</h1>
                    <p className="text-lg mt-6 text-center max-w-5xl text-black">
                        Somos uma empresa especializada em soluções de aço para diversos setores da indústria. 
                        Com anos de experiência, oferecemos produtos de alta qualidade que atendem aos padrões mais exigentes. 
                        Nosso compromisso é fornecer materiais confiáveis e inovadores para seus projetos.
                    </p>
                    <p className="text-lg mt-4 text-center max-w-5xl text-black">
                        Conte com nossa equipe de especialistas para ajudá-lo a escolher o material ideal para suas necessidades. 
                        Estamos sempre prontos para superar suas expectativas e agregar valor aos seus negócios.
                    </p>
                </>
            );
        } else if (selectedOption === 'galvani') {
            return (
                <>
                    <h1 className="text-5xl font-extrabold text-black mb-10">SOBRE NÓS - GALVANI</h1>
                    <p className="text-lg mt-6 text-center max-w-5xl text-black">
                        Galvani é uma empresa líder em soluções de aço, oferecendo produtos de alta qualidade para diversos setores. 
                        Nossa missão é fornecer materiais inovadores e confiáveis para todos os tipos de projetos.
                    </p>
                    <p className="text-lg mt-4 text-center max-w-5xl text-black">
                        Nossa equipe de especialistas está sempre pronta para ajudar você a encontrar a melhor solução para suas necessidades. 
                        Estamos comprometidos em superar suas expectativas e agregar valor ao seu negócio.
                    </p>
                </>
            );
        }
    };

    return (
        <div className="bg-gray-100 w-full flex flex-row items-start min-h-screen">
            <div className="flex flex-col items-start p-4 pt-56">
                <button
                    className={`px-4 py-2 mb-4 ${selectedOption === 'antares' ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}`}
                    onClick={() => setSelectedOption('antares')}
                >
                    Antares
                </button>
                <button
                    className={`px-4 py-2 ${selectedOption === 'galvani' ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}`}
                    onClick={() => setSelectedOption('galvani')}
                >
                    Galvani
                </button>
            </div>
            <div className="flex flex-col items-center justify-center mt-36 p-8 bg-white shadow-lg rounded-lg ml-4 w-full max-w-5xl relative">
                {renderContent()}
                <div className="absolute top-0 right-0 p-4">
                    <img src="metalurgia.png" alt="Download Icon" className="w-16 h-16" />
                </div>
            </div>
        </div>
    );
}