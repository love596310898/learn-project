// 扩展运算符rest
/**
 * 函数形参的合并，函数实参的展开
 * 数组的展开 迭代操作 展开的是数组的元素成员
 * 对象的展开，枚举操作，展开的是对象的可枚举自有属性
 * rest的合并规则共object.assign函数
 * rest对于有迭代器的对象采用迭代操作，没有迭代器的对象则采取枚举操作
 */

// 对于存取器属性的rest使用
/**
  * rest运算符对于属性的赋值特点
  * 原始类型是值传递，引用类型是引用传递
  * 对与存取器属性，传递的是get方法获取的值
  */
const a = {
  get n() {
    return '获取属性';
  },
};
Object.defineProperty(a, 'i', {
  value: 1,
  configurable: true,
  writable: true,
  enumerable: false,
});
const b = new Set([1, 2]);
const c = new Map([[0, 1], [1, 2]]);
const d = [1, 2];
const e = {
  name: 'b', ...a, ...b, ...c, ...d,
};
global.console.log(a, b, c, d, e);
