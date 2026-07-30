"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cva, type VariantProps } from "class-variance-authority"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  [
    // Base layout & styles
    "peer shrink-0 flex items-center justify-center border-2 transition-all duration-150 select-none cursor-pointer outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2",
    "active:scale-[0.95]",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      color: {
        default: "border-fujin-default hover:bg-fujin-default/10 group-hover:bg-fujin-default/10 focus-visible:ring-fujin-default data-[state=checked]:bg-fujin-default data-[state=checked]:border-fujin-default data-[state=checked]:text-fujin-default-foreground",
        primary: "border-fujin-default/60 hover:border-fujin-primary/60 group-hover:border-fujin-primary/60 focus-visible:ring-fujin-primary data-[state=checked]:bg-fujin-primary data-[state=checked]:border-fujin-primary data-[state=checked]:text-fujin-primary-foreground",
        secondary: "border-fujin-default/60 hover:border-fujin-secondary/60 group-hover:border-fujin-secondary/60 focus-visible:ring-fujin-secondary data-[state=checked]:bg-fujin-secondary data-[state=checked]:border-fujin-secondary data-[state=checked]:text-fujin-secondary-foreground",
        success: "border-fujin-default/60 hover:border-fujin-success/60 group-hover:border-fujin-success/60 focus-visible:ring-fujin-success data-[state=checked]:bg-fujin-success data-[state=checked]:border-fujin-success data-[state=checked]:text-fujin-success-foreground",
        warning: "border-fujin-default/60 hover:border-fujin-warning/60 group-hover:border-fujin-warning/60 focus-visible:ring-fujin-warning data-[state=checked]:bg-fujin-warning data-[state=checked]:border-fujin-warning data-[state=checked]:text-fujin-warning-foreground",
        danger: "border-fujin-default/60 hover:border-fujin-danger/60 group-hover:border-fujin-danger/60 focus-visible:ring-fujin-danger data-[state=checked]:bg-fujin-danger data-[state=checked]:border-fujin-danger data-[state=checked]:text-fujin-danger-foreground",
      },
      size: {
        sm: "size-4 [&_svg]:size-2.5",
        md: "size-5 [&_svg]:size-3.5",
        lg: "size-6 [&_svg]:size-4",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      color: "default",
      size: "md",
      radius: "md",
    },
  }
)

type CheckboxVariantProps = VariantProps<typeof checkboxVariants>;

type CheckboxBaseProps = Omit<
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  keyof CheckboxVariantProps
>;

export interface CheckboxProps
  extends CheckboxBaseProps,
    CheckboxVariantProps {
  label?: React.ReactNode
  description?: React.ReactNode
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, color, size, radius, label, description, disabled, children, ...props }, ref) => {
  const checkboxEl = (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot="checkbox"
      disabled={disabled}
      className={cn(checkboxVariants({ color, size, radius }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current animate-in zoom-in-50 duration-100"
      >
        <Check className="stroke-[3]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )

  if (label || description || children) {
    return (
      <label className={cn("inline-flex items-start gap-2.5 cursor-pointer select-none group", disabled && "opacity-50 cursor-not-allowed")}>
        <div className="flex items-center h-5.5 mt-0.5">
          {checkboxEl}
        </div>
        <div className="flex flex-col text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-150">
          {label || children}
          {description && <span className="text-xs text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-150 mt-0.5">{description}</span>}
        </div>
      </label>
    )
  }

  return checkboxEl
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
