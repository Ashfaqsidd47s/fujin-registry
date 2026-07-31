import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

export interface DialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  children?: React.ReactNode
}

export interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  children?: React.ReactNode
}
