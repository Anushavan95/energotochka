/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  externals: {}, // or exportname@https://site.org/1.js exportname will be kind of default export
};

export default nextConfig;
