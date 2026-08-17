"use client"

import Link from 'next/link'
import { useState } from 'react'

function ProjectCard({ image, title, description, liveLink, githubLink }: any) {
    const [expanded, setExpanded] = useState(false)
  return (
    <div className='flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden group hover:border-black transition-all duration-300'>
      <div className='overflow-hidden'>
        <img src={image} alt={title} className='w-full h-52 object-cover grayscale group-hover:grayscale-0 transition-all duration-500' />
      </div>
      <div className='p-6 flex flex-col gap-3'>
        <h3 className='text-2xl font-bold uppercase tracking-tight'>{title}</h3>
        
        <button 
        onClick={() => setExpanded(!expanded)}
        className='text-xs text-gray-400 hover:text-black text-left transition-all'
    >
        {expanded ? 'View less ↑' : 'View more ↓'}
    </button>
    {expanded && <p className='text-sm text-gray-500'>{description}</p>}
    <div className='flex gap-3 mt-3'>
        <div className='flex gap-3 mt-3'>
          <Link href={liveLink} target='_blank' className='text-xs uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300'>Live ↗</Link>
          <Link href={githubLink} target='_blank' className='text-xs uppercase tracking-widest border border-gray-300 px-4 py-2 hover:border-black transition-all duration-300'>GitHub</Link>
        </div>
    </div>
       
      </div>
    </div>
  )
}

export default ProjectCard