"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../shared/button.variants"
import { type ButtonProps } from "../shared/button.types"

function ButtonSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn("animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  )
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant,
  color,
  size,
  radius,
  isIconOnly,
  asChild = false,
  isLoading = false,
  loadingContent,
  startContent,
  endContent,
  children,
  disabled,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button"
  const spinnerSize = size === "sm" ? "size-3" : size === "lg" ? "size-5" : "size-4"

  return (
    <Comp
      ref={ref}
      data-slot="button"
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={cn(
        buttonVariants({ variant, size, color, radius, isIconOnly }),
        className
      )}
      {...props}
    >
      {asChild ? (
        children
      ) : isLoading ? (
        <>
          <ButtonSpinner className={spinnerSize} />
          {loadingContent ?? (!isIconOnly && children)}
        </>
      ) : (
        <>
          {startContent}
          {children}
          {endContent}
        </>
      )}
    </Comp>
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
