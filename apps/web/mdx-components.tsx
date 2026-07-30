import type { MDXComponents } from "mdx/types"
import * as React from "react"
import { cn } from "@/lib/utils"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        className={cn(
          "font-heading mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className={cn(
          "font-heading mt-12 scroll-m-20 border-b border-border/60 pb-2 text-2xl font-semibold tracking-tight text-foreground first:mt-0",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className={cn(
          "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h4
        className={cn(
          "font-heading mt-6 scroll-m-20 text-lg font-semibold tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className={cn("leading-7 [&:not(:first-child)]:mt-6 text-foreground/90 text-sm", className)}
        {...props}
      />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)} {...props} />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
      <li className={cn("text-sm text-foreground/80 leading-7", className)} {...props} />
    ),
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className={cn(
          "mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={cn("rounded-md border border-border/80 my-6", className)}
        alt={alt}
        {...props}
      />
    ),
    hr: ({ ...props }) => <hr className="my-4 md:my-8 border-border/60" {...props} />,
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-y-auto rounded-lg border border-border/60">
        <table className={cn("w-full border-collapse text-left text-sm", className)} {...props} />
      </div>
    ),
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr
        className={cn(
          "m-0 border-t border-border/60 p-0 even:bg-muted/40",
          className
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className={cn(
          "border-b border-border/60 px-4 py-3 text-left font-semibold text-foreground [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td
        className={cn(
          "px-4 py-3 text-left text-foreground/80 [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className={cn(
          "mb-4 mt-6 overflow-x-auto rounded-lg border border-border/80 bg-neutral-900 dark:bg-neutral-950 p-4 font-mono text-xs leading-6 text-neutral-50 shadow-sm",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <code
        className={cn(
          "relative rounded-sm bg-muted/70 px-[0.3rem] py-[0.15rem] font-mono text-[11px] font-semibold text-foreground border border-border/40",
          className
        )}
        {...props}
      />
    ),
    a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
        className={cn(
          "font-medium underline underline-offset-4 text-fujin-primary hover:opacity-85",
          className
        )}
        {...props}
      />
    ),
    ...components,
  }
}
