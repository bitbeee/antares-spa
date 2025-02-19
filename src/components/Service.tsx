"use client";

export default function Services() {
  const services = [
    {
      title: "Corte de Aço",
      description:
        "Realizamos cortes de alta precisão em chapas e perfis metálicos, garantindo medidas exatas para diferentes aplicações industriais. Utilizamos tecnologia avançada para oferecer cortes limpos e sem rebarbas, otimizando tempo e recursos para sua produção.",
    },
    {
      title: "Soldagem",
      description:
        "Oferecemos serviços de soldagem de alta performance, unindo peças metálicas com máxima resistência e durabilidade. Nossa equipe técnica utiliza processos modernos para garantir acabamentos impecáveis e estruturas seguras.",
    },
    {
      title: "Dobra de Aço",
      description:
        "Realizamos dobras precisas em chapas metálicas, proporcionando peças sob medida para sua necessidade. Nossos equipamentos garantem alta precisão, reduzindo desperdícios e otimizando sua produção.",
    },
  ];

  return (
    <section className=" p-4" id="services">
      <div className="items-center justify-center flex flex-col">
        <h2 className="text-5xl font-extrabold text-center text-black mb-12">
          NOSSOS SERVIÇOS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
            >
              <h3 className="text-xl font-bold text-black">{service.title}</h3>
              <p className="text-black text-sm mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
