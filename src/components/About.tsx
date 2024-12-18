'use client'
import { useState } from 'react';

export default function About() {
    const [selectedOption, setSelectedOption] = useState('antares');
    const [fade, setFade] = useState(false);

    const handleOptionChange = (option: string) => {
        setFade(true);
        setTimeout(() => {
            setSelectedOption(option);
            setFade(false);
        }, 300);
    };

    const renderContent = () => {
        return (
            <>
                <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-6 md:mb-10">
                    {selectedOption === 'antares' ? '' : ''}
                </h1>
                <p className="text-base md:text-lg mt-4 md:mt-6 text-center max-w-2xl md:max-w-5xl text-black">
                    {selectedOption === 'antares' ? (
                        <>
                            Somos uma empresa especializada em soluções de aço para diversos setores da indústria.
                            Com anos de experiência, oferecemos produtos de alta qualidade que atendem aos padrões mais exigentes.
                            Nosso compromisso é fornecer materiais confiáveis e inovadores para seus projetos.
                            Conte com nossa equipe de especialistas para ajudá-lo a escolher o material ideal para suas necessidades.
                            Estamos sempre prontos para superar suas expectativas e agregar valor aos seus negócios.
                        </>
                    ) : (
                        <>
                            Galvani é uma empresa líder em soluções de aço, oferecendo produtos de alta qualidade para diversos setores.
                            Nossa missão é fornecer materiais inovadores e confiáveis para todos os tipos de projetos.
                            Nossa equipe de especialistas está sempre pronta para ajudar você a encontrar a melhor solução para suas necessidades.
                            Estamos comprometidos em superar suas expectativas e agregar valor ao seu negócio.
                        </>
                    )}
                </p>
            </>
        );
    };

    return (
        <div className="bg-wite w-full flex flex-col items-center mt-4 mb-4">
            <div className="flex flex-row items-center justify-center space-x-4">
                <button
                    className={`px-4 py-2 rounded-lg shadow-black shadow-md transition-transform transform hover:scale-105 ${selectedOption === 'antares' ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}`}
                    onClick={() => handleOptionChange('antares')}
                >
                    Antares
                </button>
                <button
                    className={`px-4 py-2 rounded-lg shadow-black shadow-md transition-transform transform hover:scale-105 ${selectedOption === 'galvani' ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}`}
                    onClick={() => handleOptionChange('galvani')}
                >
                    Galvani
                </button>
            </div>
            <div className={`flex flex-col items-center justify-center mt-2 p-4 md:p-8 bg-white shadow-lg rounded-lg w-full max-w-2xl md:max-w-5xl transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                {renderContent()}
                <div className="absolute top-0 right-0 p-2 md:p-4">
                </div>
            </div>
        </div>
    );
}