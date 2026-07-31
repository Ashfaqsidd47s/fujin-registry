"use client"

import * as React from "react"
import { Textarea } from "@/registry/new-york/ui/textarea"
import { Label } from "@/registry/new-york/ui/label"

export function TextareaDemo() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" placeholder="Enter your project description..." />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="feedback">Feedback</Label>
        <Textarea
          id="feedback"
          placeholder="We value your feedback..."
          color="primary"
          rows={4}
        />
      </div>
    </div>
  )
}
