export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-slate-900 flex flex-col">
      {children}
    </div>
  )
}

