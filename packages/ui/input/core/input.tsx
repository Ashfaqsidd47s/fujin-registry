import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// ─── Variants ────────────────────────────────────────────────────────────────

const inputWrapperVariants = cva(
  [
    // Base layout & styles
    "group relative inline-flex w-full items-center min-w-0 transition-[background-color,border-color,box-shadow,color] duration-150 ease-out outline-hidden",
    // Disabled state
    "data-[disabled=true]:opacity-50 data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed",
    // Automatic helper class formatting for any SVG icon passed inside startContent / endContent
    "[&_svg]:pointer-events-none [&_svg]:size-4.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/75",
  ],
  {
    variants: {
      // ── Visual Style ────────────────────────────────────────────
      variant: {
        flat: "border-2 border-transparent",
        bordered: "border-2 bg-transparent",
        faded: "border-2",
        underlined: "border-b-2 bg-transparent rounded-none! border-x-transparent border-t-transparent",
      },

      // ── Semantic Color ──────────────────────────────────────────
      color: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        danger: "",
      },

      // ── Size ────────────────────────────────────────────────────
      size: {
        sm: "h-9 px-2.5 text-xs gap-2",
        md: "h-11 px-3 text-sm gap-2.5",
        lg: "h-13 px-4.5 text-base gap-3",
      },

      // ── Border Radius ───────────────────────────────────────────
      radius: {
        none: "rounded-none",
        sm: "rounded-md",
        md: "rounded-xl",
        lg: "rounded-2xl",
        full: "rounded-full",
      },
    },

    // ── Compound styles mapping Variant × Color ─────────────────
    compoundVariants: [
      // ────────────────────── FLAT ───────────────────────────────
      {
        variant: "flat",
        color: "default",
        className: "bg-fujin-default/40 hover:bg-fujin-default/60 focus-within:bg-fujin-default/30 focus-within:ring-2 focus-within:ring-fujin-default/50 text-foreground",
      },
      {
        variant: "flat",
        color: "primary",
        className: "bg-fujin-primary/10 hover:bg-fujin-primary/20 focus-within:bg-fujin-primary/5 focus-within:ring-2 focus-within:ring-fujin-primary/50 text-fujin-primary",
      },
      {
        variant: "flat",
        color: "secondary",
        className: "bg-fujin-secondary/10 hover:bg-fujin-secondary/20 focus-within:bg-fujin-secondary/5 focus-within:ring-2 focus-within:ring-fujin-secondary/50 text-fujin-secondary",
      },
      {
        variant: "flat",
        color: "success",
        className: "bg-fujin-success/10 hover:bg-fujin-success/20 focus-within:bg-fujin-success/5 focus-within:ring-2 focus-within:ring-fujin-success/50 text-fujin-success",
      },
      {
        variant: "flat",
        color: "warning",
        className: "bg-fujin-warning/10 hover:bg-fujin-warning/20 focus-within:bg-fujin-warning/5 focus-within:ring-2 focus-within:ring-fujin-warning/50 text-fujin-warning",
      },
      {
        variant: "flat",
        color: "danger",
        className: "bg-fujin-danger/10 hover:bg-fujin-danger/20 focus-within:bg-fujin-danger/5 focus-within:ring-2 focus-within:ring-fujin-danger/50 text-fujin-danger",
      },

      // ────────────────────── BORDERED ────────────────────────────
      {
        variant: "bordered",
        color: "default",
        className: "border-fujin-default/60 hover:border-fujin-default focus-within:border-fujin-default focus-within:ring-2 focus-within:ring-fujin-default/30 text-foreground",
      },
      {
        variant: "bordered",
        color: "primary",
        className: "border-fujin-default/60 hover:border-fujin-primary/60 focus-within:border-fujin-primary focus-within:ring-2 focus-within:ring-fujin-primary/30 text-fujin-primary",
      },
      {
        variant: "bordered",
        color: "secondary",
        className: "border-fujin-default/60 hover:border-fujin-secondary/60 focus-within:border-fujin-secondary focus-within:ring-2 focus-within:ring-fujin-secondary/30 text-fujin-secondary",
      },
      {
        variant: "bordered",
        color: "success",
        className: "border-fujin-default/60 hover:border-fujin-success/60 focus-within:border-fujin-success focus-within:ring-2 focus-within:ring-fujin-success/30 text-fujin-success",
      },
      {
        variant: "bordered",
        color: "warning",
        className: "border-fujin-default/60 hover:border-fujin-warning/60 focus-within:border-fujin-warning focus-within:ring-2 focus-within:ring-fujin-warning/30 text-fujin-warning",
      },
      {
        variant: "bordered",
        color: "danger",
        className: "border-fujin-default/60 hover:border-fujin-danger/60 focus-within:border-fujin-danger focus-within:ring-2 focus-within:ring-fujin-danger/30 text-fujin-danger",
      },

      // ────────────────────── FADED ───────────────────────────────
      {
        variant: "faded",
        color: "default",
        className: "bg-fujin-default/20 border-fujin-default/50 hover:bg-fujin-default/35 focus-within:bg-fujin-default/15 focus-within:border-fujin-default focus-within:ring-2 focus-within:ring-fujin-default/30 text-foreground",
      },
      {
        variant: "faded",
        color: "primary",
        className: "bg-fujin-default/20 border-fujin-default/50 hover:bg-fujin-default/35 hover:border-fujin-primary/60 focus-within:bg-fujin-default/15 focus-within:border-fujin-primary focus-within:ring-2 focus-within:ring-fujin-primary/30 text-fujin-primary",
      },
      {
        variant: "faded",
        color: "secondary",
        className: "bg-fujin-default/20 border-fujin-default/50 hover:bg-fujin-default/35 hover:border-fujin-secondary/60 focus-within:bg-fujin-default/15 focus-within:border-fujin-secondary focus-within:ring-2 focus-within:ring-fujin-secondary/30 text-fujin-secondary",
      },
      {
        variant: "faded",
        color: "success",
        className: "bg-fujin-default/20 border-fujin-default/50 hover:bg-fujin-default/35 hover:border-fujin-success/60 focus-within:bg-fujin-default/15 focus-within:border-fujin-success focus-within:ring-2 focus-within:ring-fujin-success/30 text-fujin-success",
      },
      {
        variant: "faded",
        color: "warning",
        className: "bg-fujin-default/20 border-fujin-default/50 hover:bg-fujin-default/35 hover:border-fujin-warning/60 focus-within:bg-fujin-default/15 focus-within:border-fujin-warning focus-within:ring-2 focus-within:ring-fujin-warning/30 text-fujin-warning",
      },
      {
        variant: "faded",
        color: "danger",
        className: "bg-fujin-default/20 border-fujin-default/50 hover:bg-fujin-default/35 hover:border-fujin-danger/60 focus-within:bg-fujin-default/15 focus-within:border-fujin-danger focus-within:ring-2 focus-within:ring-fujin-danger/30 text-fujin-danger",
      },

      // ────────────────────── UNDERLINED ────────────────────────────
      {
        variant: "underlined",
        color: "default",
        className: "border-b-fujin-default/60 hover:border-b-fujin-default focus-within:border-b-fujin-default !px-0 text-foreground",
      },
      {
        variant: "underlined",
        color: "primary",
        className: "border-b-fujin-default/60 hover:border-b-fujin-primary/60 focus-within:border-b-fujin-primary !px-0 text-fujin-primary",
      },
      {
        variant: "underlined",
        color: "secondary",
        className: "border-b-fujin-default/60 hover:border-b-fujin-secondary/60 focus-within:border-b-fujin-secondary !px-0 text-fujin-secondary",
      },
      {
        variant: "underlined",
        color: "success",
        className: "border-b-fujin-default/60 hover:border-b-fujin-success/60 focus-within:border-b-fujin-success !px-0 text-fujin-success",
      },
      {
        variant: "underlined",
        color: "warning",
        className: "border-b-fujin-default/60 hover:border-b-fujin-warning/60 focus-within:border-b-fujin-warning !px-0 text-fujin-warning",
      },
      {
        variant: "underlined",
        color: "danger",
        className: "border-b-fujin-default/60 hover:border-b-fujin-danger/60 focus-within:border-b-fujin-danger !px-0 text-fujin-danger",
      },
    ],

    defaultVariants: {
      variant: "flat",
      color: "default",
      size: "md",
      radius: "md",
    },
  }
)

