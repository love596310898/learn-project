/**
 * * 测试 Set Map类型 不能直接使用rest操作符，Set Map 内置有迭代器，迭代器可以使用rest操作符，因此可以变相使用rest操作符
 */
const set = new Set([1, 2]);
global.console.log(Object.entries(set));
