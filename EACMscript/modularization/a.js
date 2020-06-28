/* eslint-disable import/no-cycle */
import b from './b';

console.log('a.js 开始执行');
console.log(b);
export default {
  text: '我是a.js',
};
console.log('a.js 执行完毕');
