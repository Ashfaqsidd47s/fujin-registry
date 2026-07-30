import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { type VariantProps } from "class-variance-authority"
import { switchVariants } from "./switch.variants"

export type SwitchVariantProps = VariantProps<typeof switchVariants>;

export type SwitchBaseProps = Omit<
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
  keyof SwitchVariantProps
>;

export interface SwitchProps
  extends SwitchBaseProps,
    SwitchVariantProps {
  label?: React.ReactNode
  description?: React.ReactNode
}
