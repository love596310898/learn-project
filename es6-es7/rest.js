/* 扩展运算符rest */
/**
 * 函数形参的合并，函数实参的展开
 * 数组的解构赋值，数组的合并，解构合并的是数组内的元素，是枚举操作（数组中元素均以下标为key保存，枚举时以下标做为key枚举）
 * 对象的解构赋值，对象的合并，解构合并的是对象的可枚举属性, 是枚举操作
 * rest的合并规则共object.assign函数
 * rest对数组和对象的操作均为枚举操作
 * 测试 Set Map类型 不能直接使用rest操作符，Set Map 内置有迭代器，迭代器可以使用rest操作符，因此可以变相使用rest操作符
 */

/* 对于存取器属性的rest使用 */
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
  enumerable: true,
});
const b = new Set([1, 2]);
const c = new Map([[0, 1], [1, 2]]);
const d = [1, 2];
const e = {
  name: 'b', ...a, ...b, ...c, ...d,
};
global.console.log(Object.getOwnPropertyDescriptors(d));
global.console.log(a, b, c, d, e);
