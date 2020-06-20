import HMR from '@sveltech/routify/hmr'
import App from './App.svelte';
import { globalConfig } from 'svelte-prism'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
globalConfig.transform = code => Prism.plugins.NormalizeWhitespace.normalize(code)

const app = HMR(App, { target: document.body }, 'routify-app')

export default app;

if ('serviceWorker' in navigator) {
    import('workbox-window').then(async ({ Workbox }) => {
        const wb = new Workbox('/sw.js')
        const registration = await wb.register()
        wb.addEventListener('installed', () => (console.log('installed service worker')))
        wb.addEventListener('externalinstalled', () => (console.log('installed service worker')))
    })
}
