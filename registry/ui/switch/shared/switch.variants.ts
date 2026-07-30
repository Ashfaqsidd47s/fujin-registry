import { cva } from "class-variance-authority"

export const switchVariants = cva(
  [
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

export const thumbVariants = cva(
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
