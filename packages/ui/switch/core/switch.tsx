"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"
import { switchVariants, thumbVariants } from "../shared/switch.variants"
import { type SwitchProps } from "../shared/switch.types"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, color, size, label, description, disabled, children, ...props }, ref) => {
  const switchEl = (
    <SwitchPrimitive.Root
      ref={ref}
      data-slot="switch"
      disabled={disabled}
      className={cn(switchVariants({ color, size }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(thumbVariants({ size }))}
      />
    </SwitchPrimitive.Root>
  )

  if (label || description || children) {
    return (
      <label className={cn("inline-flex items-start gap-3 cursor-pointer select-none group", disabled && "opacity-50 cursor-not-allowed")}>
        <div className="flex items-center h-6">
          {switchEl}
        </div>
        <div className="flex flex-col text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-150">
          {label || children}
          {description && <span className="text-xs text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-150 mt-0.5">{description}</span>}
        </div>
      </label>
    )
  }

  return switchEl
})
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }
