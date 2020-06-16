exports.fn = function () {
  console.log(this === module.exports);
};
