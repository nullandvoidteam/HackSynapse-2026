import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'warning' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const GamifiedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-pixel uppercase tracking-wider transition-all active:translate-y-1 active:border-b-0 disabled:opacity-50 disabled:pointer-events-none rounded-xl"
    
    const sizeStyles = {
      sm: "h-9 px-4 text-[9px] border-b-2",
      md: "h-12 px-6 text-[11px] border-b-4",
      lg: "h-14 px-8 text-[13px] border-b-[6px]",
    }

    const variantStyles = {
      primary: "bg-[#1cb0f6] text-white border-[#1899d6] hover:bg-[#1899d6] hover:border-[#1899d6]",
      secondary: "bg-[#58cc02] text-white border-[#58a700] hover:bg-[#46a302] hover:border-[#46a302]",
      warning: "bg-[#ffc800] text-white border-[#e5b400] hover:bg-[#e5b400] hover:border-[#e5b400]",
      ghost: "bg-transparent text-foreground border-transparent hover:bg-muted active:translate-y-0",
      outline: "bg-white text-gray-700 border-[#e5e5e5] border-2 hover:bg-gray-50 active:border-b-2 active:translate-y-[2px]",
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      />
    )
  }
)
GamifiedButton.displayName = "GamifiedButton"

export { GamifiedButton }
