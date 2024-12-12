import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'


export default function Footer() {
    return(
        <footer className="bg-zinc-800 h-24 p-1 text-center">
            <button className='p-2 m-2 rounded-full bg-face hover:bg-opacity-40'>
                <FaFacebookF className='h-6 w-6 text-white' />
            </button>
            <button className='p-2 m-2 rounded-full bg-gradient-to-b from-ins1 via-ins2 to-ins3 hover:bg-opacity-40'>
                <FaInstagram className='h-6 w-6 text-white' />
            </button>
            <button className='p-2 m-2 rounded-full bg-black hover:bg-opacity-40'>
                <FaXTwitter className='h-6 w-6 text-white' />
            </button>
            <p className='text-white text-center'>Costs &copy;	2024</p>
        </footer>
    )
}