"use client"


import { useState } from "react"

function ServiceCard({ number, title, description }: any) {
    const [expanded, setExpanded] = useState(false)
    return (
        <div className='border-b px-4 hover:bg-black hover:text-white  border-gray-200 py-6 cursor-pointer' onClick={() => {setExpanded(!expanded)}}>
    <div className='flex items-center justify-between group hover:border-black transition-all'>
        <div className='flex items-center gap-8'>
            <span className='text-sm text-gray-400'>{number}</span>
            <h3 className='text-xl uppercase font-semibold tracking-tight'>{title}</h3>
        </div>
        <span className='text-gray-400 shrink-0'>{expanded ? '↑' : '↓'}</span>
    </div>
    {expanded && <p className='text-sm mt-4 pl-14'>{description}</p>}
</div>
    )
}

export default ServiceCard