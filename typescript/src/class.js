/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-proto */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
/* eslint-disable no-underscore-dangle */
const __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf
            || ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; })
            || function (d, b) { for (const p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}());
const Animal = /** @class */ (function () {
  function Animal(theName) {
    this.numberOfLegs = 8;
    this.name = theName;
  }
  return Animal;
}());
const Rhino = /** @class */ (function (_super) {
  __extends(Rhino, _super);
  function Rhino() {
    return _super.call(this, 'Rhino') || this;
  }
  return Rhino;
}(Animal));
const Employee = /** @class */ (function () {
  function Employee(theName) {
    this.name = theName;
  }
  return Employee;
}());
const animal = new Animal('Goat');
const rhino = new Rhino();
const employee = new Employee('Bob');
global.console.log(animal);
