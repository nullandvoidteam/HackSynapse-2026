import Link from 'next/link'
import { ChevronDown, Search, Moon } from 'lucide-react'
import { CodeQuestLogo } from './brand/codequest-logo'

export function SiteHeader() {
  return (
    <header className="absolute top-0 w-full z-50 flex h-[80px] items-center justify-between px-6 md:px-12 text-white">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-3">
          <CodeQuestLogo size="md" />
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 ml-4 text-[15px] font-bold tracking-wide">
          <Link href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
            Learn <ChevronDown className="h-[14px] w-[14px] text-gray-400" strokeWidth={3} />
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
            Practice <ChevronDown className="h-[14px] w-[14px] text-gray-400" strokeWidth={3} />
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Build
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
            Community <ChevronDown className="h-[14px] w-[14px] text-gray-400" strokeWidth={3} />
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Pricing
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <button className="hover:text-gray-300 transition-colors">
          <Search className="h-[22px] w-[22px]" strokeWidth={2.5} />
        </button>
        <button className="hover:text-gray-300 transition-colors">
          <Moon className="h-[22px] w-[22px]" strokeWidth={2.5} />
        </button>
        <Link href="/register">
          <button className="ml-2 h-[42px] px-6 rounded-lg bg-[#fcd34d] text-black font-extrabold text-[15px] border-b-4 border-[#b45309] active:border-b-0 active:translate-y-1 transition-all hover:brightness-110">
            Sign up
          </button>
        </Link>
      </div>
    </header>
  )
}
