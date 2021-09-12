import '../style/global.scss';
import { registerSW } from 'virtual:pwa-register';
import App from './App.svelte';

// Update/register service worker
registerSW()();

// Create app
const app = new App({
    target: document.body,
});

export default app;
