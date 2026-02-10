import { MetadataRoute } from 'next';
import { MOCK_INTERNSHIPS } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://internadda.com';

  // Dynamic routes for all internships
  const internshipUrls = MOCK_INTERNSHIPS.map((internship) => ({
    url: `${baseUrl}/internships/${internship.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Static routes
  const routes = ['', '/internships', '/about', '/blog', '/tests'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  return [...routes, ...internshipUrls];
}
