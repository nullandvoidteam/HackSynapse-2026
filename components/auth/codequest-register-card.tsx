"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, Lock, User, AtSign, Eye, EyeOff, ShieldCheck } from "lucide-react"
import { signup } from "@/app/(auth)/actions"

export function CodeQuestRegisterCard({
  errorMessage,
}: {
  errorMessage?: string
}) {
  const [showPassword, setShowPassword] = React.useState(false)
  const [password, setPassword] = React.useState("")

  // Dynamic Password Strength Calculation
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, label: "Enter a password", color: "bg-slate-200", textColor: "text-slate-400" }
    if (pass.length < 6) return { score: 1, label: "Weak", color: "bg-rose-500", textColor: "text-rose-500" }
    if (pass.length < 10) return { score: 2, label: "Fair", color: "bg-amber-500", textColor: "text-amber-500" }
    return { score: 3, label: "Strong", color: "bg-emerald-500", textColor: "text-emerald-600" }
  }

  const strength = getPasswordStrength(password)

  return (
    <div className="w-full max-w-[500px] bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col transition-all">
      {/* Small emerald header tag */}
      <div className="flex items-center gap-1.5 text-emerald-600 font-extrabold text-[10.5px] uppercase tracking-[0.18em] mb-2">
        <span>✦</span>
        <span>BEGIN YOUR ADVENTURE</span>
        <span>✦</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-[32px] font-extrabold text-slate-900 leading-[1.18] tracking-tight mb-2">
        Create Your <br />
        <span className="text-emerald-500 relative inline-block">
          Developer Profile
          {/* Sparkles */}
          <span className="absolute -top-3 -right-6 text-amber-400 text-sm animate-pulse select-none">
            ✦
          </span>
          <span className="absolute -bottom-1 -right-3 text-emerald-400 text-xs animate-twinkle select-none">
            ✨
          </span>
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-slate-500 text-sm font-medium mb-6">
        Choose your path, build real things, and level up as you learn.
      </p>

      {/* Auth Form binding directly to existing `signup` action */}
      <form action={signup} className="flex flex-col gap-3.5">
        {/* Full Name Input (Optional helper) */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="fullname"
            className="text-[11px] font-bold uppercase tracking-wider text-slate-700"
          >
            FULL NAME
          </label>
          <div className="relative flex items-center">
            <User className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Your name"
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-medium transition-all duration-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 hover:border-slate-300"
            />
          </div>
        </div>

        {/* Username Input (Required by backend) */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="username"
            className="text-[11px] font-bold uppercase tracking-wider text-slate-700"
          >
            USERNAME
          </label>
          <div className="relative flex items-center">
            <AtSign className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
            <input
              id="username"
              name="username"
              type="text"
              required
              placeholder="Choose a username"
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-medium transition-all duration-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 hover:border-slate-300"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-[11px] font-bold uppercase tracking-wider text-slate-700"
          >
            EMAIL
          </label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-medium transition-all duration-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 hover:border-slate-300"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-[11px] font-bold uppercase tracking-wider text-slate-700"
          >
            PASSWORD
          </label>
          <div className="relative flex items-center">
            <Lock className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full h-11 pl-10 pr-11 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-medium transition-all duration-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 hover:border-slate-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-slate-400 hover:text-slate-600 transition-colors p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Password Strength Status Bar */}
          {password && (
            <div className="flex items-center gap-2 mt-1.5 px-0.5">
              <span className={`text-[10px] font-bold uppercase ${strength.textColor}`}>
                {strength.label}
              </span>
              <div className="flex-1 flex gap-1 h-1.5 bg-slate-100 rounded-full p-0.5">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`flex-1 rounded-full transition-all duration-300 ${
                      step <= strength.score ? strength.color : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Error Notification */}
        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-bold text-center mt-1">
            {errorMessage}
          </div>
        )}

        {/* Primary CTA Button */}
        <button
          type="submit"
          className="mt-2.5 w-full h-12 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm tracking-wide rounded-xl shadow-[0_6px_20px_rgba(5,150,105,0.3)] hover:shadow-[0_8px_25px_rgba(5,150,105,0.4)] active:translate-y-0.5 active:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Create My Character</span>
          <span className="text-base">→</span>
        </button>
      </form>

      {/* Divider */}
      <div className="relative flex items-center justify-center my-5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200/80"></div>
        </div>
        <span className="relative bg-white px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          OR
        </span>
      </div>

      {/* Social Google Login Button */}
      <button
        type="button"
        className="w-full h-11 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm flex items-center justify-center gap-3 transition-all duration-200 hover:border-slate-300 shadow-sm active:scale-[0.99] cursor-pointer"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        <span>Continue with Google</span>
      </button>

      {/* Footer link to Login */}
      <div className="mt-5 text-center text-xs text-slate-600">
        <span>Already have an account? </span>
        <Link
          href="/login"
          className="font-bold text-emerald-600 hover:text-emerald-700 hover:underline transition-colors"
        >
          Log in
        </Link>
      </div>

      {/* Terms footnote */}
      <div className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400">
        <ShieldCheck className="h-3.5 w-3.5 text-slate-400 shrink-0" />
        <span>
          By continuing, you agree to our{" "}
          <Link href="#" className="underline hover:text-slate-600">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="#" className="underline hover:text-slate-600">
            Privacy Policy
          </Link>
          .
        </span>
      </div>
    </div>
  )
}
