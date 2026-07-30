import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties } from "react";

/**
 * The full set of CSS custom properties every fujin "surface" reads.
 * Any of these can be overridden per-instance via the `vars` prop below —
 * this is the escape hatch that makes the system fully customizable
 * without needing a new prop or variant for every possible tweak.
 */
export interface FujinSurfaceVars {
  tint?: string; // "255 255 255" (RGB channel triplet)
  opacity?: number;
  blur?: string; // "20px"
  saturation?: string; // "180%"
  borderTint?: string;
  borderOpacity?: number;
  highlightOpacity?: number;
  shadowColor?: string;
  shadowOpacity?: number;
  shadowBlur?: string;
  shadowY?: string;
  radius?: string;
}

const varMap: Record<keyof FujinSurfaceVars, string> = {
  tint: "--fujin-surface-tint",
  opacity: "--fujin-surface-opacity",
  blur: "--fujin-surface-blur",
  saturation: "--fujin-surface-saturation",
  borderTint: "--fujin-surface-border-tint",
  borderOpacity: "--fujin-surface-border-opacity",
  highlightOpacity: "--fujin-surface-highlight-opacity",
  shadowColor: "--fujin-surface-shadow-color",
  shadowOpacity: "--fujin-surface-shadow-opacity",
  shadowBlur: "--fujin-surface-shadow-blur",
  shadowY: "--fujin-surface-shadow-y",
  radius: "--fujin-radius",
};

/** Converts the friendly `vars` prop into a real inline style object. */
export function fujinSurfaceStyle(vars?: FujinSurfaceVars): CSSProperties {
  if (!vars) return {};
  const style: Record<string, string> = {};
  for (const key in vars) {
    const k = key as keyof FujinSurfaceVars;
    if (vars[k] !== undefined) {
      style[varMap[k]] = String(vars[k]);
    }
  }
  return style as CSSProperties;
}

/**
 * Preset "intensity" levels, for the common case where someone just wants
 * a lighter or heavier version of whatever style is active — without
 * having to know or set individual variables. Because these only ever
 * set the same --fujin-surface-* variables, they compose cleanly with
 * ANY current/future data-fujin-style (glass, neubrutal, aurora, ...).
 */
export const surfaceVariants = cva("fujin-surface", {
  variants: {
    intensity: {
      subtle: "[--fujin-surface-opacity:0.35] [--fujin-surface-blur:12px]",
      default: "",
      strong: "[--fujin-surface-opacity:0.75] [--fujin-surface-blur:28px]",
    },
    interactive: {
      true: "transition-transform duration-200 hover:-translate-y-0.5",
      false: "",
    },
  },
  defaultVariants: {
    intensity: "default",
    interactive: false,
  },
});

export type SurfaceVariantProps = VariantProps<typeof surfaceVariants>;