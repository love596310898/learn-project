/* eslint-disable max-classes-per-file */
/**
 *
 * @param  {...any} args
 * 无论采用借用 还是寄生 或是组合继承  都无法实现对原生构造函数的继承
 * 无法自定义原生构造函数的子类
 * 只能实现自定义类的子类
 */
// function MyArray(...args) {
//   Array.apply(this, args);
//   // return new Array(...args);
// }
// MyArray.prototype = Object.create(Array.prototype, {
//   constructor: {
//     value: MyArray,
//     writable: true,
//     configrable: true,
//     enumerable: true,
//   },
// });
/**
 * es6 则可以自定义原生构造函数的子类
 */
class MyArray extends Array {
  constructor(...args) {
    super(...args);
    this.name = 'sayName';
  }

  sayName() {
    return this.name;
  }
}
// const arr = new MyArray(1, 2);
// global.console.log(arr.constructor === MyArray);

/**
 *  class 的 seter geter 存取器属性 定义在类的prototype对象上
 * 所有实例继承此属性  在实例中 get set 是在实例属性的discreiptor上
 * 使用Object.getOwnPropertyDescriptors 获取实例和类的原型对象的属性描述符 看到geter seter 被定义在属性描述符上 与es5一致
 * 使用Object.prototype.isOwnProperty.call() 获取name属性 可以看到name属性被定义在 prototype 和 class 上 所有实例继承此存取器属性
 * 在类的构造器constructor内可以使用 new.target 判断类的调用方式
 */
class TestSetAanGet {
  constructor() {
    if (new.target === TestSetAanGet) {
      global.console.log('使用new命令生成了实例');
    }
  }

  set name(html) {
    this.html = html;
  }

  get name() {
    return this.html || 'test';
  }
}
// const test = new TestSetAanGet();
// global.console.log(test);
/**
 * class mixin 混入
 * 整体还不太明白
 * 需要先弄清楚for in 与 for of 的区别
 */
function mix(...mixins) {
  class Mix {}
  function copyProperty(target, source) {
    Object.keys(source).forEach((key) => {
      if (key !== 'constructor' && key !== 'name' && key !== 'prototype') {
        const descriptor = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(target, key, descriptor);
      }
    });
  }
  mixins.forEach((mixin) => {
    copyProperty(Mix, mixin);
    copyProperty(Mix.prototype, mixin.prototype);
  });
  return Mix;
}
const Mix = mix(TestSetAanGet, MyArray);
global.console.log(Mix);
