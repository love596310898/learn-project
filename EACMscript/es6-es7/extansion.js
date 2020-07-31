/**
 * 在js的继承中，实例的__proto__属性总是指向实例的构造函数的prototype对象
 * 在es5中所有的函数对象__proto__属性总是指向Function的prototype对象，包括Function自身
 * 在es6中基类依然遵循这个规则，子类的__proto__属性则指向基类，这相当于子类继承了基类的静态属性
 * 在es6的继承中，子类作为构造函数时，子类的构造器的原型对象是基类的实例。子类作为对象时，子类的__proto__属性是父类
 */
class Parent {
  constructor() {
    console.log('is Parent class constructor here');
    console.log(this);
    console.log(new.target.name);
  }

  static staticMethod() {
    console.log('is Parent class staticMethod here');
    console.log(this);
  }

  method() {
    console.log('is Parent class method here');
    console.log(this);
  }
}

class Children extends Parent {
  constructor() {
    super(); // 必须调用super函数，相当封装了于es5中组合继承模式的执行过程，如果传参则相当于借用父类构造器添加属性，此时父类构造器中的this指向子类的实例, new.target指向子类
    // super.staticMethod(); // super对象，相当于引用的是父类的构造器的原型对象,父类的静态方法staticMethod定义在父类构造器上，这里会报错 staticMethod is not a function
    super.method(); // super对象，相当于引用的是父类的构造器的原型对象 父类的继承方法是定义在父类构造器的原型对象上，这里可以正常调用父类的继承方法method，父类的继承方法中this指向子类实例
    console.log('Children class construct:', this); // 子类构造器中的this指向子类实例
  }

  static staticMethod() {
    // super(); // 子类的静态方法中无法引用到super函数, 会报语法错误 keyword unexpected here
    super.staticMethod(); // 在子类的静态方法中super对象，指向父类构造器, 这里可以正常调用父类的静态方法staticMethod，父类的静态方法中this指向子类
    // super.method(); // 在子类的静态方法中super对象，指向父类构造器，继承方法method是定义在父类的原型中，这里调用会报错 method is not a function
    console.log('Children class staticMethod', this); // 子类的的静态方法中this指向子类
  }

  method() {
    // super(); // 子类的继承方法中无法引用到super函数, 会报语法错误 keyword unexpected here
    // super.staticMethod(); // 在子类的继承方法中super对象，指向父类构造器的原型, 父类staticMethod定义在父类构造器上，这里会报错 staticMethod is not a function
    super.method(); // 在子类的继承方法中super对象，指向父类的构造器的原型, 这里可以正常调用父类的继承方法method，父类的继承方法中this指向子类实例
    console.log('Children class method', this); // 子类的继承方法中的this指向子类实例
  }
}
// Children.staticMethod();
const instance = new Children();
instance.method();
