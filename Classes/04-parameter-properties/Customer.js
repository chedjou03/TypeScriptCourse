"use strict";
var Customer = /** @class */ (function () {
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Customer.prototype.getFullName = function () {
        return ("full name is :" + this.firstName + " " + this.lastName);
    };
    return Customer;
}());
var theCustomer = new Customer("Sonia", "Ngassa");
console.log(theCustomer.firstName);
console.log(theCustomer.lastName);
console.log(theCustomer.getFullName());
