"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, Copy } from "lucide-react"

// =========================================================================
// ── COPY BUTTON ──────────────────────────────────────────────────────────
// =========================================================================
export function CopyButton({ value, className, ...props }: { value: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [hasCopied])

  return (
    <button
      className={cn(
        "relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/80 bg-background text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value)
          setHasCopied(true)
        } catch (err) {
          console.error("Failed to copy text: ", err)
        }
      }}
      type="button"
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <Check className="h-3.5 w-3.5 text-success" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  )
}

// =========================================================================
// ── CUSTOM TABS SYSTEM (PURE REACT) ──────────────────────────────────────
// =========================================================================
interface TabsContextType {
  value: string
  onValueChange: (val: string) => void
}

const TabsContext = React.createContext<TabsContextType | null>(null)

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props
}: {
  defaultValue?: string
  value?: string
  onValueChange?: (val: string) => void
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
  const [activeTab, setActiveTab] = React.useState(value || defaultValue || "")

  const onTabChange = React.useCallback(
    (val: string) => {
      if (onValueChange) {
        onValueChange(val)
      } else {
        setActiveTab(val)
      }
    },
    [onValueChange]
  )

  const currentVal = value !== undefined ? value : activeTab

  return (
    <TabsContext.Provider value={{ value: currentVal, onValueChange: onTabChange }}>
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground border border-border/40",
        className
      )}
      {...props}
    />
  )
}

export function TabsTrigger({
  value,
  className,
  children,
  ...props
}: { value: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error("TabsTrigger must be used inside Tabs")

  const isActive = context.value === value

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-xs font-semibold ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
        isActive
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:bg-muted-hover hover:text-foreground",
        className
      )}
      onClick={() => context.onValueChange(value)}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}

export function TabsContent({
  value,
  className,
  children,
  ...props
}: { value: string } & React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error("TabsContent must be used inside Tabs")

  const isActive = context.value === value
  if (!isActive) return null

  return (
    <div
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// CodeTabs is simply a styled wrapper around Tabs
export function CodeTabs({ children, className, ...props }: React.ComponentProps<typeof Tabs>) {
  return (
    <Tabs defaultValue="cli" className={cn("relative mr-auto w-full", className)} {...props}>
      {children}
    </Tabs>
  )
}

// =========================================================================
// ── STEPS & STEP TIMELINE ────────────────────────────────────────────────
// =========================================================================
export function Steps({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "steps mb-12 ml-4 border-l border-border/80 pl-8 [counter-reset:step] relative space-y-8",
        className
      )}
      {...props}
    />
  )
}

export function Step({ className, children, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-base font-semibold tracking-tight relative before:content-[counter(step)] before:counter-increment-[step] before:absolute before:left-[-49px] before:flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:border before:border-border/80 before:bg-background before:text-center before:text-xs before:font-bold before:text-muted-foreground before:shadow-xs",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}
