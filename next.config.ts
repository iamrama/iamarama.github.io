import type { NextConfig } from 'next';

const [ownerName = '', repoName = ''] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSiteRepo =
  Boolean(ownerName) && Boolean(repoName) && repoName === `${ownerName}.github.io`;
const defaultBasePath =
  process.env.GITHUB_ACTIONS && repoName && !isUserSiteRepo
    ? `/${repoName}`
    : '';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? defaultBasePath;

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
