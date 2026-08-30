import * as React from "react"
import { cn } from "@/lib/utils"

export type CardProps = React.HTMLAttributes<HTMLDivElement>

const GamifiedCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl bg-white text-gray-900 p-8 shadow-sm",
          className
        )}
        {...props}
      />
    )
  }
)
GamifiedCard.displayName = "GamifiedCard"

export { GamifiedCard }
