import { cva } from "class-variance-authority"

export const tabsListVariants = cva(
  "inline-flex h-10 items-center justify-center rounded-xl bg-muted p-1 text-muted-foreground border border-border/40"
)

export const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm cursor-pointer select-none"
)

export const tabsContentVariants = cva(
  "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
)
