import type { Config } from "tailwindcss";
import { iconsPlugin } from "@egoist/tailwindcss-icons";

// @ts-expect-error module has no ts declaration file
import tailwindHamburgers from "tailwind-hamburgers";

export default {
  content: [],

  theme: {
    extend: {},
  },

  plugins: [iconsPlugin(), tailwindHamburgers],
} satisfies Config;
