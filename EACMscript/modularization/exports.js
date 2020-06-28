
/**
 * commonJs 模块化规范
 * 默认暴露 module.exports = something  webpack实现方式是向模块函数传递了module对象 默认暴露相当于为其添加了一个引用类型属性
 * 直接暴露 exports.arrt = someThing   此方式是将暴露的目标定义到一个exports对象上，然后将exports对象保存到module对象上
 * 存在默认暴露的情况下，直接暴露会不生效（不可同时使用两种暴露方式），因为本质上module.exports与exports对象是两个不同的对象，最终导出module对象是时只能存在一个exports属性
 * 以exports.a调用，this指向exports对象， 解构后调用this指向全局对象
 */

// 存在默认暴露的情况下，直接暴露会失效
// exports.a = 1
// 默认暴露生效
// module.exports = {a: 1}

/**
 * 模块暴露的是一个值的副本，模块内部对值得操作，无法影响到导出的副本
 * 调用模块内部自增函数 重新打印conter 值还是1 说明模块内部对变量得操作，无法影响到模块导出值
 * 说明conmonjs模块化规范导出的仅仅是模块的一个副本
 */
let conter = 1;
exports.conter = conter;
exports.incConter = function () {
  console.log(this);
  conter += 1;
};

// const { conter, incConter } = require('./export');
// console.log(conter) // 1
// incConter();
// console.log(conter) // 1


/**
 * 一个模块多次被引入，得到的是同一个副本，因此对副本的操作会反应到多个地方
 * b.js中引入模块的到副本，并操作副本
 * a.js中定时器打印值提现了这个值的修改
 * 说明了两个地方引入同一个模块，导入的是同一个模块副本，两个地方对副本的操作会互相影响
 */

// a.js
// const mod = require('./exports');
// setTimeout(() => {
//   console.log('a.js打印center：', mod.conter); // 2
// }, 1000);
// module.exports = global

// b.js
// require('./a.js');
// const mod = require('./exports');
// console.log('b.js打印conter：', mod.conter); // 1
// mod.conter = 2;

/**
 * 当存在模块循环引用时，由于commonjs采用的时引用即执行策略，所以循环引用实际上时执行权的转换
 * 例如这里a.js 引用了b.js， 而b.js又引用了a.js
 * 此时的执行逻辑时，a.js执行到引入b.js语句时立即开始执行b.js，
 * 当b.js中又引入a.js时则只引入a.js已执行部分，继续执行b.js
 * b.js执行完毕后，重新执行a.js
 */

// a.js
// console.log('a开始执行');
// const b = require('./b');
// console.log(b, b.text);
// exports.text = '我是a.js';
// console.log('a执行完毕');

// b.js
// console.log('b开始执行');
// const a = require('./a');
// console.log(a, a.text);
// exports.text = '我是b.js';
// console.log('b执行完毕');

// 执行a.js时的打印顺序
// a开始执行
// b开始执行
// {} undefined // 执行到这里由于a.js没有任何导出，故text属性值为undefined
// b执行完毕
// { text: '我是b.js' } '我是b.js'
// a执行完毕
