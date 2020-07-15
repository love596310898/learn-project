/**
 * 部署了symbol.iterator接口的对象被称作可迭代对象
 * Array、Set、Map、String、arguments、nodeList、原生部署了迭代接口
 * iterator对象的return方法，用来完结迭代操作
 * iterator对象的throw方法，用来向迭代器内部抛出异常
 * iterator对象的next方法，用来将迭代指针指向下一个元素
 */

// function outFunction(prama1, prama2) {
//   console.log(prama1, prama2);
//   return '外部函数调用完毕';
// }

// function* generator() {
//   return outFunction(yield 'abc', yield 'bcd');
// }

// const interator = generator();

// console.log(interator.next());
// console.log(interator.next(1));
// console.log(interator.next(2));
