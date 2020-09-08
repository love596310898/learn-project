// 数字没隔三位加一个逗号
const regexp1 = /(\d+?)(?=(?:\d{3})+$)/g;
console.log('1111111111111111111'.replace(regexp1, '$1,'));
// 整数或者保留两位小数
const regexp2 = /^\d*(\.\d{1,2})?$/;
