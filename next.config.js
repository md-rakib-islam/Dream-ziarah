/** @type {import('next').NextConfig} */

const prodConfig = {
  protocol: "https",
  hostname: "ziarahapi.dreamtourism.co.uk",
  port: "",
  pathname: "**/media/**",
};
const localConfig = {
  protocol: "http",
  hostname: "192.168.0.100",
  port: "8000",
  pathname: "**/media/**",
};

const nextConfig = {
  images: {
    remotePatterns: [localConfig],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
  output: "standalone",
};

module.exports = nextConfig;
