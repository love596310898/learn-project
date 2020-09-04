/**
 * 函数接口定义限制函数传入、参数数量、参数类型、是否有返回值、返回值类型
 * 在定义函数时，如果声明函数使用某个接口，则函数返回值必须符合接口定义规则
 * 在定义函数时，声明的形参名称可以与接口声明的参数名称不同，但参数类型声明必须与接口声明的参数类型一致
 * 在调用函数时，传入的参数必须符合接口定义的参数数量以及类型规则
 */
interface searchFunc{
  (source: string, subString: string): boolean
}

let myFunc:searchFunc = function(source: string, subString: string) {
  return false
} 

console.log(myFunc('1', '2'))