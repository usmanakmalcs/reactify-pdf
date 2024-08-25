module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    mocha: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "react", "react-hooks", "jsx-a11y"],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {},
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
  rules: {
    "react/display-name": "off",
    "react/jsx-key": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-import-assign": "warn",
    "no-unused-vars": "off",
    "no-unsafe-optional-chaining": "warn",

    "@typescript-eslint/no-unused-vars": ["off"],
    "@typescript-eslint/no-explicity-any": ["off"],
    "@typescript-eslint/no-explicit-any": "off",
  },
  globals: {
    google: "readonly",
  },
};
