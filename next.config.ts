import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  ebpack: (config: any) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
};

export default nextConfig;
