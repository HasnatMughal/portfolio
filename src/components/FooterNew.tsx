import React from 'react'

function FooterNew() {
  return (
    <footer className="bg-black text-white w-full py-16 px-8 relative overflow-hidden">
    {/* Background scattered links */}
    <div className="absolute inset-0 flex flex-wrap items-center justify-around opacity-20 text-xs tracking-widest pointer-events-none">
        <span>GITHUB</span>
        <span>LINKEDIN</span>
        <span>TWITTER</span>
        <span>FIVERR</span>
        <span>UPWORK</span>
        <span>DEV.TO</span>
    </div>

    {/* LET'S TALK */}
    <div className="flex flex-col items-center gap-8 relative z-10">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tight">LET'S TALK</h1>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://github.com/HasnatMughal" target="_blank" className="border border-white px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">GitHub</a>
            <a href="https://linkedin.com/in/hasnat-ahmed-1b4b252a8" target="_blank" className="border border-white px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">LinkedIn</a>
            <a href="mailto:your@email.com" className="bg-white text-black px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-gray-200 transition-all">Contact Me</a>
        </div>

        {/* Copyright */}
        <div className="flex justify-between w-full mt-8 text-xs text-gray-500">
            <span>© HASNAT AHMED. ALL RIGHTS RESERVED</span>
            <span>SIALKOT, PAKISTAN</span>
        </div>
    </div>
</footer>
  )
}

export default FooterNew