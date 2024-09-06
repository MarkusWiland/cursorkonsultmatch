/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**', // Tillåter alla vägar från Unsplash
      },
    ],
  },
};

export default nextConfig;
