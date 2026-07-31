"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/registry/new-york/ui/card"
import { Button } from "@/registry/new-york/ui/button"

export function CardDemo() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground/80">
            This card is styled with glassmorphism effects and custom border rendering. You can place any content here.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-border/40">
          <Button variant="light" color="default" size="sm">Cancel</Button>
          <Button variant="solid" color="primary" size="sm">Deploy</Button>
        </CardFooter>
      </Card>

      <Card className="w-[350px]" isHoverable variant="secondary">
        <CardHeader>
          <CardTitle>Hoverable Card</CardTitle>
          <CardDescription>Hover over me to see scaling and shadow depth.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground/80">
            This secondary prominence card has interactive scale changes built-in.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end border-t border-border/40">
          <Button variant="flat" color="secondary" size="sm">Read More</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
