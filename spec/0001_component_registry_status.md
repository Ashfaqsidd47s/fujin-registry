# 0001 - Component Registry Status & Roadmap

This specification document tracks the status of all official shadcn/ui components mapped to our custom **Fujin Registry** ecosystem. 

---

## Monorepo Context & Progress

As of July 31, 2026, we have established the monorepo foundation, compiler builders, registry outputs, and a beautiful documentation showcase matching the official shadcn style.

### What We Have Done So Far:
1. **Registry Builder**: Configured a compiler runner script [build-registry.ts](file:///d:/visual%20studio/2026/fujin-registry/scripts/build-registry.ts) that consolidates individual metadata manifests (`registry-item.json`) into `public/r/[name].json` schema targets compatible with the standard `components.json` registry config.
2. **Dual-Track UI Architecture**: Configured components inside `packages/ui` with variants supporting both:
   - **Core**: Transition animations utilizing vanilla CSS/Tailwind rules.
   - **Motion**: Enhanced spring animations powered by framer-motion/motion library.
3. **Docs App**: Set up custom MDX layouts, breadcrumbs, copy buttons, timeline lists, and live Component Previews that fetch demo files directly on the server.
4. **Current Core Component Suite**: Completed 8 baseline UI components.

---

## Component Checklist & Roadmap

Out of the 57 official components available in shadcn/ui (v4 registry), we have built **26** components. The remaining **31** components are listed below under their respective categories.

### Layout & Navigation
- [x] Accordion *(Core & Motion variants)*
- [x] Aspect Ratio
- [x] Breadcrumb
- [ ] Navigation Menu
- [ ] Pagination
- [ ] Resizable
- [ ] Scroll Area
- [x] Separator
- [ ] Sidebar
- [x] Tabs *(Core & Motion variants)*

### Buttons & Actions
- [x] Button *(Core & Motion variants)*
- [ ] Button Group
- [ ] Toggle
- [ ] Toggle Group
- [ ] Dropdown Menu
- [ ] Context Menu
- [ ] Menubar

### Forms & Inputs
- [x] Input
- [ ] Input OTP
- [x] Checkbox
- [ ] Radio Group
- [ ] Select
- [ ] Native Select *(New)*
- [ ] Combobox
- [x] Switch *(Core & Motion variants)*
- [ ] Slider
- [x] Textarea
- [ ] Calendar
- [ ] Date Picker
- [x] Label
- [ ] Field *(Replaces old Form component)*
- [ ] Kbd

### Overlays
- [x] Alert Dialog *(Core & Motion variants)*
- [x] Dialog *(Core & Motion variants)*
- [x] Drawer
- [x] Hover Card
- [x] Popover
- [x] Sheet *(Core & Motion variants)*
- [x] Tooltip

### Feedback
- [x] Alert
- [x] Progress *(Core & Motion variants)*
- [x] Skeleton
- [x] Sonner
- [x] Spinner
- [x] Toast

### Display
- [ ] Avatar
- [x] Badge
- [x] Card
- [ ] Carousel
- [ ] Chart
- [ ] Empty
- [ ] Table
- [ ] Typography

### AI & Chat (New)
- [ ] Attachment
- [ ] Bubble
- [ ] Marker
- [ ] Message
- [ ] Message Scroller

### Utilities
- [ ] Command
- [ ] Direction
- [ ] Item
- [ ] Collapsible

---

> [!NOTE]
> The detailed design system, Radix bases, visual skins, and dual-track animations for each of these remaining components are defined in [0002_ui_components_design_spec.md](file:///d:/visual%20studio/2026/fujin-registry/spec/0002_ui_components_design_spec.md).

