"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/registry/ui/button/core/button"
import { Input } from "@/registry/ui/input/core/input"
import { Card } from "@/registry/ui/card/core/card"
import { Textarea } from "@/registry/ui/textarea/core/textarea"
import { Badge, type BadgeProps } from "@/registry/ui/badge/core/badge"
import { Checkbox } from "@/registry/ui/checkbox/core/checkbox"
import { Switch } from "@/registry/ui/switch/core/switch"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import {
  Sparkles,
  ArrowRight,
  Download,
  Trash2,
  Heart,
  Bell,
  Search,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  DollarSign,
} from "lucide-react"

// This page displays items from the custom registry.
const COLORS = ["default", "primary", "secondary", "success", "warning", "danger"] as const
const VARIANTS = ["solid", "bordered", "flat", "light", "faded", "shadow", "ghost"] as const
const INPUT_VARIANTS = ["flat", "bordered", "faded", "underlined"] as const
const SIZES = ["sm", "md", "lg"] as const
const RADII = ["none", "sm", "md", "lg", "full"] as const

function Section({
  title,
  description,
  name,
  children,
}: {
  title: string
  description: string
  name?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 border border-border/80 rounded-lg p-5 relative bg-card text-card-foreground shadow-xs">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        {name && <OpenInV0Button name={name} className="w-fit" />}
      </div>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  )
}

