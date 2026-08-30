"use client"

import * as React from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { CodeQuestOnboardingStep1 } from "./codequest-onboarding-step1"
import { CodeQuestOnboardingStep2 } from "./codequest-onboarding-step2"
import { CodeQuestOnboardingStep3 } from "./codequest-onboarding-step3"
import { CodeQuestOnboardingStep4 } from "./codequest-onboarding-step4"
import { CodeQuestOnboardingStep5 } from "./codequest-onboarding-step5"

export function CodeQuestOnboardingFlow() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stepParam = searchParams.get("step")

  const [stepOverride, setStepOverride] = React.useState<number | null>(null)

  const currentStep =
    stepOverride !== null
      ? stepOverride
      : stepParam === "5"
      ? 5
      : stepParam === "4"
      ? 4
      : stepParam === "3"
      ? 3
      : stepParam === "2"
      ? 2
      : 1

  if (currentStep === 5) {
    return (
      <CodeQuestOnboardingStep5
        onBack={() => setStepOverride(4)}
        onFinish={() => {
          router.push("/dashboard")
        }}
      />
    )
  }

  if (currentStep === 4) {
    return (
      <CodeQuestOnboardingStep4
        onBack={() => setStepOverride(3)}
        onFinish={() => setStepOverride(5)}
      />
    )
  }

  if (currentStep === 3) {
    return (
      <CodeQuestOnboardingStep3
        onBack={() => setStepOverride(2)}
        onContinue={() => setStepOverride(4)}
      />
    )
  }

  if (currentStep === 2) {
    return (
      <CodeQuestOnboardingStep2
        onBack={() => setStepOverride(1)}
        onContinue={() => setStepOverride(3)}
      />
    )
  }

  return (
    <CodeQuestOnboardingStep1
      onContinue={() => setStepOverride(2)}
    />
  )
}
