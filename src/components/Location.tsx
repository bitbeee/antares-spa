import React from 'react';

export default function OndeEstamos() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-extrabold text-center text-black mb-12">ONDE ESTAMOS</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    
                    <div className="w-full h-96 bg-gray-200 rounded-lg">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0}}
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-46.66072201728821%2C-23.551003126532056%2C-46.65738823313863%2C-23.549690366081108&layer=mapnik"
                            allowFullScreen
                        ></iframe>
                    </div>
                    
                 
                    <div className="w-full h-96 bg-gray-300 rounded-lg">
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
