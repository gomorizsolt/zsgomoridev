const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...fontFamily.sans],
      },
      gridTemplateColumns: {
        posts: "repeat(auto-fit, minmax(350px, 1fr))",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "h1, h2, h3": {
              color: theme("colors.slate.200"),
              fontWeight: 700,
            },
            "p, ul > li, ol > li": {
              color: theme("colors.slate.300"),
            },
            "ul > li::marker, ol > li::marker": {
              color: theme("colors.slate.200"),
            },
            "strong, em": {
              color: theme("colors.slate.200"),
            },
            "a, a > code": {
              color: theme("colors.slate.300"),
              textDecorationColor: theme("colors.slate.500"),
            },
            code: {
              color: theme("colors.slate.200"),
              backgroundColor: theme("colors.slate.800"),
              padding: theme("spacing.1"),
              borderRadius: theme("spacing.1"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-hamburgers")],
};
