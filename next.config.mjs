/** @type {import('next').NextConfig} */
// Paths
const pathStyles = './src/styles/';

const nextConfig = {
  sassOptions: {
    additionalData: `
          @import "${pathStyles}colors.scss";
          @import "${pathStyles}mixin.scss";
        `,
  },
};

export default nextConfig;
