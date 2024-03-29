module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    "@typescript-eslint/typedef": [
      "error", {
        "arrayDestructuring": true,
        "arrowParameter": true,
        "memberVariableDeclaration": true,
        "variableDeclaration": true,
        "objectDestructuring": true,
        "propertyDeclaration": true
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error", {
        "allowTypedFunctionExpressions": false
      }
    ],
    "semi": [
      "error"
    ],
    "@typescript-eslint/no-explicit-any": "off"
  },
}
