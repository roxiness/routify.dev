import HMR from '@sveltech/routify/hmr'
import App from './App.svelte';
import { global } from 'svelte-prism'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
global.transform = code => Prism.plugins.NormalizeWhitespace.normalize(code)

const app = HMR(App, { target: document.body }, 'routify-app')

export default app;
