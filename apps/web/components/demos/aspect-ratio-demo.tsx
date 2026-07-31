"use client"

import * as React from "react"
import Image from "next/image"
import { AspectRatio } from "@/registry/new-york/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <div className="w-[350px] overflow-hidden rounded-xl border border-border/80 shadow-md">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Scenic photo"
          fill
          className="object-cover"
        />
      </AspectRatio>
    </div>
  )
}
