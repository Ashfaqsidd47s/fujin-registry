"use client"

import * as React from "react"
import { Badge } from "@/registry/new-york/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge color="default" variant="solid">Default</Badge>
      <Badge color="primary" variant="solid">Primary</Badge>
      <Badge color="secondary" variant="bordered">Secondary</Badge>
      <Badge color="success" variant="flat">Success</Badge>
      <Badge color="warning" variant="faded">Warning</Badge>
      <Badge color="danger" variant="shadow">Danger</Badge>
    </div>
  )
}
