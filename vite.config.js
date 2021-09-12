import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
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

    plugins: [
        svelte(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                background_color: '#ffffff',
                theme_color: '#E938C2',
                name: 'Routify',
                short_name: 'Routify',
                start_url: '.',
                display: 'standalone',
                icons: [
                    {
                        src: 'public/icons/pwa/manifest-icon-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'maskable any',
                    },
                    {
                        src: 'public/icons/pwa/manifest-icon-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable any',
                    },
                ],
            },
        }),
    ],
});
