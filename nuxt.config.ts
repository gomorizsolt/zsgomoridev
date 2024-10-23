// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint"],

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
