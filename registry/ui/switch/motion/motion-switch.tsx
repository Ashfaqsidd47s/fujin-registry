"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { switchVariants, thumbVariants } from "../shared/switch.variants"
import { type SwitchProps } from "../shared/switch.types"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, color, size, label, description, disabled, children, checked, defaultChecked, onCheckedChange, ...props }, ref) => {
  const [internalChecked, setInternalChecked] = React.useState(checked ?? defaultChecked ?? false)

  React.useEffect(() => {
    if (checked !== undefined) {
      setInternalChecked(checked)
    }
  }, [checked])

  const handleCheckedChange = (val: boolean) => {
    setInternalChecked(val)
    onCheckedChange?.(val)
  }

  // Slide offsets for spring motion
  const offsets = {
    sm: 16,
    md: 20,
    lg: 26
  }
  const slideDistance = offsets[size || "md"]

  const switchEl = (
    <SwitchPrimitive.Root
      ref={ref}
      data-slot="switch"
      disabled={disabled}
      checked={internalChecked}
      onCheckedChange={handleCheckedChange}
      className={cn(switchVariants({ color, size }), "active:scale-100", className)}
      {...props}
    >
      <motion.span
        data-slot="switch-thumb"
        className="pointer-events-none block rounded-full bg-white shadow-lg ring-0"
        style={{
          width: size === "sm" ? 16 : size === "lg" ? 26 : 20,
          height: size === "sm" ? 16 : size === "lg" ? 26 : 20,
        }}
        animate={{
          x: internalChecked ? slideDistance : 0
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
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
