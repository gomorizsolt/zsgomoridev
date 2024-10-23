import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { iconsPlugin } from "@egoist/tailwindcss-icons";

// @ts-expect-error module has no ts declaration file
import tailwindHamburgers from "tailwind-hamburgers";

export default {
  content: [],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [iconsPlugin(), tailwindHamburgers],
} satisfies Config;
