---
layout: default
---

<!-- routify:options index=25 -->
<!-- routify:options title="PWA & offline first" -->

# PWA & Offline avaibility
To enable offline availability, you can turn your SPA into a PWA (Progressive Web App).
First, import `src/Serviceworker.svelte` from any file. Then, add the `<Serviceworker/>` component.


### Example:
```
    <!-- src/App.svelte -->
    <script>
      ...
      import Serviceworker from './Serviceworker.svelte';
      ...
    </script>
    ...
    <Serviceworker/>
```

**Note:** For now, PWA works in production build, so you can run "npm run build", and subsequently "npm run serve" to test out your PWA.
It is Google Chrome's lighthouse compatible.
