import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-colors select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        solid: "",
        bordered: "border-2 bg-transparent",
        flat: "",
        faded: "border",
        shadow: "",
        ghost: "border border-transparent bg-transparent",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        danger: "",
      },
      size: {
        sm: "h-6 px-2 text-[10px] gap-1",
        md: "h-7 px-2.5 text-xs gap-1.5",
        lg: "h-8 px-3 text-sm gap-2",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-md",
        md: "rounded-lg",
        lg: "rounded-xl",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      // SOLID
      { variant: "solid", color: "default", className: "bg-fujin-default text-fujin-default-foreground" },
      { variant: "solid", color: "primary", className: "bg-fujin-primary text-fujin-primary-foreground shadow-sm shadow-fujin-primary/20" },
      { variant: "solid", color: "secondary", className: "bg-fujin-secondary text-fujin-secondary-foreground shadow-sm shadow-fujin-secondary/20" },
      { variant: "solid", color: "success", className: "bg-fujin-success text-fujin-success-foreground shadow-sm shadow-fujin-success/20" },
      { variant: "solid", color: "warning", className: "bg-fujin-warning text-fujin-warning-foreground shadow-sm shadow-fujin-warning/20" },
      { variant: "solid", color: "danger", className: "bg-fujin-danger text-fujin-danger-foreground shadow-sm shadow-fujin-danger/20" },
      // BORDERED
      { variant: "bordered", color: "default", className: "border-fujin-default text-fujin-default-foreground" },
      { variant: "bordered", color: "primary", className: "border-fujin-primary text-fujin-primary" },
      { variant: "bordered", color: "secondary", className: "border-fujin-secondary text-fujin-secondary" },
      { variant: "bordered", color: "success", className: "border-fujin-success text-fujin-success" },
      { variant: "bordered", color: "warning", className: "border-fujin-warning text-fujin-warning" },
      { variant: "bordered", color: "danger", className: "border-fujin-danger text-fujin-danger" },
      // FLAT
      { variant: "flat", color: "default", className: "bg-fujin-default/30 text-fujin-default-foreground" },
      { variant: "flat", color: "primary", className: "bg-fujin-primary/15 text-fujin-primary" },
      { variant: "flat", color: "secondary", className: "bg-fujin-secondary/15 text-fujin-secondary" },
      { variant: "flat", color: "success", className: "bg-fujin-success/15 text-fujin-success" },
      { variant: "flat", color: "warning", className: "bg-fujin-warning/15 text-fujin-warning" },
      { variant: "flat", color: "danger", className: "bg-fujin-danger/15 text-fujin-danger" },
      // FADED
      { variant: "faded", color: "default", className: "border-fujin-default/50 bg-fujin-default/10 text-fujin-default-foreground" },
      { variant: "faded", color: "primary", className: "border-fujin-primary/30 bg-fujin-primary/10 text-fujin-primary" },
      { variant: "faded", color: "secondary", className: "border-fujin-secondary/30 bg-fujin-secondary/10 text-fujin-secondary" },
      { variant: "faded", color: "success", className: "border-fujin-success/30 bg-fujin-success/10 text-fujin-success" },
      { variant: "faded", color: "warning", className: "border-fujin-warning/30 bg-fujin-warning/10 text-fujin-warning" },
      { variant: "faded", color: "danger", className: "border-fujin-danger/30 bg-fujin-danger/10 text-fujin-danger" },
      // SHADOW
      { variant: "shadow", color: "default", className: "bg-fujin-default text-fujin-default-foreground shadow-md shadow-fujin-default/40" },
      { variant: "shadow", color: "primary", className: "bg-fujin-primary text-fujin-primary-foreground shadow-md shadow-fujin-primary/40" },
      { variant: "shadow", color: "secondary", className: "bg-fujin-secondary text-fujin-secondary-foreground shadow-md shadow-fujin-secondary/40" },
      { variant: "shadow", color: "success", className: "bg-fujin-success text-fujin-success-foreground shadow-md shadow-fujin-success/40" },
      { variant: "shadow", color: "warning", className: "bg-fujin-warning text-fujin-warning-foreground shadow-md shadow-fujin-warning/40" },
      { variant: "shadow", color: "danger", className: "bg-fujin-danger text-fujin-danger-foreground shadow-md shadow-fujin-danger/40" },
      // GHOST
      { variant: "ghost", color: "default", className: "text-fujin-default-foreground hover:bg-fujin-default/10 hover:border-fujin-default" },
      { variant: "ghost", color: "primary", className: "text-fujin-primary hover:bg-fujin-primary/10 hover:border-fujin-primary" },
      { variant: "ghost", color: "secondary", className: "text-fujin-secondary hover:bg-fujin-secondary/10 hover:border-fujin-secondary" },
      { variant: "ghost", color: "success", className: "text-fujin-success hover:bg-fujin-success/10 hover:border-fujin-success" },
      { variant: "ghost", color: "warning", className: "text-fujin-warning hover:bg-fujin-warning/10 hover:border-fujin-warning" },
      { variant: "ghost", color: "danger", className: "text-fujin-danger hover:bg-fujin-danger/10 hover:border-fujin-danger" },
    ],
    defaultVariants: {
      variant: "solid",
      color: "default",
      size: "md",
      radius: "full",
    },
  }
)

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

type BadgeBaseProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  keyof BadgeVariantProps
>;

export interface BadgeProps extends BadgeBaseProps, BadgeVariantProps {
  children?: React.ReactNode
  startContent?: React.ReactNode
  endContent?: React.ReactNode
  onClose?: () => void
}

function Badge({
  className,
  variant,
  color,
  size,
  radius,
  startContent,
  endContent,
  onClose,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, color, size, radius }), className)}
      {...props}
    >
      {startContent}
      {children}
      {endContent}
      {onClose && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="ml-1 cursor-pointer outline-none hover:opacity-75 select-none rounded-full p-0.5"
          aria-label="Remove"
        >
          <X className="size-3" />
        </button>
      )}
    </div>
  )
}

export { Badge, badgeVariants }
