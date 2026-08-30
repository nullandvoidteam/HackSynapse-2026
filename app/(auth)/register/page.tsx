import Link from "next/link"
import { CodeQuestRegisterCard } from "@/components/auth/codequest-register-card"
import { CodeQuestTrailheadScene } from "@/components/auth/codequest-trailhead-scene"

export default async function RegisterPage(props: {
  searchParams: Promise<{ error?: string }>
}) {
  const searchParams = await props.searchParams

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-slate-900 flex flex-col justify-between p-4 sm:p-6 lg:p-10 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Header Navigation Bar */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between mb-6 lg:mb-8">
        {/* Left Branding */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
        >
          {/* Terminal Icon `>_` with Sparks */}
          <div className="relative flex items-center justify-center">
            <div className="h-9 w-9 bg-emerald-600 border-2 border-b-4 border-emerald-700 rounded-xl flex items-center justify-center text-white font-mono font-black text-sm shadow-md group-hover:scale-105 transition-transform">
              &gt;_
            </div>
            {/* Ambient Sparkles */}
            <span className="absolute -top-2 -right-2 text-amber-400 text-xs animate-twinkle select-none">
              ✦
            </span>
          </div>

          <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
            CodeQuest
          </span>
        </Link>

        {/* Right Header Navigation Link */}
        <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
          <span className="hidden sm:inline">Already have an account?</span>
          <Link
            href="/login"
            className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors hover:underline"
          >
            Log in
          </Link>
        </div>
      </header>

      {/* Main Split-Screen Canvas Layout */}
      <main className="w-full max-w-7xl mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: 16-Bit Trailhead RPG Scene with Beginner HUD (~55% width) */}
        <div className="lg:col-span-7 hidden lg:flex items-center justify-center order-2 lg:order-1">
          <CodeQuestTrailheadScene />
        </div>

        {/* Right Column: Modern Sign-Up Card (~45% width) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <CodeQuestRegisterCard errorMessage={searchParams.error} />
        </div>
      </main>

      {/* Bottom Spacer / Copyright Footer */}
      <footer className="w-full max-w-7xl mx-auto py-4 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} CodeQuest. All rights reserved. Start your coding journey.
      </footer>
    </div>
  )
}
