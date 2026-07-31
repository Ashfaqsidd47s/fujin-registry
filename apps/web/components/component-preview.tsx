import * as React from "react"
import * as fs from "fs"
import * as path from "path"
import { Tabs, TabsList, TabsTrigger, TabsContent, CopyButton } from "./mdx-components-impl"

// Import all demos
import { ButtonDemo } from "./demos/button-demo"
import { SwitchDemo } from "./demos/switch-demo"
import { CardDemo } from "./demos/card-demo"
import { InputDemo } from "./demos/input-demo"
import { TextareaDemo } from "./demos/textarea-demo"
import { LabelDemo } from "./demos/label-demo"
import { AccordionDemo } from "./demos/accordion-demo"
import { AspectRatioDemo } from "./demos/aspect-ratio-demo"
import { BreadcrumbDemo } from "./demos/breadcrumb-demo"
import { SeparatorDemo } from "./demos/separator-demo"
import { TabsDemo } from "./demos/tabs-demo"
import { AlertDemo } from "./demos/alert-demo"
import { AlertDialogDemo } from "./demos/alert-dialog-demo"
import { DialogDemo } from "./demos/dialog-demo"
import { DrawerDemo } from "./demos/drawer-demo"
import { HoverCardDemo } from "./demos/hover-card-demo"
import { PopoverDemo } from "./demos/popover-demo"
import { ProgressDemo } from "./demos/progress-demo"
import { SheetDemo } from "./demos/sheet-demo"
import { SkeletonDemo } from "./demos/skeleton-demo"
import { SonnerDemo } from "./demos/sonner-demo"
import { SpinnerDemo } from "./demos/spinner-demo"
import { ToastDemo } from "./demos/toast-demo"
import { TooltipDemo } from "./demos/tooltip-demo"


const demos: Record<string, React.ComponentType> = {
  "button-demo": ButtonDemo,
  "switch-demo": SwitchDemo,
  "card-demo": CardDemo,
  "input-demo": InputDemo,
  "textarea-demo": TextareaDemo,
  "label-demo": LabelDemo,
  "accordion-demo": AccordionDemo,
  "aspect-ratio-demo": AspectRatioDemo,
  "breadcrumb-demo": BreadcrumbDemo,
  "separator-demo": SeparatorDemo,
  "tabs-demo": TabsDemo,
  "alert-demo": AlertDemo,
  "alert-dialog-demo": AlertDialogDemo,
  "dialog-demo": DialogDemo,
  "drawer-demo": DrawerDemo,
  "hover-card-demo": HoverCardDemo,
  "popover-demo": PopoverDemo,
  "progress-demo": ProgressDemo,
  "sheet-demo": SheetDemo,
  "skeleton-demo": SkeletonDemo,
  "sonner-demo": SonnerDemo,
  "spinner-demo": SpinnerDemo,
  "toast-demo": ToastDemo,
  "tooltip-demo": TooltipDemo,
}



interface ComponentPreviewProps {
  name: string
  styleName?: string
}

export function ComponentPreview({ name }: ComponentPreviewProps) {
  const DemoComponent = demos[name]

  // Read the source of the demo file
  const demoFilePath = path.join(process.cwd(), "components/demos", `${name}.tsx`)
  let demoSourceCode = ""

  try {
    if (fs.existsSync(demoFilePath)) {
      demoSourceCode = fs.readFileSync(demoFilePath, "utf8").trim()
    } else {
      demoSourceCode = `// Demo file not found at: ${demoFilePath}`
    }
  } catch (error) {
    demoSourceCode = `// Error reading demo file: ${(error as Error).message}`
  }

  return (
    <div className="relative my-6 w-full">
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b border-border/80 bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview" className="relative rounded-lg border border-border/80 bg-background/50">
          <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-radial from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 rounded-lg">
            {DemoComponent ? (
              <DemoComponent />
            ) : (
              <div className="text-sm text-muted-foreground">Demo component &quot;{name}&quot; not found.</div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="relative overflow-hidden rounded-lg border border-border/80 bg-neutral-900 dark:bg-neutral-950 shadow-sm">
            <div className="flex items-center justify-between border-b border-border/10 bg-neutral-900 dark:bg-neutral-950 px-4 py-2">
              <span className="text-xs text-neutral-400 font-mono">{name}.tsx</span>
              <CopyButton
                value={demoSourceCode}
                className="h-7 w-7 text-neutral-400 border-neutral-800 bg-neutral-900 hover:bg-neutral-800 hover:text-neutral-200"
              />
            </div>
            <div className="overflow-x-auto p-4 max-h-[400px]">
              <pre className="font-mono text-xs leading-6 text-neutral-50">
                <code>{demoSourceCode}</code>
              </pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
