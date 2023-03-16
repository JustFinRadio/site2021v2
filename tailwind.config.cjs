const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
  mode: "aot",
  purge: {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    options: {
      defaultExtractor: (content) => [
        // If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
        ...tailwindExtractor(content),
        // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group
        ),
      ],
    },
    safelist: [/^svelte-[\d\w]+$/],
  },
  theme: {
    fontFamily: {
      sans: ["Mulish", "sans-serif"],
      heading: ["Montserrat", "sans-serif"],
      display: ["Hanson", "impact"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#DA0522",
        secondary: "#05dabd",
        tertiary: "#f71735",
        dark: "#504742",
        light: "#afacaa",
        black: "#090909",
        white: "#f8f8f8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
