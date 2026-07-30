# Fujin

> **Build Features, Not Boilerplate.**
>
> Fujin is a feature-first React ecosystem that helps developers build production-ready applications instead of repeatedly building the same infrastructure in every project.

---

# 1. Vision

Every project starts with the same repetitive work.

- Authentication
- Forms
- Tables
- CRUD
- Dashboards
- Payments
- File Uploads
- Notifications
- State Management
- Search
- Charts
- Settings

Developers spend days or weeks rebuilding these.

Fujin solves this by providing **production-ready features**, not just UI components — while still giving developers a UI layer good enough that they never feel the need to reach for another component library.

The goal is to become the place where developers install complete features with a single command while still owning 100% of their code.

---

# 2. Philosophy

## Your Code

Everything installed by Fujin becomes your code.

- No runtime dependency on Fujin itself
- No locked ecosystem
- No proprietary package
- No magic — the CLI is a code generator/copier, not a hidden runtime

## Feature First

UI components are only building blocks. The actual value comes from features.

Instead of installing a Button... install an entire User Management System.

## Registry Compatible

Fujin supports both installation methods so no one has to change tooling to adopt it.

```bash
npx fujin add button
```

and

```bash
npx shadcn add https://fujin.dev/r/button.json
```

---

# 3. UI Component Strategy (Core Decision)

This is the foundation everything else is built on, so it gets defined precisely up front instead of being left as "beautiful UI components."

## 3.1 Starting Point

- Fork the **shadcn/ui** primitives (Radix-based, accessible, unstyled-by-default) as the structural/behavioral base. This gives correct accessibility, keyboard handling, and composition patterns for free instead of reinventing them.
- Do **not** copy shadcn's visual language 1:1. Re-skin every component to match a **HeroUI-inspired design system**: softer radii, layered shadows, gradient/glow accents, denser color system (solid/bordered/light/flat/faded/shadow variants per component), and more expressive default states (hover, press, loading, disabled).
- Treat this as "shadcn's bones, HeroUI's skin, Fujin's own token system" — not a clone of either. A distinct visual identity (color ramps, spacing scale, typography pairing) is needed so Fujin doesn't read as "reskinned shadcn" in screenshots.

## 3.2 Two Installation Tracks

Every UI component ships in **two variants**, selectable at install time:

