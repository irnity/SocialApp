/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "assets.awwwards.com"],
  },
}

module.exports = nextConfig

// module.exports = {
//   images: {
//     domains: ["rb.gy"],
//   },
// }
