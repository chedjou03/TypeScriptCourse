var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (theFirstName) {
        this.firstName = theFirstName;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.setLastName = function (theLastName) {
        this.lastName = theLastName;
    };
    Customer.prototype.getFullName = function () {
        return ("Full Name is :" + this.getFirstName() + " " + this.getLastName());
    };
    return Customer;
}());
var theCustomer = new Customer("simplice", "Chedjou");
console.log(theCustomer.getFirstName());
console.log(theCustomer.getLastName());
console.log(theCustomer.getFullName());
