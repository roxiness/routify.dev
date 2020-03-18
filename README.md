# Routify site 2020

This is the repo for the Routify docs site.

### Usage

**Development** ``npm run dev``
**Dev + codesplitting** ``npm run dev:split``
**Build** ``npm run build``

### Production

Please make sure that url rewrite redirects to ``dist/__app.html`` on our server.

### Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

### Deploy

``npm run deploy:now``
