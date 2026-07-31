"use client"

import * as React from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/registry/new-york/ui/dialog"
import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="solid" color="primary" size="sm">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-1">
            <Label htmlFor="dialog-name">Name</Label>
            <Input id="dialog-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="dialog-username">Username</Label>
            <Input id="dialog-username" defaultValue="@peduarte" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" variant="solid" color="primary" size="sm">
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
