import { defineConfig } from "vite";
import { resolve, join } from "path";
import dts from "vite-plugin-dts";
import babel from "@rollup/plugin-babel";
const { MODE } = require("./pack/constants/index.js");

const base = process.cwd();
const { BUILD_MODE, VERSION, FILE_NAME, NAME } = process.env;

function getOutput(mode) {
  let outputList = "";
  switch (mode) {
    case MODE.BUILD_NPM:
      outputList = [
        {
          dir: "dist/cjs",
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js",
        },
        {
          dir: "dist/esm",
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js",
        },
      ];
      break;
    case MODE.BUILD_JS:
      outputList = [
        {
          name: `${NAME}`,
          dir: `dist/${VERSION}`,
          format: "umd",
          entryFileNames: `${FILE_NAME}.js`,
        },
      ];
      break;
    default:
      break;
  }

  return outputList;
}

export default defineConfig({
  build: {
    lib: {
      entry: resolve(base, "./index.ts"),
    },
    rollupOptions: {
      external: ['react'],
      output: getOutput(BUILD_MODE),
      plugins: [
        babel({
          babelHelpers: "runtime",
          extensions: [".ts"],
        }),
      ],
    },
  },
  plugins: [
    BUILD_MODE === MODE.BUILD_NPM && dts({
      entryRoot: resolve(base, "./"),
      outDir: "dist/types",
    }),
  ],
});