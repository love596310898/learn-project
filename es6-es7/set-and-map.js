/**
 * set所有成员不重复 重复的判断是===运算  NaN例外 在set中NaN与自身相等
 * set实例基础方法 add（增加） 、delet（删除） 、has（是否存在） 、clear（清空）
 * set类部署了interator接口 可使用keys 、 values、 entries 获取迭代器  也可使用forEach 直接迭代
 * set可直接使用for of 循环
 * set迭代结果不是键值对结构，虽然entries返回迭代结果为[element1, element2]结构，但两个值相等都是其成员的value
 * set有迭代器接口可以使用rest操作符 将其展开到Array中
 * 将set使用rest操作符展开到Object中时 由于不返回键值对 相当于展开了一个空对象{}
 */
const set = new Set([1, 2]);
const a = { ...set };
global.console.log(a);
