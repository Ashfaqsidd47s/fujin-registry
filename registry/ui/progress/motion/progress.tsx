"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorClassName?: string
    children?: React.ReactNode
  }
>(({ className, value, indicatorClassName, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 border border-border/10",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator asChild>
      <motion.div
        className={cn(
          "h-full w-full flex-1 bg-primary",
          indicatorClassName
        )}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: (value || 0) / 100 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      />
    </ProgressPrimitive.Indicator>
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
