const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stonepharmacy.vercel.app';

export function GET() {
  const content = `# AI Permissions
User-agent: *
Allow: /
Disallow: /studio


# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
