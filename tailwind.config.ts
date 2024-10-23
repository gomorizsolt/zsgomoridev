import type { Config } from "tailwindcss";
import { iconsPlugin } from "@egoist/tailwindcss-icons";

export default {
  content: [],

  theme: {
    extend: {},
  },

  plugins: [iconsPlugin()],
} satisfies Config;
