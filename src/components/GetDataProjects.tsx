'use client'

import { useState, useEffect } from "react";
import CardDeleteButton from "@/components/DeleteData";
import Project from "@/api/Server.mjs";
import Loading from "./Loading";
import { FaPenToSquare } from 'react-icons/fa6'
import Link from "next/link";

type Project = {
    id: string;
    name: string;
    buy: number;
    categoria_id: string;
    createdAt: number;
    updateAt: number;
};

export default function GetDataProject() {

    const [projects, setProjects] = useState<Project[]>([]);
    const [RLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api-costs.onrender.com/projects')
            .then(res => res.json())
            .then(dados => {
                setProjects(dados)
                setLoading(false)
            })
            .catch(error => {
                console.error('Erro ao buscar projetos:', error)
                setLoading(false)
            });
    }, []);

    if (RLoading) {
        return <Loading />
    } else if (projects.length === 0) {
        return <p>Sem projetos</p>
    }

    const ProjectData = projects.map((project) => (
        <div key={project.id} id={`${project.id}`} className="max-w-full max-h-full ">
            <div className="border border-black p-2 rounded-md">
                <p className="font-bold text-xl bg-zinc-900 text-yellow-500 p-2 rounded text-center">{project.name}</p>

                <div className="mt-2">
                    <span className="font-semibold text-orc">Orçamento</span>: {project.buy.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </div>

                <div>
                    <span className="font-semibold text-orc">Categoria</span>: {project.categoria_id}
                </div>

                <div className="flex justify-start mt-2 ">

                    <CardDeleteButton id={project.id} />

                    <Link href={`/Projectedit/${project.id}`} className="flex p-2 bg-white text-center items-center border rounded-md border-black hover:bg-zinc-800 hover:text-yellow-500 transition duration-100">
                        <FaPenToSquare /> <p className="ml-1">Editar</p>
                    </Link>
                </div>

                <div>
                    <div className="flex">
                        <p className="font-semibold text-orc">Criado</p>: {project.createdAt}
                    </div>

                    {
                    //Esta retornando undefined, por enquanto nao mexer
                    /*  <div className="flex">
                        <p className="font-semibold text-orc">Ultimo update</p>: {project.updateAt}
                    </div> */}
                </div>
            </div>
        </div>
    ))

    return ProjectData
}