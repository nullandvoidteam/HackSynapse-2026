# DEX / HackSynapse 2026 — Claude Instructions & Context

@AGENTS.md

## Quick Reference Commands
- **Development Server**: `npm run dev` (Runs on `http://localhost:3000`)
- **Linting**: `npm run lint`
- **Build**: `npm run build`
- **Start Production**: `npm run start`

---

## Tech Stack & Core Libraries
- **Next.js**: 16.3.3 (App Router with React 19.2.8 & Server Actions)
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`, `tw-animate-css`, `shadcn/tailwind.css`)
- **UI Components**: Shadcn UI (`base-nova` style with `@base-ui/react`, `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`)
- **Theme**: `next-themes` (Dark/Light mode, default: `dark`)
- **Auth & Database**: Supabase (`@supabase/supabase-js`, `@supabase/ssr`)

---

## Key Architecture & Conventions

### Route Organization
- `app/(auth)/`: Authentication pages (`login`, `register`, `forgot-password`, `update-password`) and Server Actions (`actions.ts`).
- `app/(main)/`: Authenticated platform pages with persistent `Navbar` (top) and `Sidebar` (left) inside `app/(main)/layout.tsx`.
- `app/auth/callback/route.ts`: Supabase OAuth and confirmation callback handler.
- `utils/supabase/`: SSR Supabase client utilities for `client.ts`, `server.ts`, and `middleware.ts`.

### Coding Patterns (Next.js 16 + React 19)
- **Asynchronous Cookies**: In Server Components and Actions, `cookies()` is a Promise:
  ```ts
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  ```
- **Server Actions**: Defined with `"use server"` at top of file or action. Revalidate paths with `revalidatePath('/', 'layout')` after auth state changes.
- **Client vs Server**: Default to Server Components (`async function Page()`). Use `"use client"` only for client-side interactivity, state, and browser APIs.

### Gamified Design System
- **Pixel Font**: `font-pixel` (`Press_Start_2P`) for headings, XP numbers, streaks, and badge labels.
- **Sans Font**: `font-sans` (`Mulish`) for readable body text and paragraph descriptions.
- **3D Gamified Buttons**: `GamifiedButton` with thick bottom borders (`border-b-4`), uppercase pixel font, and tactile press-down states (`active:translate-y-1 active:border-b-0`).
- **Color Palette (OKLCH)**:
  - Yellow / Primary: `#fbbf24` (Energy, Coins, Primary CTAs)
  - Green / Secondary: `#58cc02` (XP, Completed Quests, Success)
  - Pink/Purple / Accent: `#c084fc` (Streaks, Fire, Rare badges)
  - Dark Slate Background: `#13141C`
- **Pixel Art Mascot**: Render with `style={{ imageRendering: 'pixelated' }}`.

---

## Agent Guidelines for Adding Features
1. **Always Match the Gamified Retro-Modern Theme**: Integrate XP, progress meters, badges, and tactile buttons into new screens.
2. **Reuse Existing UI**: Leverage `GamifiedButton`, `GamifiedCard`, and `GamifiedInput` in `components/ui/`.
3. **Keep Code Type-Safe**: Strictly type props, Server Actions, and Supabase database models.
4. **Preserve Next.js Agent Header**: Never remove the auto-generated Next.js rules block at the top of `AGENTS.md`.
