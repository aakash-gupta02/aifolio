import { getAllTools } from "@/lib/getTools";

export default function sitemap() {
  const domain = "https://your-domain.com";

  const tools = getAllTools();

  // Dynamic tool detail pages
  const toolUrls = tools.map((tool) => ({
    url: `${domain}/tools/${tool.slug}`,
    lastModified: new Date(),
  }));

  // Permutation pages
  const permutationPages = [
    "/tools/free",
    "/tools/top-rated",
    "/tools/verified",
  ].map((page) => ({
    url: `${domain}${page}`,
    lastModified: new Date(),
  }));

  return [
    // Home
    {
      url: `${domain}`,
      lastModified: new Date(),
    },

    // Tools listing
    {
      url: `${domain}/tools`,
      lastModified: new Date(),
    },

    // Permutation pages
    ...permutationPages,

    // Tool detail pages
    ...toolUrls,
  ];
}
