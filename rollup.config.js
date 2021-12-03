// import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "rollup-plugin-typescript";
// import postcss from "rollup-plugin-postcss";
// import copy from 'rollup-plugin-copy';
// const svgr = require('@svgr/rollup').default;

// export default {
//   input: "src/index.ts",
//   watch: {
//     exclude: ["node_modules/**"],
//   },
//   output: {
//     dir: 'lib',
//     format: 'esm',
//     preserveModulesRoot: 'src',
//     sourcemap: true,
//   },
//   context: 'this',
//   plugins: [
//     svgr(),
//     peerDepsExternal(),
//     resolve(),
//     commonjs(),
//     typescript({ useTsconfigDeclarationDir: true }),
//     postcss({
//       extensions: [".css", ".scss"],
//       use: ["sass"],
//     }),
//     copy({
//       targets: [
//         { src: 'src/assets/**/*', dest: 'lib/assets' },
//         {
//           src: "src/components/index.scss",
//           dest: "lib/components",
//           rename: "index.scss",
//         },
//         {
//           src: "src/styles/variables.scss",
//           dest: "lib/styles",
//           rename: "variables.scss",
//         },
//         {
//           src: "src/styles/breakpoints.scss",
//           dest: "lib/styles",
//           rename: "breakpoints.scss",
//         },
//         {
//           src: "src/styles/web-shared.scss",
//           dest: "lib/styles",
//           rename: "web-shared.scss",
//         }
//       ],
//     }),
//   ],
// };

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import copy from 'rollup-plugin-copy';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "sw-web-shared",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      terser(),
      copy({
        targets: [
          { src: "src/assets/**/*", dest: "lib/assets" },
          {
            src: "src/components/index.scss",
            dest: "lib/components",
            rename: "index.scss",
          },
          {
            src: "src/styles/variables.scss",
            dest: "lib/styles",
            rename: "variables.scss",
          },
          {
            src: "src/styles/breakpoints.scss",
            dest: "lib/styles",
            rename: "breakpoints.scss",
          },
          {
            src: "src/styles/web-shared.scss",
            dest: "lib/styles",
            rename: "web-shared.scss",
          },
        ],
      }),
    ],
  },
  // {
  //   input: "lib/esm/types/index.d.ts",
  //   output: [{ file: "lib/index.d.ts", format: "esm" }],
  //   external: [/\.css$/],
  //   plugins: [dts()],
  // },
];
