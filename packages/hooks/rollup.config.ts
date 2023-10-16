import peerDepsExternal from "rollup-plugin-peer-deps-external";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";

import packageJson from "./package.json" assert { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: false,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({ extensions: [".tsx", ".ts", ".jsx", ".js", ".json"] }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    swc(
      defineRollupSwcOption({
        jsc: {
          transform: {
            react: {
              importSource: "react",
              runtime: "automatic",
            },
          },
        },
      })
    ),
  ],
};
