import Image from "next/image"

/**
 * Auth Layout — Applies the RPG island background scenery to ALL auth routes
 * (login, register, forgot-password, update-password). Each child page
 * renders over this shared cream + pixel art backdrop.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen w-full bg-[#f4f8f0] text-slate-900 flex flex-col overflow-x-hidden">
      {/* ===== Shared RPG Island Background ===== */}
      {/* Note: Login & Register override this with their own full-page layout.
          Forgot-password / update-password render AS children and benefit here. */}
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
        {/* Center vignette keeps the island edges visible */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_center,_rgba(244,248,240,0.82)_0%,_rgba(244,248,240,0.5)_55%,_rgba(244,248,240,0)_100%)] pointer-events-none" />
      </div>

      {/* Page content renders on top */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  )
}
