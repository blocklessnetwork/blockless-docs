const path = require("path");
const withMarkdoc = require("@markdoc/next.js");

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

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true
})
 
module.exports = withNextra(nextConfig)
