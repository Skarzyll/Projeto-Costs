import { useEffect, useState } from "react";
import Input from "./Input";
import Select from "./Select";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {

    const [categoria_id, setCategoriaId] = useState('')
    const [buy, setbuyid] = useState('')
    const [name, setname] = useState('')
    const [isFormValid, setFormValid] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await toast.promise(
            fetch('http://127.0.0.1:9090', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, buy, categoria_id
                })
            }), {
            pending: 'Enviando projeto...',
            success: 'Projeto criado!',
            error: 'Erro ao criar projeto.'
        }
        )

        if (response.ok) {
            console.log('ok');
        }

    }

    function setbuy(e) {
        const b = Number(e.target.value)
        if (b > 0) {
            setbuyid(b)
        }
    }

    const notify = () => {
        if (name.length == 0 || buy.length == 0 || categoria_id.length == 0) {
            toast.warning('Algum campo está vazio.')
        }
    }

    useEffect(() => {
        setFormValid(name.trim() !== '' && buy.valueOf() !== '' && categoria_id.trim() !== '')
    }, [name, buy, categoria_id]);

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
            <form onSubmit={handleSubmit} action="/" method="post" className="text-center w-fit">
                <Input
                    nomelabel="Nome"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    useonchange={(e) => setname(e.target.value)}
                    className={"mb-3"}
                />

                <Input
                    nomelabel="Orçamento"
                    type="number"
                    name="buy"
                    id="buy"
                    value={buy}
                    useonchange={setbuy}
                    className={"mb-3"}
                />

                <Select
                    nomelabel={"Opção"}
                    name="categoria_id"
                    value={categoria_id}
                    useonchange={(e) => setCategoriaId(e.target.value)}
                /> <br />

                <button type="submit" className="bg-zinc-900 text-yellow-500 p-2 disabled:opacity-60 rounded-md hover:shadow-md hover:shadow-black active:scale-90 ease-in-out duration-100 disabled:cursor-not-allowed disabled:pointer-events-none" disabled={!isFormValid} onClick={notify}>Criar projeto</button>
            </form>
        </>
    )
}    
