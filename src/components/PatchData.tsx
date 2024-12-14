'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Input from "./Input";
import Select from "./Select";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Project = {
    id: string;
    name: string;
    buy: number;
    categoria_id: string;
    createdAt: string;
    updateAt: string;
};

export default function PathData() {

    const { id } = useParams() as { id: string }
    const [project, setProjects] = useState<Project[]>([])
    const [RLoading, setLoading] = useState(true);
    const [showForm, setForm] = useState(false);
    const [newCategoria, setCategoriaId] = useState('')
    const [newBuy, setbuyid] = useState('')
    const [newName, setname] = useState('')
    const [isFormValid, setFormValid] = useState(false);

    const handlePatch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await toast.promise(
            fetch(`http://0.0.0.0:9090/projectsedit/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    newName,
                    newBuy,
                    newCategoria
                })
            }), {
            pending: 'Salvando...',
            success: 'Projeto editado!',
            error: 'Erro ao editar projeto.'
        })

        if (response.ok) {
            console.log("ok");
            
        }
    }

    useEffect(() => {

        fetch(`http://localhost:9090/projectsone/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(dados => {
                setProjects(dados)
                setLoading(false)
            })
            .catch(error => {
                console.error('Erro ao buscar projetos:', error)
                setLoading(false)
            });

    }, [id]);

    function setnewbuy(e: React.ChangeEvent<HTMLInputElement>) {
        if(e) {
            const target = e.target as HTMLInputElement
            const b = target.value 
            const c = Number(b)
            if (c >= 0) {
                setbuyid(b)
            }
        }
    }

    useEffect(() => {
        setFormValid(newName.trim() !== '' && newBuy.valueOf() !== '' && newCategoria.trim() !== '')
    }, [newName, newBuy, newCategoria]);

    const notify = () => {
        if (newName.length === 0 || newBuy.length === 0 || newCategoria.length === 0) {
            toast.warning('Algum campo está vazio.')
        }
    }

    const projects = project.map((project) => (

        <div key={project.id} className="w-full h-full p-2 border-b-2 border-b-slate-400">

            <div className="flex text-center justify-between mt-2 mb-2">
                <p className="text-2xl font-bold">Projeto: {project.name}</p>

                <button type="button" onClick={toglleForm} className="p-2 bg-zinc-800 text-yellow-500 rounded-sm ext-yellow-500 hover:shadow-md hover:shadow-black active:scale-90 ease-in-out duration-100">
                    {!showForm ? 'Editar projeto' : 'Fechar'}
                </button>
            </div>

            {!showForm ? (
                <div className="">
                    <span className="flex">
                        <p className="font-bold mr-1">Categoria: </p> {project.categoria_id}
                    </span>
                    <span className="flex">
                        <p className="font-bold mr-1">Total de orçamento:</p>{project.buy.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </span>
                    <span className="flex">
                        <p className="font-bold mr-1">Criado em:</p> {project.createdAt}
                    </span>
                    {/* <span className="flex"> // por algum motivo nao retorna nada.
                        <p className="font-bold mr-1">Último update:</p> {project.updateAt}
                    </span> */}
                </div>
            ) : (
                <div className="flex w-full ">

                    <form action='/projectsedit' onSubmit={handlePatch} method="PATCH" >

                        <div className="mt-3">
                            <Input
                                nomelabel="Novo nome"
                                type="text"
                                name="newName"
                                id="newName"
                                value={newName}
                                useonchange={(e) => setname(e.target.value)}
                                className={""}
                            />
                        </div>

                        <div className="mt-4 ">
                            <Input
                                nomelabel="Novo orçamento"
                                type="number"
                                name="newBuy"
                                id="newBuy"
                                value={newBuy}
                                useonchange={setnewbuy}
                                className={""}
                            />
                        </div>

                        <div className="mt-4 mb-3">
                            <Select
                                nomelabel="Nova categoria"
                                name="newCategoria"
                                value={newCategoria}
                                useonchange={(e) => setCategoriaId(e.target.value)}
                            /> <br />
                        </div>

                        <button type="submit" className="text-yellow-500 font-medium p-2 w-20 rounded-md bg-zinc-800 disabled:bg-zinc-500 disabled:text-yellow-300 active:scale-90 duration-100" disabled={!isFormValid} onClick={notify}>Editar</button>

                    </form>
                </div>
            )}
        </div>
    ))

    if (RLoading) {
        return <Loading />
    } else if (projects.length === 0) {
        return <p>Sem projetos</p>
    }

    function toglleForm() {
        setForm(!showForm)
    }

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {projects}
        </>

    )
}