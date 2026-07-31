"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { accordionVariants } from "../shared/accordion.variants"
import {
  type AccordionProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionContentProps,
} from "../shared/accordion.types"

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(accordionVariants(), className)}
    {...props}
  />
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border/50 py-1 last:border-b-0", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 px-2 text-sm font-semibold transition-all hover:text-primary text-left [&[data-state=open]>svg]:rotate-180 cursor-pointer select-none",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-[height] duration-300 ease-in-out"
      asChild
      {...props}
    >
      <motion.div
        layout
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
      >
        <div className={cn("pb-4 pt-1 px-2 text-foreground/80 leading-6", className)}>{children}</div>
      </motion.div>
    </AccordionPrimitive.Content>
  )
})
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
