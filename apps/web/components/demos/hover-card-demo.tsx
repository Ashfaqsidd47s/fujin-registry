"use client"

import * as React from "react"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/registry/new-york/ui/hover-card"
import { CalendarDays } from "lucide-react"

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger className="underline cursor-pointer text-sm font-semibold">
        @nextjs
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Next.js</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The React Framework for the Web – second track animations included.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-[10px] text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