// ─── Types ───────────────────────────────────────────────────────────────────

type InputVariantProps = VariantProps<typeof inputWrapperVariants>;

type InputBaseProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  keyof InputVariantProps | "children"
>;

export interface InputProps extends InputBaseProps, InputVariantProps {
  startContent?: React.ReactNode
  endContent?: React.ReactNode
  wrapperClassName?: string
}

// ─── Component ───────────────────────────────────────────────────────────────

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      wrapperClassName,
      variant,
      color,
      size,
      radius,
      startContent,
      endContent,
      disabled,
      type = "text",
      ...props
    },
    ref
  ) => {
    return (
      <div
        data-slot="input-wrapper"
        data-disabled={disabled}
        className={cn(
          inputWrapperVariants({ variant, color, size, radius }),
          wrapperClassName
        )}
      >
        {startContent}
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          data-slot="input"
          className={cn(
            // Reset base styles
            "w-full h-full bg-transparent outline-hidden border-none p-0 focus:ring-0 focus:outline-hidden",
            // Typography & default text formatting
            "text-foreground text-inherit placeholder:text-muted-foreground/50",
            // File input customization
            "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
            // Disabled input alignment
            "disabled:cursor-not-allowed disabled:pointer-events-none",
            className
          )}
          {...props}
        />
        {endContent}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input, inputWrapperVariants }