import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://pulsescore.net/"
    },
    {
      url: "https://pulsescore.net/fixtures"
    },
    {
      url: "https://pulsescore.net/live-score"
    },
    {
      url: "https://pulsescore.net/about-us"
    }
  ];
}
