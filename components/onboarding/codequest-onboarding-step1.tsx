"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { CodeQuestLogo } from "@/components/brand/codequest-logo"

interface QuestOption {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export function CodeQuestOnboardingStep1({
  onContinue,
}: {
  onContinue?: () => void
}) {
  const router = useRouter()
  const [selectedQuests, setSelectedQuests] = React.useState<string[]>([
    "build-websites",
  ])

  const toggleQuest = (id: string) => {
    setSelectedQuests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleContinue = () => {
    if (onContinue) {
      onContinue()
    } else {
      router.push("/onboarding?step=2")
    }
  }

  const handleSkip = () => {
    if (onContinue) {
      onContinue()
    } else {
      router.push("/onboarding?step=2")
    }
  }

  const questOptions: QuestOption[] = [
    {
      id: "build-websites",
      title: "Build Websites",
      description: "Create beautiful websites from scratch.",
      icon: (
        <div className="w-16 h-12 relative flex items-center justify-center">
          <svg
            viewBox="0 0 48 36"
            className="w-full h-full"
            style={{ imageRendering: "pixelated" }}
          >
            {/* Browser window frame */}
            <rect x="2" y="2" width="44" height="32" rx="3" fill="#6366f1" />
            <rect x="4" y="4" width="40" height="28" rx="2" fill="#ffffff" />
            {/* Titlebar with dots */}
            <rect x="4" y="4" width="40" height="6" fill="#4f46e5" />
            <circle cx="8" cy="7" r="1" fill="#f87171" />
            <circle cx="12" cy="7" r="1" fill="#fbbf24" />
            <circle cx="16" cy="7" r="1" fill="#4ade80" />
            {/* Photo placeholder */}
            <rect x="8" y="14" width="14" height="14" rx="1" fill="#93c5fd" />
            <polygon points="9,25 14,20 18,24 21,21 21,27 9,27" fill="#3b82f6" />
            <circle cx="18" cy="17" r="1.5" fill="#fbbf24" />
            {/* Text lines */}
            <rect x="26" y="14" width="14" height="2.5" rx="1" fill="#94a3b8" />
            <rect x="26" y="19" width="12" height="2" rx="1" fill="#cbd5e1" />
            <rect x="26" y="23" width="10" height="2" rx="1" fill="#cbd5e1" />
          </svg>
        </div>
      ),
    },
    {
      id: "create-games",
      title: "Create Games",
      description: "Turn your ideas into playable experiences.",
      icon: (
        <div className="w-16 h-12 relative flex items-center justify-center">
          <svg
            viewBox="0 0 48 36"
            className="w-full h-full"
            style={{ imageRendering: "pixelated" }}
          >
            {/* Retro Gamepad Body */}
            <path
              d="M10 10 C8 10 6 12 6 15 L8 28 C9 31 13 32 16 30 L20 26 C22 25 26 25 28 26 L32 30 C35 32 39 31 40 28 L42 15 C42 12 40 10 38 10 Z"
              fill="#8b5cf6"
              stroke="#6d28d9"
              strokeWidth="2"
            />
            {/* D-Pad on Left */}
            <rect x="13" y="17" width="8" height="3" fill="#1e1b4b" />
            <rect x="15.5" y="14.5" width="3" height="8" fill="#1e1b4b" />
            {/* Action Buttons on Right */}
            <circle cx="34" cy="16" r="1.8" fill="#f87171" />
            <circle cx="37" cy="19" r="1.8" fill="#60a5fa" />
            <circle cx="31" cy="19" r="1.8" fill="#fbbf24" />
            <circle cx="34" cy="22" r="1.8" fill="#4ade80" />
            {/* Middle Select/Start buttons */}
            <rect x="21" y="20" width="2.5" height="1.5" rx="0.5" fill="#4c1d95" />
            <rect x="24.5" y="20" width="2.5" height="1.5" rx="0.5" fill="#4c1d95" />
          </svg>
        </div>
      ),
    },
    {
      id: "build-ai",
      title: "Build AI",
      description: "Explore AI and build intelligent tools.",
      icon: (
        <div className="w-16 h-12 relative flex items-center justify-center">
          <svg
            viewBox="0 0 48 36"
            className="w-full h-full"
            style={{ imageRendering: "pixelated" }}
          >
            {/* Top Antenna */}
            <rect x="23" y="2" width="2" height="6" fill="#94a3b8" />
            <circle cx="24" cy="3" r="2.5" fill="#fbbf24" />
            {/* Robot Head Body */}
            <rect x="10" y="8" width="28" height="22" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            {/* Ear Pieces */}
            <rect x="7" y="14" width="3" height="10" rx="1.5" fill="#06b6d4" />
            <rect x="38" y="14" width="3" height="10" rx="1.5" fill="#06b6d4" />
            {/* Screen Face */}
            <rect x="13" y="12" width="22" height="14" rx="3" fill="#0f172a" />
            {/* Glowing Eyes */}
            <rect x="17" y="16" width="4" height="6" rx="1" fill="#38bdf8" />
            <rect x="27" y="16" width="4" height="6" rx="1" fill="#38bdf8" />
            {/* Smile line */}
            <path d="M21 23 Q24 25 27 23" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      ),
    },
    {
      id: "analyze-data",
      title: "Analyze Data",
      description: "Discover patterns and make data useful.",
      icon: (
        <div className="w-16 h-12 relative flex items-center justify-center">
          <svg
            viewBox="0 0 48 36"
            className="w-full h-full"
            style={{ imageRendering: "pixelated" }}
          >
            {/* 3D Bar 1 - Purple */}
            <rect x="12" y="18" width="6" height="14" rx="1" fill="#a855f7" stroke="#7e22ce" strokeWidth="1" />
            <polygon points="12,18 15,15 21,15 18,18" fill="#c084fc" />
            <polygon points="18,18 21,15 21,29 18,32" fill="#6b21a8" />
            {/* 3D Bar 2 - Amber/Orange */}
            <rect x="21" y="12" width="6" height="20" rx="1" fill="#f59e0b" stroke="#b45309" strokeWidth="1" />
            <polygon points="21,12 24,9 30,9 27,12" fill="#fbbf24" />
            <polygon points="27,12 30,9 30,29 27,32" fill="#92400e" />
            {/* 3D Bar 3 - Emerald/Teal */}
            <rect x="30" y="6" width="6" height="26" rx="1" fill="#10b981" stroke="#047857" strokeWidth="1" />
            <polygon points="30,6 33,3 39,3 36,6" fill="#34d399" />
            <polygon points="36,6 39,3 39,29 36,32" fill="#065f46" />
          </svg>
        </div>
      ),
    },
    {
      id: "build-apps",
      title: "Build Apps",
      description: "Create useful apps people can use.",
      icon: (
        <div className="w-16 h-12 relative flex items-center justify-center">
          <svg
            viewBox="0 0 48 36"
            className="w-full h-full"
            style={{ imageRendering: "pixelated" }}
          >
            {/* Phone Body */}
            <rect x="16" y="2" width="16" height="32" rx="3" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
            <rect x="18" y="5" width="12" height="24" rx="1.5" fill="#0f172a" />
            {/* Top speaker notch */}
            <rect x="22" y="3.5" width="4" height="0.8" rx="0.4" fill="#93c5fd" />
            {/* App Grid Tiles on Screen */}
            <rect x="19.5" y="7" width="3.5" height="3.5" rx="0.8" fill="#f43f5e" />
            <rect x="24.5" y="7" width="3.5" height="3.5" rx="0.8" fill="#3b82f6" />
            <rect x="19.5" y="12" width="3.5" height="3.5" rx="0.8" fill="#fbbf24" />
            <rect x="24.5" y="12" width="3.5" height="3.5" rx="0.8" fill="#10b981" />
            <rect x="19.5" y="17" width="3.5" height="3.5" rx="0.8" fill="#a855f7" />
            <rect x="24.5" y="17" width="3.5" height="3.5" rx="0.8" fill="#06b6d4" />
            {/* Bottom Home Indicator */}
            <circle cx="24" cy="31" r="1" fill="#93c5fd" />
          </svg>
        </div>
      ),
    },
    {
      id: "learn-programming",
      title: "Learn Programming",
      description: "Start from the fundamentals.",
      icon: (
        <div className="w-16 h-12 relative flex items-center justify-center">
          <svg
            viewBox="0 0 48 36"
            className="w-full h-full"
            style={{ imageRendering: "pixelated" }}
          >
            {/* Terminal Box */}
            <rect x="8" y="4" width="32" height="28" rx="4" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1.5" />
            <rect x="10" y="6" width="28" height="6" fill="#312e81" />
            <circle cx="13" cy="9" r="1" fill="#f87171" />
            <circle cx="16" cy="9" r="1" fill="#fbbf24" />
            <circle cx="19" cy="9" r="1" fill="#4ade80" />
            {/* Terminal Prompt `>_` */}
            <text
              x="13"
              y="23"
              fill="#10b981"
              fontFamily="monospace"
              fontSize="12"
              fontWeight="bold"
            >
              &gt;_
            </text>
          </svg>
        </div>
      ),
    },
  ]

  return (
    <div className="relative min-h-screen w-full bg-[#fbfbfa] text-slate-900 flex flex-col justify-between overflow-x-hidden font-sans selection:bg-emerald-500 selection:text-white">
      {/* Background RPG Scenery Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/codequest_onboarding_bg.jpg"
          alt="CodeQuest Onboarding World"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
          style={{ imageRendering: "pixelated" }}
        />
        {/* Soft Radial Gradient highlight to keep center cards super crisp and readable */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,251,250,0.92)_0%,_rgba(251,251,250,0.85)_50%,_rgba(251,251,250,0.3)_100%)] pointer-events-none" />
      </div>

      {/* ========================================================
          TOP NAVIGATION BAR
         ======================================================== */}
      <header className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-6 flex items-center justify-between">
        {/* Left Branding */}
        <Link
          href="/"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
        >
          <CodeQuestLogo size="md" showTagline={false} />
        </Link>

        {/* Right Step Progress Bar */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-white/90 border border-slate-200/80 px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm">
            {/* 4 Multi-Segment Step Progress Bars */}
            <div className="flex items-center gap-1">
              <div className="w-6 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <div className="w-6 h-2 rounded-full bg-slate-200" />
              <div className="w-6 h-2 rounded-full bg-slate-200" />
              <div className="w-6 h-2 rounded-full bg-slate-200" />
            </div>
            <span className="text-xs font-bold text-slate-600 ml-1">
              Step 1 of 4
            </span>
          </div>
        </div>
      </header>

      {/* ========================================================
          CENTER CONTENT: QUESTION & 6-CARD GRID
         ======================================================== */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 flex-1 flex flex-col items-center justify-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center mb-2">
          What’s Your Coding Quest?
        </h1>

        {/* Subheading */}
        <p className="text-slate-600 text-center max-w-2xl text-sm sm:text-base md:text-lg mb-8 font-medium">
          Tell us what you want to build. We&apos;ll create a learning adventure around you.
        </p>

        {/* 6-Card Quest Selection Grid (2x3 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-4xl mb-6">
          {questOptions.map((quest) => {
            const isSelected = selectedQuests.includes(quest.id)
            return (
              <div
                key={quest.id}
                onClick={() => toggleQuest(quest.id)}
                className={`relative bg-white rounded-2xl p-6 border transition-all duration-200 cursor-pointer text-center flex flex-col items-center justify-center select-none ${
                  isSelected
                    ? "border-2 border-emerald-500 bg-emerald-50/20 shadow-md ring-2 ring-emerald-500/10 scale-[1.02]"
                    : "border-slate-200/90 shadow-sm hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                {/* Green Circular Check Badge when Selected */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-emerald-500 rounded-full text-white flex items-center justify-center shadow-sm text-xs font-black animate-scale-in">
                    ✓
                  </div>
                )}

                {/* Quest Pixel Icon */}
                <div className="mb-3 flex items-center justify-center transition-transform duration-200 hover:scale-110">
                  {quest.icon}
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-base text-slate-900 mb-1">
                  {quest.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[200px]">
                  {quest.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Action Controls */}
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          {/* Helper Text */}
          <div className="text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-1.5">
            <span className="text-emerald-500 text-xs">✦</span>
            <span>You can choose more than one.</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleContinue}
              className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm tracking-wide px-8 py-3.5 rounded-xl shadow-[0_6px_20px_rgba(5,150,105,0.3)] hover:shadow-[0_8px_25px_rgba(5,150,105,0.4)] active:translate-y-0.5 active:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Continue</span>
              <span className="text-base">→</span>
            </button>

            <button
              onClick={handleSkip}
              className="text-slate-500 hover:text-slate-800 font-semibold px-4 py-2 text-sm transition-colors cursor-pointer hover:underline"
            >
              Skip for now
            </button>
          </div>
        </div>
      </main>

      {/* ========================================================
          RPG OVERLAY ACCENTS (Floating sigils, signpost, bot)
         ======================================================== */}
      {/* Left Signpost Label Planks (Visible on md+) */}
      <div className="hidden xl:flex absolute bottom-24 left-10 z-20 flex-col gap-1.5 pointer-events-none">
        <div className="bg-gradient-to-r from-[#854d0e] to-[#a16207] border-2 border-[#713f12] text-[#fef08a] font-pixel text-[8px] font-bold px-2.5 py-1 rounded-sm shadow-md min-w-[75px] flex items-center justify-between">
          <span>CODE</span>
          <span className="text-[7px] text-amber-200">▶</span>
        </div>
        <div className="bg-gradient-to-r from-[#713f12] to-[#854d0e] border-2 border-[#582e0a] text-[#fef08a] font-pixel text-[8px] font-bold px-2.5 py-1 rounded-sm shadow-md min-w-[75px] flex items-center justify-between">
          <span>BUILD</span>
          <span className="text-[7px] text-amber-200">▶</span>
        </div>
        <div className="bg-gradient-to-r from-[#854d0e] to-[#a16207] border-2 border-[#713f12] text-[#fef08a] font-pixel text-[8px] font-bold px-2.5 py-1 rounded-sm shadow-md min-w-[75px] flex items-center justify-between">
          <span>LEARN</span>
          <span className="text-[7px] text-amber-200">▶</span>
        </div>
        <div className="bg-gradient-to-r from-[#713f12] to-[#854d0e] border-2 border-[#582e0a] text-[#fef08a] font-pixel text-[8px] font-bold px-2.5 py-1 rounded-sm shadow-md min-w-[75px] flex items-center justify-between">
          <span>GROW</span>
          <span className="text-[7px] text-amber-200">▶</span>
        </div>
      </div>

      {/* Left Floating Castle Sigil */}
      <div className="hidden lg:flex absolute top-48 left-20 z-20 bg-[#1e1b4b]/90 border-2 border-[#6366f1] px-2.5 py-1.5 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.6)] font-pixel text-[9px] text-indigo-200 items-center justify-center animate-float pointer-events-none">
        &lt;/&gt;
      </div>

      {/* Right Floating Code Runes */}
      <div className="hidden lg:flex absolute top-36 right-24 z-20 bg-[#1e293b]/90 border-2 border-sky-400 px-2.5 py-1.5 rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.6)] font-mono font-bold text-xs text-sky-200 items-center justify-center animate-float-delayed pointer-events-none">
        &#123; &#125;
      </div>
      <div className="hidden lg:flex absolute bottom-44 right-20 z-20 bg-[#1e293b]/90 border-2 border-sky-400 px-2.5 py-1.5 rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.6)] font-mono font-bold text-xs text-sky-200 items-center justify-center animate-float-slow pointer-events-none">
        [ ]
      </div>

      {/* Bottom Right Mascot Companion Speech Bubble */}
      <div className="hidden md:flex absolute bottom-8 right-12 z-20 items-end gap-3 animate-float-slow pointer-events-none">
        {/* Pixel Speech Bubble */}
        <div className="relative mb-8 bg-white/95 border-2 border-slate-300 rounded-xl px-3.5 py-2 shadow-lg backdrop-blur-sm text-center max-w-[200px]">
          <p className="font-pixel text-[8px] text-slate-800 leading-tight font-bold tracking-tight">
            Every great developer
            <br />
            starts with a quest.
          </p>
          {/* Speech bubble pointer tail */}
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white/95 border-b-2 border-r-2 border-slate-300 rotate-45" />
        </div>

        {/* Ambient Sparkles */}
        <span className="text-amber-400 text-sm animate-twinkle select-none mb-10">
          ✨
        </span>
      </div>

      {/* Footer Spacer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto py-3 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} CodeQuest. All rights reserved. Step 1 of your journey.
      </footer>
    </div>
  )
}
