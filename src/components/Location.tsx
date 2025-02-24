"use client";
import React, { useState } from "react";

export default function Location() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const { nome, email, mensagem } = formData;
    const text = `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        setMessage("Email enviado com sucesso!");
      } else {
        setMessage("Erro ao enviar email. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setMessage("Erro ao enviar email. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-200 mt-8  w-full " id="location">
      <div className="md:w-5/5 lg:w-4/5 mx-auto  mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full h-auto rounded-lg p-8 my-auto">
            <h1 className="text-black text-3xl font-semibold text-center mb-8">
              Entre em contato com o nosso time!
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <label className="text-black flex flex-col">
                <input
                  type="text"
                  name="nome"
                  placeholder="Informe seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
              </label>
              <label className="text-black flex flex-col">
                <input
                  placeholder="Qual seu melhor e-mail?"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
              </label>
              <label className="text-black flex flex-col">
                <textarea
                  placeholder="Escreva sua mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition duration-300 font-bold uppercase"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
            {loading && (
              <p className="text-center text-black mt-4">Enviando...</p>
            )}
            {message && (
              <p className="text-center text-black mt-4">{message}</p>
            )}
          </div>
          <div className="w-full h-full rounded-lg flex">
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="telemarketing.png"
              alt="Imagem da localização"
              className="md:w-[100%] lg:w-[90%] xl:w-[80%] object-cover rounded-lg hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
