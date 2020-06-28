/* eslint-disable import/no-cycle */
import a from './a';

console.log('b.js 开始执行');
console.log(a);
export default {
  text: '我是b.js',
};
console.log('b.js 执行完毕');
