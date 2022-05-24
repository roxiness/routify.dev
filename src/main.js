import { registerSW } from 'virtual:pwa-register';
import HMR from '@roxi/routify/hmr'
import App from './App.svelte';
import '../scss/global.scss';

// Update/register service worker
registerSW()();

const app = HMR(App, { target: document.body }, 'routify-app')

export default app;

