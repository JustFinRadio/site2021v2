const preprocess = require("svelte-preprocess");
const adapter = require("@sveltejs/adapter-static");
const pages = require("./routelist.json");
/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    prerender: {
      crawl: true,
      enabled: true,
      force: true,
      pages: [...pages],
    },
  },
};
