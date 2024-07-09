/** @type {import('next').NextConfig} */

import pkg from './next-i18next.config.js';

const nextConfig = {
  i18n: pkg.i18n,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

export default nextConfig;
