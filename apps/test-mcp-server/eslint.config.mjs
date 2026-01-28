import config from "@tambo-ai/eslint-config/base";
import tseslint from "typescript-eslint";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default tseslint.config(...config);
