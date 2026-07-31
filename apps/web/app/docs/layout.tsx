"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronRight, ExternalLink, Github, Menu, Moon, Sun, X } from "lucide-react"

interface SidebarItem {
  title: string
  href: string
  isNew?: boolean
}

interface SidebarSection {
  title: string
  items: SidebarItem[]
}

const docsSidebar: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/docs/components/accordion" },
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Alert Dialog", href: "/docs/components/alert-dialog" },
      { title: "Aspect Ratio", href: "/docs/components/aspect-ratio" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "Drawer", href: "/docs/components/drawer" },
      { title: "Hover Card", href: "/docs/components/hover-card" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Label", href: "/docs/components/label" },
      { title: "Popover", href: "/docs/components/popover" },
      { title: "Progress", href: "/docs/components/progress" },
      { title: "Separator", href: "/docs/components/separator" },
      { title: "Sheet", href: "/docs/components/sheet" },
      { title: "Skeleton", href: "/docs/components/skeleton" },
      { title: "Sonner", href: "/docs/components/sonner" },
      { title: "Spinner", href: "/docs/components/spinner" },
      { title: "Switch", href: "/docs/components/switch" },
      { title: "Tabs", href: "/docs/components/tabs" },
      { title: "Textarea", href: "/docs/components/textarea" },
      { title: "Toast", href: "/docs/components/toast" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
]

const componentMeta: Record<string, { radix?: string; title: string }> = {
  accordion: { radix: "https://www.radix-ui.com/primitives/docs/components/accordion", title: "Accordion" },
  alert: { title: "Alert" },
  "alert-dialog": { radix: "https://www.radix-ui.com/primitives/docs/components/alert-dialog", title: "Alert Dialog" },
  "aspect-ratio": { radix: "https://www.radix-ui.com/primitives/docs/components/aspect-ratio", title: "Aspect Ratio" },
  badge: { title: "Badge" },
  breadcrumb: { title: "Breadcrumb" },
  button: { radix: "https://www.radix-ui.com/primitives/docs/components/slot", title: "Button" },
  card: { title: "Card" },
  checkbox: { radix: "https://www.radix-ui.com/primitives/docs/components/checkbox", title: "Checkbox" },
  dialog: { radix: "https://www.radix-ui.com/primitives/docs/components/dialog", title: "Dialog" },
  drawer: { title: "Drawer" },
  "hover-card": { radix: "https://www.radix-ui.com/primitives/docs/components/hover-card", title: "Hover Card" },
  input: { title: "Input" },
  label: { radix: "https://www.radix-ui.com/primitives/docs/components/label", title: "Label" },
  popover: { radix: "https://www.radix-ui.com/primitives/docs/components/popover", title: "Popover" },
  progress: { radix: "https://www.radix-ui.com/primitives/docs/components/progress", title: "Progress" },
  separator: { radix: "https://www.radix-ui.com/primitives/docs/components/separator", title: "Separator" },
  sheet: { radix: "https://www.radix-ui.com/primitives/docs/components/dialog", title: "Sheet" },
  skeleton: { title: "Skeleton" },
  sonner: { title: "Sonner" },
  spinner: { title: "Spinner" },
  switch: { radix: "https://www.radix-ui.com/primitives/docs/components/switch", title: "Switch" },
  tabs: { radix: "https://www.radix-ui.com/primitives/docs/components/tabs", title: "Tabs" },
  textarea: { title: "Textarea" },
  toast: { radix: "https://www.radix-ui.com/primitives/docs/components/toast", title: "Toast" },
  tooltip: { radix: "https://www.radix-ui.com/primitives/docs/components/tooltip", title: "Tooltip" },
}

// =========================================================================
// ── TABLE OF CONTENTS CLIENT COMPONENT ──────────────────────────────────
// =========================================================================
interface TocItem {
  id: string
  title: string
  level: number
}

function TableOfContents() {
  const [items, setItems] = React.useState<TocItem[]>([])
  const [activeId, setActiveId] = React.useState<string>("")
  const pathname = usePathname()

  React.useEffect(() => {
    // Small delay to allow MDX content to render fully in DOM
    const timer = setTimeout(() => {
      const headingElements = Array.from(document.querySelectorAll("article h2, article h3"))
      const tocItems = headingElements
        .map((el) => ({
          id: el.id,
          title: el.textContent || "",
          level: el.tagName === "H2" ? 2 : 3,
        }))
        .filter((item) => item.id)

      setItems(tocItems)

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id)
            }
          })
        },
        { rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
      )

      headingElements.forEach((el) => {
        if (el.id) observer.observe(el)
      })

      return () => {
        headingElements.forEach((el) => {
          if (el.id) observer.unobserve(el)
        })
        observer.disconnect()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  if (items.length === 0) return null

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-foreground">On This Page</p>
      <ul className="space-y-2 text-[13px] text-muted-foreground">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
          >
            <a
              href={`#${item.id}`}
              className={cn(
                "hover:text-foreground transition-colors duration-150 block py-0.5",
                activeId === item.id
                  ? "text-primary font-semibold border-l-2 border-primary pl-2 -ml-2.5"
                  : "text-muted-foreground pl-0"
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

// =========================================================================
// ── DOCS LAYOUT MAIN COMPONENT ───────────────────────────────────────────
// =========================================================================
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)

  // Toggle Theme (add/remove 'dark' class to html element)
  React.useEffect(() => {
    const root = window.document.documentElement
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      root.classList.add("dark")
      setIsDark(true)
    } else {
      root.classList.remove("dark")
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  // Close mobile sidebar on route change
  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Resolve component name from path
  const pathParts = pathname.split("/")
  const isComponentPage = pathname.includes("/docs/components/")
  const currentComponentName = isComponentPage ? pathParts[pathParts.length - 1] : ""
  const meta = componentMeta[currentComponentName]

  // Construct Breadcrumbs
  const breadcrumbs = pathParts.filter(Boolean).map((part) => {
    const isFirst = part === "docs"
    return {
      label: isFirst ? "Docs" : part.charAt(0).toUpperCase() + part.slice(1),
      href: isFirst ? "/docs/introduction" : `/docs/${part}`,
    }
  })

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-150">
      {/* ─── HEADER ──────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="flex h-14 max-w-7xl mx-auto items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2.5">
              <span className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fujin-primary to-fujin-secondary">
                Fujin
              </span>
              <span className="text-[10px] font-bold border border-border px-1.5 py-0.5 rounded-md bg-muted/60 text-muted-foreground uppercase tracking-wider">
                Registry
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Showcase Dashboard
            </Link>

            <button
              onClick={toggleTheme}
              className="rounded-md p-1.5 hover:bg-muted border border-border/60 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>

            <a
              href="https://github.com/shadcn-ui/ui"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-1.5 hover:bg-muted border border-border/60 text-muted-foreground hover:text-foreground transition-all"
            >
              <Github className="size-4" />
            </a>

            <button
              className="md:hidden rounded-md p-1.5 hover:bg-muted border border-border/60 text-muted-foreground hover:text-foreground cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* ─── MAIN CONTENT CONTAINER ──────────────────────────────────────────── */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 py-6 md:py-10">
          
          {/* Left Sidebar (Desktop) */}
          <aside className="hidden md:block w-56 shrink-0 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-4 border-r border-border/40 pb-6 scrollbar-thin">
            <div className="flex flex-col gap-6">
              {docsSidebar.map((section, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-foreground/50 px-2">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col gap-1">
                    {section.items.map((item, idx) => {
                      const isActive = pathname === item.href
                      return (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex w-full items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors hover:bg-muted/40",
                              isActive
                                ? "text-fujin-primary bg-fujin-primary/10 font-semibold hover:bg-fujin-primary/15"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {item.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Mobile Sidebar overlay */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-background/95 pt-20 px-6 overflow-y-auto">
              <div className="flex flex-col gap-6">
                {docsSidebar.map((section, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-foreground/50 px-2">
                      {section.title}
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {section.items.map((item, idx) => {
                        const isActive = pathname === item.href
                        return (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className={cn(
                                "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                isActive
                                  ? "text-fujin-primary bg-fujin-primary/10 font-semibold"
                                  : "text-muted-foreground"
                              )}
                            >
                              {item.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Central Main Content */}
          <main className="flex-1 min-w-0 max-w-3xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4 font-medium" aria-label="Breadcrumb">
              {breadcrumbs.map((bc, idx) => {
                const isLast = idx === breadcrumbs.length - 1
                return (
                  <React.Fragment key={idx}>
                    {idx > 0 && <ChevronRight className="size-3 text-muted-foreground/60" />}
                    {isLast ? (
                      <span className="text-foreground truncate">{bc.label}</span>
                    ) : (
                      <Link href={bc.href} className="hover:text-foreground transition-colors">
                        {bc.label}
                      </Link>
                    )}
                  </React.Fragment>
                )
              })}
            </nav>

            {/* Dynamic Metadata links under Title */}
            {isComponentPage && meta && (
              <div className="flex flex-wrap items-center gap-3 mb-6 text-xs font-semibold">
                <span className="border border-border/80 rounded-md px-2 py-0.5 bg-muted/30 text-muted-foreground uppercase text-[10px] tracking-wider">
                  Component
                </span>
                {meta.radix && (
                  <a
                    href={meta.radix}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-foreground text-muted-foreground transition-colors"
                  >
                    Radix UI <ExternalLink className="size-3" />
                  </a>
                )}
                <a
                  href={`https://github.com/shadcn-ui/ui/tree/main/apps/v4/registry/new-york-v4/ui/${currentComponentName}.tsx`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-foreground text-muted-foreground transition-colors"
                >
                  Source <ExternalLink className="size-3" />
                </a>
              </div>
            )}

            <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-h1:text-4xl prose-h1:tracking-tight prose-h2:text-2xl prose-h2:border-b prose-h2:border-border/60 prose-h2:pb-2 prose-h2:mt-10 prose-p:text-sm prose-p:leading-7 prose-p:text-foreground/90">
              {children}
            </article>
          </main>

          {/* Right Sidebar (Table of Contents) */}
          <aside className="hidden xl:block w-60 shrink-0 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pl-4 border-l border-border/40 pb-6">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </div>
  )
}
