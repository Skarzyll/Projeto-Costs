"use client";

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { FaRegTrashCan } from 'react-icons/fa6';

export default function CardDeleteButton({ id }: { id: string }) {


    const handleDelete = async (id: string) => {
        const response = await toast.promise(
            fetch(`http://localhost:9090/projectsdelete/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json'
                }
            }), {
            pending: 'Excluindo...',
            success: 'Projeto Excluído!',
            error: 'Erro ao exclir projeto.'
        })
        
        //Por algum motivo a notificação não aparece, mas deleta com sucesso
        if (response.ok) {
            const ele = document.getElementById(id)
            if (ele) {
                ele.style.display = "none"
                setTimeout(() => {
                    ele?.remove()
                }, 6000)
            }
        }
    };

    return (
        <>
            <button onClick={() => handleDelete(id)} className={"flex p-2 mr-3 bg-white text-center items-center rounded-md border border-black hover:bg-red-800 hover:text-white transition-all duration-100"}>
                <FaRegTrashCan /> <p className='ml-1'>Delete</p>
            </button>
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
        </>
    )
}