/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  devIndicators: false,

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecom.aliusama.dev",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
