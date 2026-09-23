import type { MetadataRoute } from "next";
import { products, services, blog } from "@/lib/site";

const domain = "https://ambrscale.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: domain, changeFrequency: "monthly", priority: 1 },
    { url: `${domain}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${domain}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${domain}/portfolio`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${domain}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${domain}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${domain}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${domain}/sitemap`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${domain}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${domain}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const productsRoutes = products.map((p) => ({
    url: `${domain}/products/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const servicesRoutes = services.map((s) => ({
    url: `${domain}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blog.map((p) => ({
    url: `${domain}/blog/${p.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...productsRoutes, ...servicesRoutes, ...blogRoutes];
}