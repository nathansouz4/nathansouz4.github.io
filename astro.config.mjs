import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nathansouz4.github.io",
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
