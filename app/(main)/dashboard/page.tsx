import { GamifiedCard } from '@/components/ui/gamified-card'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Image from 'next/image'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // we can fetch the user's profile from the db here, but for now we'll just use the auth metadata
  const username = user.user_metadata?.username || user.email?.split('@')[0] || 'Player'

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-pixel text-primary uppercase">Dashboard</h1>
      </div>

      <GamifiedCard className="flex items-center gap-6 p-8 bg-card border-l-8 border-l-secondary">
        <div className="flex-shrink-0">
          <Image 
            src="/bouncingbot.webp" 
            alt="Mascot" 
            width={100} 
            height={100} 
            style={{ imageRendering: 'pixelated' }} 
            className="drop-shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold font-pixel mb-2 text-foreground uppercase tracking-wider">Welcome back, {username}!</h2>
          <p className="text-muted-foreground text-lg">You're doing great. Ready to earn some more XP today?</p>
        </div>
      </GamifiedCard>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GamifiedCard className="p-6 flex flex-col items-center text-center gap-2">
          <div className="text-5xl mb-2 drop-shadow-md">🔥</div>
          <h3 className="font-bold text-lg text-foreground font-pixel">3 Day Streak</h3>
          <p className="text-sm text-muted-foreground">Keep it up!</p>
        </GamifiedCard>

        <GamifiedCard className="p-6 flex flex-col items-center text-center gap-2">
          <div className="text-5xl mb-2 drop-shadow-md">⭐</div>
          <h3 className="font-bold text-lg text-foreground font-pixel">120 XP</h3>
          <p className="text-sm text-muted-foreground">Total points earned</p>
        </GamifiedCard>

        <GamifiedCard className="p-6 flex flex-col items-center text-center gap-2">
          <div className="text-5xl mb-2 drop-shadow-md">🏆</div>
          <h3 className="font-bold text-lg text-foreground font-pixel">Level 2</h3>
          <p className="text-sm text-muted-foreground">Novice Coder</p>
        </GamifiedCard>
      </div>
    </div>
  )
}
