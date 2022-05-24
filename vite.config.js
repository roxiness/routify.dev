// vite.config.js
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import { mdsvex } from "mdsvex";
import { resolve } from "path";
import slug from "remark-slug";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [
        mdsvex({
          remarkPlugins: [slug],
          extension: ".md",
          layout: {
            blogpost: "./src/pages/blog/_components/Layout.svelte",
            default: "./src/components/md-layouts/Default.svelte",
          },
        }),
        preprocess(),
      ],

      extensions: [".svelte", ".md"],
    }),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        background_color: "#ffffff",
        theme_color: "#E938C2",
        name: "Routify",
        short_name: "Routify",
        start_url: ".",
        display: "standalone",
        icons: [
          {
            "src": "public/icons/pwa/manifest-icon-192.maskable.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "public/icons/pwa/manifest-icon-192.maskable.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "public/icons/pwa/manifest-icon-512.maskable.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "public/icons/pwa/manifest-icon-512.maskable.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ],
      },
    }),
  ],

  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve("./src"),
      },
    ],
  },
});
