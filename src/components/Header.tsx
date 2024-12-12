import NavBar from "./NavBar";
import Image from "next/image";

export default function Header() {
    return(
        <header className="flex bg-gray-900 text-white p-1 h-24 w-full justify-between items-center content-center">
            <Image 
                src={"/images/logo512.png"}
                alt={"image"}
                height={80}
                width={70}
            />
            <NavBar />
        </header>
    )
}