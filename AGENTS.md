<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# DEX / HackSynapse 2026 — Agent & Developer Guide

## 1. Project Overview
**DEX** is a gamified interactive learning platform inspired by modern retro/pixel gamification (similar to Codédex / Duolingo). The platform motivates learners through XP, streaks, levels, pixel badges, interactive coding quests, and an animated bot companion.

### Core Stack
- **Framework**: Next.js 16.3.3 (App Router, React 19.2.8, React Server Components)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`, `tw-animate-css`, `shadcn/tailwind.css`)
- **UI Components**: Shadcn UI (`base-nova` style, `@base-ui/react`, `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`)
- **State & Theme**: `next-themes` (Dark/Light mode support, default: `dark`)
- **Backend & Database**: Supabase (`@supabase/supabase-js`, `@supabase/ssr`) for Auth, Database, and Row Level Security (RLS)

---

## 2. Directory Structure & Architecture

```
├── app/
│   ├── (auth)/                  # Public auth route group (login, register, forgot-password, update-password)
│   │   ├── actions.ts           # Server Actions for auth (login, signup, signout, forgotPassword, updatePassword)
│   │   └── layout.tsx           # Centered card layout for auth flows
│   ├── (main)/                  # Protected application route group (dashboard, profile, learn, etc.)
│   │   ├── dashboard/           # Main user dashboard (XP, streaks, levels, quests)
│   │   └── layout.tsx           # Shell layout with persistent Navbar & Sidebar
│   ├── auth/
│   │   └── callback/route.ts    # Supabase OAuth and email verification callback handler
│   ├── globals.css              # Tailwind CSS v4 root theme tokens & pixel cursor styles
│   ├── layout.tsx               # Root HTML layout with Mulish, Geist Mono & Press Start 2P fonts
│   └── page.tsx                 # Root landing / redirect logic
├── components/
│   ├── ui/                      # Atomic & gamified UI primitives
│   │   ├── button.tsx           # Base UI button component
│   │   ├── gamified-button.tsx  # 3D clickable button with push depth & sound/press styling
│   │   ├── gamified-card.tsx    # Card container with gamified borders & shadows
│   │   └── gamified-input.tsx   # Custom gamified input field
│   ├── navbar.tsx               # Top header with user XP, streak indicators, and profile menu
│   ├── sidebar.tsx              # Sidebar navigation (Dashboard, Learn, Practice, Community, etc.)
│   ├── site-header.tsx          # Landing / public navigation header
│   └── theme-provider.tsx       # NextThemes wrapper
├── lib/
│   └── utils.ts                 # Standard `cn()` classnames helper
├── utils/
│   └── supabase/                # Supabase SSR client factories
│       ├── client.ts            # Browser client (`createBrowserClient`)
│       ├── middleware.ts        # Session refresh middleware helper
│       └── server.ts            # Server client (`createServerClient` with async cookieStore)
├── middleware.ts                # Next.js middleware for Supabase session keep-alive
└── public/                      # Static assets & pixel art (e.g., `bouncingbot.webp`)
```

---

## 3. Design System & Aesthetics Guidelines

### 3.1 Typography
Configured in `app/layout.tsx` and mapped to CSS variables:
- **Body & General UI**: `--font-sans` (`Mulish`) — Clean, modern sans-serif.
- **Code & Numbers**: `--font-geist-mono` (`Geist_Mono`).
- **Headings & Gamified Badges**: `--font-pixel` (`Press_Start_2P`) — Used for XP counts, streaks, level titles, badge names, and button labels.

### 3.2 Color System (Tailwind CSS v4 OKLCH)
- **Primary (Yellow)**: `oklch(0.85 0.15 95)` / `#fbbf24` (Energy, coin icons, primary highlights)
- **Secondary (Green)**: `oklch(0.7 0.2 160)` / `#58cc02` (Success, completed quests, XP indicators)
- **Accent (Purple/Pink)**: `oklch(0.6 0.2 300)` (Streaks, special badges, fire effects)
- **Dark Theme Background**: `oklch(0.18 0.02 260)` / `#13141C` (Deep modern gaming dark mode)
- **Card Background**: `oklch(0.23 0.02 260)`

### 3.3 3D Gamification UI Rules
1. **Buttons (`GamifiedButton`)**:
   - Use bottom border depth (e.g., `border-b-4 border-[#1899d6]`).
   - Active state push interaction: `active:translate-y-1 active:border-b-0`.
   - Font: `font-pixel uppercase tracking-wider text-[11px]`.
2. **Cards (`GamifiedCard`)**:
   - Rounded corners (`rounded-xl` or `rounded-2xl`).
   - Distinct colored borders (e.g. `border-l-8 border-l-secondary`).
3. **Pixel Art Assets**:
   - Always apply `style={{ imageRendering: 'pixelated' }}` to pixel sprites and bot mascots (`Image` from `next/image`).
4. **Speech Bubbles & Mascot Interactions**:
   - Render companion messages inside gamified dialog bubbles with directional tails.

---

## 4. Next.js 16 & React 19 Coding Standards

1. **Async Cookies in Server Components & Actions**:
   - In Next.js 15+, `cookies()` from `next/headers` is asynchronous and **must be awaited**:
     ```ts
     const cookieStore = await cookies()
     const supabase = createClient(cookieStore)
     ```
2. **Server Actions (`"use server"`)**:
   - Auth actions in `app/(auth)/actions.ts` must use `revalidatePath` and handle errors cleanly with URL query parameters or structured state.
3. **Route Groups**:
   - `(auth)`: Contains login, registration, password recovery.
   - `(main)`: Contains the protected app workspace wrapped in the `(main)/layout.tsx` (Navbar + Sidebar shell).
4. **Client vs Server Components**:
   - Default to Server Components for data fetching and layout composition.
   - Mark interactive components (forms with active state, modals, animations) with `"use client"`.

---

## 5. Supabase Integration Rules

1. **Client Selection**:
   - Server Components / Server Actions: Use `@/utils/supabase/server`.
   - Client Components: Use `@/utils/supabase/client`.
   - Middleware: Use `@/utils/supabase/middleware`.
2. **Security & RLS**:
   - Every Supabase table must have Row Level Security (RLS) enabled.
   - Always verify user authentication with `supabase.auth.getUser()` on server-side protected routes.

---

## 6. Development Workflow & Commands

```bash
# Start development server (runs at http://localhost:3000)
npm run dev

# Run ESLint validation
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

---

## 7. Instructions for Future AI Agents

When designing or updating features in this codebase:
1. **Maintain Gamified Aesthetics**: Never create plain, boring enterprise cards. Always incorporate pixel accents, 3D button interactions, level badges, progress bars, or streak icons.
2. **Follow Existing Component Patterns**: Check `components/ui/` before creating new primitive components. Extend `GamifiedButton`, `GamifiedCard`, or `GamifiedInput` when building new UI flows.
3. **Keep Responsive Design Intact**: The sidebar collapses on mobile viewports while mobile headers trigger navigation menus.
4. **Preserve Next.js Agent Header**: Keep the `<!-- BEGIN:nextjs-agent-rules -->` block at the top of `AGENTS.md` untouched.
