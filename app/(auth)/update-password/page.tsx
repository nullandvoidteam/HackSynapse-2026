import Link from 'next/link'
import { GamifiedCard } from '@/components/ui/gamified-card'
import { GamifiedInput } from '@/components/ui/gamified-input'
import { GamifiedButton } from '@/components/ui/gamified-button'
import { updatePassword } from '../actions'
import Image from 'next/image'

export default async function UpdatePasswordPage(props: {
  searchParams: Promise<{ error?: string; message?: string }>
}) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex flex-col items-center">
      {/* Mascot area */}
      <div className="mb-8 flex items-center justify-center gap-4 w-full">
        <div className="flex-shrink-0">
          <Image 
            src="/bouncingbot.webp" 
            alt="Bot" 
            width={80} 
            height={80} 
            style={{ imageRendering: 'pixelated' }} 
          />
        </div>
        <div className="relative rounded-md bg-[#f1f5f9] p-4 font-pixel text-xs font-bold text-[#020617] leading-[1.64] tracking-[0.48px] [text-shadow:0px_2px_0px_#e2e8f0] shadow-sm max-w-[340px]">
          Enter your new password below!
          {/* Speech bubble tail */}
          <div className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 bg-[#f1f5f9]"></div>
        </div>
      </div>

      <GamifiedCard className="flex w-full flex-col gap-6 p-8">
        <form className="flex flex-col gap-4">
          <GamifiedInput id="password" name="password" type="password" placeholder="New Password" required className="bg-white border-gray-300 text-gray-900" />
          
          {searchParams.error && (
            <p className="text-sm text-red-500 font-bold text-center mt-2 bg-red-50 p-2 rounded-lg border border-red-200">
              {searchParams.error}
            </p>
          )}

          <GamifiedButton variant="primary" formAction={updatePassword} className="mt-2 w-full">
            Update Password
          </GamifiedButton>
        </form>
      </GamifiedCard>
    </div>
  )
}
