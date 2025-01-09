import React from 'react';

export default function Location() {
    return (
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
    );
}