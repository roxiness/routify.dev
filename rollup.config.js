/*

  The rollup config for Routify site 2020.
  If you are looking here, you might be looking how to create a website with Routify.
  We use a few packages that are different from a base Svelte setup. Some of these include:

    * rollup-plugin-svg: to import SVGs for icons
    * mdsvex: markdown parsing for the blog
    * rollup/plugin-alias: to set up an alias for easier component imports

*/

import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy'
import del from 'del'
import svg from 'rollup-plugin-svg';
import alias from '@rollup/plugin-alias'
import { mdsvex } from 'mdsvex'
import slug from 'remark-slug'


const staticDir = 'static'
const distDir = 'dist'
const buildDir = `${distDir}/build`
const production = !process.env.ROLLUP_WATCH;
const bundling = process.env.BUNDLING || production ? 'dynamic' : 'bundle'
const shouldPrerender = (typeof process.env.PRERENDER !== 'undefined') ? process.env.PRERENDER : !!production


del.sync(distDir + '/**')

function createConfig({ output, inlineDynamicImports, plugins = [] }) {
  const transform = inlineDynamicImports ? bundledTransform : dynamicTransform

  return {
    inlineDynamicImports,
    input: `src/main.js`,
    output: {
      name: 'app',
      sourcemap: true,
      ...output
    },
    plugins: [
      copy({
        targets: [
          { src: staticDir + '/**/!(__index.html)', dest: distDir },
          { src: `${staticDir}/__index.html`, dest: distDir, rename: '__app.html', transform },
        ], copyOnce: true
      }),
      svg(),
      alias({ entries: [{ find: '@', replacement: './src' },] }),
      svelte({
        extensions: ['.svelte', '.md', '.svx'],
        preprocess: mdsvex({
          remarkPlugins: [slug],
          extension: '.svx',
          layout: {
            "blogpost": "./src/pages/blog/_components/Layout.svelte",
            "default": "./src/components/md-layouts/Default.svelte"
          }
        }),
        // enable run-time checks when not in production
        dev: !production,
        // we'll extract any component CSS out into
        // a separate file — better for performance
        css: css => {
          css.write(`${buildDir}/bundle.css`);
        }
      }),

      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration —
      // consult the documentation for details:
      // https://github.com/rollup/rollup-plugin-commonjs
      resolve({
        browser: true,
        dedupe: importee => importee.match(/^(svelte|routify-dev-ui)($|\/)/)
      }),
      commonjs(),


      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser(),

      ...plugins
    ],
    watch: {
      clearScreen: false,
      buildDelay: 100,
      // chokidar: { ignored: "**/tmp/routes.js" }
    }
  }
}


const bundledConfig = {
  inlineDynamicImports: true,
  output: {
    format: 'iife',
    file: `${buildDir}/bundle.js`
  },
  plugins: [
    !production && serve(),
    !production && livereload(distDir),
    sass(production)
  ]
}

const dynamicConfig = {
  inlineDynamicImports: false,
  output: {
    format: 'esm',
    dir: buildDir
  },
  plugins: [
    !production && livereload(distDir),
  ]
}

const configs = [createConfig(bundledConfig)]
if (bundling === 'dynamic')
  configs.push(createConfig(dynamicConfig))
if (shouldPrerender) [...configs].pop().plugins.push(prerender())
export default configs


function sass(production) {
  const sassTask = production ? 'build:sass' : 'watch:sass'
  let started = false;
  return {
    writeBundle() {
      if (!started) {
        started = true
        require('child_process').spawn('npm', ['run', sassTask], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  }
}

function serve() {
  let started = false;
  return {
    writeBundle() {
      if (!started) {
        started = true;
        require('child_process').spawn('npm', ['run', 'serve'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  };
}

function prerender() {
  return {
    writeBundle() {
      if (shouldPrerender) {
        require('child_process').spawn('npm', ['run', 'export'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  }
}

function bundledTransform(contents) {
  return contents.toString().replace('__SCRIPT__', `
    <script defer src="/build/bundle.js" ></script>
  `)
}

function dynamicTransform(contents) {
  return contents.toString().replace('__SCRIPT__', `
    <script type="module" defer src="https://unpkg.com/dimport@1.0.0/dist/index.mjs?module" data-main="/build/main.js"></script>
    <script nomodule defer src="https://unpkg.com/dimport/nomodule" data-main="/build/main.js"></script>
  `)
}
