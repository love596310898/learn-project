console.log('script start');                    // 1 代码开始执行
setTimeout(function () {
    console.log('settimeout')                               // 6 执行定时队列
});
let promise1 = new Promise(function (resolve) {
    console.log('promise1')                     // 2 promise同步执行
    resolve()
    console.log('promise1 end')                 // 3 promise同步执行
}).then(function () { 
    console.log('promise2')                         // 5 同步代码执行结束 执行异步队列代码
});
console.log('script end');                      // 4 代码同步执行结束


