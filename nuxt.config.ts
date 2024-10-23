export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],

  devtools: {
    enabled: true,
  },

  compatibilityDate: "2024-04-03",

  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
        arrowParens: true,
      },
    },
  },
});
