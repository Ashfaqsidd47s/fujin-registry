"use client"

import * as React from "react"
import { Alert, AlertTitle, AlertDescription } from "@/registry/new-york/ui/alert"
import { Terminal } from "lucide-react"

export function AlertDemo() {
  return (
    <Alert color="primary" className="max-w-[450px]">
      <Terminal className="h-4 w-4" />
      <div>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the fujin command line interface.
        </AlertDescription>
      </div>
    </Alert>
  )
}
