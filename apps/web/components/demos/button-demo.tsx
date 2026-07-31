"use client"

import * as React from "react"
import { Button } from "@/registry/new-york/ui/button"
import { Mail } from "lucide-react"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="solid" color="primary">
        Primary Button
      </Button>
      <Button variant="bordered" color="secondary">
        Secondary Bordered
      </Button>
      <Button variant="flat" color="success">
        Success Flat
      </Button>
      <Button variant="ghost" color="danger">
        Danger Ghost
      </Button>
      <Button variant="shadow" color="warning">
        Warning Shadow
      </Button>
      <Button variant="solid" color="primary" isLoading>
        Loading
      </Button>
      <Button variant="solid" color="secondary" startContent={<Mail className="size-4" />}>
        With Icon
      </Button>
    </div>
  )
}
