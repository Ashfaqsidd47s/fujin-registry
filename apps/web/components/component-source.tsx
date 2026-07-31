import * as React from "react"
import * as fs from "fs"
import * as path from "path"
import { CopyButton } from "./mdx-components-impl"

interface ComponentSourceProps {
  name: string
  title?: string
  styleName?: string
}

export function ComponentSource({ name, title }: ComponentSourceProps) {
  // Resolve which file we should read
  const rootDir = path.resolve(process.cwd(), "../..")
  let relativePath = ""

  if (title) {
    if (title.includes("variants.ts")) {
      const parts = title.split("/")
      const compName = parts[parts.length - 2] || name
      relativePath = `packages/ui/${compName}/shared/${compName}.variants.ts`
    } else if (title.includes("types.ts")) {
      const parts = title.split("/")
      const compName = parts[parts.length - 2] || name
      relativePath = `packages/ui/${compName}/shared/${compName}.types.ts`
    } else if (title.startsWith("components/ui/")) {
      const filename = path.basename(title)
      const parts = title.split("/")
      const compName = parts[parts.length - 2] === "ui" ? filename.replace(".tsx", "").replace(".ts", "") : parts[parts.length - 2]
      relativePath = `packages/ui/${compName}/core/${filename}`
    } else {
      relativePath = `packages/ui/${name}/core/${name}.tsx`
    }
  } else {
    // Default mapping based on component name
    const cleanName = name.replace("-motion", "")
    const isMotion = name.endsWith("-motion")
    const variant = isMotion ? "motion" : "core"
    relativePath = `packages/ui/${cleanName}/${variant}/${cleanName}.tsx`
  }

  const absolutePath = path.join(rootDir, relativePath)
  let fileContent = ""

  try {
    if (fs.existsSync(absolutePath)) {
      fileContent = fs.readFileSync(absolutePath, "utf8").trim()
    } else {
      fileContent = `// File not found: ${relativePath}`
    }
  } catch (error) {
    fileContent = `// Error loading file: ${(error as Error).message}`
  }

  const displayTitle = title || relativePath.split("/").pop() || name

  return (
    <div className="relative my-6 overflow-hidden rounded-lg border border-border/80 bg-neutral-900 dark:bg-neutral-950 shadow-sm">
      <div className="flex items-center justify-between border-b border-border/10 bg-neutral-900 dark:bg-neutral-950 px-4 py-2">
        <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
          <span>{displayTitle}</span>
        </div>
        <CopyButton value={fileContent} className="h-7 w-7 text-neutral-400 border-neutral-800 bg-neutral-900 hover:bg-neutral-800 hover:text-neutral-200" />
      </div>
      <div className="overflow-x-auto p-4 max-h-[450px]">
        <pre className="font-mono text-xs leading-6 text-neutral-50">
          <code>{fileContent}</code>
        </pre>
      </div>
    </div>
  )
}
