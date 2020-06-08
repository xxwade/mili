import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import path from "path";
import pkg from "./package.json";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const babelOptions = require("../../babel.config");
const name = "detail";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const styleExtensions = [".css", ".scss", ".sass"];

export default [
  {
    input: "./src/index.tsx",
    output: {
      file: pkg.types,
      format: "es",
    },
    plugins: [
      dts(),
      postcss({
        // extract: path.resolve(__dirname, pkg.style),
        minimize: true,
        sourceMap: true,
        extensions: styleExtensions,
      }),
    ],
  },
  {
    input: "./src/index.tsx",
    external: ["react", "react-dom"],
    plugins: [
      commonjs(),
      postcss({
        // extract: path.resolve(__dirname, pkg.style),
        minimize: true,
        sourceMap: true,
        extensions: styleExtensions,
      }),
      resolve({ 
        extensions,
      }),
      babel({
        ...babelOptions,
        sourcemap: true,
        sourceMaps: true,
        extensions,
        runtimeHelpers: true,
        externalHelpers: true,
      }),
      terser({
        exclude: ['*esm*'],
      }),
    ],
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      { file: pkg.module, format: "es", sourcemap: true },
      {
        file: "./dist/browser/index.js",
        format: "iife",
        name,
        sourcemap: true,
      },
    ],
  },
];
