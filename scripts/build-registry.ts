import * as fs from "fs"
import * as path from "path"

const rootDir = path.resolve(__dirname, "..")
const packagesDir = path.join(rootDir, "packages")
const registryDir = path.join(rootDir, "registry")
const publicDir = path.join(rootDir, "apps/web/public/r")

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

// Ensure output directories exist
ensureDir(registryDir)
ensureDir(publicDir)

interface RegistryFile {
  path: string
  content?: string
  target?: string
  type: string
}

interface RegistryItem {
  name: string
  type: string
  title?: string
  description?: string
  dependencies?: string[]
  registryDependencies?: string[]
  files?: RegistryFile[]
  cssVars?: Record<string, any>
  css?: Record<string, any>
  config?: Record<string, any>
}

const allRegistryItems: RegistryItem[] = []

// Helper to copy directory content recursively
function copyRecursive(src: string, dest: string) {
  if (fs.statSync(src).isDirectory()) {
    ensureDir(dest)
    fs.readdirSync(src).forEach(child => {
      copyRecursive(path.join(src, child), path.join(dest, child))
    })
  } else {
    fs.copyFileSync(src, dest)
  }
}

// 1. Process Packages (UI, Blocks, Themes, Utils)
const packageTypes = ["ui", "blocks", "themes", "utils"]

packageTypes.forEach(pkgType => {
  const pkgTypeDir = path.join(packagesDir, pkgType)
  if (!fs.existsSync(pkgTypeDir)) return

  const items = fs.readdirSync(pkgTypeDir)
  items.forEach(itemName => {
    const itemPath = path.join(pkgTypeDir, itemName)
    const registryItemJsonPath = path.join(itemPath, "registry-item.json")

    if (!fs.existsSync(registryItemJsonPath)) return

    // Parse the component's registry-item.json
    const rawData = fs.readFileSync(registryItemJsonPath, "utf8")
    const manifest = JSON.parse(rawData)

    // Copy package folder to registry folder
    // e.g. packages/ui/button -> registry/ui/button
    let destRegistryType = pkgType
    if (pkgType === "utils") destRegistryType = "lib"
    if (pkgType === "themes") destRegistryType = "themes"
    
    const itemDestDir = path.join(registryDir, destRegistryType, itemName)
    ensureDir(itemDestDir)
    copyRecursive(itemPath, itemDestDir)

    // Check if the component has variants
    if (manifest.variants) {
      // Process each variant (e.g. core, motion)
      for (const [variantName, variantConfig] of Object.entries(manifest.variants)) {
        const isCore = variantName === "core"
        const finalName = isCore ? manifest.name : `${manifest.name}-${variantName}`
        const finalTitle = isCore ? manifest.title : `${manifest.title} (${variantName.charAt(0).toUpperCase() + variantName.slice(1)})`

        const vConfig = variantConfig as any
        const registryItem: RegistryItem = {
          name: finalName,
          type: manifest.type,
          title: finalTitle,
          description: manifest.description,
          dependencies: [...(manifest.dependencies || []), ...(vConfig.dependencies || [])],
          registryDependencies: [...(manifest.registryDependencies || []), ...(vConfig.registryDependencies || [])],
          files: []
        }

        // Add files for this variant
        if (vConfig.files) {
          vConfig.files.forEach((file: any) => {
            const srcFilePath = path.join(rootDir, file.path)
            if (fs.existsSync(srcFilePath)) {
              const fileContent = fs.readFileSync(srcFilePath, "utf8")
              
              // Target determines where shadcn installer places the file
              // If target is components/ui/button.tsx, shadcn will place it there.
              // We specify paths relative to what the shadcn configuration expects.
              let targetPath = file.target
              if (!targetPath) {
                const baseName = path.basename(file.path)
                if (manifest.type === "registry:ui") {
                  targetPath = `ui/${baseName}`
                } else {
                  targetPath = `components/${baseName}`
                }
              }

              registryItem.files?.push({
                path: targetPath,
                content: fileContent,
                type: file.type
              })
            }
          })
        }

        // Add to public json outputs
        fs.writeFileSync(
          path.join(publicDir, `${finalName}.json`),
          JSON.stringify(registryItem, null, 2),
          "utf8"
        )
        allRegistryItems.push(registryItem)
      }
    } else {
      // Single variant / standard component
      const registryItem: RegistryItem = {
        name: manifest.name,
        type: manifest.type,
        title: manifest.title,
        description: manifest.description,
        dependencies: manifest.dependencies || [],
        registryDependencies: manifest.registryDependencies || [],
        cssVars: manifest.cssVars,
        css: manifest.css,
        config: manifest.config,
        files: []
      }

      if (manifest.files) {
        manifest.files.forEach((file: any) => {
          const srcFilePath = path.join(rootDir, file.path)
          if (fs.existsSync(srcFilePath)) {
            const fileContent = fs.readFileSync(srcFilePath, "utf8")
            let targetPath = file.target
            if (!targetPath) {
              const baseName = path.basename(file.path)
              if (manifest.type === "registry:lib") {
                targetPath = `lib/${baseName}`
              } else if (manifest.type === "registry:ui") {
                targetPath = `ui/${baseName}`
              } else {
                targetPath = `components/${baseName}`
              }
            }

            registryItem.files?.push({
              path: targetPath,
              content: fileContent,
              type: file.type
            })
          }
        })
      }

      fs.writeFileSync(
        path.join(publicDir, `${manifest.name}.json`),
        JSON.stringify(registryItem, null, 2),
        "utf8"
      )
      allRegistryItems.push(registryItem)
    }
  })
})

// 2. Generate Consolidated registry.json
const globalRegistry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "fujin",
  homepage: "https://fujin.com",
  items: allRegistryItems
}

fs.writeFileSync(
  path.join(registryDir, "registry.json"),
  JSON.stringify(globalRegistry, null, 2),
  "utf8"
)

fs.writeFileSync(
  path.join(publicDir, "registry.json"),
  JSON.stringify(globalRegistry, null, 2),
  "utf8"
)

console.log("Registry built successfully!")
console.log(`Generated ${allRegistryItems.length} registry items.`)
