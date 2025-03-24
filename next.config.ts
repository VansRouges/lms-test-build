import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'https://3000-idx-lms-test-buildgit-1742818240593.cluster-y34ecccqenfhcuavp7vbnxv7zk.cloudworkstations.dev',
    '*.local-origin.dev'
  ],
  // other config options can go here
};

export default nextConfig;