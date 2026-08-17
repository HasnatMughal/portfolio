"use client"
import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import Link from "next/link"

function Navbar() {
    const [open, setOpen] = useState(false)
    
    return (
        <div className='relative flex justify-between items-center uppercase gap-8 px-6 md:px-24 py-6 border-b w-full'>
            <h1 className='text-xl md:text-3xl font-bold'>Hasnat Ahmed</h1>
            
            {/* Desktop */}
            <ul className='hidden md:flex items-center gap-8'>
                <Link href="#home">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#portfolio">Portfolio</Link>
            </ul>
            <Link href="#contact" className='hidden md:block border hover:text-white hover:bg-black px-4 py-2 rounded-2xl'>Let's Talk</Link>
            
            {/* Mobile */}
            <button className='md:hidden' onClick={() => setOpen(!open)}>
                {open ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>

            {open && (
                <div className='absolute top-full left-0 w-full bg-white border-b z-50 flex flex-col gap-4 p-6'>
                    <Link className="hover:bg-black p-2 hover:text-white" href="#home" onClick={() => setOpen(false)}>Home</Link>
                    <Link className="hover:bg-black p-2 hover:text-white"  href="#about" onClick={() => setOpen(false)}>About</Link>
                    <Link className="hover:bg-black p-2 hover:text-white"  href="#portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
                    <Link className="hover:bg-black p-2  hover:text-white"  href="#contact" onClick={() => setOpen(false)}>Let's Talk</Link>
                </div>
            )}
        </div>
    )
}

export default Navbar