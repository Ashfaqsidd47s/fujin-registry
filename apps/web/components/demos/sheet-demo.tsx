"use client"

import * as React from "react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/registry/new-york/ui/sheet"
import { Button } from "@/registry/new-york/ui/button"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="bordered" size="sm">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <p className="text-sm text-muted-foreground">Profile configurations go here.</p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="solid" color="primary" size="sm">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
