"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { GamifiedButton } from "@/components/ui/gamified-button"
import { GamifiedCard } from "@/components/ui/gamified-card"
import { PixelXPBar, LevelBadge, PixelStreakCounter, AchievementBadge, XPPill } from "@/components/ui/pixel-hud"
import { PixelTooltip } from "@/components/ui/pixel-tooltip"
import { ConfettiButton, fireConfetti } from "@/components/ui/confetti"
import { showQuestToast, showXPToast } from "@/components/ui/game-toast"
import { FirefliesBackground } from "@/components/ui/fireflies"
import {
  Code2, Gamepad2, BookOpen, Flame, Trophy, Star, Map, Zap,
  ChevronRight, Lock, CheckCircle2, Clock, Target
} from "lucide-react"

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUESTS = [
  {
    id: 1, title: "Hello, World!", lang: "Python", xp: 50, time: "15 min",
    status: "active", icon: "🐍", color: "from-emerald-500 to-teal-600",
    desc: "Write your first Python program and unlock the Coder badge.",
  },
  {
    id: 2, title: "Variables & Types", lang: "Python", xp: 75, time: "20 min",
    status: "locked", icon: "📦", color: "from-sky-500 to-blue-600",
    desc: "Learn about variables, strings, and numbers in Python.",
  },
  {
    id: 3, title: "Intro to HTML", lang: "HTML", xp: 60, time: "18 min",
    status: "locked", icon: "🌐", color: "from-orange-500 to-red-600",
    desc: "Build your first webpage with semantic HTML structure.",
  },
]

const BADGES = [
  { icon: "🎯", label: "First Login",   variant: "gold"    as const },
  { icon: "📝", label: "Profile Setup", variant: "purple"  as const },
  { icon: "⚡", label: "Quick Learner", variant: "blue"    as const },
]

const LEADERBOARD = [
  { rank: 1, name: "PixelCoder42", xp: 4850, avatar: "🦊" },
  { rank: 2, name: "NightOwlDev",  xp: 3920, avatar: "🦉" },
  { rank: 3, name: "You",          xp: 1240, avatar: "🤖", isYou: true },
  { rank: 4, name: "ByteBender",   xp: 980,  avatar: "🐉" },
]

const DAILY_MISSIONS = [
  { id: 1, label: "Complete 1 Quest",          xp: 30, done: false, icon: "📜" },
  { id: 2, label: "Submit a Solution",         xp: 20, done: true,  icon: "✅" },
  { id: 3, label: "Visit the Practice Arena",  xp: 10, done: false, icon: "⚔️" },
]

// ─── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
}

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
}

// ─── Dashboard Client Component ───────────────────────────────────────────────

