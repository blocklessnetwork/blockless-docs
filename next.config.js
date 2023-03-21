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
    return [
      { source: "/docs/_next/:path*", destination: "/_next/:path*" }
    ];
  }
}

module.exports = withMarkdoc({ mode: 'static' })(nextConfig);
