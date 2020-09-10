# vue ::v-deep 选择器

``` javascript
// 在vue中组件样式穿透问题，官方给的解决方案是使用::v-deep深度选择器
// 在结合less或者sass这些结构化预编译css语法使用时的小技巧
// 前置 ::v-deep .className 相当于后代组件中的.className类具有声明的样式
// 前置 ::v-deep.className 相当于是后代组件且具有.className类声明的元素具有声明的样式
// 后置 .className ::v-deep 相当于.classNname元素的所有后代组件都具有声明的样式
// 后置 .className::v-deep 相当于是后代组件且具有.className类声明的元素具有声明的样式
// 深度选择器属于伪类选择器，优先级同类选择器，值为10
````
