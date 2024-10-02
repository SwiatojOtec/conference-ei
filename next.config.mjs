/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeholder.co",
        pathname: "/**",
        port: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
