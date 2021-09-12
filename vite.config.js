import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    plugins: [svelte()],

    server: {
        port: 5000,
    },

    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve('./src'),
            },
        ],
    },
});
