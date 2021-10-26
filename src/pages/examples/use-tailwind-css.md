
---
layout: default
---


# Routify and tailwind
A guide on how to integrate routify and tailwind css. Note this is a community written guide by [GHOST](https://github.com/ghostdevv) and [thaicodingdev](https://github.com/thaicodingdev).

# Getting Started

This guide is desinged for the routify starter template, and should only be a few steps to get up and running! To start lets create our project:

```bash
mkdir my-routify-app

cd my-routify-app

npx @roxi/routify init
```

# Set up tailwind

1.  Install
    ```sh
    npm i tailwindcss -D
    ```

2.  Config

    - We need a tailwind config file, so create a tailwind.config.js in your project folder, it's contents should look like this:

      ```js
      module.exports = {
        purge: ['./src/**/*.svelte', './src/**/*.css'],
      }
      ```

    - Update your `postcss.config.js` to include tailwind

      ```js
      module.exports = {
          plugins: [
              // Keep current plugins and add tailwind below:
              require('tailwindcss')()
          ],
      };
      ```

# Adding our css

In your global.css file (which can be found here: `src/global.css`), add your tailwind @ rules:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You can remove all the default styles from your global css file since you now have tailwind, but it might be good to include a css reset like [greset](https://www.npmjs.com/greset) or [modern normalize](https://www.npmjs.com/package/modern-normalize)

# All done!
You can now run it with `npm run dev`! If you have any issues join [the discord](https://discord.gg/ntKJD5B)
