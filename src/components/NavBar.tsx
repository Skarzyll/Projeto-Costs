import Link from "next/link"


export default function NevBar() {
    return (
        <>
            <ol className="flex h-full w-2/4 items-center justify-evenly">
                <li>
                    <Link href={{
                        pathname: '/'
                    }} className="pt-3 pb-3 pr-5 pl-5 hover:bg-zinc-500 rounded-md">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={{
                        pathname: '/Projetos'
                    }} className="pt-3 pb-3 pr-5 pl-5 hover:bg-zinc-500 rounded-md">
                        Projetos
                    </Link>
                </li>
                <li>
                    <Link href={{
                        pathname: '/Empresa'
                    }} className="pt-3 pb-3 pr-5 pl-5 hover:bg-zinc-500 rounded-md">
                        Empresa
                    </Link>
                </li>
                <li>
                    <Link href={"/Contato"} className="pt-3 pb-3 pr-5 pl-5 hover:bg-zinc-500 rounded-md">
                        Contato
                    </Link>
                </li>
            </ol>
        </>
    )
}