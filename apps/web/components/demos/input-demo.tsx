"use client"

import * as React from "react"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Mail, ShieldAlert } from "lucide-react"

export function InputDemo() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="fullname">Full Name</Label>
        <Input id="fullname" type="text" placeholder="John Doe" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          startContent={<Mail className="size-4 text-muted-foreground" />}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="username" className="text-danger">Username</Label>
        <Input
          id="username"
          type="text"
          placeholder="johndoe"
          color="danger"
          startContent={<ShieldAlert className="size-4 text-danger" />}
        />
        <span className="text-xs text-danger">This username is already taken.</span>
      </div>
    </div>
  )
}
