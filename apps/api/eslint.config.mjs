import config from "@tambo-ai/eslint-config/base";
import { defineConfig } from "eslint/config";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig(...config, {
  rules: {
    // Temporarily turning this off to reduce noise
    "@typescript-eslint/no-explicit-any": "off",
  },
});
