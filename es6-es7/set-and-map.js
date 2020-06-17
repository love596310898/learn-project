/**
 * set所有成员不重复 重复的判断是===运算  NaN例外 在set中NaN与自身相等
 * set实例基础方法 add（增加） 、delet（删除） 、has（是否存在） 、clear（清空）
 */
const set = new Set([1, 2]);
set.add(3);
global.console.log(set);
set.add(3);
global.console.log(set);
set.delete(2);
global.console.log({ ...set });
