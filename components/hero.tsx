"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function Hero() {
  const [dots, setDots] = useState<Array<{ id: number; x: number; y: number; tx: number; ty: number; delay: number }>>(
    [],
  )

  useEffect(() => {
    const newDots = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      tx: (Math.random() - 0.5) * 200,
      ty: -200 - Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setDots(newDots)
  }, [])

  // The YouTube URL for the demo video
  const YOUTUBE_DEMO_URL = "https://youtu.be/rEDcHl1F0ck?si=lRMN3DkVfqIoAybi"

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(0,217,255,0.1)] via-transparent to-transparent" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(0,217,255,0.1) 60px, rgba(0,217,255,0.1) 120px)",
          animation: "slide 20s linear infinite",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-2 h-2 rounded-full"
            style={
              {
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                background: ["#00D9FF", "#00A8CC", "#0088AA"][dot.id % 3],
                "--tx": `${dot.tx}px`,
                "--ty": `${dot.ty}px`,
                animation: `float-drift 6s ease-out forwards`,
                animationDelay: `${dot.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#00D9FF]/40 bg-[rgba(0,217,255,0.15)] mb-12 animate-fade-in-up">
          <span className="text-sm font-bold text-[#00D9FF] uppercase tracking-widest">🏁 Race-Grade Transfer</span>
        </div>

        {/* Main heading */}
        <h1
          className="text-7xl md:text-8xl font-black mb-8 leading-tight animate-fade-in-up text-white uppercase tracking-tighter"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="bg-gradient-to-r from-white via-[#00D9FF] to-[#00A8CC] bg-clip-text text-transparent">
            QUICShift
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-2xl md:text-3xl text-[#B8B8B8] mb-8 animate-fade-in-up font-light leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          Adaptive File Transfer
          <br />
          That Never Slows Down
        </p>

        <p className="text-lg text-[#00D9FF] mb-12 animate-fade-in-up font-semibold" style={{ animationDelay: "0.3s" }}>
          ⚡ F1-inspired • Self-healing • Rust
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {/* 👇 MODIFIED: Changed to <a> and added link attributes */}
          <a
            href={YOUTUBE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-gradient-to-r from-[#00D9FF] to-[#00A8CC] text-[#0A0A0A] rounded-xl font-bold uppercase tracking-wider hover:shadow-[0_8px_24px_rgba(0,217,255,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>▶</span> Watch Demo
          </a>
          <a
            href="https://github.com/QUICShift/QUICShift"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 border-2 border-[#00D9FF] text-[#00D9FF] rounded-xl font-bold uppercase tracking-wider hover:bg-[rgba(0,217,255,0.15)] transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>⭐</span> GitHub
          </a>
        </div>

        {/* 3D Network Visualization */}
        <div
          className="relative w-full max-w-2xl mx-auto h-64 rounded-2xl border-2 border-[#00D9FF]/30 bg-[rgba(0,217,255,0.05)] backdrop-blur-sm flex items-center justify-center animate-fade-in-up overflow-hidden"
          style={{ animationDelay: "0.5s" }}
        >
          <div
            className="absolute w-12 h-12 rounded-full border-2 border-[#00D9FF] animate-pulse-glow"
            style={{ left: "10%", top: "50%", transform: "translate(-50%, -50%)" }}
          />
          <div
            className="absolute w-12 h-12 rounded-full border-2 border-[#00A8CC] animate-pulse-glow"
            style={{ left: "50%", top: "20%", transform: "translate(-50%, -50%)" }}
          />
          <div
            className="absolute w-12 h-12 rounded-full border-2 border-[#0088AA] animate-pulse-glow"
            style={{ left: "50%", top: "80%", transform: "translate(-50%, -50%)" }}
          />
          <div
            className="absolute w-12 h-12 rounded-full border-2 border-[#00D9FF] animate-pulse-glow"
            style={{ right: "10%", top: "50%", transform: "translate(50%, -50%)" }}
          />

          {/* Connecting lines */}
          <div
            className="absolute w-1/3 h-0.5 bg-gradient-to-r from-[#00D9FF] to-transparent"
            style={{ left: "20%", top: "35%" }}
          />
          <div
            className="absolute w-1/3 h-0.5 bg-gradient-to-r from-[#00D9FF] to-transparent"
            style={{ left: "20%", top: "65%" }}
          />
          <div
            className="absolute w-1/3 h-0.5 bg-gradient-to-r from-[#00A8CC] to-transparent"
            style={{ right: "20%", top: "35%" }}
          />
          <div
            className="absolute w-1/3 h-0.5 bg-gradient-to-r from-[#00A8CC] to-transparent"
            style={{ right: "20%", top: "65%" }}
          />

          {/* Data packets */}
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse"
            style={{ left: "35%", top: "40%" }}
          />
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse"
            style={{ right: "35%", top: "60%" }}
          />
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-[#00D9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}