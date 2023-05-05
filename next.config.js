const path = require("path");
const nextra = require("nextra");

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  pageExtensions: ["md", "mdx", "js", "jsx", "ts", "tsx"],
  basePath: '/docs',
}

const withNextra = nextra({
  // theme: 'nextra-theme-docs',
  theme: './theme.tsx',
  themeConfig: './theme.config.tsx',
  latex: true,
  defaultShowCopyCode: true,
})
 
module.exports = withNextra(nextConfig)
