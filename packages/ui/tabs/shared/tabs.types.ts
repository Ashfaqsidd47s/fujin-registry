import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

export interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  children?: React.ReactNode
}

export interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  children?: React.ReactNode
}

export interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  children?: React.ReactNode
}

export interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  children?: React.ReactNode
}
