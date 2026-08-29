import { SiteHeader } from '@/components/site-header'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0f25] flex flex-col">
      <SiteHeader />
      
      {/* Dynamic Starry background using radial gradients */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 20%, white 1px, transparent 0),
            radial-gradient(2px 2px at 40% 40%, rgba(255,255,255,0.8) 1px, transparent 0),
            radial-gradient(1.5px 1.5px at 70% 10%, rgba(255,255,255,0.6) 1px, transparent 0),
            radial-gradient(2px 2px at 90% 50%, white 1px, transparent 0),
            radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.5) 1px, transparent 0),
            radial-gradient(2.5px 2.5px at 80% 80%, white 1px, transparent 0),
            radial-gradient(1px 1px at 50% 60%, rgba(255,255,255,0.9) 1px, transparent 0)
          `,
          backgroundSize: '300px 300px'
        }}
      />

      <main className="relative z-10 flex flex-1 items-center justify-center p-4 pt-24">
        <div className="w-full max-w-[440px]">
          {children}
        </div>
      </main>
    </div>
  )
}
