# Fujin Registry

> **Build Features, Not Boilerplate.**
> 
> Fujin is a feature-first React ecosystem that helps developers build production-ready applications by providing un-opinionated, copy-pasteable features instead of repeating boilerplate infrastructure in every project.

---

## 1. Vision & Architecture

Fujin uses a **Single Source of Truth** monorepo structure. You build and maintain components in standard typescript packages under `packages/`, and a registry builder automatically compiles them into distribution manifests.

```
Source (packages/*)
   ↓
Registry Build Engine (scripts/build-registry.ts)
   ↓
Registry Distribution (registry/**/*.json + files)
   ↓  (copied to)
Next.js Public Assets (apps/web/public/r/*)
   ↓
Consumer Apps (via fujin/shadcn CLI commands over HTTP)
```

### Monorepo Structure

```text
├── apps/
│   └── web/                   # Next.js Showcase Website
│       ├── app/               # Showcase pages
│       ├── components/        # Web components (OpenInV0, etc.)
│       └── public/r/          # Compiled registry JSON manifests (served statically)
│
├── packages/
│   ├── ui/                    # UI Components (dual-track: core/motion)
│   ├── blocks/                # Complex block components and showcase pages
│   ├── cli/                   # CLI Package (future)
│   ├── themes/                # Design tokens and themes (e.g. fujin-glass)
│   └── utils/                 # Utility files (e.g. fujin-variants)
│
├── registry/                  # Generated registry output folder (for distribution)
│   ├── ui/
│   ├── blocks/
│   ├── themes/
│   └── registry.json          # Consolidated registry index
│
└── scripts/
    └── build-registry.ts      # Registry compilation engine
```

---

## 2. Getting Started & Running Locally

### Prerequisites
Make sure you have [pnpm](https://pnpm.io) installed (the monorepo uses pnpm workspaces).

### 1. Install Dependencies
Run the workspace installer at the root directory:
```bash
pnpm install
```

### 2. Build the Registry
Compile the component source packages into the final JSON manifests and registry outputs:
```bash
pnpm run build-registry
```

### 3. Start Development Server
Run the showcase preview server locally:
```bash
pnpm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the component dashboard.

### 4. Build Workspace
Build and type-check all workspace projects (web application + packages):
```bash
pnpm run build
```

---

## 3. Developer Guide

Follow these steps to expand the registry:

### 3.1 Adding a New UI Component

Every UI component in Fujin supports **two tracks**:
* `core` (default): Pure CSS transitions only. Lightweight, zero dependencies.
* `motion`: spring physics, gesture-driven UI (depends on `motion`).

#### Step 1: Create Component Directory
Create the folder structure under `packages/ui/`:
```text
packages/ui/[component]/
├── core/
│   └── [component].tsx          # Core CSS-transition version
├── motion/
│   └── [component].tsx          # Motion-wrapped version
├── shared/
│   ├── [component].variants.ts  # CVA variant/styling definitions (SHARED)
│   └── [component].types.ts     # Shared prop types
└── registry-item.json           # Registry item manifest
```

#### Step 2: Implement Component Logic
- **`shared/[component].variants.ts`**: Define your Tailwind classes and visual states using `class-variance-authority`'s `cva()`.
- **`shared/[component].types.ts`**: Declare component props extending standard React HTML attributes and variant props.
- **`core/[component].tsx`**: Build the default React element using standard Tailwind CSS transitions.
- **`motion/[component].tsx`**: Build the motion version wrapping elements with `motion` spring helpers.

#### Step 3: Define `registry-item.json`
Configure the manifest so the registry builder knows how to compile the variant configurations:
```json
{
  "name": "button",
  "type": "registry:ui",
  "title": "Button",
  "description": "HeroUI-inspired button.",
  "dependencies": ["class-variance-authority", "@radix-ui/react-slot"],
  "variants": {
    "core": {
      "dependencies": [],
      "files": [
        { "path": "packages/ui/button/core/button.tsx", "target": "components/ui/button.tsx", "type": "registry:ui" },
        { "path": "packages/ui/button/shared/button.variants.ts", "target": "components/ui/button/button.variants.ts", "type": "registry:ui" },
        { "path": "packages/ui/button/shared/button.types.ts", "target": "components/ui/button/button.types.ts", "type": "registry:ui" }
      ]
    },
    "motion": {
      "dependencies": ["motion"],
      "files": [
        { "path": "packages/ui/button/motion/button.tsx", "target": "components/ui/button.tsx", "type": "registry:ui" },
        { "path": "packages/ui/button/shared/button.variants.ts", "target": "components/ui/button/button.variants.ts", "type": "registry:ui" },
        { "path": "packages/ui/button/shared/button.types.ts", "target": "components/ui/button/button.types.ts", "type": "registry:ui" }
      ]
    }
  }
}
```

---

### 3.2 Adding a Block, Feature, or Utility

#### Step 1: Create folder under `packages/blocks/` (or `packages/features/`, `packages/utils/`)
Create a subdirectory containing your code files.

#### Step 2: Define `registry-item.json`
Specify registry details. For blocks or libs:
```json
{
  "name": "hello-world",
  "type": "registry:component",
  "title": "Hello World",
  "description": "A hello world component block.",
  "registryDependencies": ["button"],
  "files": [
    {
      "path": "packages/blocks/hello-world/hello-world.tsx",
      "type": "registry:component"
    }
  ]
}
```

---

### 3.3 Adding to the Registry Distribution

Once you have written your component or block code and saved your `registry-item.json`, run:
```bash
pnpm run build-registry
```
The script will automatically scan your files, inline their source contents, and output:
- **Individual JSON manifests** to `apps/web/public/r/[name].json` and `apps/web/public/r/[name]-motion.json`.
- **Consolidated registry index** to `registry/registry.json` and `apps/web/public/r/registry.json`.
- **Distribution source folders** under `registry/`.

---

### 3.4 Adding to the Showcase UI & Docs

To preview and document your new item on the web showcase dashboard:

1. Open [apps/web/app/page.tsx](file:///d:/visual%20studio/2026/fujin-registry/apps/web/app/page.tsx).
2. Import the core variant of your component:
   ```typescript
   import { MyComponent } from "@/registry/ui/my-component/core/my-component"
   ```
3. Add a section under `main` showing different property configurations (colors, sizes, and states).
4. Add the component name to `OpenInV0Button` to enable copy-pasteable v0 canvas integration:
   ```tsx
   <OpenInV0Button name="my-component" />
   ```
