// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bortizp.github.io/proyecto-web-astro",
  base: "/proyecto-web-astro",
  integrations: [sitemap()],
});
