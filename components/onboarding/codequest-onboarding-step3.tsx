"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { CodeQuestLogo } from "@/components/brand/codequest-logo"

interface LanguageOption {
  id: string
  name: string
  icon: React.ReactNode
}

interface GoalOption {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  tag: string
}

export function CodeQuestOnboardingStep3({
  onBack,
  onContinue,
}: {
  onBack?: () => void
  onContinue?: () => void
}) {
  const router = useRouter()

  // State Management
  const [selectedLanguages, setSelectedLanguages] = React.useState<string[]>([
    "Python",
    "React",
  ])
  const [selectedGoal, setSelectedGoal] = React.useState<string>("website")
  const [selectedTime, setSelectedTime] = React.useState<string>("15 min / day")

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang)
        ? prev.length > 1
          ? prev.filter((item) => item !== lang)
          : prev // Keep at least one
        : [...prev, lang]
    )
  }

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      router.push("/onboarding?step=2")
    }
  }

  const handleNext = () => {
    if (onContinue) {
      onContinue()
    } else {
      router.push("/onboarding?step=4")
    }
  }

  // Language Definitions
  const languages: LanguageOption[] = [
    {
      id: "Python",
      name: "Python",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
          <path
            d="M11.9 2C6.8 2 7.1 4.2 7.1 4.2l.01 2.3h4.9v.7H5.2S2 6.8 2 12c0 5.1 2.8 5 2.8 5h1.7v-2.4s-.1-2.8 2.8-2.8h4.8s2.7.1 2.7-2.6V4.7S17 2 11.9 2zm-1.4 1.4c.5 0 .9.4.9.9 0 .5-.4.9-.9.9s-.9-.4-.9-.9c0-.5.4-.9.9-.9z"
            fill="#38bdf8"
          />
          <path
            d="M12.1 22c5.1 0 4.8-2.2 4.8-2.2l-.01-2.3H12v-.7h6.8s3.2.4 3.2-4.8c0-5.1-2.8-5-2.8-5h-1.7v2.4s.1 2.8-2.8 2.8H9.9s-2.7-.1-2.7 2.6v4.5S7 22 12.1 22zm1.4-1.4c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9s.9.4.9.9c0 .5-.4.9-.9.9z"
            fill="#fbbf24"
          />
        </svg>
      ),
    },
    {
      id: "JavaScript",
      name: "JavaScript",
      icon: (
        <div className="w-5 h-5 rounded bg-[#fcd34d] border border-[#b45309] flex items-center justify-center font-pixel text-[8px] font-black text-black shrink-0">
          JS
        </div>
      ),
    },
    {
      id: "HTML",
      name: "HTML",
      icon: (
        <div className="w-5 h-5 rounded bg-[#f97316] border border-[#c2410c] flex items-center justify-center font-pixel text-[7px] font-black text-white shrink-0">
          5
        </div>
      ),
    },
    {
      id: "CSS",
      name: "CSS",
      icon: (
        <div className="w-5 h-5 rounded bg-[#3b82f6] border border-[#1d4ed8] flex items-center justify-center font-pixel text-[7px] font-black text-white shrink-0">
          3
        </div>
      ),
    },
    {
      id: "SQL",
      name: "SQL",
      icon: (
        <div className="w-5 h-5 rounded bg-[#8b5cf6] border border-[#6d28d9] flex items-center justify-center font-pixel text-[6.5px] font-black text-white shrink-0">
          SQL
        </div>
      ),
    },
    {
      id: "Java",
      name: "Java",
      icon: (
        <div className="w-5 h-5 rounded bg-[#ef4444] border border-[#b91c1c] flex items-center justify-center text-[10px] shrink-0">
          ☕
        </div>
      ),
    },
    {
      id: "C++",
      name: "C++",
      icon: (
        <div className="w-5 h-5 rounded bg-[#0284c7] border border-[#0369a1] flex items-center justify-center font-pixel text-[6.5px] font-black text-white shrink-0">
          C++
        </div>
      ),
    },
    {
      id: "React",
      name: "React",
      icon: (
        <div className="w-5 h-5 rounded bg-[#082f49] border border-[#38bdf8] flex items-center justify-center text-[#38bdf8] text-[10px] shrink-0 animate-spin-slow">
          ⚛
        </div>
      ),
    },
  ]

  // Goal Definitions
  const goals: GoalOption[] = [
    {
      id: "website",
      title: "Build My First Website",
      description: "Create and publish websites.",
      tag: "🌐 Website",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-indigo-100 border border-indigo-300 flex items-center justify-center text-sm shrink-0">
          🖥️
        </div>
      ),
    },
    {
      id: "game",
      title: "Create a Game",
      description: "Build interactive games.",
      tag: "🎮 Game",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-purple-100 border border-purple-300 flex items-center justify-center text-sm shrink-0">
          👾
        </div>
      ),
    },
    {
      id: "job",
      title: "Get Job Ready",
      description: "Build skills for a career.",
      tag: "💼 Career",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-sm shrink-0">
          💼
        </div>
      ),
    },
    {
      id: "ai",
      title: "Build AI Projects",
      description: "Create intelligent tools.",
      tag: "🤖 AI",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-cyan-100 border border-cyan-300 flex items-center justify-center text-sm shrink-0">
          🧠
        </div>
      ),
    },
    {
      id: "automation",
      title: "Automate Tasks",
      description: "Save time with code.",
      tag: "⚙ Scripts",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-sm shrink-0">
          ⚙️
        </div>
      ),
    },
    {
      id: "explore",
      title: "Explore Programming",
      description: "Learn and build anything.",
      tag: "🚀 Explore",
      icon: (
        <div className="w-8 h-8 rounded-lg bg-rose-100 border border-rose-300 flex items-center justify-center text-sm shrink-0">
          🚀
        </div>
      ),
    },
  ]

  const timeOptions = ["15 min / day", "30 min / day", "1 hour+ / day"]

  // Selected goal object
  const activeGoal = goals.find((g) => g.id === selectedGoal) || goals[0]
  const primaryLang = selectedLanguages[0] || "Python"

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
        {/* Soft Radial Gradient highlight to keep center cards super crisp */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,251,250,0.94)_0%,_rgba(251,251,250,0.88)_50%,_rgba(251,251,250,0.35)_100%)] pointer-events-none" />
      </div>

      {/* ========================================================
          TOP NAVIGATION BAR (Step 3 of 4)
         ======================================================== */}
      <header className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-6 flex items-center justify-between">
        {/* Left Branding */}
        <Link
          href="/"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
        >
          <CodeQuestLogo size="md" showTagline={false} />
        </Link>

        {/* Right Step Progress Bar (Step 3 of 4) */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-white/90 border border-slate-200/80 px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm">
            {/* 4 Multi-Segment Step Progress Bars: Steps 1, 2, 3 filled */}
            <div className="flex items-center gap-1">
              <div className="w-6 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <div className="w-6 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <div className="w-6 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <div className="w-6 h-2 rounded-full bg-slate-200" />
            </div>
            <span className="text-xs font-bold text-slate-600 ml-1">
              Step 3 of 4
            </span>
          </div>
        </div>
      </header>

      {/* ========================================================
          MAIN CONTENT AREA
         ======================================================== */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 flex-1 flex flex-col items-center justify-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center mb-2">
          What Do You Want to Learn?
        </h1>

        {/* Subheading */}
        <p className="text-slate-600 text-center max-w-2xl text-sm sm:text-base md:text-lg mb-6 font-medium">
          Choose the skills you want to unlock first.
        </p>

        <div className="w-full max-w-4xl flex flex-col gap-6 mb-6">
          {/* ========================================================
              SECTION 1: PICK YOUR CODING LANGUAGES (4 cols)
             ======================================================== */}
          <div>
            <h2 className="font-bold text-slate-900 flex items-center gap-2 mb-3 text-base sm:text-lg">
              <span>📖</span>
              <span>Pick your coding languages</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {languages.map((lang) => {
                const isSelected = selectedLanguages.includes(lang.id)
                return (
                  <div
                    key={lang.id}
                    onClick={() => toggleLanguage(lang.id)}
                    className={`relative bg-white rounded-2xl px-4 py-3 border transition-all duration-200 cursor-pointer flex items-center gap-3 select-none ${
                      isSelected
                        ? "border-2 border-emerald-500 bg-emerald-50/20 shadow-sm ring-2 ring-emerald-500/10 scale-[1.01]"
                        : "border-slate-200/90 shadow-sm hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Checkmark badge */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-4 h-4 bg-emerald-500 rounded-full text-white flex items-center justify-center shadow-sm text-[9px] font-black animate-scale-in">
                        ✓
                      </div>
                    )}
                    {lang.icon}
                    <span className="font-bold text-sm text-slate-800">
                      {lang.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ========================================================
              SECTION 2: WHAT'S YOUR MAIN GOAL? (3 cols)
             ======================================================== */}
          <div>
            <h2 className="font-bold text-slate-900 flex items-center gap-2 mb-3 text-base sm:text-lg">
              <span>🎯</span>
              <span>What’s your main goal?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {goals.map((goal) => {
                const isSelected = selectedGoal === goal.id
                return (
                  <div
                    key={goal.id}
                    onClick={() => setSelectedGoal(goal.id)}
                    className={`relative bg-white rounded-2xl p-4 border transition-all duration-200 cursor-pointer flex items-center gap-3.5 select-none ${
                      isSelected
                        ? "border-2 border-emerald-500 bg-emerald-50/20 shadow-sm ring-2 ring-emerald-500/10 scale-[1.01]"
                        : "border-slate-200/90 shadow-sm hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Checkmark badge */}
                    {isSelected && (
                      <div className="absolute top-2.5 right-2.5 w-4 h-4 bg-emerald-500 rounded-full text-white flex items-center justify-center shadow-sm text-[9px] font-black animate-scale-in">
                        ✓
                      </div>
                    )}
                    {goal.icon}
                    <div className="flex flex-col">
                      <h3 className="font-extrabold text-sm text-slate-900 leading-snug">
                        {goal.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium leading-tight mt-0.5">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ========================================================
              SECTION 3: HOW MUCH TIME CAN YOU SPEND?
             ======================================================== */}
          <div>
            <h2 className="font-bold text-slate-900 flex items-center gap-2 mb-3 text-base sm:text-lg">
              <span>⏰</span>
              <span>How much time can you spend?</span>
            </h2>

            <div className="flex flex-wrap gap-3">
              {timeOptions.map((time) => {
                const isSelected = selectedTime === time
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 border transition-all cursor-pointer select-none ${
                      isSelected
                        ? "border-2 border-emerald-500 bg-emerald-50/30 text-emerald-700 shadow-sm ring-2 ring-emerald-500/10"
                        : "border-slate-200/90 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span>⏱</span>
                    <span>{time}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ========================================================
              DYNAMIC QUEST PREVIEW CARD ("YOUR ADVENTURE")
             ======================================================== */}
          <div className="bg-emerald-50/70 rounded-3xl p-6 border border-emerald-200/90 shadow-sm grid grid-cols-1 md:grid-cols-12 items-center gap-6 backdrop-blur-sm">
            {/* Left Side Summary */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base">🚩</span>
                <h3 className="font-extrabold text-lg text-slate-900">
                  Your Adventure
                </h3>
              </div>

              {/* Tag Badges Row */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-700">
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-2xs flex items-center gap-1.5">
                  <span>🐍</span>
                  <span>{primaryLang}</span>
                </span>
                <span className="text-slate-400 font-black">+</span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-2xs flex items-center gap-1.5">
                  <span>⏱</span>
                  <span>{selectedTime}</span>
                </span>
                <span className="text-slate-400 font-black">+</span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-2xs flex items-center gap-1.5">
                  <span>🎓</span>
                  <span>Beginner</span>
                </span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm mt-3.5 font-medium">
                ≈ 6–8 weeks to complete your first quest path
              </p>
            </div>

            {/* Right Side RPG Milestone Path */}
            <div className="md:col-span-5 flex items-center justify-center relative">
              <div className="flex flex-col items-center gap-1.5 z-10 w-full max-w-[200px]">
                {/* START Badge */}
                <div className="bg-emerald-600 text-white font-pixel text-[8px] font-bold px-3 py-1 rounded-sm shadow-sm">
                  START
                </div>
                <span className="text-[9px] text-emerald-600 font-black">↓</span>

                {/* Primary Lang Wooden Plank */}
                <div className="bg-[#854d0e] border border-[#713f12] text-[#fef08a] font-pixel text-[7.5px] font-bold px-3 py-1 rounded-sm shadow-sm w-full text-center flex items-center justify-center gap-1">
                  <span>🐍</span>
                  <span>{primaryLang}</span>
                </div>
                <span className="text-[9px] text-amber-700 font-black">↓</span>

                {/* Projects Plank */}
                <div className="bg-[#854d0e] border border-[#713f12] text-[#fef08a] font-pixel text-[7.5px] font-bold px-3 py-1 rounded-sm shadow-sm w-full text-center flex items-center justify-center gap-1">
                  <span>📁</span>
                  <span>Projects</span>
                </div>
                <span className="text-[9px] text-purple-700 font-black">↓</span>

                {/* Goal Tag Plank */}
                <div className="bg-[#6b21a8] border border-[#581c87] text-[#f5d0fe] font-pixel text-[7.5px] font-bold px-3 py-1 rounded-sm shadow-sm w-full text-center flex items-center justify-center gap-1">
                  <span>{activeGoal.tag}</span>
                </div>
                <span className="text-[9px] text-amber-500 font-black">↓</span>

                {/* Golden LEVEL UP Banner */}
                <div className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-amber-950 font-pixel text-[8px] font-black px-4 py-1.5 rounded shadow-md border border-amber-500 flex items-center gap-1">
                  <span>⭐</span>
                  <span>LEVEL UP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="w-full max-w-4xl flex items-center justify-between gap-4">
          {/* Left Back Button */}
          <button
            onClick={handleBack}
            className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold px-6 py-3 rounded-xl transition-all shadow-sm active:translate-y-0.5 cursor-pointer text-sm flex items-center gap-2"
          >
            <span>←</span>
            <span>Back</span>
          </button>

          {/* Right Continue Button */}
          <button
            onClick={handleNext}
            className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm tracking-wide px-8 py-3 rounded-xl shadow-[0_6px_20px_rgba(5,150,105,0.3)] hover:shadow-[0_8px_25px_rgba(5,150,105,0.4)] active:translate-y-0.5 active:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <span>Continue</span>
            <span className="text-base">→</span>
          </button>
        </div>
      </main>

      {/* ========================================================
          RPG OVERLAY ACCENTS (Floating sigils, signpost, bot)
         ======================================================== */}
      {/* Left Signpost Label Planks (Visible on xl+) */}
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
        &lt;/&gt;
      </div>

      {/* Bottom Right Mascot Companion Speech Bubble */}
      <div className="hidden md:flex absolute bottom-8 right-12 z-20 items-end gap-3 animate-float-slow pointer-events-none">
        {/* Pixel Speech Bubble */}
        <div className="relative mb-8 bg-white/95 border-2 border-slate-300 rounded-xl px-3.5 py-2 shadow-lg backdrop-blur-sm text-center max-w-[220px]">
          <p className="font-pixel text-[8px] text-slate-800 leading-tight font-bold tracking-tight">
            Perfect. I&apos;ll use this to
            <br />
            shape your first quests.
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
        &copy; {new Date().getFullYear()} CodeQuest. All rights reserved. Step 3 of your journey.
      </footer>
    </div>
  )
}
