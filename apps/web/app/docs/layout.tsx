"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SidebarItem {
  title: string
  href: string
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
      { title: "Button", href: "/docs/components/button" },
      { title: "Switch", href: "/docs/components/switch" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Textarea", href: "/docs/components/textarea" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Label", href: "/docs/components/label" },
    ],
  },
]

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="flex h-14 max-w-7xl mx-auto items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fujin-primary to-fujin-secondary">
                Fujin
              </span>
              <span className="text-[10px] font-bold border border-border px-1.5 py-0.5 rounded-md bg-muted/50 text-muted-foreground uppercase">
                Registry
              </span>
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Showcase Dashboard
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 py-6 md:py-10">
          {/* Left Sidebar */}
          <aside className="w-full md:w-56 shrink-0 md:sticky md:top-24 h-auto md:h-[calc(100vh-8rem)] overflow-y-auto pr-4 border-b md:border-b-0 md:border-r border-border/40 pb-6 md:pb-0">
            <div className="flex flex-col gap-6">
              {docsSidebar.map((section, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 px-2">
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
                              "flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium transition-colors hover:bg-muted/50",
                              isActive
                                ? "text-fujin-primary bg-fujin-primary/10 hover:bg-fujin-primary/15"
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

          {/* Docs Content */}
          <main className="flex-1 min-w-0 max-w-2xl mx-auto">
            <article className="prose prose-neutral dark:prose-invert max-w-none">
              {children}
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
