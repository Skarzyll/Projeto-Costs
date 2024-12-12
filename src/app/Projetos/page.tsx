'use client'

import GetDataProject from "@/components/GetDataProjects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Projetos() {
    return (
        <>
            <div className="h-screen w-screen">
                <Header />
                <div className="min-h-min-70 p-2 pr-5">
                    <div className="flex mb-2 w-full justify-between items-center">
                        <h1 className="text-3xl font-bold">Meus projetos</h1>
                        <button className="text-xl bg-zinc-900 p-2 rounded-md text-yellow-500 hover:shadow-lg hover:shadow-black active:scale-90 ease-in-out duration-300">
                            <a href="/NovoProjeto" className="">Novo projeto!</a>
                        </button>
                    </div>
                    <div className="grid grid-flow-row grid-cols-4 gap-2 max-w-full">
                        <GetDataProject />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}