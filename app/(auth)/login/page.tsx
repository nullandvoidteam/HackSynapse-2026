import Link from "next/link"
import { CodeQuestLoginCard } from "@/components/auth/codequest-login-card"
import { CodeQuestRpgScene } from "@/components/auth/codequest-rpg-scene"
import { CodeQuestLogo } from "@/components/brand/codequest-logo"

export default async function LoginPage(props: {
  searchParams: Promise<{ error?: string }>
}) {
  const searchParams = await props.searchParams

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-slate-900 flex flex-col justify-between p-4 sm:p-6 lg:p-10 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Header Branding */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between mb-6 lg:mb-8">
        <Link
          href="/"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
        >
          <CodeQuestLogo size="md" showTagline={true} />
        </Link>
      </header>

      {/* Main Split-Screen Canvas Layout */}
      <main className="w-full max-w-7xl mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Modern Clean Auth Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <CodeQuestLoginCard errorMessage={searchParams.error} />
        </div>

        {/* Right Column: 16-Bit Retro RPG Coding Scene with Gamification HUD */}
        <div className="lg:col-span-7 hidden lg:flex items-center justify-center">
          <CodeQuestRpgScene />
        </div>
      </main>

      {/* Bottom Spacer for padding balance */}
      <footer className="w-full max-w-7xl mx-auto py-4 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} CodeQuest. All rights reserved. Level up your coding skills.
      </footer>
    </div>
  )
}
