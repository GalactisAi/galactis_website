import type { NextConfig } from "next";

/**
 * Next.js 16 Configuration for Vercel Deployment
 * 
 * IMPORTANT NOTES:
 * - Next.js 16 uses Turbopack by default (faster builds)
 * - ESLint config moved to separate .eslintrc or removed (handled by next lint)
 * - Webpack config replaced with Turbopack config if needed
 * - All settings optimized for Vercel's production environment
 */
const nextConfig: NextConfig = {
  // React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization settings for Vercel
  images: {
    // Allow images from external domains if needed
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Optimize images for better performance
    formats: ["image/avif", "image/webp"],
  },

  // TypeScript configuration
  typescript: {
    // Don't fail build on type errors (set to false for strict checking)
    ignoreBuildErrors: false,
  },

  // Output configuration - Vercel handles this automatically
  // No need to specify output for Vercel deployment

  // Compiler options
  compiler: {
    // Remove console logs in production (optional)
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"], // Keep errors and warnings
    } : false,
  },

  // Turbopack configuration (Next.js 16+)
  // Empty config tells Next.js to use default Turbopack settings
  // Remove webpack config as Turbopack is the new default
  turbopack: {},
};

export default nextConfig;
