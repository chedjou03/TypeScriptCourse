"use strict";
var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this._firstName = theFirstName;
        this._lastName = theLastName;
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
var theCustomer = new Customer("Hermann", "Fomgoum");
console.log(theCustomer.firstName);
console.log(theCustomer.lastName);
console.log(theCustomer.getFullName());
