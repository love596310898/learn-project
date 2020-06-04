/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-extend-native */
/**
 * 枚举属性 关联对象属性描述符 enumerabal
 * 迭代操作中 被迭代的对象必须部署 迭代接口 iterrator
 */
Object.prototype.name2 = '2';
Array.prototype.name1 = '1';
const obj = new Set([1, 2, 3]);
for (const key in obj) {
  global.console.log(key);
}
global.console.log('\n');
for (const value of obj) {
  global.console.log(value);
}
