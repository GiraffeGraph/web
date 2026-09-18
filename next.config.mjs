/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // GitHub Pages serves static files only; no image optimization server.
  images: { unoptimized: true },
};

export default nextConfig;
