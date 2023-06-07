import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://github.com/AbhayPai/nextjs-starter',
      lastModified: new Date(),
    },
    {
      url: 'https://github.com/AbhayPai/nextjs-starter/blog',
      lastModified: new Date(),
    },
  ];
}