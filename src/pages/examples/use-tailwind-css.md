---
layout: default
---

# Routify and Tailwind CSS

A guide on how to integrate routify and Tailwind css. Note this is a community written guide by [GHOST](https://github.com/ghostdevv), [thaicodingdev](https://github.com/thaicodingdev) and [haudraufhaun](https://github.com/haudraufhaun).

# Getting Started

This guide is desinged for the routify starter template, and should only be a few steps to get up and running! To start lets create our project:

```bash
mkdir my-routify-app

cd my-routify-app

npx @roxi/routify init
```

# Set up Tailwind CSS

1.  Install the npm package:

    ```sh
    npm i tailwindcss -D
    ```

2.  Do following configuration:

    - We need a tailwind config file, so create the `tailwind.config.js` file with following command:

    ```sh
    npx tailwindcss init
    ```

    - Configure `content` as following:

    ```js
    module.exports = {
      content: ["./src/**/*.svelte", "./src/**/*.css", "./index.html"],
      // more config below here
    };
    ```

    - Update your `postcss.config.js` to include tailwind

    ```js
    module.exports = {
      plugins: [
        // Keep current plugins and add tailwind below:
        require("tailwindcss")(),
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
