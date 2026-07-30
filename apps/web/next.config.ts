import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Allow rendering components inside workspace packages
  transpilePackages: ["@fujin/ui", "@fujin/blocks"]
}

const withMDX = createMDX({
  // Options can go here if needed
})

export default withMDX(nextConfig)
