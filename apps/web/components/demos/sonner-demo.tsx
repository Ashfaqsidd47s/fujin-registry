"use client"

import * as React from "react"
import { Toaster, toast } from "@/registry/new-york/ui/sonner"
import { Button } from "@/registry/new-york/ui/button"

export function SonnerDemo() {
  return (
    <div>
      <Toaster />
      <Button
        variant="bordered"
        size="sm"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </div>
  )
}
