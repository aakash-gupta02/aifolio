import { getAllTools } from "@/lib/getTools";

export default function sitemap() {
    const domain = "https://your-domain.com";

  const tools = getAllTools();

  const toolUrls = tools.map((tool) => ({
    url: `${domain}/tools/${tool.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${domain}`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/tools`,
      lastModified: new Date(),
    },
    ...toolUrls,
  ];
}
