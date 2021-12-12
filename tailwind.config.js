const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.neutral.200'),
              fontWeight: 700,
            },
            h2: {
              color: theme('colors.neutral.200'),
              fontWeight: 500,
            },
            p: {
              color: theme('colors.neutral.400'),
            },
            'ul > li, ol > li': {
              color: theme('colors.neutral.400'),
            },
            'ul > li::marker, ol > li::marker': {
              color: theme('colors.neutral.200'),
            },
            strong: {
              color: theme('colors.neutral.200'),
            },
            em: {
              color: theme('colors.neutral.200'),
            },
            a: {
              color: theme('colors.sky.500'),
              textDecorationColor: theme('colors.sky.500'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
