export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/fonts",
    "shadcn-nuxt",
    "radix-vue/nuxt",
    "@nuxt/content",
    "@nuxthq/studio",
  ],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },

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
    provider: "ipx",
    dir: "assets/images",
  },

  shadcn: {
    prefix: "UI",
  },
});
