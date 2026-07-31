"use client"

import * as React from "react"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/registry/new-york/ui/drawer"
import { Button } from "@/registry/new-york/ui/button"

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="bordered" size="sm">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="max-w-[450px] mx-auto">
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0 flex flex-col items-center">
          <span className="text-5xl font-bold tracking-tighter">350</span>
          <span className="text-[0.70rem] uppercase text-muted-foreground mt-1">
            calories/day
          </span>
        </div>
        <DrawerFooter>
          <Button variant="solid" color="primary" size="sm">Submit</Button>
          <DrawerClose asChild>
            <Button variant="bordered" size="sm">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
