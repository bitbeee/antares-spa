export default function Services() {
    const services = [
        {
            title: "Corte de Aço",
            description: "Cortes de precisão para atender às especificações do seu projeto."
        },
        {
            title: "Soldagem",
            description: "Serviços de soldagem de alta qualidade para garantir a integridade estrutural."
        },
        {
            title: "Dobra de Aço",
            description: "Dobras precisas para atender às necessidades do seu projeto."
        },
        {
            title: "Usinagem",
            description: "Serviços de usinagem para peças personalizadas e de alta precisão."
        }
    ];

    return (
        <section className="bg-red-700 -mt-96 mb-20">
            <div className="w-full h-40 bg-red-700 flex items-center justify-center">
                <h2 className="text-5xl font-extrabold text-center text-white">NOSSOS SERVIÇOS</h2>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
                            <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                            <p className="text-black mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}