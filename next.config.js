/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["cdn1.ntv.com.tr"],
  },
}

module.exports = {
  reactStrictMode: true,
  jsc: {
    parser: {
      syntax: "ecmascript",
      jsx: true,
    },
    transform: {
      react: {
        throwIfNamespace: false,
      },
    },
  },
 
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}