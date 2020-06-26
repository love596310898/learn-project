
/**
 * commonJs 模块化规范
 * 默认暴漏 module.exports = something  webpack实现方式是向模块函数传递了module对象 默认暴漏相当于为其添加了一个引用类型属性
 * 直接暴漏 exports.arrt = someThing   此方式是将暴漏的目标定义到一个exports对象上，然后将exports对象保存到module对象上
 * 存在默认暴漏的情况下，直接暴漏会不生效（不可同时使用两种暴漏方式），因为本质上module.exports与exports对象是两个不同的对象，最终导出module对象是时只能存在一个exports属性
 */

// 这两种暴漏方式同时使用，第一种将不会生效
// exports.fn = function () {
//   global.console.log(this === module.exports);
// };
module.exports = {
  a: 1,
  b: 2,
};
