"use client"

import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitive.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitive.Viewport.displayName

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> & {
    color?: "default" | "primary" | "success" | "warning" | "danger"
    children?: React.ReactNode
  }
>(({ className, color = "default", ...props }, ref) => {
  const colorClasses = {
    default: "bg-background/85 border-border/80 text-foreground",
    primary: "bg-primary-50/90 border-primary-200 text-primary-900 dark:bg-primary-950/90 dark:border-primary-900 dark:text-primary-100",
    success: "bg-success-50/90 border-success-200 text-success-900 dark:bg-success-950/90 dark:border-success-900 dark:text-success-100",
    warning: "bg-warning-50/90 border-warning-200 text-warning-900 dark:bg-warning-950/90 dark:border-warning-900 dark:text-warning-100",
    danger: "bg-danger-50/90 border-danger-200 text-danger-900 dark:bg-danger-950/90 dark:border-danger-900 dark:text-danger-100",
  }

  return (
    <ToastPrimitive.Root
      ref={ref}
      className={cn(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-2xl border p-4 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full backdrop-blur-md",
        colorClasses[color || "default"],
        className
      )}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitive.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action> & {
    children?: React.ReactNode
  }
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-lg border bg-transparent px-3 text-xs font-semibold ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 hover:group-[.destructive]:border-destructive hover:group-[.destructive]:bg-destructive hover:group-[.destructive]:text-destructive-foreground focus:ring-destructive cursor-pointer",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastAction.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close> & {
    children?: React.ReactNode
  }
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 cursor-pointer",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitive.Close>
))
ToastClose.displayName = ToastPrimitive.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title> & {
    children?: React.ReactNode
  }
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitive.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description> & {
    children?: React.ReactNode
  }
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn("text-xs opacity-90 leading-relaxed", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitive.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

export * from "../shared/use-toast"
