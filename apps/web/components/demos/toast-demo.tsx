"use client"

import * as React from "react"
import { useToast } from "@/registry/new-york/ui/toast"
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from "@/registry/new-york/ui/toast"
import { Button } from "@/registry/new-york/ui/button"

export function ToastDemo() {
  const { toast, toasts } = useToast()

  return (
    <ToastProvider>
      <Button
        variant="bordered"
        size="sm"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Undo" className="cursor-pointer">
                Undo
              </ToastAction>
            ),
          })
        }}
      >
        Add Toast
      </Button>

      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
