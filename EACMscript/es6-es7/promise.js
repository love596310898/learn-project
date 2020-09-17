console.log('script start');                    // 1 代码开始执行
setTimeout(function(){                          // 2 加入定时管理队列
    console.log('settimeout')                               // 8 执行定时队列
});
let promise1 = new Promise(function (resolve) {
    console.log('promise1')                     // 3 promise同步执行
    resolve()                                   // 4 promise.then(cb) // cb加入执行队列
    console.log('promise1 end')                 // 5 promise同步执行
}).then(function () { 
    console.log('promise2')                         // 7 同步代码执行结束 执行异步队列代码
});
console.log('script end');                      // 6 代码同步执行结束


// console.log('script start');
// console.log('promise1')
// console.log('promise1 end')
// console.log('script end'); 
// console.log('promise2')
// console.log('settimeout')