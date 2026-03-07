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
      // Removed off-industry pages — redirect to services overview
      {
        source: "/tjanster/rorinspektioner",
        destination: "/tjanster",
        permanent: true,
      },
      {
        source: "/tjanster/solcellspark-inspektion",
        destination: "/tjanster",
        permanent: true,
      },
      // Merged pages
      {
        source: "/branscher/elnat",
        destination: "/branscher/energibolag",
        permanent: true,
      },
      {
        source: "/branscher/industri",
        destination: "/branscher/energibolag",
        permanent: true,
      },
      {
        source: "/stormrespons",
        destination: "/tjanster/stormskadeinspektion",
        permanent: true,
      },
      // Removed placeholder pages — redirect to most relevant page
      {
        source: "/malgrupper",
        destination: "/branscher/energibolag",
        permanent: true,
      },
      {
        source: "/sakerhet",
        destination: "/tjanster/kraftledningsinspektion/datasakerhet",
        permanent: true,
      },
      {
        source: "/case",
        destination: "/tjanster/kraftledningsinspektion/case",
        permanent: true,
      },
      {
        source: "/uppdrag",
        destination: "/tjanster",
        permanent: true,
      },
      {
        source: "/plattform",
        destination: "/tjanster/kraftledningsinspektion/dataleveranser",
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
