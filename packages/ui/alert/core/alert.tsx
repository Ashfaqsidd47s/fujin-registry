import * as React from "react"
import { cn } from "@/lib/utils"
import { alertVariants } from "../shared/alert.variants"

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    color?: "default" | "primary" | "success" | "warning" | "danger" | "info"
  }
>(({ className, color, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ color }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight mb-1", className)}
    {...props}
  >
    {children}
  </h5>
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xs opacity-90 [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
