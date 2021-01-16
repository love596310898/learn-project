module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential', // 必须遵守的
    // 'plugin:vue/strongly-recommended', // 强烈推荐的
    // 'plugin:vue/recommended', // 推荐的
    '@vue/airbnb', // 爱彼迎风格规范
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  ignorePatterns: ["**/dist/**/*.js", "**/.vscode/*.js"],
  rules: {
    "indent": ["error", 4],
    'max-classes-per-file': ['off'],
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': ['error', 200],
    'consistent-return': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    'import/prefer-default-export': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'func-names': ['off'],
    'linebreak-style': ['off'],
    "no-unused-vars": ["off"],
    'vue/eqeqeq': ['error', 'always'],
    'vue/key-spacing': ['error', {
      mode: 'strict',
      align: {
        beforeColon: false,
        afterColon: true,
        on: 'colon',
      },
    }],
  },
  overrides: [{
    files: [
      '**/__tests__/*.{j,t}s?(x)',
      '**/tests/unit/**/*.spec.{j,t}s?(x)',
    ],
    env: {
      mocha: true,
    },
  }],
};