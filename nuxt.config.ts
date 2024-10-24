export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/fonts",
    "shadcn-nuxt",
    "radix-vue/nuxt",
  ],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      titleTemplate: "%s | ZSOLT GOMORI",
    },
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

  image: {
    dir: "assets/images",
  },

  shadcn: {
    prefix: "UI",
  },
});
