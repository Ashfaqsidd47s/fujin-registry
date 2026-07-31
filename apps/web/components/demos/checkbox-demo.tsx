"use client"

import * as React from "react"
import { Checkbox } from "@/registry/new-york/ui/checkbox"

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox color="primary" defaultChecked label="Accept terms and conditions" />
      <Checkbox color="secondary" defaultChecked label="Subscribe to newsletter" />
      <Checkbox
        color="success"
        defaultChecked
        label="Enable cookies"
        description="We use cookies to improve your user experience."
      />
    </div>
  )
}
