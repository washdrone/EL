/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Redirect old URL structure to new /tjanster/ structure
      {
        source: "/elnatsinspektion-med-dronare",
        destination: "/tjanster/kraftledningsinspektion",
        permanent: true,
      },
      {
        source: "/elnatsinspektion-med-dronare/kontakt",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/elnatsinspektion-med-dronare/:path*",
        destination: "/tjanster/kraftledningsinspektion/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
