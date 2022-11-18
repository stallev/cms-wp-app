/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = () => {
  // const { env } = process;
  // Object.keys(env).filter((data) => (data.includes('__') || data.includes('NODE')) && delete env[data]);

  // next.config.js object
  return {
    images: {
      // loader: 'akamai',
      // path: '',
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      domains: ['wp-blog-media-storage.s3.amazonaws.com'],
    },
    // env: { ...env },
    compress: true,
  };
};
