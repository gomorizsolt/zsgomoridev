const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-100": "hsl(0, 0%, 96%)",
        "grey-200": "hsl(0, 0%, 87%)",
        "grey-300": "hsl(0, 0%, 76%)",
        "grey-400": "hsl(0, 0%, 66%)",
        "grey-500": "hsl(0, 0%, 54%)",
        "grey-600": "hsl(0, 0%, 43%)",
        "grey-700": "hsl(0, 0%, 30%)",
        "grey-800": "hsl(0, 0%, 11%)",
        "grey-900": "hsl(0, 0%, 5%)",

        "blue-100": "hsl(216, 90%, 96%)",
        "blue-200": "hsl(216, 86%, 89%)",
        "blue-300": "hsl(216, 80%, 78%)",
        "blue-400": "hsl(216, 75%, 67%)",
        "blue-500": "hsl(216, 60%, 56%)",
        "blue-600": "hsl(216, 57%, 48%)",
        "blue-700": "hsl(216, 73%, 36%)",
        "blue-800": "hsl(216, 82%, 24%)",
        "blue-900": "hsl(216, 92%, 10%)",
      },
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
              color: theme("colors.grey-100"),
              fontWeight: 700,
            },
            "p, ul > li, ol > li": {
              color: theme("colors.grey-300"),
            },
            "ul > li::marker, ol > li::marker": {
              color: theme("colors.grey-100"),
            },
            "strong, em": {
              color: theme("colors.grey-200"),
            },
            "a, a > code": {
              color: theme("colors.grey-100"),
              textDecorationColor: theme("colors.blue-400"),
              textDecorationThickness: "2px",
            },
            code: {
              color: theme("colors.grey-100"),
              backgroundColor: theme("colors.grey-800"),
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
