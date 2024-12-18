export default function Services() {
    const services = [
        {
            title: "Corte de Aço",
            description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
        },
        {
            title: "Soldagem",
            description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
        },
        {
            title: "Dobra de Aço",
            description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
    ];

    return (
        <section className="bg-red-700">
            <div className="w-full h-40 bg-red-700 flex items-center justify-center">
                <h2 className="text-5xl font-extrabold text-center text-white">NOSSOS SERVIÇOS</h2>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-1 lg:gap-4 overflow-hidden">
                    {services.map((service, index) => (
                        <div key={index} className="my-4 bg-white shadow-md rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105" style={{ height: '200px'}}>
                            <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                            <p className="text-black mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}