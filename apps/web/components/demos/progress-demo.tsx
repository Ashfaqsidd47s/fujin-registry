"use client"

import * as React from "react"
import { Progress } from "@/registry/new-york/ui/progress"

export function ProgressDemo() {
  const [value, setValue] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setValue(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={value} className="w-[60%] max-w-[300px]" />
}
