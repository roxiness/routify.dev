import HMR from '@roxi/routify/hmr'
import App from './App.svelte';
import '../scss/global.scss';

const app = HMR(App, { target: document.body }, 'routify-app')

export default app;

