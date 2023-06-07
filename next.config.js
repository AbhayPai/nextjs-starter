/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    assetsBasePath: '',
  },
};

if (process.env.GITHUB_ACTIONS) {
  Object.assign(nextConfig, {
    output: 'export',
    assetPrefix: 'https://abhaypai.github.io/nextjs-starter', // https://nextjs.org/docs/app/api-reference/next-config-js/assetPrefix
    basePath: '/nextjs-starter', // https://nextjs.org/docs/app/api-reference/next-config-js/basePath
    env: {
      assetsBasePath: '/nextjs-starter',
    }
  });
}

module.exports = nextConfig;
