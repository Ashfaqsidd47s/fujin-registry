"use client"

import * as React from "react"
import { Separator } from "@/registry/new-york/ui/separator"

export function SeparatorDemo() {
  return (
    <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold leading-none">Fujin CLI</h4>
        <p className="text-xs text-muted-foreground">
          An open-source feature-first registry CLI tool.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-xs">
        <div>Registry</div>
        <Separator orientation="vertical" />
        <div>UI track</div>
        <Separator orientation="vertical" />
        <div>Features</div>
      </div>
    </div>
  )
}
