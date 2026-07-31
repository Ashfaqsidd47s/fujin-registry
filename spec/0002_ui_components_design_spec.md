# 0002 - UI Components Design Specification & Tracks

This specification defines the visual skin, primitive basis, and behavioral animations for the remaining **49 components** planned for the Fujin Registry. 

All components follow the design principles detailed in [FUJIN_PLAN.md](file:///d:/visual%20studio/2026/fujin-registry/FUJIN_PLAN.md):
- **Bones**: Forked from accessible **Radix UI** primitives.
- **Skin**: **HeroUI-inspired** design language (soft radii, glassmorphic/blur backdrop variables, layered shadows, color palettes: solid/bordered/light/flat/faded/shadow/ghost).
- **Tracks**: Every component must implement `core` (vanilla CSS transition) and `motion` (spring physics via `motion`) variants.

---

## 1. Layout & Navigation

### Accordion
- **Primitive Base**: `@radix-ui/react-accordion`
- **HeroUI Skin**: Clean card layout, rounded container borders with glassmorphism overlays. Icon indicators rotate dynamically.
- **Core Track**: CSS transition for height expand/collapse (`transition-[height] duration-200 ease-out`).
- **Motion Track**: Smooth motion spring height physics with `framer-motion` height transitions.

### Aspect Ratio
- **Primitive Base**: `@radix-ui/react-aspect-ratio`
- **HeroUI Skin**: Layout wrapper that forces media ratios. Outlines use thin border overlays.
- **Core & Motion Tracks**: Static layout container, both use standard width/height wrappers.

### Breadcrumb
- **Primitive Base**: Standard semantic navigation layout.
- **HeroUI Skin**: Small uppercase typography, subtle chevron delimiters, opacity hover effects.
- **Core Track**: Vanilla CSS hover opacity transitions.
- **Motion Track**: Items slide-in horizontally on layout mount and hover shifts.

### Navigation Menu
- **Primitive Base**: `@radix-ui/react-navigation-menu`
- **HeroUI Skin**: Floating card headers with blur backing. Hover indicators slide beneath active navigation tabs.
- **Core Track**: Popover slide/opacity fades via CSS transitions.
- **Motion Track**: Floating popovers animate with layout-origin zoom and position-linked spring tracking.

### Pagination
- **Primitive Base**: Custom navigation block.
- **HeroUI Skin**: Flex control array utilizing solid, bordered, or flat variant buttons. Active state uses high-prominence branding pill.
- **Core Track**: CSS scale-down transitions upon active press.
- **Motion Track**: Slidable highlight pill shifts dynamically behind the active index button via layout animations.

### Resizable
- **Primitive Base**: `react-resizable-panels` or similar primitive.
- **HeroUI Skin**: Sleek drag handle separators that expand on hover into high-contrast bars.
- **Core Track**: Standard layout resize sizing.
- **Motion Track**: Subtle inertia spring damping during drag-release.

### Scroll Area
- **Primitive Base**: `@radix-ui/react-scroll-area`
- **HeroUI Skin**: Transparent backing with minimalist floating scrollbars. Scroll track expands slightly on hover.
- **Core Track**: CSS transition on scrollbar visibility fade-out.
- **Motion Track**: Velocity-aware scrollbar size expansion during fast scroll sweeps.

### Separator
- **Primitive Base**: `@radix-ui/react-separator`
- **HeroUI Skin**: Hairline 1px border with a soft gradient fading toward edges.
- **Core & Motion Tracks**: Standard structural line separators.

### Sidebar
- **Primitive Base**: Custom layout container.
- **HeroUI Skin**: Collapsible side dashboard structure utilizing glassmorphism panels, grouped headings, and clean links.
- **Core Track**: Width slide transitions via Tailwind transitions.
- **Motion Track**: Elastic side-reveal drawer animation.

### Tabs
- **Primitive Base**: `@radix-ui/react-tabs`
- **HeroUI Skin**: Rounded pills on track or bottom borders under active triggers.
- **Core Track**: Tab contents fade in/out via CSS.
- **Motion Track**: Active tab highlight pill slides underneath using layout projections.

---

## 2. Buttons & Actions

### Button Group
- **Primitive Base**: Horizontal button wrapper.
- **HeroUI Skin**: Standard button styles merged into a single segment block with uniform rounded outer corners and shared borders.
- **Core & Motion Tracks**: Controls layout groupings.

### Toggle
- **Primitive Base**: `@radix-ui/react-toggle`
- **HeroUI Skin**: Flat and light variants that gain bordered status when checked.
- **Core Track**: Opacity and border transition effects.
- **Motion Track**: Spring press-scaling interaction on state toggle.

### Toggle Group
- **Primitive Base**: `@radix-ui/react-toggle-group`
- **HeroUI Skin**: Unified toggle buttons in bordered tracks.
- **Core & Motion Tracks**: Groups Toggle components.

### Dropdown Menu
- **Primitive Base**: `@radix-ui/react-dropdown-menu`
- **HeroUI Skin**: Layered card with backdrop blur and dense font menu items.
- **Core Track**: Slide-up transition for entrance.
- **Motion Track**: Scales up from origin with bouncy spring physics.

### Context Menu
- **Primitive Base**: `@radix-ui/react-context-menu`
- **HeroUI Skin**: Popover card with radial shadow depth.
- **Core Track**: Standard fade-in transition.
- **Motion Track**: Popover expands using initial coordinate tracking.

### Menubar
- **Primitive Base**: `@radix-ui/react-menubar`
- **HeroUI Skin**: Horizontal menu track with glassmorphism backgrounds.
- **Core Track**: Standard fade/slide menu transitions.
- **Motion Track**: Sliding highlighting index track during menu item hover.

---

## 3. Forms & Inputs

### Input OTP
- **Primitive Base**: input-otp base elements.
- **HeroUI Skin**: Separated character box grids with rounded corners, focus indicators, and centered numeric layouts.
- **Core Track**: Border glowing outline transition on focus.
- **Motion Track**: Blinking cursor animations and scale-pop checks.

### Radio Group
- **Primitive Base**: `@radix-ui/react-radio-group`
- **HeroUI Skin**: Circle checklist boxes. Checking a radio button reveals an expanding inner circle.
- **Core Track**: CSS opacity transition for indicator.
- **Motion Track**: Indicator pops from 0 to 100% scale using spring physics.

### Select
- **Primitive Base**: `@radix-ui/react-select`
- **HeroUI Skin**: Dropdown form trigger wrapper. Value pops up in a glass card.
- **Core Track**: Height/opacity transitions for dropdown box.
- **Motion Track**: Popover scale-up animations on trigger.

### Native Select (New)
- **Primitive Base**: Standard native select tag wrapper.
- **HeroUI Skin**: Stylized wrapper border that replicates custom dropdown appearance while retaining native hardware performance.
- **Core & Motion Tracks**: CSS border color transition on focus.

### Combobox
- **Primitive Base**: Autocomplete dropdown list.
- **HeroUI Skin**: Search input embedded in a floating list card.
- **Core Track**: Standard filtering item fade lists.
- **Motion Track**: Search matches slide into position dynamically.

### Slider
- **Primitive Base**: `@radix-ui/react-slider`
- **HeroUI Skin**: Track horizontal range with a round floating grab handle. Range fill matches semantic colors.
- **Core Track**: Thumb scale increases on hover.
- **Motion Track**: Drag movements respond with momentum springs.

### Calendar
- **Primitive Base**: `react-day-picker`
- **HeroUI Skin**: Date grid using rounded button tiles and clean navigation chevrons.
- **Core Track**: CSS hover transitions.
- **Motion Track**: Month changes trigger sliding transitions.

### Date Picker
- **Primitive Base**: Popover calendar input trigger.
- **HeroUI Skin**: Calendar embedded inside a floating backdrop-blur card.
- **Core Track**: Popover fade transitions.
- **Motion Track**: Popover bounces from the input trigger.

### Field
- **Primitive Base**: Input field validation container wrapper.
- **HeroUI Skin**: Layout groupings with labels, error states, and helpers.
- **Core Track**: Error messages fade in.
- **Motion Track**: Errors slide down from the parent container.

### Kbd
- **Primitive Base**: HTML `<kbd>` tag wrapper.
- **HeroUI Skin**: Faded or bordered small badges mimicking realistic keyboard keys.
- **Core & Motion Tracks**: Static layout elements.

---

## 4. Overlays

### Alert Dialog
- **Primitive Base**: `@radix-ui/react-alert-dialog`
- **HeroUI Skin**: High-priority backdrop overlay with centered content card.
- **Core Track**: CSS opacity and translate transitions.
- **Motion Track**: Modal scale-spring popup and screen shake on invalid actions.

### Dialog
- **Primitive Base**: `@radix-ui/react-dialog`
- **HeroUI Skin**: Standard overlay dialog box with soft corners.
- **Core Track**: Standard modal opacity fade.
- **Motion Track**: Scale-up and fade-in transitions.

### Drawer
- **Primitive Base**: `vaul` or custom bottom drawer layout.
- **HeroUI Skin**: Bottom overlay sheet with drag handles.
- **Core Track**: CSS translate-y slide transitions.
- **Motion Track**: Inertia dragging gesture controls.

### Hover Card
- **Primitive Base**: `@radix-ui/react-hover-card`
- **HeroUI Skin**: Popover info card triggered on hover.
- **Core Track**: CSS delay fade-in.
- **Motion Track**: Scale-in transition.

### Popover
- **Primitive Base**: `@radix-ui/react-popover`
- **HeroUI Skin**: Floating card anchored to trigger button.
- **Core Track**: Translate and opacity fade.
- **Motion Track**: Origin-directed pop transitions.

### Sheet
- **Primitive Base**: `@radix-ui/react-dialog` (Side drawer)
- **HeroUI Skin**: Side panel container (left/right/top/bottom).
- **Core Track**: Slide-in translate transitions.
- **Motion Track**: Spring-elastic slide-in animations.

### Tooltip
- **Primitive Base**: `@radix-ui/react-tooltip`
- **HeroUI Skin**: Micro-info pill with dark backing.
- **Core Track**: Delay fade transition.
- **Motion Track**: Scale-pop transition.

---

## 5. Feedback

### Alert
- **Primitive Base**: Semantic info banner.
- **HeroUI Skin**: Flat and bordered warning banners.
- **Core & Motion Tracks**: CSS animations.

### Progress
- **Primitive Base**: `@radix-ui/react-progress`
- **HeroUI Skin**: Progress bar tracker track.
- **Core Track**: Width transition.
- **Motion Track**: Spring width animation.

### Skeleton
- **Primitive Base**: Skeleton loading tile.
- **HeroUI Skin**: Muted background shape.
- **Core Track**: CSS pulse animation.
- **Motion Track**: Shimmer gradient sliding animations.

### Sonner
- **Primitive Base**: `sonner` toast notifier.
- **HeroUI Skin**: Muted popups with glass backing.
- **Core Track**: CSS slide-up stack.
- **Motion Track**: Smooth gesture swipe-away animations.

### Spinner
- **Primitive Base**: Loading indicator ring.
- **HeroUI Skin**: Circular indicator loop.
- **Core & Motion Tracks**: Infinite spin animation.

### Toast
- **Primitive Base**: `@radix-ui/react-toast`
- **HeroUI Skin**: Floating feedback banners.
- **Core Track**: Fade and translate transitions.
- **Motion Track**: Sliding spring popups and swipe-dismiss gestures.

---

## 6. Display

### Avatar
- **Primitive Base**: `@radix-ui/react-avatar`
- **HeroUI Skin**: Circular image container with rounded status badges.
- **Core Track**: CSS hover scale.
- **Motion Track**: Spring expand on hover.

### Carousel
- **Primitive Base**: `embla-carousel-react`
- **HeroUI Skin**: Sliding image wrapper.
- **Core Track**: CSS margin slide transitions.
- **Motion Track**: Physics-based drag and slide sweeps.

### Chart
- **Primitive Base**: `recharts` / SVG charts.
- **HeroUI Skin**: Modern charts with gradient area fills.
- **Core Track**: Static redraw.
- **Motion Track**: Spring-loaded entry path animations.

### Empty
- **Primitive Base**: Empty-state placeholder block.
- **HeroUI Skin**: Centered illustration, description, and call-to-action button.
- **Core & Motion Tracks**: Standard layouts.

### Table
- **Primitive Base**: HTML standard table tag layouts.
- **HeroUI Skin**: Clean borders and row highlights.
- **Core Track**: Hover highlight transition.
- **Motion Track**: Reordered rows transition positions.

### Typography
- **Primitive Base**: Standard heading tags.
- **HeroUI Skin**: Curated font sets (Inter/Outfit/Geist).
- **Core & Motion Tracks**: Static typography.

---

## 7. AI & Chat (New)

### Attachment
- **Primitive Base**: File preview pill.
- **HeroUI Skin**: Floating card with download/delete actions.
- **Core Track**: Fade transition.
- **Motion Track**: Pop animation.

### Bubble
- **Primitive Base**: Chat bubble container.
- **HeroUI Skin**: Rounded talk bubbles (sender/receiver states).
- **Core Track**: CSS opacity.
- **Motion Track**: Speech bubbles pop up on entry.

### Marker
- **Primitive Base**: Chat highlight indicator.
- **HeroUI Skin**: Glow accents overlaying text selections.
- **Core & Motion Tracks**: CSS highlight fade.

### Message
- **Primitive Base**: Chat message entry layout.
- **HeroUI Skin**: Flex groupings with avatars and bubble blocks.
- **Core & Motion Tracks**: Message feed rendering.

### Message Scroller
- **Primitive Base**: Auto-scroll container.
- **HeroUI Skin**: Scrolling chat history panel.
- **Core & Motion Tracks**: Scroll lock/unlock animations.

---

## 8. Utilities

### Command
- **Primitive Base**: `cmdk`
- **HeroUI Skin**: Command menu overlays with search.
- **Core Track**: Popover fade transitions.
- **Motion Track**: Search items filter and shift heights.

### Direction
- **Primitive Base**: `@radix-ui/react-direction`
- **HeroUI Skin**: RTL/LTR direction controller.
- **Core & Motion Tracks**: Context mapping.

### Item
- **Primitive Base**: Group list item component.
- **HeroUI Skin**: Selection item with check indicators.
- **Core & Motion Tracks**: Item selection events.

### Collapsible
- **Primitive Base**: `@radix-ui/react-collapsible`
- **HeroUI Skin**: Height expand block.
- **Core Track**: CSS height slide.
- **Motion Track**: Spring height expand animations.
