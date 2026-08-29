import Link from 'next/link'
import { Flame, Star, Menu } from 'lucide-react'
import { signout } from '@/app/(auth)/actions'
import { GamifiedButton } from './ui/gamified-button'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-4 border-border bg-background px-4 md:px-6">
      <div className="flex items-center gap-4">
        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-black text-xl">
            d
          </div>
          <span className="hidden font-bold uppercase tracking-wider md:inline-block">
            dex
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4 mr-4">
          <div className="flex items-center gap-1 font-bold text-secondary">
            <Star className="h-5 w-5 fill-secondary" />
            <span>120 XP</span>
          </div>
          <div className="flex items-center gap-1 font-bold text-accent">
            <Flame className="h-5 w-5 fill-accent" />
            <span>3 Days</span>
          </div>
        </div>
        
        <form action={signout}>
          <GamifiedButton variant="ghost" size="sm" type="submit" className="text-xs uppercase tracking-wider">
            Logout
          </GamifiedButton>
        </form>
      </div>
    </header>
  )
}
