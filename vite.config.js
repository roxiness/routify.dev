// vite.config.js
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";
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
