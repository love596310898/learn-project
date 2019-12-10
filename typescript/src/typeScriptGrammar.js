var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Person = /** @class */ (function () {
    function Person(lastName, firstName) {
        var _this = this;
        this.lastName = lastName;
        this.firstName = firstName;
        this.fullName = lastName + firstName;
        this.cont = 0;
        this.getName = function () {
            return _this.fullName;
        };
    }
    return Person;
}());
var tom = new Person('chu', 'om');
var sam = __assign({ age: 18 }, tom);
