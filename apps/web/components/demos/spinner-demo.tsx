"use client"

import * as React from "react"
import { Spinner } from "@/registry/new-york/ui/spinner"

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  )
}
