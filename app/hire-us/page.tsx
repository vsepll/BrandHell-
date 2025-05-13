"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function HireUs() {
  // Track if component is mounted to prevent hydration issues
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the email submission
    alert(`Thank you! We'll contact you at ${email} soon.`)
    setEmail("")
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background gradients with subtle animation */}
      <div className="absolute inset-0 opacity-70">
        <img
          src="/gradiente azul.png"
          alt="Gradiente azul"
          className="absolute top-0 right-[-15%] w-full h-full pointer-events-none select-none object-cover animate-pulse-slow"
          style={{ animationDuration: '10s' }}
          draggable="false"
        />
        <img
          src="/gradiente morado3.png"
          alt="Gradiente morado"
          className="absolute bottom-[-40%] left-[-42%] w-full h-full pointer-events-none select-none animate-pulse-slow"
          style={{ animationDuration: '15s', animationDelay: '1s' }}
          draggable="false"
        />
        <img
          src="/gradiente morado 4.png"
          alt="Gradiente morado"
          className="absolute bottom-[-10%] left-[-50%] w-full h-full pointer-events-none select-none animate-pulse-slow"
          style={{ animationDuration: '12s', animationDelay: '0.5s' }}
          draggable="false"
        />
      </div>

      {/* Glass panel with improved aesthetics */}
      <div className="relative z-10 w-full h-screen flex items-start justify-start p-4 sm:p-6 md:p-8 lg:p-12">
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
        
        {/* Navigation with hover effects */}
        <nav className="absolute top-10 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-full p-1 flex items-center shadow-glow-sm">
            <Link href="/" className="text-white text-sm opacity-90 hover:opacity-100 transition-all duration-300 relative px-4 py-2 rounded-full group hover:bg-white/10">
              Home
              <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-5 h-[2px] bg-white/40 rounded-full transition-all duration-300 group-hover:bg-white/80 group-hover:w-10"></span>
            </Link>
            <Link href="/hire-us" className="text-white text-sm opacity-90 hover:opacity-100 transition-all duration-300 relative px-4 py-2 rounded-full group bg-white/10">
              Hire us.
              <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-10 h-[2px] bg-white/80 rounded-full"></span>
            </Link>
          </div>
        </nav>

        {/* Email form container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-6">
          {/* Brand name with subtle glow */}
          <p className="brandname text-white text-xl mb-2 relative inline-block">
            BrandHell.
            <span className="absolute -inset-1 bg-white/5 blur-md -z-10 rounded-full opacity-70"></span>
          </p>

          {/* Main heading with animation */}
          <h1 className="text-white text-4xl font-bold mb-6 animate-fade-in" style={{ animationDuration: '0.8s' }}>
            Leave us your email,
            <br />
            we&apos;ll take it from there.
          </h1>

          {/* Email form with glass effect */}
          <form onSubmit={handleSubmit} className="animate-fade-in" style={{ animationDuration: '1s', animationDelay: '0.3s' }}>
            <div className="bg-white/5 backdrop-blur-sm rounded-full p-1 flex items-center shadow-glow-sm overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-transparent border-none text-white placeholder:text-white/50 px-6 py-3 focus:outline-none"
              />
              <button
                type="submit"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all group hover:scale-[1.03] duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] mr-1"
              >
                <svg
                  width="20"
                  height="20"
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
            </div>
          </form>
        </div>

        {/* Back button */}
        <div className="absolute bottom-12 left-12">
          <Link href="/" className="text-white opacity-80 hover:opacity-100 transition-all duration-300 flex items-center gap-2 group">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            >
              <path
                d="M20 12H4M4 12L11 5M4 12L11 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    </div>
  )
} 