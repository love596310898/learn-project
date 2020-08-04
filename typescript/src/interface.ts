/**
 * 函数参数验证 验证参数数量、参数读写、参数类型
 * readonly定义与const定义的区别在于，前者是作为属性使用的场景，后者是用作为变量使用的场景
 * 使用对象字面量{}进行参数传递时，会进行额外的检查，不允许字面量对象出现类型检查之外的任何属性
 * 绕过检查的方式就是使用类型断言或者添加索引签名
 */

interface labelledValue {
  readonly size: number, //必传且只读属性
  label: string, // 必传参数
  age?: number, // 可选的参数
  [propName: string]: any; // 索引签名相当于告诉tsc允许参数传递任意数量的字符串key属性，值的类型为any
}
let myObj:labelledValue = { size: 10, label: 'i am a label', age: 100};
// myObj.size = 1000 // 报错 只读属性不能赋值

// 普通模式
// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }

// 使用接口模式
function printLabel(labelledObj: labelledValue) {
  // labelledObj.size = 1000 // 报错 只读属性不能赋值
  console.log(labelledObj.age);
}

// printLabel({size: 10, label: 'i am a label', age: 100, name: 'name'} as labelledValue); // 使用类型断言来绕过字面量对象的额外检查，相当于告诉tsc这个对象已经经过验证
printLabel({size: 10, label: 'i am a label', age: 100, name: 'name'}); // 添加索引签名后，额外传递属性将不会报错