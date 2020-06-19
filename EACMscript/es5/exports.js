exports.fn = function () {
  global.console.log(this === module.exports);
};
// exports.a = 1;
// exports.b = 2;
