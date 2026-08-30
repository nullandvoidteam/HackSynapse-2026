import Link from "next/link"
import Image from "next/image"
import { CodeQuestLoginCard } from "@/components/auth/codequest-login-card"
import { CodeQuestRpgScene } from "@/components/auth/codequest-rpg-scene"
import { CodeQuestLogo } from "@/components/brand/codequest-logo"

export const metadata = {
  title: "Login — CodeQuest",
  description:
    "Continue your coding adventure. Log in to CodeQuest and keep leveling up.",
}

export default async function LoginPage(props: {
  searchParams: Promise<{ error?: string }>
}) {
  const searchParams = await props.searchParams

  return (
    <div className="relative min-h-screen w-full bg-[#f4f8f0] text-slate-900 flex flex-col justify-between overflow-x-hidden font-sans selection:bg-emerald-500 selection:text-white">

      {/* ===== RPG Island Background Scenery ===== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/codequest_onboarding_bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ imageRendering: "pixelated" }}
        />
        {/* Very light center vignette — keeps the islands visible at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_center,_rgba(244,248,240,0.82)_0%,_rgba(244,248,240,0.5)_55%,_rgba(244,248,240,0)_100%)] pointer-events-none" />
      </div>

      {/* Top Header */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-6 flex items-center">
        <Link
          href="/"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
        >
          <CodeQuestLogo size="md" showTagline={false} />
        </Link>
      </header>

      {/* Main Split-Screen Layout */}
      <main className="relative z-10 w-full max-w-7xl mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center px-6 sm:px-10 py-8">
        {/* Left: White Auth Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <CodeQuestLoginCard errorMessage={searchParams.error} />
        </div>

        {/* Right: RPG Illustration Panel */}
        <div className="lg:col-span-7 hidden lg:flex items-center justify-center">
          <CodeQuestRpgScene />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto py-4 px-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} CodeQuest. All rights reserved. Level up your coding skills.
      </footer>
    </div>
  )
}
