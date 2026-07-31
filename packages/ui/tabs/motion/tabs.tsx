"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { tabsListVariants, tabsTriggerVariants, tabsContentVariants } from "../shared/tabs.variants"
import {
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsContentProps,
} from "../shared/tabs.types"

interface TabsLayoutContextType {
  activeTab: string
  setActiveTab: (val: string) => void
  layoutId: string
}

const TabsLayoutContext = React.createContext<TabsLayoutContextType | null>(null)

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ defaultValue, value, onValueChange, ...props }, ref) => {
  const [activeTab, setActiveTab] = React.useState(value || defaultValue || "")
  const layoutId = React.useId()

  React.useEffect(() => {
    if (value !== undefined) {
      setActiveTab(value)
    }
  }, [value])

  const handleValueChange = React.useCallback(
    (val: string) => {
      setActiveTab(val)
      onValueChange?.(val)
    },
    [onValueChange]
  )

  const currentVal = value !== undefined ? value : activeTab

  return (
    <TabsLayoutContext.Provider value={{ activeTab: currentVal, setActiveTab: handleValueChange, layoutId }}>
      <TabsPrimitive.Root
        ref={ref}
        value={currentVal}
        onValueChange={handleValueChange}
        {...props}
      />
    </TabsLayoutContext.Provider>
  )
})
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants(), className)}
    {...props}
  />
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps & { value: string }
>(({ className, value, children, ...props }, ref) => {
  const context = React.useContext(TabsLayoutContext)
  const isActive = context?.activeTab === value

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      value={value}
      className={cn(
        tabsTriggerVariants(),
        "relative z-10 data-[state=active]:bg-transparent! data-[state=active]:shadow-none! cursor-pointer",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {isActive && context && (
        <motion.span
          layoutId={context.layoutId}
          className="absolute inset-0 z-0 rounded-md bg-background shadow-xs border border-border/10"
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        />
      )}
    </TabsPrimitive.Trigger>
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(tabsContentVariants(), className)}
    {...props}
  />
))
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
