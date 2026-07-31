import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

export type AccordionProps = (
  | AccordionPrimitive.AccordionSingleProps
  | AccordionPrimitive.AccordionMultipleProps
) & {
  className?: string
  children?: React.ReactNode
}

export interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  children?: React.ReactNode
}

export interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  children?: React.ReactNode
}

export interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  children?: React.ReactNode
}
