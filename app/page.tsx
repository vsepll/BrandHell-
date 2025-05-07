"use client"

import { useEffect, useState } from "react"

export default function Home() {
  // Track if component is mounted to prevent hydration issues
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Gradiente original restaurado - más concentrado en la esquina superior derecha */}
      {/* <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-600 opacity-30 blur-[100px] rounded-full" /> */}
      <img
        src="/gradiente azul.png"
        alt="Gradiente azul"
        className="absolute top-0 right-[-15%] w-full h-full pointer-events-none select-none object-cover"
        draggable="false"
      />
      <img
        src="/gradiente morado3.png"
        alt="Gradiente morado"
        className="absolute bottom-[-40%] left-[-42%] w-full h-full pointer-events-none select-none"
        draggable="false"
      />
      <img
        src="/gradiente morado 4.png"
        alt="Gradiente morado"
        className="absolute bottom-[-10%] left-[-50%] w-full h-full pointer-events-none select-none"
        draggable="false"
      />

      {/* Glass panel con SVG como background */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Background container */}
        <div 
          className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-12 rounded-[3rem] overflow-hidden"
          style={{
            backgroundImage: "url('/vidrio.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundClip: "border-box",
          }}
        />
        
        {/* Solo el párrafo descriptivo duplicado debajo del vidrio */}
        <div className="relative w-full h-full flex flex-col justify-end pb-32 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="invisible">
            {/* Elementos invisibles para mantener el mismo espacio que los elementos visibles */}
            <p className="text-white text-lg sm:text-xl font-medium italic mb-2 sm:mb-4">BrandHell.</p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4 sm:mb-6 lg:mb-8 max-w-[90%] md:max-w-[70%] lg:max-w-[60%]">
              It&apos;s time to raise your voice, they&apos;ll listen.
            </h1>
          </div>
          {/* Solo este párrafo es visible y duplicado */}
          <p className="text-white/30 text-xs sm:text-sm leading-relaxed max-w-[90%] md:max-w-[60%] lg:max-w-[50%]">
            We thrive on pushing boundaries and challenging the status quo. Your brand will stand out in a sea of
            mediocrity and transcend traditional branding.
          </p>
        </div>

        {/* Navigation - positioned relative to the glass container */}
        <nav className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-12 lg:right-12 flex items-center gap-4 sm:gap-6 md:gap-8">
          <a href="#" className="text-white text-xs sm:text-sm hover:opacity-80 transition-opacity underline">
            Home
          </a>
          <a href="#" className="text-white text-xs sm:text-sm hover:opacity-80 transition-opacity">
            Hire us.
          </a>
        </nav>

        {/* Content - positioned at the bottom of the container */}
        <div className="absolute bottom-32 left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8 lg:left-12 lg:right-12">
          {/* Brand name */}
          <p className="text-white text-lg sm:text-xl font-medium italic mb-2 sm:mb-4">BrandHell.</p>

          {/* Main heading - responsive text size */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4 sm:mb-6 lg:mb-8 max-w-[90%] md:max-w-[70%] lg:max-w-[60%]">
            It&apos;s time to raise your voice, they&apos;ll listen.
          </h1>

          {/* Description - responsive text size */}
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-[90%] md:max-w-[60%] lg:max-w-[50%]">
            We thrive on pushing boundaries and challenging the status quo. Your brand will stand out in a sea of
            mediocrity and transcend traditional branding.
          </p>
        </div>

        {/* Arrow button - positioned for glass container */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12">
          <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition-all">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
