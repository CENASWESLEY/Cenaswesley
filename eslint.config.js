import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["src/scripts/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        document: "readonly",
        window: "readonly",
      },
    },
    rules: {
      "arrow-body-style": ["error", "as-needed"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
    },
  },
];
