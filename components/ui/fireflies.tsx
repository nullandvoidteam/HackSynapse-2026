"use client"

import { useCallback } from "react"
import { loadSlim } from "@tsparticles/slim"
import { initParticlesEngine } from "@tsparticles/react"
import Particles from "@tsparticles/react"
import { useEffect, useState } from "react"

/**
 * FirefliesBackground — Subtle ambient floating particles (fireflies/sparkles).
 * Drop this inside any page that needs ambient life.
 * Respects prefers-reduced-motion automatically.
 */
export function FirefliesBackground({ className }: { className?: string }) {
  const [engineReady, setEngineReady] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setEngineReady(true))
  }, [])

  const particlesInit = useCallback(async () => {}, [])

  if (!engineReady) return null

  return (
    <Particles
      id="fireflies"
      className={`absolute inset-0 pointer-events-none z-0 ${className ?? ""}`}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 50,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: { repulse: { distance: 80, duration: 0.4 } },
        },
        particles: {
          color: { value: ["#22c55e", "#fbbf24", "#a78bfa", "#38bdf8"] },
          links: { enable: false },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          number: { density: { enable: true }, value: 35 },
          opacity: {
            value: { min: 0.2, max: 0.65 },
            animation: { enable: true, speed: 0.8, sync: false },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1.5, max: 3.5 },
            animation: { enable: true, speed: 1.5, sync: false },
          },
        },
        detectRetina: true,
      }}
      particlesLoaded={particlesInit}
    />
  )
}
