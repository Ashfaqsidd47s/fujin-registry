import { cva } from "class-variance-authority"

export const alertVariants = cva(
  "relative w-full rounded-2xl border p-4 flex gap-3 text-sm [&>svg]:size-5 [&>svg]:shrink-0",
  {
    variants: {
      color: {
        default: "bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200",
        primary: "bg-primary-50 dark:bg-primary-950/30 border-primary-200 dark:border-primary-900/50 text-primary-700 dark:text-primary-300",
        success: "bg-success-50 dark:bg-success-950/30 border-success-200 dark:border-success-900/50 text-success-700 dark:text-success-300",
        warning: "bg-warning-50 dark:bg-warning-950/30 border-warning-200 dark:border-warning-900/50 text-warning-700 dark:text-warning-300",
        danger: "bg-danger-50 dark:bg-danger-950/30 border-danger-200 dark:border-danger-900/50 text-danger-700 dark:text-danger-300",
        info: "bg-info-50 dark:bg-info-950/30 border-info-200 dark:border-info-900/50 text-info-700 dark:text-info-300",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
)