export default function Home() {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className="max-w-4xl mx-auto flex flex-col min-h-svh px-4 py-12 gap-10">
      <header className="flex flex-col gap-1.5 border-b pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fujin-primary to-fujin-secondary">
          Fujin Registry
        </h1>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-muted-foreground">
            Beautiful, high-fidelity, HeroUI-inspired components tailored for shadcn/ui.
          </p>
          <Button size="sm" variant="flat" color="primary" asChild>
            <Link href="/docs/introduction" className="flex items-center gap-1">
              View Documentation <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex flex-col flex-1 gap-10">
        {/* ========================================================================= */}
        {/* ── BUTTON COMPONENT SHOWCASE ────────────────────────────────────────── */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold tracking-tight text-foreground">Button Showcase</h2>
            <p className="text-xs text-muted-foreground">Variants, colors, sizes, and states for Button</p>
          </div>

          <Section
            title="Button — Variants × Colors"
            description="7 visual styles × 6 semantic colors"
            name="button"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr>
                    <th className="pr-4 pb-2 text-muted-foreground font-medium">variant ↓  color →</th>
                    {COLORS.map(c => (
                      <th key={c} className="pb-2 pr-3 text-muted-foreground font-medium capitalize">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {VARIANTS.map(v => (
                    <tr key={v}>
                      <td className="pr-4 py-2 text-muted-foreground font-medium">{v}</td>
                      {COLORS.map(c => (
                        <td key={c} className="py-2 pr-3">
                          <Button variant={v} color={c} size="sm" radius="md">
                            {c}
                          </Button>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Button — Sizes" description="sm / md / lg across solid + bordered">
            <div className="flex flex-wrap items-center gap-3">
              {SIZES.map(s => (
                <Button key={s} variant="solid" color="primary" size={s}>
                  Size {s}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {SIZES.map(s => (
                <Button key={s} variant="bordered" color="primary" size={s}>
                  Size {s}
                </Button>
              ))}
            </div>
          </Section>

          <Section title="Button — Radius" description="none / sm / md / lg / full">
            <div className="flex flex-wrap items-center gap-3">
              {RADII.map(r => (
                <Button key={r} variant="solid" color="primary" size="md" radius={r}>
                  Radius {r}
                </Button>
              ))}
            </div>
          </Section>

          <Section title="Button — With Icons" description="startContent, endContent, icon-only">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="solid" color="primary" startContent={<Sparkles />}>
                Get Started
              </Button>
              <Button variant="bordered" color="primary" endContent={<ArrowRight />}>
                Learn more
              </Button>
              <Button variant="flat" color="success" startContent={<Download />}>
                Download
              </Button>
              <Button variant="shadow" color="danger" startContent={<Trash2 />}>
                Delete
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {COLORS.map(c => (
                <Button key={c} variant="flat" color={c} size="md" radius="full" isIconOnly>
                  <Heart />
                </Button>
              ))}
              {COLORS.map(c => (
                <Button key={c} variant="solid" color={c} size="md" radius="full" isIconOnly>
                  <Bell />
                </Button>
              ))}
            </div>
          </Section>

          <Section title="Button — Loading" description="isLoading spinner with optional loadingContent">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="solid" color="primary" isLoading>
                Save changes
              </Button>
              <Button variant="bordered" color="secondary" isLoading loadingContent="Processing…">
                Submit
              </Button>
              <Button variant="flat" color="success" isLoading isIconOnly radius="full" />
              <Button variant="solid" color="danger" isLoading loadingContent="Deleting…">
                Delete
              </Button>
            </div>
          </Section>

          <Section title="Button — Disabled" description="Consistent disabled state across all variants">
            <div className="flex flex-wrap items-center gap-3">
              {VARIANTS.map(v => (
                <Button key={v} variant={v} color="primary" disabled>
                  {v}
                </Button>
              ))}
            </div>
          </Section>

          <Section title="Button — Shadow Variant" description="Glowing colored shadow on hover">
            <div className="flex flex-wrap items-center gap-4">
              {COLORS.map(c => (
                <Button key={c} variant="shadow" color={c} radius="full">
                  {c}
                </Button>
              ))}
            </div>
          </Section>
        </div>

        {/* ========================================================================= */}
        {/* ── INPUT COMPONENT SHOWCASE ─────────────────────────────────────────── */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-6 border-t pt-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold tracking-tight text-foreground">Input Showcase</h2>
            <p className="text-xs text-muted-foreground">Variants, colors, sizes, and content layouts for Input</p>
          </div>

          {/* ── Variants × Colors Grid ────────────────────────────────────────── */}
          <Section
            title="Input — Variants × Colors"
            description="Flat, Bordered, Faded, and Underlined styles across semantic themes"
            name="input"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {INPUT_VARIANTS.map(v => (
                <div key={v} className="flex flex-col gap-4 border border-dashed rounded-lg p-4 bg-muted/20">
                  <h3 className="text-xs font-semibold capitalize text-muted-foreground">
                    {v} Variant
                  </h3>
                  <div className="flex flex-col gap-3">
                    {COLORS.map(c => (
                      <div key={c} className="flex flex-col gap-1">
                        <label className="text-[10px] uppercase font-bold text-muted-foreground/80 tracking-wider">
                          {c}
                        </label>
                        <Input
                          variant={v}
                          color={c}
                          placeholder={`Enter standard ${c} text...`}
                          defaultValue={c !== "default" ? `Pre-filled ${c}` : ""}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Sizes & Radii Showcase ───────────────────────────────────────── */}
          <Section title="Input — Sizes & Radii" description="Adjust dimensions and rounded borders">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-semibold text-muted-foreground">Sizes (sm / md / lg)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {SIZES.map(s => (
                    <Input
                      key={s}
                      size={s}
                      variant="bordered"
                      color="primary"
                      placeholder={`Size ${s}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t pt-4">
                <h4 className="text-xs font-semibold text-muted-foreground">Radii (none / sm / md / lg / full)</h4>
                <div className="flex flex-col gap-3">
                  {RADII.map(r => (
                    <Input
                      key={r}
                      radius={r}
                      variant="flat"
                      placeholder={`Radius ${r}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* ── Content Slots & States ────────────────────────────────────────── */}
          <Section
            title="Input — Content Slots & States"
            description="Start icons, end helpers, actions, and custom disabled/error alignments"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-muted-foreground">Icon Slots (startContent & endContent)</h4>
                
                <div className="flex flex-col gap-3">
                  {/* Search Input */}
                  <Input
                    variant="flat"
                    placeholder="Search components..."
                    startContent={<Search className="text-muted-foreground" />}
                  />

                  {/* Mail Suffix Input */}
                  <Input
                    variant="bordered"
                    placeholder="username"
                    startContent={<Mail />}
                    endContent={<span className="text-xs text-muted-foreground font-medium select-none">@gmail.com</span>}
                  />

                  {/* Pricing Input */}
                  <Input
                    variant="faded"
                    placeholder="0.00"
                    startContent={<DollarSign />}
                    endContent={<span className="text-xs text-muted-foreground font-bold select-none">USD</span>}
                  />

                  {/* Interactive Password Toggle */}
                  <div className="flex flex-col gap-1">
                    <Input
                      variant="flat"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter secret passphrase"
                      startContent={<Lock />}
                      endContent={
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="hover:opacity-80 transition-opacity cursor-pointer p-0.5 text-muted-foreground"
                          title={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff className="size-4.5" /> : <Eye className="size-4.5" />}
                        </button>
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-muted-foreground">Interactive States</h4>

                <div className="flex flex-col gap-3">
                  {/* Disabled input state */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase font-bold text-muted-foreground">
                      Disabled State
                    </label>
                    <Input
                      disabled
                      variant="flat"
                      defaultValue="This content cannot be edited"
                      startContent={<User />}
                    />
                  </div>

                  {/* Underlined state with icons */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase font-bold text-muted-foreground">
                      Underlined with Start Icon
                    </label>
                    <Input
                      variant="underlined"
                      color="primary"
                      placeholder="Type something..."
                      startContent={<Sparkles />}
                    />
                  </div>

                  {/* Validation Error Showcase using standard aria-invalid */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase font-bold text-red-500">
                      Validation Error (using danger color)
                    </label>
                    <Input
                      variant="bordered"
                      color="danger"
                      defaultValue="invalid-email-address"
                      startContent={<Mail className="text-red-500" />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ========================================================================= */}
        {/* ── CARD COMPONENT SHOWCASE ──────────────────────────────────────────── */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-6 border-t pt-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold tracking-tight text-foreground">Card Showcase</h2>
            <p className="text-xs text-muted-foreground">Variants, shadow levels, border radius, interactive modes, and blurred footers</p>
          </div>

          {/* ── Semantic Variants Showcase ────────────────────────────────────── */}
          <Section
            title="Card — Semantic Variants (HeroUI v3)"
            description="Composing layout with compound subcomponents under default, transparent, secondary, and tertiary backings"
            name="card"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Card variant="default">
                <Card.Header>
                  <Card.Title>Default</Card.Title>
                  <Card.Description>Standard Glass surface</Card.Description>
                </Card.Header>
                <Card.Content className="text-xs text-muted-foreground">
                  The default card inherits fujin&apos;s glassmorphism style rules with custom backdrop filters.
                </Card.Content>
                <Card.Footer className="text-[10px] text-muted-foreground font-semibold">
                  Active default card
                </Card.Footer>
              </Card>

              <Card variant="transparent">
                <Card.Header>
                  <Card.Title>Transparent</Card.Title>
                  <Card.Description>No background or border</Card.Description>
                </Card.Header>
                <Card.Content className="text-xs text-muted-foreground">
                  This variant is ideal for nesting cards inside other surfaces without cluttering borders.
                </Card.Content>
                <Card.Footer className="text-[10px] text-muted-foreground font-semibold">
                  Border-free card
                </Card.Footer>
              </Card>

              <Card variant="secondary">
                <Card.Header>
                  <Card.Title>Secondary</Card.Title>
                  <Card.Description>Medium prominence</Card.Description>
                </Card.Header>
                <Card.Content className="text-xs text-muted-foreground">
                  Applies a subtle default tint color over the surface structure for contrast.
                </Card.Content>
                <Card.Footer className="text-[10px] text-muted-foreground font-semibold">
                  Tainted surface backing
                </Card.Footer>
              </Card>

              <Card variant="tertiary">
                <Card.Header>
                  <Card.Title>Tertiary</Card.Title>
                  <Card.Description>Higher prominence</Card.Description>
                </Card.Header>
                <Card.Content className="text-xs text-muted-foreground">
                  Applies a stronger, more visible tint layer to highlight specific featured content blocks.
                </Card.Content>
                <Card.Footer className="text-[10px] text-muted-foreground font-semibold">
                  Strong contrasted surface
                </Card.Footer>
              </Card>
            </div>
          </Section>

          {/* ── Interactive & States Showcase ─────────────────────────────────── */}
          <Section
            title="Card — Interactions & Customizations"
            description="Hover lifts, active scale presses, shadow selections, and border radius overrides"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-muted-foreground">Interactivity (Hoverable & Pressable)</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Hoverable Card */}
                  <Card isHoverable className="h-40">
                    <Card.Header>
                      <Card.Title className="text-base">Hover Me</Card.Title>
                    </Card.Header>
                    <Card.Content className="text-xs text-muted-foreground">
                      This card transitions and lifts up on hover (`isHoverable`).
                    </Card.Content>
                  </Card>

                  {/* Pressable Card */}
                  <Card isPressable className="h-40">
                    <Card.Header>
                      <Card.Title className="text-base">Press Me</Card.Title>
                    </Card.Header>
                    <Card.Content className="text-xs text-muted-foreground">
                      This card responds with a shrink scaling animation on click (`isPressable`).
                    </Card.Content>
                  </Card>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-muted-foreground">Custom Shadows & Radii</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card shadow="lg" radius="lg">
                    <Card.Header>
                      <Card.Title className="text-base">Large Shadow & Radius</Card.Title>
                    </Card.Header>
                    <Card.Content className="text-xs text-muted-foreground">
                      config: shadow: lg, radius: lg
                    </Card.Content>
                  </Card>

                  <Card shadow="none" radius="none" variant="secondary">
                    <Card.Header>
                      <Card.Title className="text-base">No Shadow / Border Radius</Card.Title>
                    </Card.Header>
                    <Card.Content className="text-xs text-muted-foreground">
                      config: shadow: none, radius: none
                    </Card.Content>
                  </Card>
                </div>
              </div>
            </div>
          </Section>

          {/* ── Premium Blurred Footer Overlay ────────────────────────────────── */}
          <Section
            title="Card — Blurred Footer Overlay"
            description="HeroUI-inspired absolute positioned footer overlaying card backgrounds with high-fidelity glass refraction"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 - Primary Gradient Background */}
              <Card className="h-72 relative border-none overflow-hidden" radius="lg" shadow="lg">
                {/* Simulated high-quality background container */}
                <div className="absolute inset-0 bg-gradient-to-tr from-fujin-primary/80 via-fujin-secondary/70 to-fujin-success/80 flex items-center justify-center p-6 pb-20">
                  <div className="text-center text-white">
                    <Sparkles className="size-10 mx-auto mb-2 animate-bounce text-yellow-300" />
                    <h3 className="font-extrabold text-xl tracking-tight">Explore the Fujin UI</h3>
                    <p className="text-xs text-white/80 mt-1 max-w-xs">High-end components designed to make your web applications shine.</p>
                  </div>
                </div>

                <Card.Footer isFooterBlurred className="flex justify-between items-center text-white">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-white/70 tracking-wider">Available Now</span>
                    <span className="text-sm font-semibold text-white">Fujin Glass V1</span>
                  </div>
                  <Button size="sm" color="success" radius="full" className="shadow-xs bg-white text-emerald-700 hover:bg-emerald-50 border-none font-bold">
                    Learn More
                  </Button>
                </Card.Footer>
              </Card>

              {/* Card 2 - Danger Gradient Background */}
              <Card className="h-72 relative border-none overflow-hidden" radius="lg" shadow="lg">
                <div className="absolute inset-0 bg-gradient-to-br from-fujin-danger/90 via-fujin-warning/80 to-fujin-primary/80 flex items-center justify-center p-6 pb-20">
                  <div className="text-center text-white">
                    <Bell className="size-10 mx-auto mb-2 animate-pulse text-red-200" />
                    <h3 className="font-extrabold text-xl tracking-tight">System Alerts Active</h3>
                    <p className="text-xs text-white/80 mt-1 max-w-xs">Monitor application health metrics and load times in real-time.</p>
                  </div>
                </div>

                <Card.Footer isFooterBlurred className="flex justify-between items-center text-white">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-white/70 tracking-wider">Status Warning</span>
                    <span className="text-sm font-semibold text-white">2 services degraded</span>
                  </div>
                  <Button size="sm" color="danger" radius="full" className="shadow-xs font-bold">
                    View Details
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </Section>
        </div>

        {/* ========================================================================= */}
        {/* ── TEXTAREA COMPONENT SHOWCASE ────────────────────────────────────────── */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-6 border-t pt-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold tracking-tight text-foreground">Textarea Showcase</h2>
            <p className="text-xs text-muted-foreground">Variants, colors, sizes, and states for Textarea</p>
          </div>

          <Section
            title="Textarea — Variants × Colors"
            description="Flat, Bordered, Faded, and Underlined variants across semantic colors"
            name="textarea"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {INPUT_VARIANTS.map(v => (
                <div key={v} className="flex flex-col gap-4 border border-dashed rounded-lg p-4 bg-muted/20">
                  <h3 className="text-xs font-semibold capitalize text-muted-foreground">
                    {v} Variant
                  </h3>
                  <div className="flex flex-col gap-3">
                    {COLORS.map(c => (
                      <div key={c} className="flex flex-col gap-1">
                        <label className="text-[10px] uppercase font-bold text-muted-foreground/80 tracking-wider">
                          {c}
                        </label>
                        <Textarea
                          variant={v}
                          color={c}
                          placeholder={`Enter multi-line ${c} text...`}
                          defaultValue={c !== "default" ? `Pre-filled ${c} content` : ""}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Textarea — Sizing & Disabled" description="Adjust dimensions, vertical spacing, and disabled states">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-muted-foreground">Sizes (sm / md / lg)</h4>
                <div className="flex flex-col gap-4">
                  {SIZES.map(s => (
                    <Textarea
                      key={s}
                      size={s}
                      variant="bordered"
                      color="primary"
                      placeholder={`Size ${s}`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-muted-foreground">Interactive States</h4>
                <div className="flex flex-col gap-4">
                  <Textarea
                    disabled
                    variant="flat"
                    defaultValue="This textarea is read-only and cannot be interacted with."
                  />
                  <Textarea
                    variant="bordered"
                    color="danger"
                    defaultValue="This field contains validation errors."
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ========================================================================= */}
        {/* ── BADGE (CHIP) COMPONENT SHOWCASE ────────────────────────────────────── */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-6 border-t pt-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold tracking-tight text-foreground">Badge (Chip) Showcase</h2>
            <p className="text-xs text-muted-foreground">Variants, colors, sizes, and interactive features for Badge/Chip</p>
          </div>

          <Section
            title="Badge — Variants × Colors"
            description="6 visual styles × 6 semantic colors"
            name="badge"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr>
                    <th className="pr-4 pb-2 text-muted-foreground font-medium">variant ↓  color →</th>
                    {COLORS.map(c => (
                      <th key={c} className="pb-2 pr-3 text-muted-foreground font-medium capitalize">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {["solid", "bordered", "flat", "faded", "shadow", "ghost"].map(v => (
                    <tr key={v}>
                      <td className="pr-4 py-2 text-muted-foreground font-medium">{v}</td>
                      {COLORS.map(c => (
                        <td key={c} className="py-2 pr-3">
                          <Badge variant={v as BadgeProps["variant"]} color={c} size="sm">
                            {c}
                          </Badge>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Badge — Features" description="Sizing, icon slots (start/end), and interactive close button handlers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-muted-foreground">Sizes & Radii</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge size="sm" variant="flat" color="primary">Small Badge</Badge>
                  <Badge size="md" variant="flat" color="primary">Medium Badge</Badge>
                  <Badge size="lg" variant="flat" color="primary">Large Badge</Badge>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge radius="none" variant="solid" color="secondary">None</Badge>
                  <Badge radius="sm" variant="solid" color="secondary">Small</Badge>
                  <Badge radius="md" variant="solid" color="secondary">Medium</Badge>
                  <Badge radius="lg" variant="solid" color="secondary">Large</Badge>
                  <Badge radius="full" variant="solid" color="secondary">Full</Badge>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-muted-foreground">Icon Slots & Closable</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="flat" color="success" startContent={<Sparkles className="size-3.5" />}>
                    Premium features
                  </Badge>
                  <Badge variant="bordered" color="warning" endContent={<ArrowRight className="size-3.5" />}>
                    Read Docs
                  </Badge>
                  <Badge
                    variant="solid"
                    color="danger"
                    onClose={() => alert("Close action triggered!")}
                  >
                    Removable
                  </Badge>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ========================================================================= */}
        {/* ── CHECKBOX COMPONENT SHOWCASE ────────────────────────────────────────── */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-6 border-t pt-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold tracking-tight text-foreground">Checkbox Showcase</h2>
            <p className="text-xs text-muted-foreground">Sizing, semantic colors, layout slots, and animated transitions</p>
          </div>

          <Section
            title="Checkbox — Sizing & Colors"
            description="Six theme colors across three distinct checkbox dimensions"
            name="checkbox"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {SIZES.map(s => (
                <div key={s} className="flex flex-col gap-3 border border-dashed rounded-lg p-4 bg-muted/20">
                  <h4 className="text-xs font-semibold text-muted-foreground capitalize">Size {s}</h4>
                  <div className="flex flex-col gap-3">
                    {COLORS.map(c => (
                      <Checkbox
                        key={c}
                        size={s}
                        color={c}
                        label={`Option ${c}`}
                        defaultChecked={c === "primary" || c === "success"}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Checkbox — Layouts & States" description="Integrated descriptions, disabled nodes, and state locks">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-muted-foreground">Description Slots</h4>
                <Checkbox
                  color="primary"
                  label="Subscribe to newsletter"
                  description="We will send you daily curated UI components and release updates."
                  defaultChecked
                />
                <Checkbox
                  color="secondary"
                  label="Accept terms of service"
                  description="Required to access advanced next-gen features."
                />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-muted-foreground">Disabled & Checked States</h4>
                <div className="flex flex-col gap-3">
                  <Checkbox
                    disabled
                    label="Disabled unselected"
                    description="This state cannot be toggled."
                  />
                  <Checkbox
                    disabled
                    defaultChecked
                    color="success"
                    label="Disabled checked"
                    description="This check state is permanently locked."
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ========================================================================= */}
        {/* ── SWITCH COMPONENT SHOWCASE ──────────────────────────────────────────── */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-6 border-t pt-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold tracking-tight text-foreground">Switch Showcase</h2>
            <p className="text-xs text-muted-foreground">Toggle sliders, sizing variants, color options, and label descriptions</p>
          </div>

          <Section
            title="Switch — Colors & Sizing"
            description="Toggle switches in 6 semantic states across small, medium, and large layouts"
            name="switch"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {SIZES.map(s => (
                <div key={s} className="flex flex-col gap-3 border border-dashed rounded-lg p-4 bg-muted/20">
                  <h4 className="text-xs font-semibold text-muted-foreground capitalize">Size {s}</h4>
                  <div className="flex flex-col gap-3">
                    {COLORS.map(c => (
                      <Switch
                        key={c}
                        size={s}
                        color={c}
                        label={`Toggle ${c}`}
                        defaultChecked={c === "primary" || c === "success" || c === "warning"}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Switch — Layout Integration & States" description="Toggle helper labels, disabled switches, and locked transitions">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-muted-foreground">Detailed Layout</h4>
                <Switch
                  color="success"
                  label="Enable Notifications"
                  description="Receive instant desktop push notifications on sync events."
                  defaultChecked
                />
                <Switch
                  color="danger"
                  label="Developer Mode"
                  description="Expose advanced system debugging metrics in consoles."
                />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-muted-foreground">Interactive States</h4>
                <div className="flex flex-col gap-3">
                  <Switch
                    disabled
                    label="Disabled turned off"
                  />
                  <Switch
                    disabled
                    defaultChecked
                    color="primary"
                    label="Disabled turned on"
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </div>
  )
}
