
# Object实例的方法及属性

``` javascript
  const objedt = {};
  object.constructor    // 对象的继承属性，其指向对象的构造函数，通常使用它来判断一个对象的类

  object.hasOwnProperty(propertyName)   // 判断指定属性是否是对象自有属性

  object.properytlsEnumerable(propertyName) // 判断指定属性是否可枚举

  object.isPrototypeOf(o)    // 判断当前对象是否是参数对象原型
```

# Object对象的方法及属性

``` javascript
  Object.keys() // 获取当前对象的自有的可枚举的属性名称集合

  Object.getOwnPropertyNames(o)   // 获取对象的自有属性名称集合

  Object.create（proto，descriptors）  // 指定原型创建一个对象，proto为原型，descriptors为属性描述符

  Object.definepropety(o, propertyName, descirptors) // 为对象添加属性及配置属性描述符

  Object.defineproperties（o，descriptors） // 为对象添加新属性同时配置属性描述符 （上一个方法的批处理版本）

  Object.getOwnPropertyDescriptor(o，propertyName)   // 获取对象的指定属性的属性描述符

  Object.getPrototypeOf(o)  // 获取对象的原型对象

  Object.seal(o) // 封闭对象，封闭指对象不可添加新的属性，所有已有属性可以修改
  Object.isSealed(o) // 判断对象是否被封闭

  Object.preventExtensions(o) // 使对象不可扩展，即不可添加新的属性 修改原有属性  属性值为引用类型时此值内部可被修改， 原型可被修改
  Object.isExtensible(o)  // 判断一个对象是否可以添加新属性

  Object.freeze(o)  // 冻结对象，冻结指对象不可添加新的属性，所有已有属性不可配置、不可写， 属性值为引用类型时此值内部可被修改，原型不可修改
  Object.isFrozen(o)  // 判断对象是否被冻结
  ```