| Track | Dependency | Use case |
|---|---|---|
| `core` (default) | No animation library | Lightweight, CSS-only transitions, minimal bundle size |
| `motion` | [`motion`](https://motion.dev) (successor to Framer Motion) | Micro-interactions, layout animation, gesture-driven UI |

```bash
# installs the plain version
npx fujin add button

# installs the animated version
npx fujin add button --style=motion

# set a default track for the whole project so you don't repeat the flag
npx fujin config set style motion
```

### Why not one component with animation "baked in and optional"?
Because that means every consumer pays the parsing/behavioral complexity cost and the `motion` dependency risk even if they never use it, and it invites prop-API bloat (`animate`, `animated`, `motionProps`, etc. sprawling across 40+ components). Two clean variants keep each file simple, keep bundle size honest, and keep the generated code copy-paste readable — which matters for a "you own the code" library.

### 3.3 Implementation Approach (to avoid duplicated logic)

To prevent the `core` and `motion` variants from drifting apart or duplicating business logic:

```
registry/ui/button/
├── core/
│   └── button.tsx          # CSS transitions only
├── motion/
│   └── button.tsx          # wraps the same primitive with motion.create() / AnimatePresence
├── shared/
│   ├── button.variants.ts  # cva() variant/style definitions (colors, sizes, radii) — SHARED
│   ├── button.types.ts     # shared prop types
│   └── use-button.ts       # shared behavioral hook (press state, ripple calc, etc.)
└── registry-item.json      # registers both variants + shared deps
```

- **Styling (via `class-variance-authority`) and behavior (hooks) are shared.** Only the *rendering wrapper* differs between `core` and `motion`.
- This is the pattern that scales past 100+ components without every animated variant becoming a hand-maintained fork.
- Complex/composite components (Dialog, Sheet, Dropdown, Accordion, Tabs, Command) benefit the most from `motion` (enter/exit, layout shift, shared-element transitions) — these should be the flagship examples in the docs "core vs motion" comparison.

### 3.4 Theming

- Design tokens as CSS variables (HSL/OKLCH-based), matching the shadcn convention so existing shadcn themes remain roughly portable.
- Ship a small set of first-party themes (Default, HeroUI-style, Minimal, Brutalist) plus a theme generator page in the docs site.
- `npx fujin theme add <name>` to install a theme as CSS variables, independent of which component track (`core`/`motion`) is installed.

### 3.5 Component Registry Metadata

Each `registry-item.json` needs a `variants` field (not just `dependencies`) so the CLI, docs site, and search index all understand a component has multiple installable flavors:

```json
{
  "name": "button",
  "type": "registry:ui",
  "variants": {
    "core": { "dependencies": [] },
    "motion": { "dependencies": ["motion"] }
  }
}
```

---

# 4. Goals

## Primary Goal
Become the best feature registry for modern React applications — not another UI library.

## Secondary Goals
- Beautiful, dual-track (core/motion) UI components
- Feature Registry
- Production Templates
- Blocks
- CLI
- Documentation
- AI-Friendly (llms.txt, structured metadata, MCP server for the registry)
- Open Source
- Framework Agnostic (future: Vue/Svelte ports of the registry schema)

---

# 5. Core Features

## 5.1 UI Components
Button, Input, Card, Dialog, Sheet, Select, Tooltip, Calendar, Dropdown, Tabs, Navigation, Command, Avatar, Badge, Skeleton, Toast, Accordion, Data Table primitives, etc. — each with `core` and `motion` tracks as defined in Section 3.

## 5.2 Features
The biggest selling point.

**Authentication** — Better Auth, Auth.js, Clerk, Firebase, Supabase
**Forms** — React Hook Form, Zod, API-bound forms, multi-step forms, dynamic/schema-driven forms
**Tables** — TanStack Table, server pagination, filters, search, export, infinite scroll, virtualization
**CRUD** — complete CRUD, API integration, React Query, forms, permissions
**Payments** — Stripe, Razorpay, Lemon Squeezy, Paddle
**Uploads** — UploadThing, S3, Cloudinary
**Dashboards**, **Analytics**, **Notifications**, **Search**, **Permissions/RBAC**, **User Management**, **Settings**, **Profile**, **Billing**, **Organizations**, **Invitations**, **Audit Logs**, **Feature Flags**, **Onboarding Flows**, **Email Templates** (Resend/React Email)

## 5.3 Blocks
Production-ready sections: Dashboard, Admin Panel, Landing Pages, Pricing, Auth Screens, Marketing Pages, Blog, Settings, User Profile, Charts, Analytics.

## 5.4 Templates
Complete applications: SaaS Starter, Admin Dashboard, CRM, Ecommerce, Portfolio, Documentation Website, AI SaaS, Agency, Blog, Marketplace.

---

# 6. CLI

```bash
npx fujin init
npx fujin add button
npx fujin add button --style=motion
npx fujin add auth
npx fujin add table
npx fujin add crud
npx fujin add dashboard
npx fujin add stripe
npx fujin config set style motion
npx fujin theme add <name>
npx fujin update
npx fujin diff button        # show upstream changes vs. local modified copy
npx fujin doctor
npx fujin search auth
npx fujin remove button
```

### Future
```bash
npx fujin generate crud
npx fujin generate api
npx fujin generate form
npx fujin generate table
npx fujin generate dashboard
npx fujin mcp                # start local MCP server over the registry for AI agents
```

### CLI Design Notes
- `add` must detect project conventions automatically (Tailwind version, App Router vs Pages Router, TS vs JS, existing `components.json`) before writing files, and must **diff instead of overwrite** if a file already exists locally.
- `--style` flag (or a persisted `fujin.config.json` default) governs `core` vs `motion` selection globally so users don't repeat it on every command.
- `doctor` should validate: Tailwind config compatibility, missing peer deps, mismatched component versions against the registry, and orphaned files.

---

# 7. Registry Architecture

The registry is not the source code. It is the generated distribution.

```
Source (packages/*)
   ↓
Registry (registry/**/*.json + files)
   ↓
Documentation (auto-generated from registry metadata)
   ↓
Search Index
   ↓
CLI (consumes registry.json over HTTP)
```

Everything comes from one source — nothing is hand-maintained twice.

### Registry Requirements for Scale
- **Versioned registry items** — each component/feature has a semver-like version so `fujin update` and `fujin diff` are meaningful.
- **Dependency graph resolution** — installing `crud` should transitively resolve `table` + `form` + their `core`/`motion` variant choices consistently.
- **CDN-backed distribution** (e.g., Vercel Edge/Cloudflare) with heavy caching — registry JSON must be fast since it's fetched on every `add`.
- **Namespacing for third-party registries** later (so teams can host private/internal registries using the same CLI, similar to shadcn's registry spec).

---

# 8. Documentation

Sections: Getting Started, Installation, CLI, Registry, Components (with core/motion toggle in every preview), Features, Blocks, Templates, Hooks, Utilities, Themes, Examples, Changelog, Blog.

Every component/feature page includes:
- Live Preview (with a **core/motion toggle** switch on the preview itself)
- Installation command (auto-reflecting selected track)
- Copy Code
- CLI Command
- API/Props table
- Examples
- Dependencies (differ by track)
- Source link
- Customization guide

---

# 9. Design Principles

- Minimal
- Fast
- Beautiful
- Production Ready
- Copy-Paste Friendly
- Accessible (WCAG 2.1 AA minimum — non-negotiable given the Radix/shadcn base)
- Type Safe
- Tree Shakeable
- Zero Runtime (for `core` track; `motion` track is opt-in, not default)
- AI Friendly

---

# 10. Testing & Quality Strategy *(new)*

A registry that ships copy-pasted code into thousands of projects has a higher bar for correctness than a typical app, because bugs propagate outward and can't be hotfixed centrally.

- **Unit tests** (Vitest) for hooks and pure logic (`shared/*`) in every feature/component package.
- **Visual regression tests** (Chromatic or Playwright + pixel diffing) for both `core` and `motion` variants of every UI component.
- **Accessibility tests** (axe-core in CI) on every component and block.
- **Registry integrity checks** — a CI script that validates every `registry-item.json` resolves, has no circular deps, and that generated files actually compile against a clean Next.js + Vite scaffold before merge.
- **E2E smoke test**: spin up a throwaway app, run `npx fujin init && npx fujin add <every component>`, and assert it builds — run nightly and pre-release.

---

# 11. Versioning & Release Strategy *(new)*

- Semver at three levels: the CLI, the registry schema, and individual registry items (components/features/blocks/templates each get their own version).
- `npx fujin update` should show a changelog diff per item, not just overwrite silently.
- Since installed code becomes the user's code, breaking changes to a component **cannot** be pushed retroactively — only offered as an opt-in `update`.
- Maintain a public Changelog page generated from conventional commits / changesets.

---

# 12. Governance & Contribution *(new)*

- Open-source under a permissive license (MIT), matching the "your code, no lock-in" philosophy.
- Clear contribution guide for adding a new component/feature: must include both `core` and `motion` variants (or an explicit justification for why one is skipped, e.g. non-visual utilities).
- RFC process for anything touching the registry schema, since it's the contract every downstream tool depends on.
- Code owners per package (`ui`, `features`, `blocks`, `templates`, `cli`, `registry`) to keep review quality consistent as contributors grow.

---

# 13. Performance & Bundle Size Strategy *(new)*

- `core` components must have zero non-Radix runtime dependencies — this is the whole value proposition versus "just use HeroUI."
- `motion` components must lazy-load the `motion` runtime where feasible (e.g., dynamic import for rarely-triggered animations like modals) rather than pulling it into the main bundle unconditionally.
- Track and publish approximate bundle-size cost per component (like Bundlephobia) directly on each docs page — this becomes a selling point for the `core` track.
- CI budget checks that fail a PR if a `core` component's generated file suddenly grows non-trivially or gains a new dependency.

---

# 14. Security *(new)*

- Since `add` executes a fetch + file-write against a URL, the CLI must verify registry payload integrity (checksums / signed registry manifests) to prevent supply-chain tampering via a compromised CDN or MITM.
- No `postinstall` scripts or remote code execution — installed code must be static, auditable files only, keeping the "no magic" promise credible.
- Dependency-audit step in CI (`pnpm audit` / Socket.dev-style checks) before any feature that pulls in a third-party SDK (Stripe, Clerk, UploadThing, etc.) is published.

---

# 15. Monorepo Structure

```text
fujin/
├── apps/
│   └── web/
│       ├── app/
│       │   ├── (marketing)/
│       │   ├── docs/
│       │   ├── components/
│       │   ├── features/
│       │   ├── blocks/
│       │   ├── templates/
│       │   ├── showcase/
│       │   ├── changelog/
│       │   ├── blog/
│       │   └── page.tsx
│       ├── content/
│       │   ├── docs/
│       │   ├── components/
│       │   ├── features/
│       │   ├── blocks/
│       │   └── templates/
│       ├── components/
│       │   ├── docs/
│       │   ├── marketing/
│       │   └── common/
│       ├── lib/
│       └── public/
│
├── packages/
│   ├── cli/
│   ├── registry/
│   ├── ui/                 # each component has core/ + motion/ + shared/
│   ├── features/
│   ├── blocks/
│   ├── templates/
│   ├── hooks/
│   ├── utils/
│   ├── generators/
│   ├── schemas/            # zod schemas for registry-item.json, variants, etc.
│   ├── themes/
│   └── configs/
│
├── registry/
│   ├── ui/
│   ├── features/
│   ├── blocks/
│   ├── templates/
│   ├── hooks/
│   ├── lib/
│   ├── themes/
│   └── registry.json
│
├── tooling/
│   ├── eslint/
│   ├── prettier/
│   ├── tailwind/
│   ├── typescript/
│   └── vitest/
│
├── scripts/
│   ├── build-registry.ts
│   ├── generate-search.ts
│   ├── generate-docs.ts
│   ├── generate-manifest.ts
│   ├── validate-registry.ts   # integrity + circular-dep + variant-completeness checks
│   ├── bundle-size-report.ts
│   └── release.ts
│
├── .changeset/
├── package.json
├── turbo.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

---

# 16. Single Source of Truth

Every installable item lives inside `packages/`.

```
packages/ui/button/
packages/features/table/
```

From that package Fujin automatically generates:
- Registry JSON (including `variants`)
- Registry files (`core` + `motion`)
- Documentation
- Search index
- CLI metadata
- Preview metadata
- Dependency graph
- Bundle-size report

Nothing is duplicated manually — including the `core`/`motion` split, which is enforced by shared logic files rather than copy-pasted component code (Section 3.3).

---

# 17. Long-Term Roadmap

## Phase 1 — Foundation
- Registry schema (with variant support from day one — retrofitting this later is expensive)
- CLI (`init`, `add`, `remove`, `search`, `doctor`)
- Documentation site
- **UI Components**: fork shadcn primitives, apply HeroUI-inspired redesign, ship `core` + `motion` tracks for the full base set
- Theming system

## Phase 2 — Feature Library
- Authentication, Forms, Tables, CRUD, Uploads, Payments
- Testing pipeline (Section 10) matured to cover all shipped features

## Phase 3 — Composition Layer
- Blocks, Templates, Marketplace, Search, AI Integration (MCP server, llms.txt)
- Versioned `update`/`diff` CLI flows in full production use

## Phase 4 — Platform
- Visual Builder
- Registry Generator (for teams hosting private registries)
- AI Code Generation
- Team Workspace
- Cloud Registry
- Plugin Ecosystem
- Framework ports (Vue/Svelte) of the registry schema

---

# 18. Success Metric

A developer should be able to build an entire production-ready application with Fujin by installing features instead of rebuilding them — and choose, per component, whether they want it plain or animated, without ever touching a second UI library.

Instead of asking:

> "Which Button library should I use?"

Developers should ask:

> "Does Fujin already have this feature — and do I want it with motion?"