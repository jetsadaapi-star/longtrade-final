/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}'
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**'
      }
    ]
  },
  env: {
    NEXT_APP_VERSION: 'v1.0.0',
    NEXTAUTH_SECRET: 'longtrade-admin-secret-key-change-in-production',
    NEXTAUTH_URL: 'http://localhost:3002/',
    NEXT_APP_API_URL: 'http://localhost:3001/api/v1',
    NEXT_APP_JWT_SECRET: 'longtrade-jwt-secret-key-change-in-production',
    NEXT_APP_JWT_TIMEOUT: '604800',
    NEXTAUTH_SECRET_KEY: 'longtrade-admin-secret-key-change-in-production'
  }
};

module.exports = nextConfig;
