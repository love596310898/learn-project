/* 工厂模式 */
/**
 * @param {Number} x
 * @param {Number} y
 */
// function m2(x, y) {
//   return {
//     x: x * x,
//     y: y * y,
//   };
// }
// const obj1 = m2(1, 3);
// const obj2 = m2(2, 3);
// global.console.log(obj1 === obj2);
// global.console.log(obj1 instanceof m2);

/* 构造函数模式 */
function M2(x, y) {
  this.x = x * x;
  this.y = y * y;
}
// const obj1 = new M2(1, 3);
// const obj2 = new M2(2, 3);
// global.console.log(obj1 === obj2);
// global.console.log(obj2 instanceof M2);

/*  借用继承 借用构造函数 只继承了父类的属性 */
/**
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
//  */
// function M3(x, y, z) {
//   M2.call(this, x, y);
//   this.z = z * z * z;
// }
// const obj1 = new M3(1, 3, 4);
// const obj2 = new M3(2, 3, 4);
// global.console.log(obj1);
// global.console.log(obj2 instanceof M2);
// global.console.log(obj2 instanceof M3);

/* 寄生继承 创建了一个父类实例 继承了属性以及方法 */
function M3(x, y, z) {
  const prrent = new M2(x, y);
  prrent.z = z * z * z;
  return prrent;
}
const obj1 = new M3(1, 3, 4);
const obj2 = new M3(2, 3, 4);
global.console.log(obj1);
global.console.log(obj2 instanceof M2);
global.console.log(obj2 instanceof M3);
