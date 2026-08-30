"use client"

import Image from "next/image"

/**
 * GameBackground — Shared RPG pixel art background scenery.
 *
 * Renders the warm cream canvas with floating pixel island scenery
 * on the left, right, and bottom edges — exactly matching the reference
 * design images. Used across all auth and onboarding screens.
 */
export function GameBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#f8faf4]">
      {/* ===== LEFT ISLAND + SIGNPOST ===== */}
      <div
        className="absolute -left-2 top-0 bottom-0 w-[22vw] max-w-[280px] min-w-[180px]"
        aria-hidden="true"
      >
        <Image
          src="/codequest_rpg_sidebar.jpg"
          alt=""
          fill
          priority
          sizes="280px"
          className="object-cover object-right"
          style={{ imageRendering: "pixelated", maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,0) 100%)" }}
        />
      </div>

      {/* ===== RIGHT ISLAND + PORTAL ===== */}
      <div
        className="absolute -right-2 top-0 bottom-0 w-[22vw] max-w-[280px] min-w-[180px]"
        aria-hidden="true"
      >
        <Image
          src="/codequest_rpg_sidebar.jpg"
          alt=""
          fill
          priority
          sizes="280px"
          className="object-cover object-left"
          style={{
            imageRendering: "pixelated",
            transform: "scaleX(-1)",
            maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* ===== BOTTOM GRASS STRIP ===== */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[220px]"
        aria-hidden="true"
      >
        <Image
          src="/codequest_rpg_bottom.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
          style={{ imageRendering: "pixelated", maskImage: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)" }}
        />
      </div>

      {/* ===== FLOATING CSS PIXEL DECORATIONS ===== */}
      {/* Top-right blue code bracket bubble */}
      <div className="absolute top-16 right-[22vw] w-10 h-10 rounded-xl bg-sky-400/90 border-2 border-sky-600 flex items-center justify-center shadow-lg animate-float-slow select-none z-10">
        <span className="text-white font-mono font-black text-sm">{"{}"}</span>
      </div>
      {/* Top-left code bracket */}
      <div className="absolute top-32 left-[22vw] w-9 h-9 rounded-lg bg-emerald-400/90 border-2 border-emerald-600 flex items-center justify-center shadow-lg animate-float select-none z-10">
        <span className="text-white font-mono font-black text-xs">&lt;/&gt;</span>
      </div>
      {/* Mid-right purple bracket */}
      <div className="absolute top-1/2 right-[18vw] w-8 h-8 rounded-lg bg-purple-400/90 border-2 border-purple-600 flex items-center justify-center shadow-md animate-float-slow select-none z-10">
        <span className="text-white font-mono font-black text-xs">[ ]</span>
      </div>
    </div>
  )
}
