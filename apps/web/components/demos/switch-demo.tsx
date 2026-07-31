"use client"

import * as React from "react"
import { Switch } from "@/registry/new-york/ui/switch"

export function SwitchDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Switch color="primary" defaultChecked label="Primary Switch" />
        <Switch color="secondary" defaultChecked label="Secondary Switch" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Switch
          color="success"
          defaultChecked
          label="Notifications"
          description="Receive push notifications when changes occur."
        />
      </div>
    </div>
  )
}
