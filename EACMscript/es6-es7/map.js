/**
 * map
 * map所有成员不重复 重复的判断是===运算  NaN例外 在map中NaN与自身相等
 * map实例基础方法 add（增加） 、delet（删除） 、has（是否存在） 、clear（清空）
 * map类部署了interator接口 可使用keys 、 values、 entries 获取迭代器  也可使用forEach 直接迭代
 * map由于存在interator接口 所以可直接使用for of循环
 * map展开到{..map}中是进行枚举操作，由于map类原生不具有任何可枚举的自有属性，所以相当于展开一个空对象{}
 * map展开到[...map]中是进行迭代操作，展开的是map包含的数据成员
 */
const map = new Map([[1, 2]]);
const keys = Object.keys(map);
const obj = { ...map };
global.console.log(keys, obj);
const arr = [...map];
global.console.log(arr);

/**
 * weakMap 类与Set 类相似，但是weakMap的成员只能是对象
 * weakMap 对成员的引用都是弱引用，不计入gc机制
 * weakMap 通常用来存储Dom对象，防止Dom从页面移除时 导致的内存泄露，比如获取Dmo后给Dom绑定事件，然后从页面移除Dom 此时就存在内存泄漏
 * weakMap 由于保存的时弱引用对象，随时可能被gc 所以其不可迭代(不具备迭代接口，Set原生具有迭代接口)
 */
