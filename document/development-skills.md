# 开发技巧

## 注释

``` javascript
/**
 * @see     {@link https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html}  // 链接注释
 * @param   {boolean}   params.showLoading  // 参数注释
 ```

## 接口数据本地化

```javascript
/**
 * 接口数据全部本地化，以防止接口数据结构、类型、键名变化的时候，大量修改本地代码
 * /
```

## 错误处理与避免的一些实践

### typescript

-通过编译时类型检查  最大化的保障代码的健壮性，避免类型使用错误

### esLint

-通过语法检查系统规范编码质量，最大化保障语法的正确性

### 伪代码

-通过书写伪代码来保证逻辑的严密性，保证不出现逻辑漏洞
-通过断言，预防网络请求错误、接口数据结构错误、接口数据类型错误，导致的代码报错

### 错误处理原则

-对于可预见的一些错误，能够有效避免的错误，使用断言来进行流程控制
-对于一些可预见，但无法有效有效避免的，使用try catch 捕获异常，处理异常
-尽量的少使用try catch语句
-不可预见性错误 通常是语法或类型错误导致，使用typescript eslint 能够有效避免这些问题
