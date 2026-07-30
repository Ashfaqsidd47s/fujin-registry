import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { buttonVariants } from "./button.variants"

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonBaseProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  keyof ButtonVariantProps
>;

export interface ButtonProps
  extends ButtonBaseProps,
    ButtonVariantProps {
  asChild?: boolean;
  isLoading?: boolean;
  loadingContent?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}
