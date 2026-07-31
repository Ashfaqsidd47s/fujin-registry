"use client"

import * as React from "react"
import { Label } from "@/registry/new-york/ui/label"
import { Input } from "@/registry/new-york/ui/input"

export function LabelDemo() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <Label htmlFor="email-input">Email Address</Label>
      <Input id="email-input" type="email" placeholder="you@example.com" />
    </div>
  )
}
