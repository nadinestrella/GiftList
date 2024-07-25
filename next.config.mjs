/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.toysrus.es'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
