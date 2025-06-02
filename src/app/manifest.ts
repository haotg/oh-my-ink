import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Oh My Ink",
    short_name: "Oh My Ink",
    description: "AI-Powered Tattoo Try-On Platform",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    categories: ["productivity", "social"],
    icons: [
      {
        src: "/witch.webp",
        type: "image/webp",
        sizes: "574x574",
      },
    ],
  };
}
