/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-extend-native */
/**
 * 枚举属性 关联对象属性描述符 enumerabal
 * 迭代操作中 被迭代的对象必须部署 迭代接口 iterrator
 */
// Object.prototype.name2 = '2';
// Array.prototype.name1 = '1';
// const obj = new Set([1, 2, 3]);
// for (const key in obj) {
//   global.console.log(key);
// }
// global.console.log('\n');
// for (const value of obj) {
//   global.console.log(value);
// }
// const arr = [1, 2, 3];
// arr.arr = arr;
// global.console.log(Object.keys(arr));
// arr.forEach((key, index) => {
//   global.console.log(key, index);
// });
const a = { a: 1 };
const b = Object.create(a);
b.a = 2;

for (const k in b) {
  global.console.log(k);
}
