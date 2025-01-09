import { FaCut, FaWrench, FaCompressArrowsAlt } from 'react-icons/fa';

export default function Services() {
    const services = [
        {
            title: "Corte de Aço",
            description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            icon: <FaCut size={40} className="text-red-700" />
        },
        {
            title: "Soldagem",
            description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            icon: <FaWrench size={40} className="text-red-700" />
        },
        {
            title: "Dobra de Aço",
            description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            icon: <FaCompressArrowsAlt size={40} className="text-red-700" />
        },
    ];

    return (
        <section className="relative bg-red-700 h-[500px]">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-5xl font-extrabold text-center text-white mb-12">NOSSOS SERVIÇOS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-lg">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white bg-opacity-75 shadow-md rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
                            <div className="mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-black">{service.title}</h3>
                            <p className="text-black text-sm mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}