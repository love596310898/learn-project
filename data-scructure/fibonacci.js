// first method
/**
 *
 * @param {Number} n 第几位斐波那契数
 */
function fib1(n) {
  if (typeof n !== 'number' || n < 1) {
    throw new TypeError('fibonacci: argument "n" expect a "number" gt(>) zero');
  }
  if (n === 1 || n === 2) return 1;
  return fib1(n - 2) + fib1(n - 1);
}

// second method
function fib2(n) {
  if (typeof n !== 'number' || n < 1) {
    throw new TypeError('fibonacci: argument "n" expect a "number" gt(>) zero');
  }
  if (n === 1 || n === 2) return 1;
  let first = 1;
  let second = 1;
  let next = first + second;
  for (let i = 3; i < n; i += 1) {
    first = second;
    second = next;
    next = first + second;
  }
  return next;
}

// third method
const fib3 = (() => {
  const fibCache = [1, 1];
  return (n) => {
    if (typeof n !== 'number' || n < 1) {
      throw new TypeError('fibonacci: argument "n" expect a "number" gt(>) zero');
    }
    for (let i = fibCache.length; i < n; i += 1) {
      const first = fibCache[i - 2];
      const second = fibCache[i - 1];
      fibCache.push(first + second);
    }
    return fibCache[n - 1];
  };
})();

// test used time
function tester(method, n) {
  const startTime = new Date().getTime();
  const fib = method(n);
  global.console.log(new Date().getTime() - startTime, fib);
}

tester(fib1, 40);

tester(fib2, 40);

tester(fib3, 40);
