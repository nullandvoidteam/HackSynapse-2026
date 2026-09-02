import * as React from "react"
import { CodeQuestOnboardingFlow } from "@/components/onboarding/codequest-onboarding-flow"

export const metadata = {
  title: "CodeQuest — Onboarding Adventure",
  description: "Set up your developer journey with CodeQuest.",
}

export default function OnboardingPage() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen w-full bg-[#fbfbfa] flex items-center justify-center font-pixel text-xs text-emerald-600">
          Loading your quest...
        </div>
      }
    >
      <CodeQuestOnboardingFlow />
    </React.Suspense>
  )
}
