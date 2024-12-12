'use client'

import Footer from "@/components/Footer";
import Form from "@/components/Form"
import Header from "@/components/Header";

export default function NovoProjeto() {

    return (
        <div className="h-screen w-screen text-center">
            <Header />
            <div className="min-h-min-70 p-2">
                <h1 className="text-4xl font-bold m-3">Criar projeto</h1>
                <p className="m-3">Crie seu projeto para depois adicionar os serviços.</p>
                <div className="flex justify-center w-auto">
                    <Form />
                </div>
            </div>
            <Footer />
        </div>
    )
}