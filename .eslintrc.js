module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended", "airbnb", "prettier", "prettier/react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {extensions: ['.js', '.jsx']}
    ],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single'],

    "react/require-default-props": "off",
    "consistent-return": "off",
    indent: ["error", 2],
    quotes: ["error", "double"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-no-bind": "off",
    "no-underscore-dangle": "off",
    "import/extensions": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off",
  },
};
