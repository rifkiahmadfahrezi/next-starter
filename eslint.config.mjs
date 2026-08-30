import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwind from "eslint-plugin-tailwindcss";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    ...tailwind.configs.recommended,
    settings: {
      tailwindcss: {
        cssConfigPath: "app/globals.css",
        callees: ["classnames", "clsx", "ctl", "cva", "cn"],
      },
    },
  },
  eslintConfigPrettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
