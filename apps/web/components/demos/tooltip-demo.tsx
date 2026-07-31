"use client"

import * as React from "react"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/registry/new-york/ui/tooltip"
import { Button } from "@/registry/new-york/ui/button"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="bordered" size="sm">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
