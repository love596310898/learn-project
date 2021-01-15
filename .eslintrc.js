module.exports = {
  root: true, // 从根目录进行校验
  env: { // 执行环境
    browser: true, // 浏览器
    node: true, // nodeJs
    es6: true, // EACMscript6
  },
  // 扩展
  extends: ["plugin:prettier/recommended"],
  // 忽略的文件夹
  ignorePatterns: ["**/dist/**/*.js", "**/.vscode/*.js"],
  // 自定义规则
  rules: {},
};