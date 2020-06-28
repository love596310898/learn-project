/**
 * es6 模块化规范
 * 默认暴露 export default = something
 * 直接暴露 export const attr = someThing
 * 与commonjs不同的是 es模块化中默认暴露可以与直接暴露共存
 * 暴露的所有属性都保存在模块对象上
 * 其默认暴露相当于为模块对象添加了一个default属性
 * import incConter form './export.js' 相当于 incConter变量引用了模块对象的default属性（部分引入）
 * import { conter } from './export' 相当于解构模块中其他直接暴露的值（部分引入）
 * import * as all from './export' 相当于完全引入该模块
 * es模块在导出后 模块内部的变化可以反应到已导出的模块对象上，说明es直接导出了模块对象而非副本
 * 由于es模块暴露的是模块对象本身，对模块暴露值得操作都会影响到其他模块内对值的引用
 */

// export.js
export const conter = { a: 1 };
export default function () {
  conter.a += 1;
}

// a.js
// import incConter, { conter } from './export';
// import './b';
// console.log(conter.a); // 1
// incConter();
// console.log(conter.a); // 2
// conter.a = 1000;

// b.js
// import { conter } from './export';
// setTimeout(() => {
//   console.log(conter.a); // 1000
// }, 1000);


/**
 * import 语句有声明提前效果，即此语句会提前到模块开头进行执行
 * 此写法可以找到incConter并调用，说明存在声明提前
 */

// a.js
// incConter()
// import incConter form './export'


/**
 * 问题1 (es6 模块引入时不立即执行，而是创建了一个软连接，在使用时求值)
 * 问题2 (es6模块循环引用时的执行顺序)
 * 以上问题当前无法模拟，node环境不支持执行es模块，使用babel-node执行es模块时
 * import语句引入的模块是立即被执行的，与commonjs一致
 * 循环引用时执行顺序与commonjs一致
 */

// a.js
// import b from './b';
// console.log('a.js 开始执行');
// console.log(b);
// export default {
//   text: '我是a.js',
// };
// console.log('a.js 执行完毕');

// b.js
// import a from './a';
// console.log('b.js 开始执行');
// console.log(a);
// export default {
//   text: '我是b.js',
// };
// console.log('b.js 执行完毕');

// 输出
// b.js 开始执行
// undefined
// b.js 执行完毕
// a.js 开始执行
// { text: '我是b.js' }
// a.js 执行完毕
