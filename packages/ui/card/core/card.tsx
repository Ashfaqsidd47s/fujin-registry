import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  surfaceVariants,
  fujinSurfaceStyle,
  type SurfaceVariantProps,
  type FujinSurfaceVars,
} from "@/lib/fujin-variants"

// ─── Card CVA Variants ────────────────────────────────────────────────────────

const cardVariants = cva(
  [
    // Base layout
    "flex flex-col relative overflow-hidden transition-all duration-200 ease-out text-card-foreground",
  ],
  {
    variants: {
      // ── Semantic Prominence (HeroUI v3) ──────────────────────────
      variant: {
        default: "",
        transparent: "bg-transparent border-transparent shadow-none!",
        secondary: "bg-fujin-default/30 border-fujin-default/40",
        tertiary: "bg-fujin-default/50 border-fujin-default/60",
      },
      // ── Shadow Prominence ───────────────────────────────────────
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
      },
      // ── Card Radius ─────────────────────────────────────────────
      radius: {
        none: "rounded-none",
        sm: "rounded-md",
        md: "rounded-xl",
        lg: "rounded-2xl",
      },
      // ── Hover interaction zoom & shadow offset ──────────────────
      isHoverable: {
        true: "hover:-translate-y-1 hover:shadow-lg hover:border-border/80",
        false: "",
      },
      // ── Press interaction scaling effect ────────────────────────
      isPressable: {
        true: "cursor-pointer active:scale-[0.98] select-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      shadow: "md",
      radius: "md",
      isHoverable: false,
      isPressable: false,
    },
  }
)

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants>,
    SurfaceVariantProps {
  /** Escape hatch: override any individual glass/surface token for this instance only. */
  vars?: FujinSurfaceVars
}

// ─── Card Wrapper Component ──────────────────────────────────────────────────

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      shadow = "md",
      radius = "md",
      isHoverable = false,
      isPressable = false,
      intensity,
      interactive,
      vars,
      style,
      ...props
    },
    ref
  ) => {
    const isGlass = variant !== "transparent";

    // Convert card radius configuration to fujin surface variables
    const radiusVars = radius === "none"
      ? { "--fujin-radius": "0px" }
      : radius === "sm"
      ? { "--fujin-radius": "var(--radius-sm)" }
      : radius === "md"
      ? { "--fujin-radius": "var(--radius-md)" }
      : { "--fujin-radius": "var(--radius-lg)" };

    return (
      <div
        ref={ref}
        data-slot="card"
        className={cn(
          isGlass && surfaceVariants({ intensity, interactive: interactive ?? isHoverable }),
          cardVariants({ variant, shadow, radius, isHoverable, isPressable }),
          className
        )}
        style={{
          ...fujinSurfaceStyle(vars),
          ...radiusVars,
          ...style,
        } as React.CSSProperties}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

// ─── Card Subcomponents ──────────────────────────────────────────────────────

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 py-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-4",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold text-lg", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 pb-6 flex-grow", className)}
      {...props}
    />
  )
}

// CardFooterProps to export blur property
export interface CardFooterProps extends React.ComponentProps<"div"> {
  isFooterBlurred?: boolean
}

function CardFooter({ className, isFooterBlurred = false, ...props }: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-6 py-4 [.border-t]:pt-4",
        isFooterBlurred && "absolute bottom-0 left-0 right-0 w-full bg-background/55 backdrop-blur-md border-t border-border/30 z-10 py-3",
        className
      )}
      {...props}
    />
  )
}

// ─── HeroUI Compound type matching ───────────────────────────────────────────

type CardComponent = typeof Card & {
  Header: typeof CardHeader
  Title: typeof CardTitle
  Description: typeof CardDescription
  Action: typeof CardAction
  Content: typeof CardContent
  Footer: typeof CardFooter
}

const CardCompound = Card as CardComponent;
CardCompound.Header = CardHeader;
CardCompound.Title = CardTitle;
CardCompound.Description = CardDescription;
CardCompound.Action = CardAction;
CardCompound.Content = CardContent;
CardCompound.Footer = CardFooter;

export {
  CardCompound as Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}