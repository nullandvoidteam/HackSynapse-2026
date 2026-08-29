import Link from 'next/link'
import { LayoutDashboard, User, Settings, Bell, ShieldAlert } from 'lucide-react'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/profile', label: 'Profile', icon: User },
  { href: '/notifications', label: 'Notifications', icon: Bell },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/admin', label: 'Admin', icon: ShieldAlert },
]

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col border-r-4 border-border bg-card">
      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 font-bold uppercase tracking-wider text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:translate-y-1 active:bg-muted"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
