"use client"

import { useState } from "react"
import Link from 'next/link' // <-- 1. Import the Link component

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-[#00d9ff]/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 2. Wrap your logo in a Link to go to the homepage */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#00d9ff] flex items-center justify-center font-bold text-sm text-[#0f0f0f]">
            Q
          </div>
          <span className="text-lg font-semibold tracking-tight">QUICShift</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          
          {/* 3. Update links to work from any page */}
          <a href="/#features" className="text-[#a0a0a0] hover:text-[#00d9ff] transition text-sm">
            Features
          </a>
          
          {/* 4. THIS IS THE MAIN CHANGE */}
          <Link href="/my-svg-page" className="text-[#a0a0a0] hover:text-[#00d9ff] transition text-sm">
            Architecture
          </Link>
          
          {/* 3. Update links to work from any page */}
          <a href="/#use-cases" className="text-[#a0a0a0] hover:text-[#00d9ff] transition text-sm">
            Use Cases
          </a>
          
          <button className="px-5 py-2 bg-[#00d9ff] text-[#0f0f0f] rounded font-semibold text-sm hover:bg-[#00b8d4] transition">
            Get Started
          </button>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* NOTE: You still need to build your mobile menu here. 
        When you do, use the same <Link> and <a> tags as above.
        
        e.g., {isOpen && ( ... menu links ... )}
      */}
    </header>
  )
}