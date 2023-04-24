const path = require("path");
const nextra = require("nextra");

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
  assetPrefix: '/docs',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: `/docs/_next/data/:path*`,
          destination: '/_next/data/:path*'
         },
      ]
    }
  },
}

const withNextra = nextra({
  // theme: './nextra-theme-docs/src/index.tsx',
  theme: 'nextra-theme-docs',
  // theme: './theme.tsx',
  themeConfig: './theme.config.tsx',
  latex: true,
  defaultShowCopyCode: true,
  // flexSearch: {
  //   codeblocks: true,
  // },
})
 
module.exports = withNextra(nextConfig)
