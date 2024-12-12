"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="min-h-min-70 p-3 bg-white text-center">
        <h1 className="text-3xl m-6">
          <strong className="m-1">
            Bem-Vindo ao
            <span className="bg-zinc-950 text-yellow-500 p-1 m-1">Costs</span>
          </strong>
        </h1>
        <p className="text-neutral-600 m-8">
          Comece a gerenciar seus projetos agora mesmo!
        </p>
        <a href="/NovoProjeto" className="p-2 w-5 h-3 bg-zinc-900 text-yellow-500 rounded-md hover:shadow-md hover:shadow-black active:scale-90 ease-in-out duration-300">Novo projeto!</a>
      </div>
      <Footer />
    </div>
  );
}
