# Routify site 2020

New design for the Roufity docs site.

### Usage

**Development** ``npm run dev``
**Dev + codesplitting** ``npm run dev:split``
**Build** ``npm run build``

### Compiling SCSS

Run

```bash
npm run-script css-dev
```

### Production

Please make sure that url rewrite is enabled on our server.

- For apps without code splitting redirect to index.html
- For apps with code splitting redirect to dynamic.html


### Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

### Deploy

`npm install -g now`
`cd public && now deploy --name routify-docs-2020 --prod -A ../now.json`

