"use client";

export default function Services() {
  const services = [
    {
      title: "Residenciais Sob Medida",
      description:
        "Criamos lares que unem conforto, funcionalidade e design, valorizando o terreno e as necessidades do cliente.",
    },
    {
      title: "Espaços Comerciais",
      description:
        "Planejamos áreas comerciais eficientes, com design estratégico e alto potencial de retorno financeiro.",
    },
    {
      title: "Consultoria Completa",
      description:
        "Acompanhamos todas as etapas, do planejamento ao projeto final, com gestão financeira e técnica integrada.",
    },
  ];

  return (
    <section className="" id="services">
      <div className="items-center justify-center flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-4/5">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 text-justify transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer ${
                index === services.length - 1
                  ? ""
                  : "border-b-2 md:border-r-[2px] md:border-b-0 border-gray-300"
              }`}
            >
              <h3 className="text-xl font-bold text-black text-start">
                {service.title}
              </h3>
              <p className="text-black text-sm mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
