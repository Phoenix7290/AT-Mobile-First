import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/AT-Mobile_First/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",	
        at_01: "src/AT/01/index.html",
        at_02: "src/AT/02/index.html",
        at_03: "src/AT/03/index.html",
        at_04: "src/AT/04/index.html",
        at_05: "src/AT/05/index.html",
        at_06: "src/AT/06/index.html",
        at_07: "src/AT/07/index.html",
        at_08: "src/AT/08/index.html",
        at_09: "src/AT/09/index.html",
        at_10: "src/AT/10/index.html",
        at_11: "src/AT/11/index.html",
        at_12: "src/AT/12/index.html",
        at_13: "src/AT/13/index.html",
        at_14: "src/AT/14/index.html",
        at_15: "src/AT/15/index.html",
        at_16: "src/AT/16/index.html",
      },
    },
  },
});
