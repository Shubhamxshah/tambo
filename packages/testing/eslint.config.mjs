import config from "@tambo-ai/eslint-config/base";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [
  ...config,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["jest.config.ts", "eslint.config.mjs"],
        },
      },
    },
  },
];
