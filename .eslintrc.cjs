module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  globals: {
    google: "readonly",
  },
  parser: "@typescript-eslint/parser", // add the TypeScript parser
  plugins: [
    "svelte3",
    "@typescript-eslint", // add the TypeScript plugin
  ],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    // 使ってない変数を残さない（_varsはチェックしない）
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    // import type を使うルール
    "@typescript-eslint/consistent-type-imports": ["error"],
    "@typescript-eslint/naming-convention": [
      "error",
      // camelCaseかUPPER_CASEの強制
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      // TypeはPascalCase
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
      // // ClassはPascalCase
      {
        selector: "class",
        format: ["PascalCase"],
      },
      // // booleanの変数はprefixをつける
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase", "UPPER_CASE"],
        prefix: [
          "is",
          "should",
          "has",
          "can",
          "did",
          "will",
          "IS_",
          "SHOULD_",
          "HAS_",
          "CAN_",
          "DID_",
          "WILL_",
        ],
      },
      // // InterfaceはIをつける
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
    ],
    // 厳密等価演算子を強制
    eqeqeq: "error",
    // caseのdefaultを必ずつける
    "default-case": "error",
    // svelteで誤検知するので
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
  },
  settings: {
    "svelte3/typescript": () => require("typescript"),
  },
};
