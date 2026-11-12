import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WDGLOW Christmas Light Installation",
    short_name: "WDGLOW",
    description: "Holiday lighting installation in Westerly, Rhode Island, and Connecticut.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#10241c",
  };
}
