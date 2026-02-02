/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray} */

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default tseslint.config(
  { ignores: ["dist/**/*"] },
  eslint.configs.recommended,
  {
    rules: {
      // disable console.log but allow console.error and console.warn
      "no-console": ["error", { allow: ["error", "warn", "log"] }],
    },
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
);
