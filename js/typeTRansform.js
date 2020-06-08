/* 引用类型向基础类型转换 */
/**
 * 在数学运算，逻辑运算中使用引用类型，会执行从引用类型向基础类型的转换
 * 期望是Boolen的地方 除了null 都转换为true
 * 期望是String的地方 会调用对象的toString方法，如果返回的值如果还是一个引用类型，则继续调用这个值的toString方法，直到返回基础类型
 * 期望是Number的地方 会调用对象的valueOf方法，如果返回一个引用类型的值，则继续调用这个的toString方法，直到返回基础类型
 */
/* Date */
/**
 * toString方法返回时间对象的ios字符串格式表示（Mon Jun 08 2020 15:43:39 GMT+0800 (GMT+08:00)）
 * valueOf方法返回时间戳（格林威治时间）
 * toJSON方法返回服务器字符串格式表示（2020-06-08T07:43:39.325Z）
 */
/* Function */
/**
 * toString方法返回包含函数源代码字符串表示（function () {}）
 * valueOf方法返回一个包含函数名称的函数字符串（[Function: fn]）
 */
/* Object */
/**
 * toString方法返回对象字符串表示（[object Object]）
 * valueOf返回对象自身
 */
/* Array */
/**
 * toString方法返回空串（""）
 * valueOf返回数组自身
 */
const date = new Date();
const fn = function () {};
const obj = {};
const arr = [];

function toOriginal(o) {
  global.console.log(typeof o);
  global.console.log(o.toString && o.toString());
  global.console.log(o.valueOf && o.valueOf());
  global.console.log(o.toJSON && o.toJSON());
  global.console.log(1 + o);
  global.console.log(1 - o);
  global.console.log('\n');
}
toOriginal(date);
toOriginal(fn);
toOriginal(obj);
toOriginal(arr);