export function DashboardClient({ username }: { username: string }) {
  return (
    <div className="relative flex flex-col gap-8 max-w-6xl mx-auto py-2">
      {/* Ambient floating sparkles */}
      <FirefliesBackground />

      {/* ── Welcome Banner ──────────────────────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative overflow-hidden rounded-2xl border-2 border-emerald-300/40 bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-sky-950/40 shadow-lg"
      >
        {/* Background pixel art decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/codequest_onboarding_bg.jpg')] bg-cover bg-center" />

        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 sm:p-8">
          {/* Avatar + Level badge */}
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 shrink-0">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                className="w-20 h-20 rounded-2xl border-4 border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.4)] bg-emerald-100 flex items-center justify-center text-4xl select-none"
              >
                🤖
              </motion.div>
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 border-2 border-white text-white font-pixel text-[8px] px-2 py-0.5 rounded-full shadow">
                LVL 2
              </div>
            </div>
            <PixelStreakCounter days={3} />
          </motion.div>

          {/* Text + XP bar */}
          <motion.div variants={fadeUp} className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-emerald-600 font-extrabold text-[10px] uppercase tracking-[0.2em]">✦ WELCOME BACK, ADVENTURER ✦</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50 mb-1 leading-tight">
              Ready to level up, <span className="text-emerald-500 capitalize">{username}</span>?
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
              You&apos;re 260 XP away from Level 3. Keep questing!
            </p>

            <PixelTooltip content="1240 / 1500 XP to next level" side="top">
              <PixelXPBar current={1240} max={1500} segments={10} label="Level Progress" className="max-w-sm" />
            </PixelTooltip>
          </motion.div>

          {/* Quick stats + CTA */}
          <motion.div variants={fadeUp} className="flex flex-col items-end gap-3 shrink-0">
            <XPPill xp={120} />
            <ConfettiButton type="xp" onClick={() => showXPToast({ xp: 50, message: "Daily bonus!" })}>
              <GamifiedButton variant="secondary" size="sm" shimmer className="gap-2">
                <Zap className="h-3 w-3" />
                Claim Daily XP
              </GamifiedButton>
            </ConfettiButton>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Stats Row ───────────────────────────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {[
          { icon: "🔥", label: "Day Streak",    value: "3",    sub: "Best: 7",       color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-950/30", border: "border-orange-200" },
          { icon: "⭐", label: "Total XP",       value: "1,240", sub: "This week: +340", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/30",   border: "border-amber-200"  },
          { icon: "🏆", label: "Level",          value: "2",    sub: "Novice Coder",  color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950/30", border: "border-indigo-200" },
          { icon: "📜", label: "Quests Done",    value: "4",    sub: "1 this week",   color: "text-emerald-500",bg: "bg-emerald-50 dark:bg-emerald-950/30",border: "border-emerald-200"},
        ].map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 340, damping: 22 }}
            className={`flex flex-col items-center justify-center gap-1.5 p-4 rounded-2xl border-2 ${stat.bg} ${stat.border} text-center shadow-sm`}
          >
            <span className="text-2xl">{stat.icon}</span>
            <span className={`font-pixel text-lg font-black ${stat.color}`}>{stat.value}</span>
            <span className="font-bold text-xs text-slate-700 dark:text-slate-300">{stat.label}</span>
            <span className="text-[10px] text-slate-500">{stat.sub}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Main 2-column grid ──────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ── Quest Board (2/3 width) ──────────────────────────────────── */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-pixel text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-emerald-500" /> Quest Board
            </h2>
            <Link href="/learn" className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1">
              View all <ChevronRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {QUESTS.map((quest, i) => {
              const isActive  = quest.status === "active"
              const isLocked  = quest.status === "locked"
              return (
                <motion.div
                  key={quest.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 280, damping: 24 }}
                  whileHover={isLocked ? {} : { x: 4 }}
                  className={`relative flex items-center gap-4 rounded-2xl border-2 p-4 transition-all ${
                    isActive
                      ? "bg-white dark:bg-slate-800/80 border-emerald-400 shadow-[0_4px_20px_rgba(52,211,153,0.15)]"
                      : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 opacity-70"
                  }`}
                >
                  {/* Icon bubble */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${quest.color} flex items-center justify-center text-2xl shadow-md shrink-0`}>
                    {quest.icon}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-sm text-slate-900 dark:text-slate-100 truncate">{quest.title}</span>
                      {isActive && <span className="font-pixel text-[8px] bg-emerald-500 text-white px-2 py-0.5 rounded-full uppercase">Active</span>}
                      {isLocked && <Lock className="h-3 w-3 text-slate-400" />}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{quest.desc}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="inline-flex items-center gap-1 text-[10px] text-amber-600 font-bold">
                        <Star className="h-3 w-3" /> +{quest.xp} XP
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] text-slate-500">
                        <Clock className="h-3 w-3" /> {quest.time}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  {isActive && (
                    <ConfettiButton type="xp" onClick={() => showQuestToast({ title: quest.title, variant: "complete" })}>
                      <GamifiedButton variant="secondary" size="sm" shimmer>
                        Start →
                      </GamifiedButton>
                    </ConfettiButton>
                  )}
                  {isLocked && (
                    <GamifiedButton variant="outline" size="sm" disabled>
                      🔒
                    </GamifiedButton>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ── Right Sidebar (1/3 width) ────────────────────────────────── */}
        <div className="flex flex-col gap-4">

          {/* Daily Missions */}
          <GamifiedCard className="p-4 border-l-4 border-l-amber-400">
            <h3 className="font-pixel text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Target className="h-4 w-4 text-amber-500" /> Daily Missions
            </h3>
            <div className="flex flex-col gap-2">
              {DAILY_MISSIONS.map((m) => (
                <motion.div
                  key={m.id}
                  whileHover={{ x: 2 }}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border ${
                    m.done
                      ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200"
                      : "bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  <span className="text-base">{m.icon}</span>
                  <span className={`flex-1 text-xs font-medium ${m.done ? "line-through text-slate-400" : "text-slate-700 dark:text-slate-300"}`}>
                    {m.label}
                  </span>
                  {m.done
                    ? <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    : <span className="text-[9px] font-bold text-amber-600 shrink-0">+{m.xp} XP</span>
                  }
                </motion.div>
              ))}
            </div>
          </GamifiedCard>

          {/* Leaderboard mini */}
          <GamifiedCard className="p-4 border-l-4 border-l-indigo-400">
            <h3 className="font-pixel text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Trophy className="h-4 w-4 text-indigo-500" /> Leaderboard
            </h3>
            <div className="flex flex-col gap-1.5">
              {LEADERBOARD.map((player) => (
                <motion.div
                  key={player.rank}
                  whileHover={{ x: 2 }}
                  className={`flex items-center gap-2 px-2.5 py-2 rounded-xl text-sm ${
                    player.isYou
                      ? "bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-700 font-bold"
                      : "hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <span className={`font-pixel text-[10px] w-4 text-center ${player.rank === 1 ? "text-amber-500" : player.rank === 2 ? "text-slate-400" : player.rank === 3 && !player.isYou ? "text-orange-600" : "text-slate-500"}`}>
                    #{player.rank}
                  </span>
                  <span className="text-lg">{player.avatar}</span>
                  <span className={`flex-1 text-xs truncate ${player.isYou ? "text-indigo-700 dark:text-indigo-300" : "text-slate-700 dark:text-slate-300"}`}>
                    {player.name}
                  </span>
                  <span className="font-pixel text-[9px] text-amber-600 shrink-0">{player.xp.toLocaleString()} XP</span>
                </motion.div>
              ))}
            </div>
          </GamifiedCard>

          {/* Achievement Badges */}
          <GamifiedCard className="p-4 border-l-4 border-l-purple-400">
            <h3 className="font-pixel text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Star className="h-4 w-4 text-purple-500" /> Badges Earned
            </h3>
            <div className="flex flex-wrap gap-2">
              {BADGES.map((b) => (
                <PixelTooltip key={b.label} content={b.label} side="top">
                  <AchievementBadge icon={b.icon} label={b.label} variant={b.variant} className="text-[8px]" />
                </PixelTooltip>
              ))}
              <motion.div
                whileHover={{ scale: 1.06 }}
                onClick={() => showQuestToast({ title: "Bug Hunter", variant: "badge" })}
                className="inline-flex items-center gap-1 border-2 border-dashed border-slate-300 dark:border-slate-600 text-slate-400 px-2.5 py-1.5 rounded-lg text-[9px] font-pixel uppercase cursor-pointer hover:border-slate-400"
              >
                + Earn More
              </motion.div>
            </div>
          </GamifiedCard>
        </div>
      </div>

      {/* ── World Map Teaser ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.01 }}
        className="relative overflow-hidden rounded-2xl border-2 border-indigo-300/40 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 shadow-xl cursor-pointer group"
      >
        <Image
          src="/codequest_onboarding_bg.jpg"
          alt="World Map"
          fill
          className="object-cover object-center opacity-25 group-hover:opacity-35 transition-opacity"
          style={{ imageRendering: "pixelated" }}
        />
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8">
          <div className="text-5xl">🗺️</div>
          <div className="flex-1">
            <div className="font-pixel text-[10px] text-indigo-300 uppercase tracking-widest mb-1">✦ EXPLORE ✦</div>
            <h2 className="text-xl font-black text-white mb-1">The Quest World Map</h2>
            <p className="text-indigo-200 text-sm">Navigate islands of knowledge — from Python Peaks to JavaScript Jungle.</p>
          </div>
          <GamifiedButton variant="primary" shimmer className="shrink-0">
            <Map className="h-4 w-4 mr-2" /> Explore Map
          </GamifiedButton>
        </div>
      </motion.div>
    </div>
  )
}
