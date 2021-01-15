module.exports = {
  root: true, // 从根目录进行校验
  env: { // 执行环境
    browser: true, // 浏览器
    node: true, // nodeJs
    es6: true, // EACMscript6
  },
  // 扩展
  extends: ["plugin:prettier/recommended"],
  // 指定忽略的文件
  ignorePatterns: ["**/dist/**/*.js", "**/.vscode/*.js"],
  // 自定义规则
  rules: {},
  // 指定处理的文件范围
  overrides: [{
    files: [
      "**/__tests__/*.{j,t}s?(x)",
      "**/tests/unit/**/*.spec.{j,t}s?(x)",
    ],
    env: {
      mocha: true,
    },
  }],
};