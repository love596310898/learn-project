const fs = require('fs');
const thunkify = require('thunkify');

// fs.readFile("../package.json", function(err, data){
//     if(err) throw err
//     console.log(data.toString())
// })

// function* gen(x){
//     try{
//         let y = yield x * 2
//         let z = yield y * 2
//         return z
//     } catch (e) {
//         console.log(e)
//     }
//
// }
// let g = gen(1)
// console.log(g.next())
// console.log(g.next(2))
// console.log(g.throw('出错了'))

function* gen(url) {
  const obj = yield new Promise((resolve, reject) => {
    fs.readFile(url, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
  console.log(obj.name, obj);
}
const g = gen('../package.json');
g.next().value.then((data) => data.toString()).then((data) => {
  g.next(JSON.parse(data));
});
function fn(a, b, cb) {
  const sun = a + b;
  cb(sun);
  cb(sun);
}
function myThunkify(fn) {
  // /assert('function' == typeof fn, 'function required');

  return function () {
    const args = new Array(arguments.length);
    const ctx = this;

    for (let i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }

    return function (done) {
      let called;
      args.push(function () {
        called = false;
        done.apply(null, arguments);
      });
      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    };
  };
}
myThunkify(fn)(1, 2)((data) => {
  console.log(data);
});
