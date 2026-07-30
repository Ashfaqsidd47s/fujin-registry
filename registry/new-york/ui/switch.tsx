"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const switchVariants = cva(
  [
    // Base layout & transition styles
    "peer inline-flex shrink-0 items-center rounded-full border-2 border-transparent transition-all duration-200 outline-hidden select-none cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2",
    "active:scale-[0.97]",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      color: {
        default: "bg-fujin-default hover:bg-fujin-default/80 group-hover:bg-fujin-default/80 focus-visible:ring-fujin-default data-[state=checked]:bg-fujin-default/80 data-[state=checked]:group-hover:bg-fujin-default/80",
        primary: "bg-fujin-default hover:bg-fujin-default/80 group-hover:bg-fujin-default/80 focus-visible:ring-fujin-primary data-[state=checked]:bg-fujin-primary data-[state=checked]:hover:bg-fujin-primary/90 data-[state=checked]:group-hover:bg-fujin-primary/90",
        secondary: "bg-fujin-default hover:bg-fujin-default/80 group-hover:bg-fujin-default/80 focus-visible:ring-fujin-secondary data-[state=checked]:bg-fujin-secondary data-[state=checked]:hover:bg-fujin-secondary/90 data-[state=checked]:group-hover:bg-fujin-secondary/90",
        success: "bg-fujin-default hover:bg-fujin-default/80 group-hover:bg-fujin-default/80 focus-visible:ring-fujin-success data-[state=checked]:bg-fujin-success data-[state=checked]:hover:bg-fujin-success/90 data-[state=checked]:group-hover:bg-fujin-success/90",
        warning: "bg-fujin-default hover:bg-fujin-default/80 group-hover:bg-fujin-default/80 focus-visible:ring-fujin-warning data-[state=checked]:bg-fujin-warning data-[state=checked]:hover:bg-fujin-warning/90 data-[state=checked]:group-hover:bg-fujin-warning/90",
        danger: "bg-fujin-default hover:bg-fujin-default/80 group-hover:bg-fujin-default/80 focus-visible:ring-fujin-danger data-[state=checked]:bg-fujin-danger data-[state=checked]:hover:bg-fujin-danger/90 data-[state=checked]:group-hover:bg-fujin-danger/90",
      },
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7.5 w-14",
      },
    },
    defaultVariants: {
      color: "default",
      size: "md",
    },
  }
)

const thumbVariants = cva(
  "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-out",
  {
    variants: {
      size: {
        sm: "size-4 data-[state=checked]:translate-x-4",
        md: "size-5 data-[state=checked]:translate-x-5",
        lg: "size-6.5 data-[state=checked]:translate-x-6.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

type SwitchVariantProps = VariantProps<typeof switchVariants>;

type SwitchBaseProps = Omit<
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
  keyof SwitchVariantProps
>;

export interface SwitchProps
  extends SwitchBaseProps,
    SwitchVariantProps {
  label?: React.ReactNode
  description?: React.ReactNode
}

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
