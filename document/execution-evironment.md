# js执行环境

- 执行环境

```javascript
  /**
   * 常见的js引擎载体有、web浏览器、nodeJs、移动端vebView、小程序
   * 在不同的执行环境中都有自己的js引擎，不同js引擎提供的执行环境，最主要的区别在与宿主对象
   * 在现代浏览器中，有了w3c组织的规范，各个厂商对于浏览器js引擎中的宿主对象、本地对象以及浏览器css引擎相关的实现差异越来越小，这有助于web技术的长远发展
   * js语言体系下的内置对象实现，有EcmaScript规范作为支持，各个厂商的实现也逐渐统一，使得的现代浏览器下的web开发越来越简单
   * 我们日常开发中在写js代码时，要注重的就是书写的代码要在哪个环境下执行，所用到的宿主对象及本地对象在执行环境下是否存在，是否有行为上的差异
   * /
```

- 宿主对象

```javascript
/**
 * 宿主对象是不同js引擎内部的平台相关的实现
 * 比如web浏览器，它的宿主对象有、window、document、location、navigator、history、localStorage、sessionStorage等···
 * 不同平台的js引擎的宿主对象，数量、命名、功能各不相同，没有可比性
 * 相同平台不同厂商的js引擎对宿主对象的实现也有很大的差异，比如chrom、IE、firefox、safari、open、这几大主流浏览器的宿主对象都存在或多或少的差异
 * /
```

- 本地对象

```javascript
/**
 * 本地对象是js引擎内部的js语言相关的实现
 * 比如web浏览器，它的内置对象有、Date、RegExp、Error、Math、Json、Url、setTimeout、setinteval、parseInt、parseFloat等···
 * 不同平台的js引擎的内置对象实现与行为基本一致，存在细微差别
 * /
```

- 内置对象

```javascript
/**
 * 内置对象是js语言规范体系内实现
 * 不同平台、不同厂商都要参照EcmaScript规范进行实现，虽然实现可能不同但行为基本一致
 * js内置7种数据类型，特殊类型、null、undefined，基础类型、string、number、boolean、symbol，和引用类型
 * 引用类型包括 Object、Function、Array、Set、Map、Promise、Proxy、Iterator、提案中的Decorator(装饰器);
 * /
```
