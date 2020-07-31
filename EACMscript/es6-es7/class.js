/**
 * es6中的类
 * class 实际上是对es5构造函数的一种新的语法糖，所具有的功能一摸一样
 * class 中都有一个construct方法，相当于es5的构造函数，如果没有声明此方法，construct指向一个空函数function(){}
 * class定义的类 其所有的方法都是不可枚举，es5的构造函数的原型中定义的方法都是可枚举的（enumerable）
 * es6的class类只能使用new关键字调用，直接调用会报错，而es5的构造函数可以直接调用
 * 在class中声明的方法会被实例继承，相当于定义在类的construct.prototype上面
 * 如过在方法名称前加static关键字，则表示此方法是类的静态方法，静态方法是定义在construct自身上的，因此不会被实例继承
 * es6在类的构造器或者构造函数中添加了new.target属性，通过new或者Reflect.construct调用类或者构造函数，new.target指向类或者构造函数自身,
 * 将类的构造器或者构造函数当作普通函数直接调用时内部的new.target属性值是undefined，在类的构造器或者构造函数之外的使用new.target属性会报错
 */
class ES6 {
  // prop = 'prop' 当前无法定义继承属性，目前node环境下，使用=号赋值运算符报错
  // static prop = 'prop' 同样也就无法定义静态属性
  constructor() {
    console.log(new.target === ES6); // 在类的构造函数内 new.target 指向类自身
    console.log(this); // 类中的构造器中this指向类的实例对象
  }

  callMe() { // 继承方法内部 this指向实例自身
    console.log(this, 'im a instance of es6 class');
  }

  static callMe() { // 静态方法内部 this指向类自身
    console.log(this, 'the static method of class is calling');
  }
}
// ES6(); // 直接调用会报错
// ES6.callMe(); // 静态方法
// const instance = new ES6();
// instance.callMe(); //继承方法
console.log(Reflect.getOwnPropertyDescriptor(ES6, 'callMe'), Reflect.getOwnPropertyDescriptor(ES6.prototype, 'callMe')); // 类中定义的静态方法与继承方法都是不可枚举的
