import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// ─── Spinner ──────────────────────────────────────────────────────────────────

function ButtonSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn("animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

// ─── Base ─────────────────────────────────────────────────────────────────────

const base = [
  // layout
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap",
  // typography
  "text-sm font-medium",
  // transitions & interaction
  "transition-[transform,opacity,box-shadow,background-color,border-color,color]",
  "duration-150 ease-out",
  "select-none cursor-pointer",
  // press scale — matches HeroUI's subtle press feedback
  "active:scale-[0.97]",
  // focus
  "outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  // disabled
  "disabled:pointer-events-none disabled:opacity-50",
  // icons
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
].join(" ")

// ─── CVA ─────────────────────────────────────────────────────────────────────

const buttonVariants = cva(base, {
  variants: {
    // ── Visual style ────────────────────────────────────────────
    variant: {
      solid:   "",
      color:  "",
      bordered: "",
      flat:    "",
      light:   "",
      faded:   "",
      shadow:  "",
      ghost:   "",
    },

    // ── Semantic color ──────────────────────────────────────────
    color: {
      default:   "",
      primary:   "",
      secondary: "",
      success:   "",
      warning:   "",
      danger:    "",
    },

    // ── Size ────────────────────────────────────────────────────
    size: {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
    },

    // ── Radius ──────────────────────────────────────────────────
    radius: {
      none: "rounded-none",
      sm:   "rounded-md",
      md:   "rounded-xl",
      lg:   "rounded-2xl",
      full: "rounded-full",
    },

    // ── Icon only ────────────────────────────────────────────────
    isIconOnly: {
      true: "",
      false: "",
    },
  },

  // ── Compound variants: style × color ────────────────────────────────────────
  compoundVariants: [
    // ────────────────────── SOLID ───────────────────────────────
    { variant: "solid", color: "default",
      className: "bg-fujin-default text-fujin-default-foreground hover:opacity-90 focus-visible:ring-fujin-default" },
    { variant: "solid", color: "primary",
      className: "bg-fujin-primary text-fujin-primary-foreground hover:opacity-90 focus-visible:ring-fujin-primary shadow-sm shadow-fujin-primary/30" },
    { variant: "solid", color: "secondary",
      className: "bg-fujin-secondary text-fujin-secondary-foreground hover:opacity-90 focus-visible:ring-fujin-secondary shadow-sm shadow-fujin-secondary/30" },
    { variant: "solid", color: "success",
      className: "bg-fujin-success text-fujin-success-foreground hover:opacity-90 focus-visible:ring-fujin-success shadow-sm shadow-fujin-success/30" },
    { variant: "solid", color: "warning",
      className: "bg-fujin-warning text-fujin-warning-foreground hover:opacity-90 focus-visible:ring-fujin-warning shadow-sm shadow-fujin-warning/30" },
    { variant: "solid", color: "danger",
      className: "bg-fujin-danger text-fujin-danger-foreground hover:opacity-90 focus-visible:ring-fujin-danger shadow-sm shadow-fujin-danger/30" },

    // ────────────────────── BORDERED ────────────────────────────
    { variant: "bordered", color: "default",
      className: "border-2 border-fujin-default bg-transparent text-fujin-default-foreground hover:bg-fujin-default/10 focus-visible:ring-fujin-default" },
    { variant: "bordered", color: "primary",
      className: "border-2 border-fujin-primary bg-transparent text-fujin-primary hover:bg-fujin-primary/10 focus-visible:ring-fujin-primary" },
    { variant: "bordered", color: "secondary",
      className: "border-2 border-fujin-secondary bg-transparent text-fujin-secondary hover:bg-fujin-secondary/10 focus-visible:ring-fujin-secondary" },
    { variant: "bordered", color: "success",
      className: "border-2 border-fujin-success bg-transparent text-fujin-success hover:bg-fujin-success/10 focus-visible:ring-fujin-success" },
    { variant: "bordered", color: "warning",
      className: "border-2 border-fujin-warning bg-transparent text-fujin-warning hover:bg-fujin-warning/10 focus-visible:ring-fujin-warning" },
    { variant: "bordered", color: "danger",
      className: "border-2 border-fujin-danger bg-transparent text-fujin-danger hover:bg-fujin-danger/10 focus-visible:ring-fujin-danger" },

    // ────────────────────── FLAT ─────────────────────────────────
    { variant: "flat", color: "default",
      className: "bg-fujin-default/20 text-fujin-default-foreground hover:bg-fujin-default/30 focus-visible:ring-fujin-default" },
    { variant: "flat", color: "primary",
      className: "bg-fujin-primary/15 text-fujin-primary hover:bg-fujin-primary/25 focus-visible:ring-fujin-primary" },
    { variant: "flat", color: "secondary",
      className: "bg-fujin-secondary/15 text-fujin-secondary hover:bg-fujin-secondary/25 focus-visible:ring-fujin-secondary" },
    { variant: "flat", color: "success",
      className: "bg-fujin-success/15 text-fujin-success hover:bg-fujin-success/25 focus-visible:ring-fujin-success" },
    { variant: "flat", color: "warning",
      className: "bg-fujin-warning/15 text-fujin-warning hover:bg-fujin-warning/25 focus-visible:ring-fujin-warning" },
    { variant: "flat", color: "danger",
      className: "bg-fujin-danger/15 text-fujin-danger hover:bg-fujin-danger/25 focus-visible:ring-fujin-danger" },

    // ────────────────────── LIGHT ────────────────────────────────
    { variant: "light", color: "default",
      className: "bg-transparent text-fujin-default-foreground hover:bg-fujin-default/20 focus-visible:ring-fujin-default" },
    { variant: "light", color: "primary",
      className: "bg-transparent text-fujin-primary hover:bg-fujin-primary/15 focus-visible:ring-fujin-primary" },
    { variant: "light", color: "secondary",
      className: "bg-transparent text-fujin-secondary hover:bg-fujin-secondary/15 focus-visible:ring-fujin-secondary" },
    { variant: "light", color: "success",
      className: "bg-transparent text-fujin-success hover:bg-fujin-success/15 focus-visible:ring-fujin-success" },
    { variant: "light", color: "warning",
      className: "bg-transparent text-fujin-warning hover:bg-fujin-warning/15 focus-visible:ring-fujin-warning" },
    { variant: "light", color: "danger",
      className: "bg-transparent text-fujin-danger hover:bg-fujin-danger/15 focus-visible:ring-fujin-danger" },

    // ────────────────────── FADED ────────────────────────────────
    { variant: "faded", color: "default",
      className: "border border-fujin-default/40 bg-fujin-default/10 text-fujin-default-foreground hover:bg-fujin-default/20 focus-visible:ring-fujin-default" },
    { variant: "faded", color: "primary",
      className: "border border-fujin-primary/30 bg-fujin-primary/10 text-fujin-primary hover:bg-fujin-primary/20 focus-visible:ring-fujin-primary" },
    { variant: "faded", color: "secondary",
      className: "border border-fujin-secondary/30 bg-fujin-secondary/10 text-fujin-secondary hover:bg-fujin-secondary/20 focus-visible:ring-fujin-secondary" },
    { variant: "faded", color: "success",
      className: "border border-fujin-success/30 bg-fujin-success/10 text-fujin-success hover:bg-fujin-success/20 focus-visible:ring-fujin-success" },
    { variant: "faded", color: "warning",
      className: "border border-fujin-warning/30 bg-fujin-warning/10 text-fujin-warning hover:bg-fujin-warning/20 focus-visible:ring-fujin-warning" },
    { variant: "faded", color: "danger",
      className: "border border-fujin-danger/30 bg-fujin-danger/10 text-fujin-danger hover:bg-fujin-danger/20 focus-visible:ring-fujin-danger" },

    // ────────────────────── SHADOW ───────────────────────────────
    { variant: "shadow", color: "default",
      className: "bg-fujin-default text-fujin-default-foreground shadow-lg shadow-fujin-default/50 hover:shadow-fujin-default/70 hover:opacity-90 focus-visible:ring-fujin-default" },
    { variant: "shadow", color: "primary",
      className: "bg-fujin-primary text-fujin-primary-foreground shadow-lg shadow-fujin-primary/50 hover:shadow-fujin-primary/70 hover:opacity-90 focus-visible:ring-fujin-primary" },
    { variant: "shadow", color: "secondary",
      className: "bg-fujin-secondary text-fujin-secondary-foreground shadow-lg shadow-fujin-secondary/50 hover:shadow-fujin-secondary/70 hover:opacity-90 focus-visible:ring-fujin-secondary" },
    { variant: "shadow", color: "success",
      className: "bg-fujin-success text-fujin-success-foreground shadow-lg shadow-fujin-success/50 hover:shadow-fujin-success/70 hover:opacity-90 focus-visible:ring-fujin-success" },
    { variant: "shadow", color: "warning",
      className: "bg-fujin-warning text-fujin-warning-foreground shadow-lg shadow-fujin-warning/50 hover:shadow-fujin-warning/70 hover:opacity-90 focus-visible:ring-fujin-warning" },
    { variant: "shadow", color: "danger",
      className: "bg-fujin-danger text-fujin-danger-foreground shadow-lg shadow-fujin-danger/50 hover:shadow-fujin-danger/70 hover:opacity-90 focus-visible:ring-fujin-danger" },

    // ────────────────────── GHOST ────────────────────────────────
    { variant: "ghost", color: "default",
      className: "border border-transparent bg-transparent text-fujin-default-foreground hover:border-fujin-default hover:bg-fujin-default/10 focus-visible:ring-fujin-default" },
    { variant: "ghost", color: "primary",
      className: "border border-transparent bg-transparent text-fujin-primary hover:border-fujin-primary hover:bg-fujin-primary/10 focus-visible:ring-fujin-primary" },
    { variant: "ghost", color: "secondary",
      className: "border border-transparent bg-transparent text-fujin-secondary hover:border-fujin-secondary hover:bg-fujin-secondary/10 focus-visible:ring-fujin-secondary" },
    { variant: "ghost", color: "success",
      className: "border border-transparent bg-transparent text-fujin-success hover:border-fujin-success hover:bg-fujin-success/10 focus-visible:ring-fujin-success" },
    { variant: "ghost", color: "warning",
      className: "border border-transparent bg-transparent text-fujin-warning hover:border-fujin-warning hover:bg-fujin-warning/10 focus-visible:ring-fujin-warning" },
    { variant: "ghost", color: "danger",
      className: "border border-transparent bg-transparent text-fujin-danger hover:border-fujin-danger hover:bg-fujin-danger/10 focus-visible:ring-fujin-danger" },

    // ────────────────────── ICON-ONLY sizes ──────────────────────
    { isIconOnly: true, size: "sm", className: "size-8 px-0" },
    { isIconOnly: true, size: "md", className: "size-10 px-0" },
    { isIconOnly: true, size: "lg", className: "size-12 px-0" },
  ],

  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "md",
    isIconOnly: false,
  },
})

// ─── Types ───────────────────────────────────────────────────────────────────

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonBaseProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonVariantProps
>;

export interface ButtonProps
  extends ButtonBaseProps,
    ButtonVariantProps {
  asChild?: boolean;
  isLoading?: boolean;
  loadingContent?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

// ─── Component ───────────────────────────────────────────────────────────────

function Button({
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
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  const spinnerSize = size === "sm" ? "size-3" : size === "lg" ? "size-5" : "size-4"

  return (
    <Comp
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
}

export { Button, buttonVariants }
