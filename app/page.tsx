"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  // Track if component is mounted to prevent hydration issues
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      {/* Background gradients with subtle animation */}
      <div className="absolute inset-0 opacity-70">
        <img
          src="/gradiente azul.png"
          alt="Gradiente azul"
          className="absolute top-[-10%] sm:top-0 right-[-15%] w-full h-full pointer-events-none select-none object-cover animate-pulse-slow"
          style={{ animationDuration: '10s' }}
          draggable="false"
        />
        <img
          src="/gradiente morado3.png"
          alt="Gradiente morado"
          className="absolute bottom-[-30%] sm:bottom-[-40%] left-[-42%] w-full h-full pointer-events-none select-none animate-pulse-slow"
          style={{ animationDuration: '15s', animationDelay: '1s' }}
          draggable="false"
        />
        <img
          src="/gradiente morado 4.png"
          alt="Gradiente morado"
          className="absolute bottom-[-5%] sm:bottom-[-10%] left-[-50%] w-full h-full pointer-events-none select-none animate-pulse-slow"
          style={{ animationDuration: '12s', animationDelay: '0.5s' }}
          draggable="false"
        />
      </div>

      {/* Glass panel with improved aesthetics */}
      <div className="absolute inset-0 z-10 flex items-start justify-start p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Background container with subtle border glow */}
        <div 
          className="absolute inset-1 sm:inset-2 md:inset-3 lg:inset-5 rounded-[3rem] overflow-hidden backdrop-blur-md bg-white/[0.02] shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/[0.03]"
        >
          {/* Glass noise texture overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"></div>
          {/* Additional glass reflections */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
        </div>
        
        {/* Navigation with hover effects - Desktop centered, mobile separated */}
        <nav className="absolute top-10 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-10 w-auto px-0 py-0 justify-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-full p-1 flex items-center shadow-glow-sm">
            <Link href="/" className="text-white text-sm opacity-90 hover:opacity-100 transition-all duration-300 relative px-4 py-2 rounded-full group bg-white/10">
              Home
              <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-10 h-[2px] bg-white/80 rounded-full"></span>
            </Link>
            <Link href="/hire-us" className="text-white text-sm opacity-90 hover:opacity-100 transition-all duration-300 relative px-4 py-2 rounded-full group hover:bg-white/10">
              Hire us.
              <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-5 h-[2px] bg-white/40 rounded-full transition-all duration-300 group-hover:bg-white/80 group-hover:w-10"></span>
            </Link>
          </div>
        </nav>

        {/* Main content container - Moved down from top-[18%] to top-[30%] */}
        <div className="absolute w-full max-w-3xl px-6 py-0 sm:px-0 sm:py-0 left-0 top-[30%] sm:left-[4%] sm:bottom-[20%] sm:top-auto">
          {/* Brand name with subtle glow */}
          <div className="w-full text-center sm:text-left mb-3 sm:mb-5">
            <p className="brandname text-white text-lg sm:text-xl relative inline-block italic">
              BrandHell.
              <span className="absolute -inset-1 bg-white/5 blur-md -z-10 rounded-full opacity-70"></span>
            </p>
          </div>

          {/* Main heading with text gradient and animation */}
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.2] mb-4 sm:mb-6 max-w-[800px] animate-fade-in text-center sm:text-left mx-auto sm:mx-0" style={{ animationDuration: '0.8s' }}>
            It&apos;s time to raise your voice, they&apos;ll listen.
          </h1>

          {/* Description with better contrast and animation */}
          <p className="text-white/90 text-xs sm:text-base leading-relaxed tracking-wide max-w-[580px] animate-fade-in text-center sm:text-left mx-auto sm:mx-0" style={{ animationDuration: '1.2s', animationDelay: '0.3s' }}>
            We thrive on pushing boundaries and challenging the status quo. 
            <span className="block sm:inline font-bold mt-2 sm:mt-0 sm:ml-1 sm:font-normal">
              Your brand will stand out in a sea of mediocrity and transcend traditional branding.
            </span>
          </p>
        </div>

        {/* Mobile Arrow button - Classic rectangular design */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 block sm:hidden">
          <Link href="/hire-us">
            <button className="px-5 py-3 bg-white rounded-lg flex items-center gap-3 transition-all hover:bg-white/90 shadow-sm">
              <span className="text-black font-medium text-sm">Next</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M20 12L13 5M20 12L13 19"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Desktop Arrow button (only visible on desktop) */}
        <div className="absolute bottom-12 right-12 hidden sm:block">
          <Link href="/hire-us">
            <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center transition-all group hover:scale-[1.03] duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M4 12H20M20 12L13 5M20 12L13 19"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
